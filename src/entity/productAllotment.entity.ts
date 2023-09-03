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

  @ManyToOne(type => product, product => product, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'productProductId' })
  product: product

  @ManyToOne(type => vendor, vendor => vendor, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'vendorVendorId' })
  vendor: vendor

  @ManyToOne(type => Company, Company => Company, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'companyCompanyId' })
  company: Company
}