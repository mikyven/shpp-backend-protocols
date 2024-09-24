import { createServer } from "net";

const server = createServer(function (socket) {
  let body = "";
  socket.on("data", (chunk) => {
    body += chunk.toString();
    socket.write(body);
  });

  socket.on("end", () => {
    console.log(`Client disconnected
Socket body: ${body}
Socket IP: ${socket.remoteAddress}\n`);
  });
});

server.listen(3000);
