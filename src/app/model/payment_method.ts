import { Client } from "./client";

export class PaymentMethod {
    id: number;
    client: Client;
    cardNumber: number;
    cardType: string;
    expirationDateMonth: number;
    expirationDateYear: number;
    securityCode: number;
    ownerFirstname: string;
    ownerLastname: string;
    city: string;
    billingAddress: string;
    billingAddressLine2: string;
    postalCode: string;
    country: string;
    phoneNumber: number;

    constructor(){
        this.id =0;
        this.client = new Client();
        this.cardNumber = 0;
        this.cardType = "";
        this.expirationDateMonth = 0;
        this.expirationDateYear = 0;
        this.securityCode = 0;
        this.ownerFirstname = "";
        this.ownerLastname = "";
        this.city = "";
        this.billingAddress = "";
        this.billingAddressLine2 = "";
        this.postalCode = "";
        this.country = "";
        this.phoneNumber = 0;
    }
}