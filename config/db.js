const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:8001/roma', {
    useNewUrlParser: true,
     useUnifiedTopology: true,
})
    .then(() => console.log('connect to database succesful'))
    .catch(err => console.log(err))
