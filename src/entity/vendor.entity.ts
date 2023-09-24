import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { Company } from './company.entity';
  
  @Entity({ name: 'vendor' })
  export class vendor {
    @PrimaryGeneratedColumn()
    vendorId: number;
  
    @Column({ name: 'owner' })
    ownerName: string;
  
    @Column({ name: 'company' })
    companyName: string;
  
    @Column({ name: 'contact' })
    contact: string;
  
    @Column({ name: 'address' })
    address: string;
  
    @Column({ default: '', name: 'gst' })
    alternateContact: string;
  
    @Column({ name: 'pinCode' })
    pinCode: string;
  
    @Column({ name: 'state' })
    state: string;
  
    @Column({ name: 'city' })
    city: string;
  
    @ManyToOne(() => Company, (company) => company, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'companyCompanyId' })
    company: Company;
  }