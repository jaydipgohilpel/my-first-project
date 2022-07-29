import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ConditionComponent } from './condition/condition.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    PropertybindingComponent,
    ConditionComponent,
    SimpleformComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PropertybindingComponent,
    ConditionComponent,
    SimpleformComponent,
  
  ]
})
export class AllpracticesModule { }
