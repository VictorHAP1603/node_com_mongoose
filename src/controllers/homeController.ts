import { Request, Response } from "express";

import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  const users = await User.find({});

  return res.render("pages/home", {
    users,
  });
};

export const deletar = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await User.findOneAndDelete({ _id: id });
  } catch (err) {
    console.log("ERRO: ", err);
  }

  return res.redirect("/");
};

export const aumentarIdade = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;

    let user = await User.findOne({ _id: id });

    if (user) {
      user.age++;
      await user.save();
    }
  } catch (err) {
    console.log("ERRO: ", err);
  }

  return res.redirect("/");
};

export const diminuirIdade = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    let user = await User.findOne({ _id: id });

    if (user) {
      user.age--;
      await user.save();
    }
  } catch (err) {
    console.log("ERRO: ", err);
  }

  return res.redirect("/");
};
