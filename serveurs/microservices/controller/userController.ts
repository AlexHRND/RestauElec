import { RequestHandler, response } from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import { User } from "../models/user/user";

export const createUser: RequestHandler = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
  if (alreadyExistsUser) {
    res.statusCode = 409
    return res.status(409).json({ message: "this email is already used" });
  }
  else {
    var user = await User.create({Firstname: req.body.Firstname, Lastname: req.body.Lastname, Address: req.body.Address, Number: req.body.Number, email: req.body.email, Password : hashedPassword, role:"CLIENT"});
  
    var savedUser = await user.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register user at the moment!" });
    });

    if (savedUser) res.json({ message: "Thanks for registering" });
  }
};

export const createDeliverer: RequestHandler = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
  if (alreadyExistsUser) {
    res.statusCode = 409
    return res.status(409).json({ message: "this email is already used" });
  }
  else {
    var user = await User.create({Firstname: req.body.Firstname, Lastname: req.body.Lastname, Address: req.body.Address, Number: req.body.Number, email: req.body.email, Password : hashedPassword, role:"LIVREUR"});
  
    var savedUser = await user.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register user at the moment!" });
    });

    if (savedUser) res.json({ message: "Thanks for registering" });
  }
};

export const createRestaurantMan: RequestHandler = async (req, res, next) => {
  const email = req.body.email
  const password = req.body.Password
  const hashedPassword = await bcrypt.hash(password, 10);

  const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
  if (alreadyExistsUser) {
    res.statusCode = 409
    return res.status(409).json({ message: "this email is already used" });
  }
  else {
    var user = await User.create({Firstname: req.body.Firstname, Lastname: req.body.Lastname, Address: req.body.Address, Number: req.body.Number, email: req.body.email, Password : hashedPassword, role:"RESTAURATEUR"});
  
    var savedUser = await user.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register user at the moment!" });
    });

    if (savedUser) res.json({ message: "Thanks for registering" });
  }
};

export const logUser : RequestHandler = async (req,res,next) =>
{
  require('dotenv').config();
  const user = await User.findOne({ where : {email : req.body.email }});
  if(user)
  {
    const password_valid = await bcrypt.compare(req.body.Password,user.Password);
    if(password_valid)
    {
      
       const token = jwt.sign({ "id" : user.id,"email" : user.email,"first_name": user.Firstname,"role":user.role },'gcbcye455645rbrnvu' );
       res.status(200).json({ token : token });
    }
    else
    {
  
      res.status(400).json({ error : "Password Incorrect" });
    }
  }
else
{
  res.status(404).json({ error : "User does not exist" });
}
};

 

export const deleteUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: User | null = await User.findByPk(id);
  await User.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "User deleted successfully", data: deleteUser});
};

export const getAllUser: RequestHandler = async (req, res, next) => {
  const allUser: User[] = await User.findAll();
  return res
    .status(200)
    .json({ message: "User fetched successfully", data: allUser });
};

export const getUserById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const user: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({user});
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await User.update({ ...req.body }, { where: { id } });
  const updatedUser: User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ message: "User updated successfully", data: updateUser });
};