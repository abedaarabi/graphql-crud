import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//calss means to create a tbale in the database
@Entity()
export class users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;
}
