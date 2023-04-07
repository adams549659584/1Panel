#!/bin/bash

CURRENT_DIR=$(
    cd "$(dirname "$0")"
    pwd
)

function log() {
    message="[App UnPack Log]: $1 "
    echo -e "${message}" 2>&1
}

function main() {
  Appstore_Version=$1
  
  if [[ "$Appstore_Version" == "" ]];then
      log "应用版本号不能为空"
      exit 1
  fi

  Package_Version=${2:-v1.0.5.2}
  Default_Appstore_Dir=${CURRENT_DIR}/${Package_Version}/appstore
  Appstore_Dir=${3:-$Default_Appstore_Dir}
  Appstore_Download_FileName=apps-${Appstore_Version}.tar.gz

  rm -rf ${Appstore_Dir}/apps

  # 解压应用到当前目录
  log "解压 ${Package_Version} 应用 ${Appstore_Version} 开始..."
  # tar -xzf apps.tar.gz -C apps-v0.1.0 --strip-components=1
  mkdir -p $Appstore_Dir/apps-$Appstore_Version
  tar -xzf $Appstore_Dir/$Appstore_Download_FileName -C $Appstore_Dir/apps-$Appstore_Version --strip-components=2
  log "解压 ${Package_Version} 应用 ${Appstore_Version} 完成..."

  log "应用已解压至 $Appstore_Dir/apps-$Appstore_Version"
}

# 解压的应用版本 系统版本 解压地址（默认压缩文件同级目录）
main $1 $2 $3

# ./unpack.sh v0.1.0 v1.0.5.2 
# sudo chmod +x ./unpack.sh && ./unpack.sh v0.1.0 v1.0.5.2