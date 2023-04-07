#!/bin/bash

osCheck=`uname -a`
if [[ $osCheck =~ 'x86_64' ]];then
    architecture="amd64"
elif [[ $osCheck =~ 'arm64' ]] || [[ $osCheck =~ 'aarch64' ]];then
    architecture="arm64"
else
    echo "暂不支持的系统架构，请参阅官方文档，选择受支持的系统。"
    exit 1
fi

CURRENT_DIR=$(
    cd "$(dirname "$0")"
    pwd
)

function log() {
    message="[App Download Log]: $1 "
    echo -e "${message}" 2>&1
    # echo -e "${message}" 2>&1 | tee -a ${CURRENT_DIR}/install.log
}

function main() {
    Repo_Url=https://resource.fit2cloud.com/1panel/package
    Mode=${1:-"dev"}
    Latest_Package_Version_Url=${Repo_Url}/${Mode}/latest
    Latest_Current_Package_Version_Url=${Repo_Url}/${Mode}/latest.current

    Package_Version=${2:-$(curl -s $Latest_Package_Version_Url)}

    Release_Dir=${Mode}/${Package_Version}/release
    Appstore_Dir=${Mode}/${Package_Version}/appstore
    Release_FileName=1panel-${Package_Version}-linux-${architecture}.tar.gz
    Release_Notes_Name=1panel-${Package_Version}-release-notes

    Download_Package_Url=${Repo_Url}/${Mode}/${Package_Version}/release/${Release_FileName}
    Release_Notes_Url=${Repo_Url}/${Mode}/${Package_Version}/release/${Release_Notes_Name}

    Appstore_Version_FileName=apps.json
    Appstore_Version_Url=${Repo_Url}/${Appstore_Dir}/${Appstore_Version_FileName}

    Appstore_Version=`curl -s $Appstore_Version_Url | awk -F'"' '/version/{print $4}'`
    Appstore_Download_FileName=apps-${Appstore_Version}.tar.gz
    Appstore_Download_Url=${Repo_Url}/${Appstore_Dir}/${Appstore_Download_FileName}

    mkdir -p $CURRENT_DIR/$Release_Dir
    mkdir -p $CURRENT_DIR/$Appstore_Dir

    # 下载版本信息
    log "下载 ${Mode} 版本信息开始..."
    curl -L -s -k -o ${Mode}/latest $Latest_Package_Version_Url
    curl -L -s -k -o ${Mode}/latest.current $Latest_Current_Package_Version_Url
    log "下载 ${Mode} 版本信息完成..."

    # 下载安装包
    log "下载安装包 ${Package_Version} 开始..."
    curl -L -s -k -o $CURRENT_DIR/$Release_Dir/$Release_FileName $Download_Package_Url
    curl -L -s -k -o $CURRENT_DIR/$Release_Dir/$Release_Notes_Name $Release_Notes_Url
    log "下载安装包 ${Package_Version} 完成..."

    # 下载应用商店应用
    log "下载应用商店应用 ${Appstore_Version} 开始..."
    curl -L -s -k -o $CURRENT_DIR/$Appstore_Dir/$Appstore_Version_FileName $Appstore_Version_Url
    curl -L -s -k -o $CURRENT_DIR/$Appstore_Dir/$Appstore_Download_FileName $Appstore_Download_Url
    log "下载应用商店应用 ${Appstore_Version} 完成..."
}

main $1 $2
# ./download.sh
# ./download.sh dev v1.0.5
# sudo chmod +x ./download.sh && ./download.sh dev v1.0.5 