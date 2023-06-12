import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.body.token || req.query.token || req.headers["x-access-token"] || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, "EFAWFSBFKSBFGB32135654" as Secret);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate [invalid token]");
  }
};
export default authenticateToken;
