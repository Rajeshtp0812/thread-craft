import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";
import { vendor } from "./vendor.entity";
import { product } from "./product.entity";


@Entity({ name: "productallotment" })
export class productAllotment extends BaseEntity {

  @PrimaryGeneratedColumn()
  productAllotmentId: number

  @Column({ name: "Date", nullable: true })
  date: string

 

  // @ManyToOne(type=>vendor,vendor=>vendor )
  // @JoinColumn( )
  // vendor:vendor
  
  @ManyToOne(type=>Company,Company=>Company )
  @JoinColumn({name:'companyCompanyId'})
  company:Company

  @Column({ name: "Size", nullable: true })
  size: string

  @Column({ name: "ProductQuantity", nullable: true })
  productQuantity: number

  @Column({ name: "VendorRate", nullable: true })
  vendorRate: number

  @Column({ name: "DeliveryDate", nullable: true })
  deliveryDate: string

  @Column({ name: "Amount", nullable: true })
  totalAmount: number

  @Column({ name: "AdvancePayment", nullable: true })
  advancePayment: number

  @Column({ name: "balanceAmmount", nullable: true })
  balanceAmount: number

  @Column({ name: "Description", nullable: true })
  description: string

  @ManyToOne(type=>product,product=>product )
  @JoinColumn({name:'productProductId'})
   product:product


}