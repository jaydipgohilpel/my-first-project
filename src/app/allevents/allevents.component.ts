import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  // styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myEvents(name:String) {
    // alert(name);
    console.log(name);
  }
}
