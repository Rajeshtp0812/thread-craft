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
  clientId: number

  @Column({ name: "company" })
  companyName: string;

  @Column({ name: "gst" })
  gst: string;

  @Column({ name: "contact" })
  contact: string;

  @Column({ default:" ", name: "address" })
  address: string;

  @Column({ default:" ", name: "email" })
  email: string;

  @Column({ name: "pinCode" })
  pinCode: string;

  @Column({ name: "state" })
  state: string;

  @Column({ name: "city" })
  city: string;

  @ManyToOne(() => Company, company => company.clients)
  @JoinColumn({ name: "companyCompanyId" })
  company: Company;
}
