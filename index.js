// import http from "node:http";
// import { URL } from "node:url";
// import { readFile } from "node:fs/promises";

// // Serve the file
// async function serveFile(filename, statusCode, response) {
//     try {
//         const data = await readFile(filename, 'utf8');
//         response.writeHead(statusCode, { 'Content-Type': 'text/html' });
//         response.end(data);
//     } catch (err) {
//         console.log(err);
//         response.writeHead(500, { 'Content-Type': 'text/plain' });
//         response.end('Server error');
//     }
// }

// // Create a server with a request handler
// const server = http.createServer(async (request, response) => {
//   // Parse the request URL
//   const myUrl = new URL(request.url, `http://${request.headers.host}`);
  
//   console.log('Path:', myUrl.pathname);
//   console.log('Query:', myUrl.searchParams.toString());
//   console.log('URL', myUrl);

//   if (myUrl.pathname === '/') {
//     await serveFile('index.html', 200, response);
//   } else if (myUrl.pathname === '/about') {
//     await serveFile('about.html', 200, response);
//   } else if (myUrl.pathname === '/contact-me') {
//     await serveFile('contact-me.html', 200, response);
//   } else {
//     await serveFile('404.html', 404, response);
//   }
// });

// // Start the server listening on port 3000
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

import express from "express";
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';


// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'about.html'))
});

app.get('/contact-me', (req, res) => {
  res.sendFile(join(__dirname, 'contact-me.html'))
});

app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '404.html'))
});


const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}`);
});