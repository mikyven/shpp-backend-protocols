import axios from "axios";

const label = "Response time";
const body = "Hello";

console.time(label);
const { data } = await axios.post("http://localhost:3000/", body);
console.log(
  body === data
    ? `Response message is the same as the body (${body})`
    : "Response message is not the same as the body"
);
console.timeEnd(label);
