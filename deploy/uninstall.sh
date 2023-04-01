#!/bin/bash

CURRENT_DIR=$(
    cd "$(dirname "$0")"
    pwd
)

function log() {
    message="[1Panel Log]: $1 "
    echo -e "${message}" 2>&1 | tee -a ${CURRENT_DIR}/install.log
}

echo
cat << EOF
 ██╗    ██████╗  █████╗ ███╗   ██╗███████╗██╗     
███║    ██╔══██╗██╔══██╗████╗  ██║██╔════╝██║     
╚██║    ██████╔╝███████║██╔██╗ ██║█████╗  ██║     
 ██║    ██╔═══╝ ██╔══██║██║╚██╗██║██╔══╝  ██║     
 ██║    ██║     ██║  ██║██║ ╚████║███████╗███████╗
 ╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝
EOF

log "======================= 开始卸载 ======================="

function Prepare_System(){
    is64bit=`getconf LONG_BIT`
    if [[ $is64bit != "64" ]]; then
        log "不支持 32 位系统安装 1Panel Linux 服务器运维管理面板，无需卸载"
        exit 1
    fi

    if which 1panel >/dev/null 2>&1; then
        log "1Panel Linux 服务器运维管理面板已安装，准备开始卸载"
    else
        log "1Panel Linux 服务器运维管理面板未安装，无需卸载"
        exit 1
    fi
}

function Install_Docker(){
    if which docker >/dev/null 2>&1; then
        log "检测到 Docker 已安装，跳过安装步骤"
        log "启动 Docker "
        systemctl start docker 2>&1 | tee -a ${CURRENT_DIR}/install.log
    else
        log "... 在线安装 docker"

        curl -fsSL https://get.docker.com -o get-docker.sh 2>&1 | tee -a ${CURRENT_DIR}/install.log
        if [[ ! -f get-docker.sh ]];then
            log "docker 在线安装脚本下载失败，请稍候重试"
            exit 1
        fi
        sh get-docker.sh 2>&1 | tee -a ${CURRENT_DIR}/install.log
        
        log "... 启动 docker"
        systemctl enable docker; systemctl daemon-reload; systemctl start docker 2>&1 | tee -a ${CURRENT_DIR}/install.log

        docker_config_folder="/etc/docker"
        if [[ ! -d "$docker_config_folder" ]];then
            mkdir -p "$docker_config_folder"
        fi

        docker version >/dev/null 2>&1
        if [[ $? -ne 0 ]]; then
            log "docker 安装失败"
            exit 1
        else
            log "docker 安装成功"
        fi
    fi
}

function Install_Compose(){
    docker-compose version >/dev/null 2>&1
    if [[ $? -ne 0 ]]; then
        log "... 在线安装 docker-compose"
        DOCKER_COMPOSE_VERSION=`curl -s https://api.github.com/repos/docker/compose/releases/latest | grep tag_name | awk '{print $2}' | sed 's/[",]//g'`
        log "安装版本 $DOCKER_COMPOSE_VERSION"
        curl -L https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s | tr A-Z a-z)-`uname -m` -o /usr/local/bin/docker-compose 2>&1 | tee -a ${CURRENT_DIR}/install.log
        if [[ ! -f /usr/local/bin/docker-compose ]];then
            log "docker-compose 下载失败，请稍候重试"
            exit 1
        fi
        chmod +x /usr/local/bin/docker-compose
        ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

        docker-compose version >/dev/null 2>&1
        if [[ $? -ne 0 ]]; then
            log "docker-compose 安装失败"
            exit 1
        else
            log "docker-compose 安装成功"
        fi
    else
        compose_v=`docker-compose -v`
        if [[ $compose_v =~ 'docker-compose' ]];then
            read -p "检测到已安装 Docker Compose 版本较低（需大于等于 v2.0.0 版本），是否升级 [y/n] : " UPGRADE_DOCKER_COMPOSE
            if [[ "$UPGRADE_DOCKER_COMPOSE" == "Y" ]] || [[ "$UPGRADE_DOCKER_COMPOSE" == "y" ]]; then
                rm -rf /usr/local/bin/docker-compose /usr/bin/docker-compose
                Install_Compose
            else
                log "Docker Compose 版本为 $compose_v，可能会影响应用商店的正常使用"
            fi
        else
            log "检测到 Docker Compose 已安装，跳过安装步骤"
        fi
    fi
}

function Get_Port(){
    PANEL_PORT=$(grep '^PANEL_PORT=' /usr/local/bin/1pctl | cut -d '=' -f 2)
    log "您设置的端口为：$PANEL_PORT"
}

function Set_Firewall(){
    if which firewall-cmd >/dev/null 2>&1; then
        if systemctl status firewalld | grep -q "Active: active" >/dev/null 2>&1;then
            log "防火墙关闭 $PANEL_PORT 端口"
            firewall-cmd --zone=public --remove-port=$PANEL_PORT/tcp --permanent
            firewall-cmd --reload
        else
            log "防火墙未开启，忽略端口关闭"
        fi
    fi

    if which ufw >/dev/null 2>&1; then
        if systemctl status ufw | grep -q "Active: active" >/dev/null 2>&1;then
            log "防火墙关闭 $PANEL_PORT 端口"
            ufw deny $PANEL_PORT/tcp
            ufw reload
        else
            log "防火墙未开启，忽略端口关闭"
        fi
    fi
}

function Remove_Panel(){
    # 安装目录
    PANEL_BASE_DIR=$(grep '^BASE_DIR=' /usr/local/bin/1pctl | cut -d '=' -f 2)

    rm -rf $PANEL_BASE_DIR
    log "已删除 1panel 目录 $PANEL_BASE_DIR"

    rm -rf /usr/local/bin/1panel
    log "已删除运行 1panel 运行文件"

    rm -rf /usr/local/bin/1pctl
    log "已删除运行 1pctl 运行文件"

    log "停止并删除 1Panel 服务"
    systemctl stop 1panel; rm /etc/systemd/system/1panel.service; systemctl daemon-reload 2>&1 | tee -a ${CURRENT_DIR}/install.log
}

function Show_Result(){
    log ""
    log "=================感谢您的耐心等待，卸载已经完成=================="
    log ""
    log "项目官网: https://1panel.cn"
    log "项目文档: https://1panel.cn/docs"
    log "代码仓库: https://github.com/1Panel-dev/1Panel"
    log ""
    log "如果使用的是云服务器，请至安全组关闭 $PANEL_PORT 端口"
    log ""
    log "================================================================"
}

function main(){
    Prepare_System
    # Install_Docker
    # Install_Compose
    Get_Port
    Set_Firewall
    Remove_Panel
    Show_Result
}
main
