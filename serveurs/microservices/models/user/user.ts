import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "user",
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    
  })
  Firstname!: string;

  @Column({
    type: DataType.STRING,
    
  })
  Lastname!: string;

  @Column({
    type: DataType.STRING,
    
  })
  Address!: string;

  @Column({
    type: DataType.INTEGER,
   
  })
  Number!: number;

  @Column({
    type: DataType.STRING,
    
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    
  })
  Password!: string;
}
