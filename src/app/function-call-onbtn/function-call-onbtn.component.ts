import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-call-onbtn',
  templateUrl: './function-call-onbtn.component.html',
  // styleUrls: ['./function-call-onbtn.component.css']
})
export class FunctionCallOnbtnComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  getName(name: string) {
    alert(name);
  }

}
