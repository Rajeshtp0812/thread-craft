
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './company.entity';
import { InvoiceItems } from './invoiceItems';
import { Client } from './client.entity';

@Entity({ name: 'invoice' })
export class Invoice extends BaseEntity {

  @PrimaryGeneratedColumn({ name: 'invoiceId' })
  invoiceId: number

  @Column({ name: 'invoiceNo' })
  invoiceNo: number;

  @Column({ name: 'SupplyDate' ,default:" "})
  supplyDate: string;

  @Column({ name: 'State'  })
  state: string;

  @Column({ name: 'TransportMode' ,default:" "})
  transportMode: string;

  @Column({ name: 'Contact',default:0  })
  contact: number;

  @Column({ name: 'Address',default:" " })
  address: string;

  @Column({ name: 'GstNo',default:0 })
  gstNo: number;

  @Column({ name: 'SupplyPlace' ,default:" "})
  supplyPlace: string;

  @Column({ name: 'Cgst' ,default:" "})
  cgst: string;

  @Column({ name: 'CgstPercentage' ,default:" "})
  cgstPercentage: string;

  @Column({ name: 'Sgst' ,default:" "})
  sgst: string;

  @Column({ name: 'SgstPercentage',default:" " })
  sgstPercentage: string;

  @Column({ name: 'TotalAmount' })
  totalAmount: number;

  @Column({ name: 'AmountInWords' })
  amountInWords: string
  
  @ManyToOne(type => Company, Company => Company, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'companyCompanyId' })
  company: Company

  @ManyToOne(type => Client, client=>client, { onDelete: "CASCADE" })
  @JoinColumn({ name: 'clientClientId' })
   client:Client
  
  @OneToMany(type => InvoiceItems ,InvoiceItems=>InvoiceItems.invoice,{ cascade:true  })
  invoiceItems: InvoiceItems[]

}
