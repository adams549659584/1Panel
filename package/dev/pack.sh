#!/bin/bash

CURRENT_DIR=$(
    cd "$(dirname "$0")"
    pwd
)

function log() {
    message="[App Pack Log]: $1 "
    echo -e "${message}" 2>&1
}

function main() {
  OldAppStoreVersion=$1
  AppStoreVersion=$2

  if [[ -z "${OldAppStoreVersion:-}" || -z "${AppStoreVersion:-}" ]]; then
    log "应用新旧版本号均不能为空"
    exit 1
  fi

  ServerVersion=${3:-v1.0.5.2}

  # 删除其他的应用包
  # log "删除其他应用开始..."
  # rm -rf ${CURRENT_DIR}/${ServerVersion}/appstore/*.tar.gz
  # log "删除其他应用完成..."

  # 打包，只打包 apps ， 不带目录
  log "打包 ${AppStoreVersion} 开始..."
  mv ${CURRENT_DIR}/${ServerVersion}/appstore/apps-${OldAppStoreVersion} ${CURRENT_DIR}/${ServerVersion}/appstore/apps
  tar -czf ${CURRENT_DIR}/${ServerVersion}/appstore/apps-${AppStoreVersion}.tar.gz -C ${CURRENT_DIR}/${ServerVersion}/appstore/ apps
  mv ${CURRENT_DIR}/${ServerVersion}/appstore/apps ${CURRENT_DIR}/${ServerVersion}/appstore/apps-${OldAppStoreVersion}
  log "打包 ${AppStoreVersion} 完成..."

  # 修改版本号
  # sed -E -i "s/^(\s*\"version\"\s*:\s*\").*(\".*)\$/\1${AppStoreVersion}\2/" ${CURRENT_DIR}/${ServerVersion}/appstore/apps.json
  echo "{\"version\":\"${AppStoreVersion}\"}" > ${CURRENT_DIR}/${ServerVersion}/appstore/apps.json

  log "打包完成..."
}

# 旧版本号 新版本号 系统版本号
main $1 $2 $3

# ./pack.sh v0.1.0 v0.1.1 v1.0.5.2
# sudo chmod +x ./pack.sh && ./pack.sh v0.1.0 v0.1.1 v1.0.5.2