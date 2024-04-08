const http = require('http');//anunt ca voi folosi 
const app = require("./app/app");
//require pentru a importa
require(`dotenv`).config();//trebuie sa aiba un fisier .env 



http.createServer(app).listen(process.env.port, () => {
 //crearea serverului pe portul 3000
    console.log(`Server is running on port: ${process.env.port}`);

});
