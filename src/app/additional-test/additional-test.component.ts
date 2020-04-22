import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-additional-test',
  templateUrl: './additional-test.component.html',
  styleUrls: ['./additional-test.component.css']
})
export class AdditionalTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() valCreated = new EventEmitter();

  dispVal = "";

  onAddVal(){
    const val={
      myVal: this.dispVal
    };
    this.valCreated.emit(val);
  }
}