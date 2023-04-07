# 仓库配置

描述 | 链接
---|---
repo_url | https://resource.fit2cloud.com/1panel/package
查询版本 | https://resource.fit2cloud.com/1panel/package/dev/latest
查询版本 | https://resource.fit2cloud.com/1panel/package/dev/latest.current
安装包链接 | https://resource.fit2cloud.com/1panel/package/dev/v1.0.5/release/1panel-v1.0.5-linux-amd64.tar.gz
更新描述 | https://resource.fit2cloud.com/1panel/package/dev/v1.0.5/release/1panel-v1.0.5-release-notes
应用商店版本 | https://resource.fit2cloud.com/1panel/package/dev/v1.0.5/appstore/apps.json
应用商店全部应用安装包 | https://resource.fit2cloud.com/1panel/package/dev/v1.0.5/appstore/apps-v0.1.0.tar.gz

# 仓库部署

```
1panel
└── package
    └── dev
        ├── appstore
        │   ├── apps-v0.1.4.tar.gz
        │   └── apps.json
        ├── latest
        ├── latest.current
        └── release
            ├── 1panel-v1.1.0.1-linux-amd64.tar.gz
            └── 1panel-v1.1.0.1-release-notes
```

# 仓库 nginx 配置

```nginx
    # 1panel release 下载
    location ~ ^/1panel/package/dev/(.*)/release/(.*)$ {
        alias /usr/share/nginx/html/res/1panel/package/dev/release/$2;
    }

    # 1panel appstore 下载
    location ~ ^/1panel/package/dev/(.*)/appstore/(.*)$ {
        alias /usr/share/nginx/html/res/1panel/package/dev/appstore/$2;
    }
```

# 面板配置

1. 复制 cmd/server/conf/app.yaml 至 /opt/1panel/conf/app.yaml

2. sudo 1pctl restart 

```yaml
system:
  db_file: 1Panel.db
  base_dir: /opt
  mode: dev
  repo_url: https://resource.fit2cloud.com/1panel/package
  # repo_url: http://res.vcanbb.com/1panel/package
  # repo_url: https://raw.githubusercontent.com/adams549659584/1Panel/my-dev/package  
  is_demo: false
  # 不想改动原来的，则留空
  port: 

log:
  level: debug
  time_zone: Asia/Shanghai
  log_name: 1Panel
  log_suffix: .log
  max_backup: 10
```