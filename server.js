const express = require("express");
const app = express();

app.use(
  cors({
    origin: "https://personalised-chatbot.vercel.app", // Replace with your website's URL
  })
);
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
