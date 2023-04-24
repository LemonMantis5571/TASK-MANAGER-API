import app from "./app.js";
const home = require("./routes/home");
const main = () => {
    app.use("/home", home);
    app.listen(app.get("port"))
    console.log(`Server on port ${app.get('port')}`);
};

main();