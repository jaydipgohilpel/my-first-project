import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color = "green";
  bgcolor = "yellow";
  err = true;
  updatecolor() {
    if (this.err) {
      this.color = "yellow";
      this.bgcolor = "green";
      this.err = false;
    }
    else {
      this.color = "orange";
      this.bgcolor = "skyblue";
      this.err = true;
    }

  }
}
