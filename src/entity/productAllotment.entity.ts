import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";
import { vendor } from "./vendor.entity";
import { product } from "./product.entity";


@Entity({ name: "productallotment" })
export class productAllotment extends BaseEntity {

  @PrimaryGeneratedColumn()
  productAllotmentId: number

  @Column({ name: "Date", default:" " })
  date: string

  @Column({ name: "Size", default:" " })
  size: string

  @Column({ name: "ProductQuantity", default:" " })
  productQuantity: number

  @Column({ name: "VendorRate", default:" " })
  vendorRate: number

  @Column({ name: "DeliveryDate", default:" " })
  deliveryDate: string

  @Column({ name: "Amount", default:" " })
  totalAmount: number

  @Column({ name: "AdvancePayment", default:" " })
  advancePayment: number

  @Column({ name: "balanceAmmount", default:" " })
  balanceAmount: number

  @Column({ name: "Description", default:" " })
  description: string

  @ManyToOne(type => product, product => product)
  @JoinColumn({ name: 'productProductId' })
  product: product

  @ManyToOne(type => vendor, vendor => vendor)
  @JoinColumn({ name: 'vendorVendorId' })
  vendor: vendor

  @ManyToOne(type => Company, Company => Company)
  @JoinColumn({ name: 'companyCompanyId' })
  company: Company
}