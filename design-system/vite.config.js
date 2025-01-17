import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import cleanPlugin from 'vite-plugin-clean';


export default defineConfig({
    plugins: [
        react(),
        dts({
            tsconfig: './tsconfig.json',
        }),
        cleanPlugin(
            {
                targetFiles: ['dist', 'test']
            }
        )

    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/design-system/index.ts'),
            name: 'design-system',
            fileName: (format) => `design-system.${format}.js`,
            formats: ['es', 'umd', 'cjs'],
        },
        rollupOptions: {
            // Certifique-se de externalizar dependências que não devem ser incluídas no pacote
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        },

    }
});
