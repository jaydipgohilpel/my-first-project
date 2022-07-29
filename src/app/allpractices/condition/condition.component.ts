import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show="no";
  color="blue";

  data=["jaydip",'gohil','jay','kakadiya'];
  arrayOfObj=[
    {
      name:'jaydip',
      city:'bhavnagar',
      age:'24'
    },
    {
      name:'jay',
      city:'bhavnagar',
      age:'24'
    },
    {
      name:'gautam',
      city:'mahuva',
      age:'24'
    },
    {
      name:'dhaval',
      city:'surat',
      age:'20'
    },
    
  ]
}
