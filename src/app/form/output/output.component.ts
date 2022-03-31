import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  constructor() { }

  @Input('dataObj') resobj:any; 
  @Input('dataObj1') newzobj1:any; 

  ngOnInit(): void {
    this.resobj = {
      fname : "",
      lname : "",
      address : "",
      city : "",
      z_code : "" 
    }
  }

}
