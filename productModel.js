import db from "./database.js";

export const getProducts = (result) => {
    db.query("SELECT * FROM teacher", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}