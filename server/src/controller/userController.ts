import * as jwt from "jsonwebtoken";

import { Request, RequestHandler, Response } from "express";

import { dbconnection } from "..";

class UserController {
  userRegister = (req: Request, res: Response) => {
    const data = req.body;
    
     dbconnection.query(
      `INSERT INTO user (name, email, password, phone, dob, locality, role, city, pincode, state, country, createdAt, updatedAt) VALUES('${data.name}', '${data.email}' , '${data.password}', '${data.phone}', '${data.dob}', '${data.locality}', '${data.role}', '${data.city}', '${data.pincode}', '${data.state}', '${data.country}',  CURRENT_TIMESTAMP,  CURRENT_TIMESTAMP);`,
      (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }

        res.json("User registered successfully");
      }
    );
  };

  userLogin = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const query = dbconnection.query(
      `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`,
      (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }

        if (results.length > 0) {
          const payload = {
            id: results[0].id,
            email: results[0].email,
            role: results[0].role,
          };

          const token = jwt.sign(payload, "EFAWFSBFKSBFGB32135654", {
            expiresIn: "1h",
          });
          res.json({ token, message: "User logged in successfully" });
        } else {
          console.log("User not found");
          res.status(404).json({ message: "User not found" });
        }
      }
    );
  };
}

export default UserController;
