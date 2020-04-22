import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arr-list',
  templateUrl: './arr-list.component.html',
  styleUrls: ['./arr-list.component.css']
})
export class ArrListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() testArr= [];
}