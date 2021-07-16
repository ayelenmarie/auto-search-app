const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const data = require('./data');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8082;

// This is an HTTP request logger middleware, to help write requests in a specific format and avoid writing them manually. This is optional.
app.use(morgan('tiny'));

// Route
app.get('/api/products', (req, res) => {
  const normalizeData = data.map((item) => {
    return {
      ...item,
      isActive: item.isActive === 'true',
    };
  });

  console.log(req.query.name);

  const search = req.query.name.toUpperCase();

  let filteredData = [];

  filteredData = normalizeData.filter((item) => {
    const searchItem = {
      ...item,
      name: item.name.toUpperCase(),
      tags: item.tags.map((tag) => tag.toUpperCase()),
    };

    return searchItem.name.includes(search) || searchItem.tags.includes(search);
  });

  res.json(filteredData);
});

// Info of the port the server is running in
app.listen(PORT, console.log(`Server is starting at ${PORT}`));
