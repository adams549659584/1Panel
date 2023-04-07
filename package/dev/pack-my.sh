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
  AppStoreVersion=$1

  if [[ -z "${AppStoreVersion:-}" ]]; then
    log "版本号不能为空"
    exit 1
  fi

  # 打包，只打包 apps ， 不带目录
  log "打包 ${AppStoreVersion} 开始..."
  tar -czf ${CURRENT_DIR}/appstore/apps-${AppStoreVersion}.tar.gz -C ${CURRENT_DIR} apps
  log "打包 ${AppStoreVersion} 完成..."

  # 修改版本号
  echo "{\"version\":\"${AppStoreVersion}\"}" > ${CURRENT_DIR}/appstore/apps.json
}

# 版本号
main $1

# ./package/dev/pack-my.sh v0.1.4.3
# ./pack-my.sh v0.1.0
# sudo chmod +x ./pack-my.sh && ./pack-my.sh v0.1.0