import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({ name: "vendor" })
export class vendor {
    @PrimaryGeneratedColumn()
    vendorId: number

    @Column({ name: "owner", default:" " })
    ownerName: string

    @Column({ name: "company", })
    companyName: string

    @Column({ name: "contact" })
    contact: string

    @Column({ name: "email", default:" " })
    email: string

    @Column({ default:" ", name: "address" })
    address: string;

    @Column({ default:" ", name: "gst" })
    gst: string;

    @Column({ name: "pinCode", default:" " })
    pinCode: string;

    @Column({ name: "state", default:" " })
    state: string;

    @Column({ name: "city", default:" " })
    city: string;

    @ManyToOne(() => Company, company => company)
    @JoinColumn({ name: "companyCompanyId" })
    company: Company;
}
