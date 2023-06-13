import app from "./app.js";
import dbconnection from "./config/dbContion.js";
 

dbconnection()
app.listen(process.env.PORT,() => {
    console.log(`server is up on ${process.env.PORt}`);
} );
