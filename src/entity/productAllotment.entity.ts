import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";
import { vendor } from "./vendor.entity";
 
  


@Entity({ name: "productallotment" })
export class productAllotment extends BaseEntity {

  @PrimaryGeneratedColumn()
  productAllotmentId: number

  @Column({ name: "Date", default:"" })
  date: string

  @Column({ name: "Size", default:"" })
  size: string

  @Column({ name: "ProductQuantity"})
  productQuantity: number

  @Column({ name: "VendorRate"  })
  vendorRate: number

  @Column({ name: "DeliveryDate", default:"" })
  deliveryDate: string

  @Column({ name: "Amount",  nullable:true})
  totalAmount: number

  @Column({ name: "AdvancePayment",  nullable:true })
  advancePayment: number

  @Column({ name: "balanceAmmount",  nullable:true })
  balanceAmount: number

  @Column({ name: "Description" })
  description: string

  
  @Column({name:"product",default:""})
  product:  string

  @ManyToOne(type => vendor, vendor => vendor, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'vendorVendorId' })
  vendor: vendor

  @ManyToOne(type => Company, Company => Company, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'companyCompanyId' })
  company: Company
}