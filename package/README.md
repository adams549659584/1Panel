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