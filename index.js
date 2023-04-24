import app from "./src/app.js";
const home = require("./src/routes/home.js");
const main = () => {
    app.use("/home", home);
    app.listen(app.get("port"))
    console.log(`Server on port ${app.get('port')}`);
};

main();