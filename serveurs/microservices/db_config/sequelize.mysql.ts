import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user/user";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "BDD_CESIEATS",
  logging: false,
  models: [User],
});

export default connection;