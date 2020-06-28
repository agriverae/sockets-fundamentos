const { io } = require('../server');

io.on('connection', (client) => {

  console.log('Usuario conectado');

  client.emit('enviarMensaje', {
      usuario: 'Administrador',
      mensaje: 'Bienvenido a esta aplicación'
  });

  client.on('disconnect', () => {
      console.log('Usuario desconectado');
  });

  client.on('enviarMensaje', (mensaje, cb) => {
    client.broadcast.emit('enviarMensaje', mensaje);
  })
})