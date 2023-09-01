import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Product } from "./product.entity";
import { Invoice } from "./invoice.entity";

@Entity({ name: "company" })
export class Company extends BaseEntity {

      @PrimaryGeneratedColumn()
      companyId: number

      @Column()
      companyName: string

      @Column({ nullable: true })
      gst: string

      @Column({ nullable: true })
      contact: string

      @Column({ nullable: true })
      email: string

      @Column()
      address: string

      @Column()
      state: string

      @Column()
      city: string

      @Column({ name: "pinCode" })
      pinCode: string;

      @OneToMany(() => Client, client => client)
      clients: Client[];

      @OneToMany(() => Product, product => product)
      products: Product[];

      @OneToMany(() => Invoice, Invoice => Invoice.company)
      invoice: Invoice[];

} 