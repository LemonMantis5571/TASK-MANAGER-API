import app from "./app.js";
const home = require("./routes/home");
const main = () => {
    app.listen(app.get("port"))
    console.log(`Server on port ${app.get('port')}`);
};

main();