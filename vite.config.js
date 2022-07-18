export default {
  build: {
    target: 'es2018',
    outDir: './',
    emptyOutDir: false,
    lib: {
      entry: 'src/index.js',
      name: 'template',
      formats: ['umd'],
      fileName: () => 'template.js',
    },
    sourcemap: false,
    minify: true,
    rollupOptions: {
      /* Cyclic dependencies are allowed in ES6, and such imports occur
          in many d3 components, so suppress those rollup warnings. */
      onwarn(warning, warn) {
        if (warning.code === 'CIRCULAR_DEPENDENCY') return;
        warn(warning);
      },
    },
  },
};
