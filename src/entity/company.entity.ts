import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { product } from "./product.entity";
import { Invoice } from "./invoice.entity";

@Entity({ name: "company" })
export class Company extends BaseEntity {

      @PrimaryGeneratedColumn()
      companyId: number

      @Column()
      companyName: string

      @Column({ default:" " })
      gst: string

      @Column({ default:" " })
      contact: string

      @Column({ default:" " })
      email: string

      @Column()
      address: string

      @Column()
      state: string

      @Column()
      city: string

      @Column({ name: "pinCode" })
      pinCode: string;
} 