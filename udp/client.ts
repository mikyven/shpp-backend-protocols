import { createSocket } from "dgram";

// creating a client socket
const client = createSocket("udp4");

//buffer msg
const data = Buffer.from("Hello");
let start = 0;

client.on("listening", () => {
  start = Date.now();
});

client.on("message", function (msg, info) {
  console.log(
    "Received %d bytes from %s: %d",
    msg.length,
    info.address,
    info.port
  );
  console.log(
    data.toString() === msg.toString()
      ? `Response message is the same as the body (${data.toString()})`
      : "Response message is not the same as the body"
  );
  console.log(`Response time: ${Date.now() - start}ms\n`);
  client.close();
});

//sending msg
client.send(data, 2222, function (error) {
  if (error) {
    client.close();
  } else {
    console.log("Data sent\n");
  }
});
