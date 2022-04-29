const mongoose = require('mongoose');

const connecteToDatabase = () => {
  mongoose
    .connect('mongodb+srv://admin:admin@api-ram.pjqn3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MONGODB CONNECT!'))
    .catch((error) =>
      console.log(`Erro ao conectar com o MongoDB, erro ${error}`),
    );
};

module.exports = connecteToDatabase;
