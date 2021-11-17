const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_ATLAS,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos ON');
    } 
    catch (error) {
        throw new Error('Error en la conexión de la DB')
    }
}

module.exports = {
    dbConection
}