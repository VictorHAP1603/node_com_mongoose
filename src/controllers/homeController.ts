import { Request, Response } from "express";
import { Product } from "../models/Product";

import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  let users = await User.find({
    // "name.first": "Victor",
    age: { $gte: 16 },
  }).sort({ age: -1 });

  console.log(users); 

  let showOld: boolean = false;
  let age: number = 90;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render("pages/home", {
    name: "Bonieky",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDoDia: [],
  });
};