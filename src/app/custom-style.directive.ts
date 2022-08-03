import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private e:ElementRef) { 
    e.nativeElement.style.color="red";
    e.nativeElement.style.border="2px solid skyblue";
   
  }

}
