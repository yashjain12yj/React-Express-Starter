const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Yash', lastName: 'Jain'},
    {id: 2, firstName: 'Ish', lastName: 'Jain'},
    {id: 3, firstName: 'Ramu', lastName: 'Kaka'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);