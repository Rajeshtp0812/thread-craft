
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./company.entity";

@Entity({ name: "product" })
export class product {

    @PrimaryGeneratedColumn()
    productId: number

    @Column({ name: "date" })
    date: string

    @Column({ name: "details" })
    details: string

    @Column({ name: "rate" })
    rate:  string

    @Column({ name: "code" })
    code: string

    @Column({ name: "size", default:" " })
    size: string

    @Column({ name: "runNo" })
    runNo:  string

    @Column({ name: "billNo" })
    billNo:  string

    @Column({ name: "average", default:"" })
    average: string

    @Column({ name: "embroidary", default:"" })
    embroidary: string

    @Column({ name: "fittingStich", default:"" })
    fittingStich: string

    @Column({ name: 'buttonStich', default:" " })
    buttonStich: string

    @Column({ name: "print", default:" " })
    print: string

    @Column({ name: "pintex", default:" " })
    pintex: string

    @Column({ name: "kMaking", default:" " })
    kMaking: string

    @Column({ name: "tag", default:" " })
    tag: string

    @Column({ name: "label", default:" " })
    label: string

    @Column({ name: "making", default:" " })
    making: string

    @Column({ name: "canvas", default:" " })
    canvas: string

    @Column({ name: "totalAmount", default:" " })
    totalAmount:string

    @Column({ name: "image", default:" " })
    image: string

    @ManyToOne(() => Company, company => company)
    @JoinColumn({ name: "companyCompanyId" })
    company: Company

  }