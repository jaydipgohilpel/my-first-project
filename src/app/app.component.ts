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
  obj = {
    city: 'Bhavnagar',
    age: "24"
  }
  array = ["jaydip", "manish", 'umesh'];
  siteUrl = window.location.href;
}
