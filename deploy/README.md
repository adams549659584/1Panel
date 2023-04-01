# 1Panel 安装包

```sh
# 下载最新、解压 并进入
GOARCH="amd64" && \
# VERSION="v1.0.5" && \
VERSION=`curl -s https://api.github.com/repos/adams549659584/1Panel/releases/latest | grep tag_name | awk '{print $2}' | sed 's/[",]//g'`
PACKAGE_NAME="1panel-${VERSION}-linux-${GOARCH}" && \
PACKAGE_FILE_NAME="1panel-${VERSION}-linux-${GOARCH}.tar.gz" && \
PACKAGE_DOWNLOAD_URL="https://github.com/adams549659584/1Panel/releases/download/${VERSION}/${PACKAGE_FILE_NAME}" && \
# echo $PACKAGE_DOWNLOAD_URL && \
curl -LOk -o ${PACKAGE_FILE_NAME} ${PACKAGE_DOWNLOAD_URL} && \
tar zxvf ${PACKAGE_FILE_NAME} && \
rm -rf ${PACKAGE_FILE_NAME} && \
cd ${PACKAGE_NAME}

# 安装
sudo chmod +x ./install.sh && sudo ./install.sh

# 卸载，不卸载 docker 及 docker-compose
sudo chmod +x ./uninstall.sh && sudo ./uninstall.sh
```

[1Panel](https://github.com/1Panel-dev/1Panel) 是一个现代化、开源的 Linux 服务器运维管理面板。

该项目为 1Panel 安装包相关内容，包含了 1Panel 的安装脚本及默认配置文件等。

## 问题反馈

如果您在使用过程中遇到什么问题，或有进一步的需求需要反馈，请提交 GitHub Issue 到 [1Panel 项目的主仓库](https://github.com/1Panel-dev/1Panel/issues)
