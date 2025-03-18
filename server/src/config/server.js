const http = require("http");
const { Server } = require("socket.io");
const app = require("../app"); // Import Express app
require("dotenv").config();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Import chat event handlers
const chatPresenter = require("../presenters/chatPresenter");

// Pass the `io` instance to handle chat events
chatPresenter(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
