import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({ name: "vendor" })
export class vendor {
    @PrimaryGeneratedColumn()
    vendorId: number

    @Column({ name: "owner", nullable: true })
    ownerName: string

    @Column({ name: "company", })
    companyName: string

    @Column({ name: "contact" })
    contact: string

    @Column({ name: "email", nullable: true })
    email: string

    @Column({ nullable: true, name: "address" })
    address: string;

    @Column({ nullable: true, name: "gst" })
    gst: string;

    @Column({ name: "pinCode", nullable: true })
    pinCode: string;

    @Column({ name: "state", nullable: true })
    state: string;

    @Column({ name: "city", nullable: true })
    city: string;

    @ManyToOne(() => Company, company => company, { cascade: true })
    @JoinColumn({ name: "companyCompanyId" })
    company: Company;
}
