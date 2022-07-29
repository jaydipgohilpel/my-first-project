import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  // styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  n = 0;
  name = "Jaydip Gohil";
  disableBox = true;
  enabledtextBox() {
    this.n++;
    if (this.disableBox) {
      this.disableBox = false;
    }
    else {
      this.disableBox = true;
    }
  }

}
