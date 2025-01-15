const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Users = require('../modules/users/users.model'); // Importa tu modelo

(async () => {
  try {
    // Conexión a la base de datos
    await mongoose.connect('mongodb://localhost:27017/carlosiglesias', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexión a la base de datos establecida.');

    // Agregar contraseña predeterminada cifrada si falta
    const defaultPassword = await bcrypt.hash('defaultPassword123', 10);
    const result = await Users.updateMany(
      { password: { $exists: false } }, // Filtra documentos sin el campo `password`
      { $set: { password: defaultPassword } } // Asigna un valor predeterminado
    );

    console.log(`Documentos actualizados: ${result.modifiedCount}`);

    process.exit(0);
  } catch (err) {
    console.error('Error al realizar la migración:', err);
    process.exit(1);
  }
})();
