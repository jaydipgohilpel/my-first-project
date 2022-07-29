import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ConditionComponent } from './condition/condition.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';


@NgModule({
  declarations: [
    PropertybindingComponent,
    ConditionComponent,
    SimpleformComponent,
    HeaderComponent,
    FooterComponent,
    StylebindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PropertybindingComponent,
    ConditionComponent,
    SimpleformComponent,
    HeaderComponent,
    FooterComponent,
    StylebindingComponent
  ]
})
export class AllpracticesModule { }
