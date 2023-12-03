import { CustDtoBuilder } from "./CustDtoBuilder";

export class CustFilterDto{
    name:string = "";
    age:string = "";
    address:string = "";
    crmId: number=0;
    companyName:string="";
    countryId:number=0;
    functionId:number=0;
    agentId:string="";
    networkId:string="";
    opcode:string="";
    constructor(private custDtoBuilder:CustDtoBuilder){}
}