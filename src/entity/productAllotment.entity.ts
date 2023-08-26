import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from './product.entity';
import { Company } from "./company.entity";
import { vendor } from "./vendor.entity";


@Entity({ name: "productallotment" })
export class productAllotment extends BaseEntity {

  @PrimaryGeneratedColumn()
  productAllotmentId: number

  @Column({ name: "Size", nullable: true })
  size: string

  @Column({ name: "ProductQuantity", nullable: true })
  quantity: number

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

  @ManyToOne(() => vendor, vendor => vendor)
  @JoinColumn({ name: "vendorVendorId" })
  vendor: number

  @ManyToOne(() => Product, product => product)
  @JoinColumn({ name: "productProductId" })
  product: number

  @ManyToOne(() => Company, company => company)
  @JoinColumn({ name: "companyCompanyId" })
  company: number

}