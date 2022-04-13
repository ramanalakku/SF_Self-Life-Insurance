import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  return this.httpClient.get<Info>(this.url1+"/"+mobileNumber);
}

saveDetails(data: any): Observable<Info> {debugger
  var changedata={
    "phonenoid": data.countrycode+""+data.mobileNumber,
    "name": data.firstname+" "+data.lastname,
    "DOB":data.birthday,
    "product":"Auto",
    "gender": data.radio_gender,
    "height":data.Height,
    "weight":data.Weight,
    "health":data.healthcategory,
    "plan":data.coverageplan,
    "term":data.coverageterm,
    "state":"nt"

}
         return this.httpClient.post<Info>(this.url2, changedata);
}
}
