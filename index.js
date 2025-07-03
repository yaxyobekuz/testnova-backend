require("./src/start/routes");
const mongoose = require("mongoose");
const { server } = require("./src/start/server");
const { mongodbUrl, port } = require("./config");

(async () => {
  // Connect DataBase
  try {
    await mongoose.connect(mongodbUrl);
    console.log("Mango Baza ulandi! ✅🥭🗿");
  } catch (err) {
    console.error("Mango Baza ulanmadi! ❌🥭🗿 ", err);
    process.exit(1);
  }

  // Listen server
  server.listen(port, () => {
    console.log(`Server http://localhost:${port} da ishga tushdi!`);
  });
})();
