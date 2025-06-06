const express = require('express');
const path = require('path');
const app = express();
const helloRoute = require('./routes/hello');

app.use(express.static(path.resolve(__dirname, '..')));
app.use('/hello', helloRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
