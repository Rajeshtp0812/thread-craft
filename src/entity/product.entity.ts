import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({ name: "product" })
export class Product {

  @PrimaryGeneratedColumn()
  productId: number

  @Column({ name: "date" })
  date: string

  @Column({ name: "details" })
  details: string

  @Column({ name: "rate" })
  rate: string

  @Column({ name: "companyId" })
  companyId: string

  @Column({ name: "code" })
  code: string

  @Column({ name: "size", nullable: true })
  size: string

  @Column({ name: "runNo" })
  runNo: string

  @Column({ name: "billNo" })
  billNo: string

  @Column({ name: "average", nullable: true })
  average: string

  @Column({ name: "embroidary", nullable: true })
  embroidary: string

  @Column({ name: "fittingStich", nullable: true })
  fittingStich: string

  @Column({ name: 'buttonStich', nullable: true })
  buttonStich: string

  @Column({ name: "print", nullable: true })
  print: string

  @Column({ name: "pintex", nullable: true })
  printex: string

  @Column({ name: "kMaking", nullable: true })
  kMaking: string

  @Column({ name: "tag", nullable: true })
  tag: string

  @Column({ name: "label", nullable: true })
  label: string

  @Column({ name: "making", nullable: true })
  making: string

  @Column({ name: "canvas", nullable: true })
  canvas: string

  @Column({ name: "totalAmount", nullable: true })
  totalAmount: string

  @Column({ name: "image", nullable: true })
  image: string

  @ManyToOne(() => Company, company => company)
  @JoinColumn({ name: "companyCompanyId" })
  company: Company

}