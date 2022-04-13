export interface Countries {
    code: string
    name: string
}

export class personaldataobj{
    firstname: string='';
    lastname: string='';
    countrycode: string='';
    mobileNumber: string='';
    birthday: string='';
    Height: string='';
    Weight:string='';
    radio_gender: string='';
    healthcategory: string='';
    coverageplan:string='';
    coverageterm:string='';
}
export interface Config {
    date: any;
  }
  export interface Info {
    "phonenoid": string;
    "name": string;
    "DOB": string;
    "product": string;
    "gender": string;
    "height":string;
    "weight":string;
    "health":string;
    "plan":string;
    "term":string;
    "state":string;
  }

