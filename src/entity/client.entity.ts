import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Company } from './company.entity';

@Entity({ name: 'client' })
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  clientId: number;

  @Column({ name: 'company' })
  companyName: string;

  @Column({ name: 'gst', default: ' ' })
  gst: string;

  @Column({ name: 'contact', default: ' ' })
  contact: string;

  @Column({ default: ' ', name: 'address' })
  address: string;

  @Column({ default: ' ', name: 'email' })
  email: string;

  @Column({ name: 'pinCode', default: ' ' })
  pinCode: string;

  @Column({ name: 'state', default: ' ' })
  state: string;

  @Column({ name: 'city', default: ' ' })
  city: string;

  @ManyToOne(() => Company, (company) => company, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'companyCompanyId' })
  company: Company;
}
