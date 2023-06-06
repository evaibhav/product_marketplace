import { Request, RequestHandler, Response } from 'express';
import { dbconnection } from '..';
import * as jwt from "jsonwebtoken";

class UserController {
    userRegister = (req: Request, res: Response) =>{
        const data = req.body;

        const query = dbconnection.query(`INSERT INTO user (name, email, password, phone, dob, locality, role, city, pincode, state, country, createdAt, updated) VALUES('${data.name}', '${data.email}' , '${data.password}', '${data.phone}', '${data.dob}', '${data.locality}', '${data.role}', '${data.city}', '${data.pincode}', '${data.state}', '${data.country}',  CURRENT_TIMESTAMP,  CURRENT_TIMESTAMP);`)

        if(query){
            res.json("User registered succesfully");
        }
        else{
            console.log("Unkown error occured")
        }

    };

    userLogin = (req: Request, res: Response) =>{
        const {email, password}  = req.body
        const query = dbconnection.query(`SELECT * from user WHERE email = '${email}' AND password = '${password}'`);

        if(query){
            const payload = {
                email, password
            };
    
            const token = jwt.sign(payload, 'EFAWFSBFKSBFGB32135654');
            res.json({token, message: 'user logged in succesfully'});
        }
        else{
            console.log("User not found")
        }


    };
};

export default UserController;