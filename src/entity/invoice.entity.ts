
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './company.entity';
import { invoiceItems } from './invoiceItems';

@Entity({ name: 'invoice' })
export class Invoice extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'invoiceId' })
  invoiceId: number

  @Column({ name: 'invoiceNo' })
  invoiceNo: number;

  @Column({ name: 'SupplyDate' })
  supplyDate: string;

  @Column({ name: 'State' })
  state: string;

  @Column({ name: 'TransportMode' })
  transportMode: string;

  @Column({ name: 'Conatact' })
  contact: number;

  @Column({ name: 'Address' })
  address: string;

  @Column({ name: 'GstNo' })
  gstNo: number;

  @Column({ name: 'SupplyPlace' })
  supplyPlace: string;

  @Column({ name: 'Cgst' })
  cgst: string;

  @Column({ name: 'CgstPercentage' })
  cgstPercentage: string;

  @Column({ name: 'Sgst' })
  sgst: string;

  @Column({ name: 'SgstPercentage' })
  sgstPercentage: string;

  @Column({ name: 'TotalAmount' })
  totalAmount: number;

  @Column({ name: 'AmountInWords' })
  amountInWords: string;

  @Column({ name: 'CompanyId' })
  companyId: number;

  @ManyToOne(type => Company, Company => Company, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'companyCompanyId' })
  company: Company

  @OneToOne(type => invoiceItems, { onDelete: "CASCADE" })
  invoice: invoiceItems[]

}
