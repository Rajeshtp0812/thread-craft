
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({ name: "product" })
export class product {

  @PrimaryGeneratedColumn()
  productId: number

  @Column({ name: "date" })
  date: string

  @Column({ name: "details" })
  details: string

  @Column({ name: "rate" })
  rate: string

  @Column({ name: "code" })
  code: string

  @Column({ name: "size", nullable: true, default: "" })
  size: string

  @Column({ name: "runNo" })
  runNo: string

  @Column({ name: "billNo" })
  billNo: string

  @Column({ name: "average", nullable: true, default: "" })
  average: string

  @Column({ name: "embroidary", nullable: true, default: "" })
  embroidary: string

  @Column({ name: "fittingStich", nullable: true, default: "" })
  fittingStich: string

  @Column({ name: 'buttonStich', nullable: true, default: "" })
  buttonStich: string

  @Column({ name: "print", nullable: true, default: "" })
  print: string

  @Column({ name: "pintex", nullable: true, default: "" })
  pintex: string

  @Column({ name: "kMaking", nullable: true, default: "" })
  kMaking: string

  @Column({ name: "tag", nullable: true, default: "" })
  tag: string

  @Column({ name: "label", nullable: true, default: "" })
  label: string

  @Column({ name: "making", nullable: true, default: "" })
  making: string

  @Column({ name: "canvas", nullable: true, default: "" })
  canvas: string

  @Column({ name: "totalAmount", nullable: true, default: "" })
  totalAmount: string

  @Column({ name: "image", nullable: true, default: "" })
  image: string

  @ManyToOne(() => Company, company => company, { onDelete: "CASCADE" })
  @JoinColumn({ name: "companyCompanyId" })
  company: Company

}