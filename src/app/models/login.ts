export class Login{
    constructor(
    public _id: string,    
    public name: string,
    public lastName: string,
    public email: string,
    public role: string,
    public password: string,
    public confirmPassword: string
    ){}
}