import { createServer } from "http";

createServer((request, response) => {
  let body = "";

  request.on("data", (data) => {
    body += data;
  });

  request.on("end", () => {
    console.log(`Client's IP adress: ${request.socket.remoteAddress}
Request body: ${body}`);
    response.end(body);
  });
}).listen(3000);
