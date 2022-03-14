import { Injectable } from '@angular/core';
import {personaldataobj} from './shared/shared.model'

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private formData: personaldataobj = new personaldataobj();
  constructor() { }
 
  setFormdata(data: personaldataobj) {
    debugger
    this.formData=data;
}
getFormdata(): personaldataobj {
  debugger
  return this.formData;
}
}
