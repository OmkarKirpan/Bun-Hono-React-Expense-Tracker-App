Bun.serve({
  fetch(req) {
    return new Response("Hello via Bun Server");
  },
});
console.log("Server Started");
