module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`⚡ User connected: ${socket.id}`);

    // Handle incoming messages
    socket.on("message", (data) => {
      console.log(`📩 Message received: ${data}`);
      io.emit("message", data); // Broadcast to all clients
    });

    // Handle user disconnect
    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.id}`);
    });
  });
};
