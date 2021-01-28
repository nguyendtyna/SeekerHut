const express = require('express');
const path = require('path');

const app = express();
const port = 3001;
const DIST_DIR = path.join(__dirname + '/../react-client/dist');

// Serve static assets
app.use(express.static(DIST_DIR));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});