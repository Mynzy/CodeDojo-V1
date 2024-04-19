const express = require("express"); //require to kira cm import
const app = express();  //jadikan app tu object to use its attribute

const PORT = 8080;  //pilih port x kisah no apa

app.get("/", (req, res) =>{ //request and response
    res.status(200).sendFile("C:/Users/dellz/OneDrive/Documents/CODING/CodoDojo/index.html");
});

app.get("/products", (req, res) =>{ // /hello tu ada lah endpoint
    res.status(200).json({message:"name : donut, type : check date"});
});

app.get("/user", (req, res) =>{ // /hello tu ada lah endpoint
    res.status(200).json({message:"user: Muhaimin, Password : 1234"});
});


//app.listen(PORT, () => console.log("SERVER STARTED AT PORT 8080"));  both are good
app.listen(PORT, () => console.log(`SERVER STARTED ${PORT}`));  // this is backtick btw
// app.listen accept port number & funcion as parameter (arrow function)


