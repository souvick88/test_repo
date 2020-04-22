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



  onAddVal(){
    const val={};
    this.valCreated.emit(val);
  }
}