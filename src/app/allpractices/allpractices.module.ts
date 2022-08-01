import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ConditionComponent } from './condition/condition.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { BootstrappracticesComponent } from './bootstrappractices/bootstrappractices.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialuiComponent } from './materialui/materialui.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    PropertybindingComponent,
    ConditionComponent,
    SimpleformComponent,
    HeaderComponent,
    FooterComponent,
    StylebindingComponent,
    BootstrappracticesComponent,
    MaterialuiComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSliderModule
  ],
  exports:[
    PropertybindingComponent,
    ConditionComponent,
    SimpleformComponent,
    HeaderComponent,
    FooterComponent,
    StylebindingComponent,
    BootstrappracticesComponent,
    MaterialuiComponent,
    UserComponent
  ]
  
})
export class AllpracticesModule { }
