import { Request, Response } from "express";

import { JwtPayloadInterface } from "../payload/jwtPayload";
import { dbconnection } from "..";

export interface CustomRequest extends Request {
  token: JwtPayloadInterface;
}

class cartController {
  addToCart = (req: Request, res: Response) => {
    console.log(req,'req')
    const { id } = (req as CustomRequest).token;
    const pid = req.params;

    try {
      dbconnection.query(
        `SELECT * from cart where uid = '${id}' AND pid = '${pid}'`,
        (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).json({ message: "Unknown error occurred" });
          }

          if (results.length > 0) {
              console.log(`cart already added`);
          } else {
            dbconnection.query(
                `insert into cart (uid, pid, isAdded) VALUES(?, ?, ?)`,
                [id, pid, true],
                (error, results) => {
                  if (error) {
                    console.error(error);
                    return res
                      .status(500)
                      .json({ message: "Unknown error occurred" });
                  }
                  res.send("Product added to cart successfully");
                }
              );
          }
        }
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  };

  getCartProducts = (req: Request, res: Response) => {
    const { id } = (req as CustomRequest).token;
    const cartProductsArr: any[] = []; // Specify the type as any[]
  
    try {
      dbconnection.query(
        `SELECT * FROM cart WHERE uid = '${id}' AND isAdded = 1`,
        (error: any, results: any[]) => { 
          if (error) {
            console.error(error);
            return res.status(500).json({ message: "Unknown error occurred" });
          }
  
          if (results.length > 0) {
            for (const item of results) {
              dbconnection.query(`SELECT * FROM product WHERE id = '${item.pid}'`, (err: any, result: any[]) => {
                if (result) {
                  cartProductsArr.push(result);
                } else if (err) {
                  console.error(err);
                  return res.status(500).json({ message: "Unknown error occurred" });
                }
              });
            }
            res.send(cartProductsArr);
          } else {
            console.log(`User not registered with this email id`);
            res.send(cartProductsArr);
          }
        }
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  };
  
}

export default cartController;
