import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-summarypage',
  templateUrl: './summarypage.component.html',
  styleUrls: ['./summarypage.component.css']
})
export class SummarypageComponent implements OnInit {
  Selectedbiodata:any;
  constructor(private globalservice:GlobalService) { }

  ngOnInit(): void {debugger
    this.Selectedbiodata=this.globalservice.getFormdata();
  }
  saveDetails(){debugger
    //this.alertshow=true;
      }
  cancelalert(){
    // this.alertshow=false;
    // this.persnalinfo=false;
    //     this.nextpage=false;
  }
}
