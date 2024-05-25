import app from "./app";

const server = Bun.serve({
  port: process.env.PORT || 3000,
  fetch: app.fetch,
  hostname: "0.0.0.0",
});
console.log("Server running", server.port);
