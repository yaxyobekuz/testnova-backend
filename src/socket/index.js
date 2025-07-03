const { Server } = require("socket.io");
const { server } = require("../start/server");

const io = new Server(server, {
  cors: {
    methods: ["GET", "POST", "DELETE", "PUT"],
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://testnovauz.netlify.app",
    ],
  },
});

io.on("connection", (socket) => {
  socket.on("event", async (data, callback) => {});
});

module.exports = io;
