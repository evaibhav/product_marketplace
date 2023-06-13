import { Request, Response } from "express";

import { JwtPayloadInterface } from "../payload/jwtPayload";
import { dbconnection } from "..";

export interface CustomRequest extends Request {
  token: JwtPayloadInterface;
}

class cartController {
  addToCart = (req: Request, res: Response) => {
    const { id } = (req as CustomRequest).token;
    const { pid } = req.params;

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
              [id, parseInt(pid), true],
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

    try {
      dbconnection.query(
        `SELECT * FROM cart WHERE uid = '${id}' AND isAdded = 1`,
        (error: any, results: any[]) => {
          if (error) {
            console.error(error);
            return res.status(500).json({ message: "Unknown error occurred" });
          }

          if (results.length > 0) {
            const cartProductsPromises = results.map((item) => {
              return new Promise((resolve, reject) => {
                dbconnection.query(
                  `SELECT * FROM product WHERE id = '${item.pid}'`,
                  (err: any, result: any[]) => {
                    if (err) {
                      console.error(err);
                      reject(err);
                    } else if (result && result.length > 0) {
                      resolve(result[0]);
                    } else {
                      resolve(null); // Resolve with null if product is not found
                    }
                  }
                );
              });
            });

            Promise.all(cartProductsPromises)
              .then((cartProductsArr) => {
                // Filter out null values (products not found)
                const filteredCartProductsArr = cartProductsArr.filter(
                  (product) => product !== null
                );
                res.send(filteredCartProductsArr);
              })
              .catch((error) => {
                console.error(error);
                res.status(500).json({ message: "Unknown error occurred" });
              });
          } else {
            console.log(`User not registered with this email id`);
            res.send([]);
          }
        }
      );
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  };

  deleteCartProducts = (req: Request, res: Response) => {
    const { id } = (req as CustomRequest).token;
    const { pid } = req.params;

    try {
      dbconnection.query(
        `DELETE FROM cart WHERE uid = '${id}' AND pid ='${pid}'`,
        (err: any, result: any[]) => {
          if (result) {
            res.send(`Data deleted succesfully`);
          } else if (err) {
            console.error(err);
            return res.status(500).json({ message: "Unknown error occurred" });
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
}

// getCartProducts = (req: Request, res: Response) => {
//   const { id } = (req as CustomRequest).token;
//   const cartProductsArr: any[] = []; // Specify the type as any[]

//   try {
//     dbconnection.query(
//       `SELECT * FROM cart WHERE uid = '${id}' AND isAdded = 1`,
//       (error: any, results: any[]) => {
//         if (error) {
//           console.error(error);
//           return res.status(500).json({ message: "Unknown error occurred" });
//         }

//         if (results.length > 0) {
//           for (const item of results) {
//             dbconnection.query(
//               `SELECT * FROM product WHERE id = '${item.pid}'`,
//               (err: any, result: any[]) => {
//                 if (result) {
//                   cartProductsArr.push(result[0]);

//                 } else if (err) {
//                   console.error(err);
//                   return res
//                     .status(500)
//                     .json({ message: "Unknown error occurred" });
//                 }
//               }
//             );
//           }
//           console.log(cartProductsArr,'cartarr')
//           res.send(cartProductsArr);
//         } else {
//           console.log(`User not registered with this email id`);
//           res.send(cartProductsArr);
//         }
//       }
//     );
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: "Unknown error occurred" });
//   }
// };

export default cartController;
