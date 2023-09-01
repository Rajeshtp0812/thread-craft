import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity({ name: "invoiceItem" })
export class invoiceItems extends BaseEntity {

  @PrimaryGeneratedColumn()
  itemId;

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

  @ManyToOne(() => Invoice, invoice => invoice.items)
  invoice: Invoice;
}
