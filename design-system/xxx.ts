import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import { resolve as res } from 'path';
import { SourceMap } from './node_modules/magic-string/dist/magic-string.cjs.d';

export default defineConfig({
  build: {
    lib: {
      entry: res(__dirname, 'src/helpers/cpfValidator.ts'),
      name: 'CpfValidator',
      formats: ['es', 'cjs'],
      fileName: (format) => `cpf-validator.${format}.js`,
      cssFileName: 'styles.css',
    },
    rollupOptions: {
      external: [],
      plugins: [
        typescript({
          tsconfig: './tsconfig.json',
        }),
      ],
    },
  },
  plugins: [
    dts({
      tsconfig: './tsconfig.json',
    }),
  ],
});
