// Install modules
const express = require('express')
const app = express()

// Serve static files using middleware
app.use(express.static('public'))

// Define seed data
const definitions = [
  {
    term:'Global',
    definition: 'All code that is not inside a function. ',
    slug: 'global'
  },
  {
    term:'Global Execution Context',
    definition: 'The environment that is available everywhere in your app.',
    slug: 'global-execution-context'
  },
  {
    term:'Lexical Environment',
    definition: 'Where something sits physically in the code you write. In Javascript, *where* you write your code is important',
    slug: 'lexical-environment'
  }
];

// Dynamic JSON Endpoint
app.get('/api/terminology', (req, res) => {
  res.send(definitions)
})

app.get('/api/terminology/:id', (req, res) => {
  const definition = definitions.find((item) => {
    return req.params.id === item.slug
  })
  res.send(definition)
})

// Handle 404 errors with middleware
app.use((req, res) => {
  res.status(404)
  res.redirect('404.html')
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});