import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  i = 0;
  data: any;
  obj = {};
  ldata: any;
  getvalue(value: number) {
    this.i++;
    console.log(value);
    this.data = value;
    this.obj = {
      name: this.data.username,
      age: this.data.age,
      address: this.data.address
    }
    localStorage.setItem("registerId:" + this.i, JSON.stringify(this.obj));

  }
}
