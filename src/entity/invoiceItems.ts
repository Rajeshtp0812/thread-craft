import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from './invoice.entity';
@Entity({ name: "invoiceItem" })
export class InvoiceItems extends BaseEntity {
  @PrimaryGeneratedColumn()
  invoiceItemId: number;

  @Column({ name: 'code' })
  code: string;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'hsnCode', default: '' })
  hsnCode: string;

  @Column({ name: 'Rate', type:"decimal",precision:10,scale:2})
  rate: number;

  @Column({ name: 'Quantity' })
  quantity: number;

  @Column({ name: 'Amount', type:"decimal",precision:10,scale:2 })
  amount: number;

  @ManyToOne((type) => Invoice, invoice => invoice.invoiceItems, { onDelete: "CASCADE" })
  @JoinColumn({ name: "invoiceInvoiceId" })
  invoice: Invoice;
}
