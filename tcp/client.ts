import { Socket } from "net";

let start = 0;
const body = "Hello";

const client = new Socket();
client.connect(3000, function () {
  start = Date.now();
  console.log("Connected\n");
  client.write(body);
});

client.on("data", function (data) {
  console.log(
    body === data.toString()
      ? `Response message is the same as the body (${body})`
      : "Response message is not the same as the body"
  );
  console.log(`Response time: ${Date.now() - start}ms\n`);
  client.destroy();
});

client.on("close", function () {
  console.log("Connection closed.");
});
