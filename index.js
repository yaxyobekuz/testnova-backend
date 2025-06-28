const mongoose = require("mongoose");
const { mongodbUrl } = require("./config");
const server = require("./src/start/server");

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
