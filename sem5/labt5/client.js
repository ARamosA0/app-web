// Conexión al servidor de Socket.IO
const socket = io();
// Manejo del evento 'chatMessage' cuando se recibe un mensaje de chat del servidor
socket.on('chatMessage', (message) => {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    console.log(messagesContainer)
});
// Manejo del evento de envío de formulario para enviar un mensaje de chat
document.getElementById('chatForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    messageInput.value = '';
    socket.emit('chatMessage', message);
});