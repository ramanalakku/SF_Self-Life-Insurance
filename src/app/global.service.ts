import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {personaldataobj,Config,Info} from './shared/shared.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private formData: personaldataobj = new personaldataobj();
  constructor(private httpClient: HttpClient) { }
  private url1 = 'http://localhost:8080/personalinfo';
  private url2 = 'http://localhost:8080/personalinfos';
  
  setFormdata(data: personaldataobj) {
    
    this.formData=data;
}
getFormdata(): personaldataobj {
  
  return this.formData;
}
getDetails(mobileNumber: string){
  var mobnumber=(mobileNumber.toUpperCase( ));
  return this.httpClient.get<Info>(this.url1+"/"+mobnumber);
}

saveDetails(data: any,quotationamount:string): Observable<Info> {debugger
  var today=new Date();
  var policynoid=(""+today.getMonth()+ today.getDate()+today.getSeconds()+today.getMilliseconds());
  var changedata={
    "phonenumber": data.countrycode+" - "+data.mobileNumber,
    "name": data.firstname+" "+data.lastname,
    "dob":data.birthday,
    "product":"Auto",
    "gender": data.radio_gender,
    "height":data.Height,
    "weight":data.Weight,
    "health":data.healthcategory,
    "plan":data.coverageplan,
    "term":data.coverageterm,
    "state":"nt",
    "policynoid":policynoid,
    "quotationamount":quotationamount+"/Month"

}
const headers = {
  headers: new HttpHeaders()
      .set('Content-Type', "application/json")
}

         return this.httpClient.post<Info>(this.url2, changedata,headers);
}
}
