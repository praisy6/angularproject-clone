import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  inpObj = {
    fname : "",
    lname : "",
    address : "",
    city : "",
    z_code : ""
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  @Output() resObj = new EventEmitter<any>();
  showResult(){
    this.resObj.emit(this.inpObj);
  }

}
