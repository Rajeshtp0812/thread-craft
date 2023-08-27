import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Invoice } from './invoice.entity';
@Entity({name:"invoiceItem"})
export class invoiceItems extends BaseEntity {
  @PrimaryGeneratedColumn()
  invoiceItemId;
  @Column({ name: 'code' })
  code: string;
  @Column({ name: 'description' })
  description: string;
  @Column({ name: 'hasCode' })
  hasCode: string;
  @Column({ name: 'Rate' })
  rate: number;
  @Column({ name: 'Quantity' })
  quantity: number;
  @Column({ name: 'Amount' })
  amount: number;
  @Column({ name: 'InvoiceId' })
  invoiceId: number;
  @OneToOne((type) => Invoice)
  @JoinColumn({name:"invoiceInvoiceId"})
  invoice: Invoice;
}
