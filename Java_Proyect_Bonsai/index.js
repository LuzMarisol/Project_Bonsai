const app = require("./app");
const port = process.env.PORT || 3977;
const { API_VERSION, IP_SERVER } = require("./config");

app.listen(port, () => {
  console.log("######################");
  console.log("###### API REST ######");
  console.log("######################");
  console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
});
