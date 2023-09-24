import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { product } from "./product.entity";
import { Invoice } from "./invoice.entity";

@Entity({ name: "company" })
export class Company extends BaseEntity {

      @PrimaryGeneratedColumn()
      companyId: number

      @Column({name:"company"})
      companyName: string

      @Column({ name:"GST"  })
      gst: string

      @Column({ name:"Contact" })
      contact: string

      @Column({ name:"Email" })
      email: string

      @Column({name:"Address"})
      address: string

      @Column({name:"State"})
      state: string

      @Column({name:"city"})
      city: string

      @Column({ name: "PinCode" })
      pinCode: string;
} 