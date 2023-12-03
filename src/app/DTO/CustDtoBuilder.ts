import { CustFilterDto } from "./CustFilterDto";

export class CustDtoBuilder{
    sessionId:string ="49767bce-5357-4642-9e96-b8d19e01faf9";
    numItems:number =50;
    pageNum:number =1;
    opcode:string ="";
    CompanyName:string ="";
    FreeText:string ="";
    Address:string ="";
    CountryId:number =0;
    crmId:number=0;
    agentId:string="";
    networkId:string="";
    private static instance: CustDtoBuilder;  

    private constructor() {
      // Private constructor to prevent direct instantiation
    }  
  
    public static getInstance(): CustDtoBuilder {
      if (!CustDtoBuilder.instance) {
        CustDtoBuilder.instance = new CustDtoBuilder();
      }
      return CustDtoBuilder.instance;
    }  


    setCompanyName(value: string): CustDtoBuilder {
        this.CompanyName = value;
        return this;
    }
    setOpcode(value: string): CustDtoBuilder {
        this.opcode = value;
        return this;
    }
    setSessionId(value: string): CustDtoBuilder {
        this.sessionId = value;
        return this;
    }
    setPageNum(value: number): CustDtoBuilder {
        this.pageNum = value;
        return this;
    }
    setNumItems(value: number): CustDtoBuilder {
        this.numItems = value;
        return this;
    }
    setFreeText(value: string): CustDtoBuilder {
        this.FreeText = value;
        return this;
    }
    setAddress(value: string): CustDtoBuilder {
        this.Address = value;
        return this;
    }
    setAgentId(value: string): CustDtoBuilder {
        this.agentId = value;
        return this;
    }
    setNetworkId(value: string): CustDtoBuilder {
        this.networkId = value;
        return this;
    }
    setCountryId(value: number): CustDtoBuilder {
        this.CountryId = value;
        return this;
    }
    setCrmId(value: number): CustDtoBuilder {
        this.crmId = value;
        return this;
    }
    
    
    build(): CustFilterDto {
        return new CustFilterDto(this);
      }
}