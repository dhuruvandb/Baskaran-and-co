const express = require("express");
const app = express();

app.listen(5007, () => {
  console.log("Payment-service is running on port ", 5007);
});
