// require('dotenv').config();
// const express = require('express');
// const app = express();
// const userRoutes = require('./routes/userRoute');

// app.use(express.json());
// app.use('/users', userRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running at port:${PORT}`);
// });

require('dotenv').config(); // Load .env variables
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute');

app.use(express.json());
app.use('/users', userRoutes);

// Use PORT from .env or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
