const io = require('./server');

const userController = {};

userController.updataCanvas = function(guess, socket) {

};



userController.chatBox = function(guess, socket) {
  // const correctGuess = checkAnswer(data);
  // send updated message data back to all clients
  console.log('userController');
  const str = `user-${socket.id}: ${guess}`;
  io.emit('message', str);
};



function checkAnswer(data) {

}






module.exports = userController;
