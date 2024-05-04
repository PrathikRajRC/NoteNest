import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import fs from 'fs';
// import path from 'path';


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     https: {
//       key: fs.readFileSync(path.resolve(__dirname, 'C:/Users/prath/OneDrive/Desktop/create-cert-key.pem')),
//       cert: fs.readFileSync(path.resolve(__dirname, 'C:/Users/prath/OneDrive/Desktop/create-cert.pem')),
//     },
//     // Make sure the server is accessible over the local network
//     host: '0.0.0.0',
//   },
// })

export default defineConfig({
  server: {
    https: false, // Disable HTTPS
  },
});


