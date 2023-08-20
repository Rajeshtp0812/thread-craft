import { Column, Entity } from "typeorm";


@Entity({name:'invoice'})


export class Invoice{
    @Column({name:"text"})
    text:string
}