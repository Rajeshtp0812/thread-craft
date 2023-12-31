
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './company.entity';
import { InvoiceItems } from './invoiceItems';
import { Client } from './client.entity';

@Entity({ name: 'invoice' })
export class Invoice extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'invoiceId' })
  invoiceId: number

  @Column({ name: 'invoiceNumber' })
  invoiceNumber: string;

  @Column({ name: 'SupplyDate', default: "" })
  supplyDate: string;

  @Column({ name: 'State', default: "" })
  state: string;

  @Column({ name: 'TransportMode', default: "" })
  transportMode: string;

  @Column({ name: 'Contact', default: "" })
  contact: string;

  @Column({ name: 'City', default: "" })
  city: string;

  @Column({ name: 'Address', default: "" })
  address: string;

  @Column({ name: 'GstNumber', default: "" })
  gstNumber: string;

  @Column({ name: 'CgstAmount',type:'decimal',precision:10,scale:2 })
  cgstAmount: number;

  @Column({ name: 'CgstPercent',type:'decimal' ,precision:10,scale:2})
  cgstPercent: number;

  @Column({ name: 'SgstAmount' ,type:'decimal',precision:10,scale:2})
  sgstAmount: number

  @Column({ name: 'SgstPercent' ,type:'decimal', precision:10,scale:2})
  sgstPercent: number;

  @Column({ name: 'Gross Amount' ,type:'decimal', precision:10,scale:2})
   grossAmount: number;

  @Column({ name: 'TotalAmount',type:'decimal', precision:10,scale:2 })
  totalAmount: number;

  @Column({ name: 'AmountInWords' })
  amountInWords: string

  @ManyToOne(type => Company, Company => Company, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'companyCompanyId' })
  company: Company

  @ManyToOne(type => Client, client => client, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'clientClientId' })
  client: Client

  @OneToMany(type => InvoiceItems, InvoiceItems => InvoiceItems.invoice, { cascade: true })
  invoiceItems: InvoiceItems[]

}
