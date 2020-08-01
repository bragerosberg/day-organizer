const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
})
);

app.get('*', (req, res) => {
  app.use(express.static('public'));
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));