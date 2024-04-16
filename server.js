const express = require("express");
const app = express();

// Define a route to serve environment variables
app.get("/env", (req, res) => {
  const envVariables = {
    API_KEY: process.env.API_KEY,
  };
  res.json(envVariables);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
