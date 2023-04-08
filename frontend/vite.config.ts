import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { wrapperEnv } from './src/utils/get-env';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import eslintPlugin from 'vite-plugin-eslint';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-define-options/vite';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

const prefix = `monaco-editor/esm/vs`;

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd());
    const viteEnv = wrapperEnv(env);

    return {
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
                'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/styles/var.scss" as *;`,
                },
            },
        },
        server: {
            port: viteEnv.VITE_PORT,
            open: viteEnv.VITE_OPEN,
            host: '0.0.0.0',
            proxy: {
                '/api/v1': {
                    target: 'http://localhost:9999/',
                    changeOrigin: true,
                    ws: true,
                },
            },
        },
        plugins: [
            vue(),
            DefineOptions(),
            eslintPlugin({
                exclude: ['**/*.js'],
            }),
            vueJsx(),
            VueSetupExtend(),
            viteEnv.VITE_REPORT && visualizer(),
            viteEnv.VITE_BUILD_GZIP &&
                viteCompression({
                    verbose: true,
                    disable: false,
                    threshold: 10240,
                    algorithm: 'gzip',
                    ext: '.gz',
                }),
            AutoImport({
                resolvers: [
                    ElementPlusResolver({
												// 使用unplugin-vue-components按需加载样式，开发环境会导致项目异常卡顿
												// 导致原因：vite会预加载style，当首次启动 vite 服务时会对 style 进行依赖预构建，，因为element-plus的按需样式会导入大量style文件，导致页面会卡住直至style构建完成
												// https://github.com/antfu/unplugin-vue-components/issues/361
												//  这里开发环境不按需加载样式，生产环境才按需加载样式
                        importStyle: mode === 'development' ? false : 'sass',
                    }),
                ],
            }),
            Components({
                resolvers: [
                    ElementPlusResolver({
                        importStyle: mode === 'development' ? false : 'sass',
                    }),
                ],
            }),
						// 这里自定义一个vite插件，更改src/main.ts内容，开发环境全局引入样式
            {
								name: 'import-element-plus-style',
								transform(code, id) {
										if (mode === 'development' && /src\/main.ts$/.test(id)) {
												return {
														code: `import 'element-plus/dist/index.css';${code}`,
														map: null,
												};
										}
								},
						},
        ],
        esbuild: {
            pure: viteEnv.VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
        },
        build: {
            outDir: '../cmd/server/web',
            minify: 'esbuild',
            rollupOptions: {
                output: {
                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                    manualChunks: {
                        jsonWorker: [`${prefix}/language/json/json.worker`],
                        cssWorker: [`${prefix}/language/css/css.worker`],
                        htmlWorker: [`${prefix}/language/html/html.worker`],
                        tsWorker: [`${prefix}/language/typescript/ts.worker`],
                        editorWorker: [`${prefix}/editor/editor.worker`],
                    },
                },
            },
        },
    };
});
