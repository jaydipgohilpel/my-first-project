import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  appName = 'MyFirstAngularProject';
  name = "Jaydip Gohil";
  returnName() {
    return `Function return name : ${this.name}`;
  }
  obj = [
    {
      name : "Jaydip Gohil",
      city: 'Bhavnagar',
      age: "20"
    },
    {
      name : "Jaydip Gohil",
      city: 'Bhavnagar',
      age: "21"
    },
    {
      name : "Jaydip Gohil",
      city: 'Bhavnagar',
      age: "22"
    }
  ]
  array = ["jaydip", "manish", 'umesh'];
  siteUrl = window.location.href;
  parentFunction(data:any)
  {
    console.warn(data);
  }
}
