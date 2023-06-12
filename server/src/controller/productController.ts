import { Request, Response } from "express";

import { JwtPayloadInterface } from "../payload/jwtPayload";
import { dbconnection } from "..";

export interface CustomRequest extends Request {
  token: JwtPayloadInterface;
}

class ProductController {
  createProduct = (req: Request, res: Response) => {
    const data = req.body;
    const { id } = (req as CustomRequest).token;

    try {
      dbconnection.query(
        `SELECT * FROM user WHERE id = '${id}'`,
        (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).json({ message: "Unknown error occurred" });
          }

          if (results.length > 0) {
            dbconnection.query(
              `INSERT INTO product (uid, pname, qty, price) VALUES (?, ?, ?, ?)`,
              [results[0].id, data.pname, data.qty, data.price],
              (error, results) => {
                if (error) {
                  console.error(error);
                  return res
                    .status(500)
                    .json({ message: "Unknown error occurred" });
                }

                res.send("Product created successfully");
              }
            );
          } else {
            console.log(
              `User not registered with this email id: ${data.email}`
            );
          }
        }
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  };

  updateProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const query = dbconnection.query(
        `UPDATE product
         SET pname = COALESCE(?, pname),
             price = COALESCE(?, price),
             qty = COALESCE(?, qty)
         WHERE id = ?`,
        [data.pname, data.price, data.qty, id],
        (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).json({ message: "Updation error" });
          }

          if (results.affectedRows > 0) {
            res.send("Updation successful");
          } else {
            console.log("Product not found");
          }
        }
      );
    } catch (err) {
      console.log(err, "error");
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  };

  deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;

    const query = dbconnection.query(`SELECT * from product where id='${id}'`);

    if (query) {
      const itemDeleted = dbconnection.query(`
        DELETE FROM product
        WHERE id = '${id}';`);
      if (itemDeleted) {
        res.send("Product deleted successfully");
      }
    } else {
      res.send("No product with this idd");
    }
  };

  // getProduct = (req: Request, res: Response) => {
  //   const { uid } = req.params;
  //   try {
  //     dbconnection.query(
  //       `SELECT * FROM user WHERE id = ?`,
  //       [uid],
  //       (error, userResults) => {
  //         if (error) {
  //           console.error(error);
  //           return res.status(500).json({ message: "Unknown error occurred" });
  //         }

  //         if (userResults.length > 0) {
  //           const userId = userResults[0].id;
  //           dbconnection.query(
  //             `SELECT * FROM product WHERE uid = ?`,
  //             [userId],
  //             (error, productResults) => {
  //               if (error) {
  //                 console.error(error);
  //                 return res
  //                   .status(500)
  //                   .json({ message: "Unknown error occurred" });
  //               }

  //               if (productResults.length > 0) {
  //                 res.send(productResults);
  //               } else {
  //                 console.log("Product not found");
  //                 return res.status(404).json({ message: "Product not found" });
  //               }
  //             }
  //           );
  //         } else {
  //           console.log(`User not registered`);
  //           return res.status(404).json({ message: "User not registered" });
  //         }
  //       }
  //     );
  //   } catch (error) {
  //     console.error("An unknown error occurred:", error);
  //     return res.status(500).json({ message: "Unknown error occurred" });
  //   }
  // };

  getProductDetails = (req: Request, res: Response) => {
    const { id } = req.params;
    dbconnection.query(
      `SELECT * FROM product WHERE id = ?`,
      [id],
      (error, productResults) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Unknown error occurred" });
        }

        if (productResults.length > 0) {
          res.send(productResults);
        } else {
          console.log("Product not found");
          return res.status(404).json({ message: "Product not found" });
        }
      }
    );
  };

  getProducts = (req: Request, res: Response) => {
    const { id } = req.query;
    const { keyword } = req.query;

    let query = "SELECT * from product";

    if (id) {
      query += ` where uid = ${id}`;
    }

    if (keyword) {
      query += ` WHERE pname LIKE '%${keyword}%'`;
    }

    try {
      dbconnection.query(query, (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Unknown error occurred" });
        }

        res.json(results);
      });
    } catch (error) {
      console.error("An unknown error occurred:", error);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  };

  getProductById = (req: Request, res: Response) => {

    const { id } = (req as CustomRequest).token;
    const { keyword } = req.query;

    let query = "SELECT * from product";

    if (id) {
      query += ` where uid = ${id}`;
    }

    if (keyword) {
      query += ` WHERE pname LIKE '%${keyword}%'`;
    }

    try {
      dbconnection.query(query, (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Unknown error occurred" });
        }

        res.json(results);
      });
    } catch (error) {
      console.error("An unknown error occurred:", error);
      return res.status(500).json({ message: "Unknown error occurred" });
    }
  };
}

export default ProductController;
