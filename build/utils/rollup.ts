import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import DefineOptions from 'unplugin-vue-macros/rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import type { InputPluginOption } from 'rollup';
import { pkgRoot } from './paths';

export const epPackage = resolve(pkgRoot, 'package.json');

export const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath);
};

export const getPackageDependencies = (
  pkgPath: string,
): Record<'dependencies' | 'peerDependencies', string[]> => {
  const manifest = getPackageManifest(pkgPath);
  console.log('🚀 ~ file: rollup.ts:21 ~ manifest', manifest);
  const { dependencies = {}, peerDependencies = {} } = manifest;

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  };
};

// 外部引入库标识，以防Rollup打包在一起
export const generateExternal = async (buildType: 'node' | 'cdn') => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage);
  if (buildType === 'cdn') {
    return [...peerDependencies];
  }
  return [...dependencies, ...peerDependencies];
};

// Rollup插件配置
export const rollupBuildPlugins = (minify?: boolean): InputPluginOption => {
  const plugins: InputPluginOption = [
    // setup 支持 DefineOptions 语法
    DefineOptions({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue({
          isProduction: true,
        }),
        vueJsx: vueJsx(),
      },
    }),
    // Rollup 处理外部模块
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts'],
    }),
    // Rollup 识别 commonjs
    commonjs(),
    // Esm 编译器
    esbuild({
      sourceMap: true,
      target: 'es2018',
      loaders: {
        '.vue': 'ts',
      },
      minify,
      treeShaking: true,
      legalComments: 'eof',
    }),
  ];
  return plugins;
};
