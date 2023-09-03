
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './company.entity';
import { invoiceItems } from './invoiceItems';
import { Client } from './client.entity';

@Entity({ name: 'invoice' })
export class Invoice extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'invoiceId' })
  invoiceId: number

  @Column({ name: 'invoiceNo' })
  invoiceNo: number;

  @Column({ name: 'SupplyDate' ,nullable:true})
  supplyDate: string;

  @Column({ name: 'State'  })
  state: string;

  @Column({ name: 'TransportMode' ,nullable:true})
  transportMode: string;

  @Column({ name: 'Conatact',nullable:true })
  contact: number;

  @Column({ name: 'Address',nullable:true })
  address: string;

  @Column({ name: 'GstNo',nullable:true })
  gstNo: number;

  @Column({ name: 'SupplyPlace' ,nullable:true})
  supplyPlace: string;

  @Column({ name: 'Cgst' ,nullable:true})
  cgst: string;

  @Column({ name: 'CgstPercentage' ,nullable:true})
  cgstPercentage: string;

  @Column({ name: 'Sgst' ,nullable:true})
  sgst: string;

  @Column({ name: 'SgstPercentage',nullable:true })
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

  @ManyToOne(type => Client, client=>client, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'clientClientId' })
   client:Client
  
  @OneToOne(type => invoiceItems ,{ onDelete: "CASCADE",cascade:true })
  invoice: invoiceItems

}
