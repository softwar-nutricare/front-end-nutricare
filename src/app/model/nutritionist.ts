
export class Nutritionist {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    cnpNumber: number;
    createdAt: Date;

    constructor(){
        this.id =0;
        this.username = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.cnpNumber = 0;
        this.createdAt = new Date();
    }
}