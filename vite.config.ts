import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  // ssr: {
  //   noExternal: [
  //     '@mui/*',
  //     '@emotion/*',
  //   ],
    
  // },
  // optimizeDeps:{
  //   include: [
  //     '@mui/*',
  //     '@emotion/*',
  //   ],
    // force: true,
  // },

  ssr: {
    noExternal: [
        "@mui/system",
        "@mui/material",
        "@mui/icons-material",
        "@mui/x-date-pickers",
        "@mui/utils",
        "@mui/x-data-grid",
        "@mui/x-tree-view",
        "@mui/x-internals",
        "@mui/styled-engine",
        '@emotion/*',
    ],
},

  build: {
    cssMinify: true,
    sourcemap: false, 
  },

});
