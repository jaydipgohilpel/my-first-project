import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersModule} from './users/users.module';
import { FunctionCallOnbtnComponent } from './function-call-onbtn/function-call-onbtn.component';
import { AlleventsComponent } from './allevents/allevents.component';
import{AllpracticesModule} from './allpractices/allpractices.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeComponent } from './pipe/pipe.component';
import { CustomStyleDirective } from './custom-style.directive';
import { CustomDiStyleComponent } from './custom-di-style/custom-di-style.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FunctionCallOnbtnComponent,
    AlleventsComponent,
    PipeComponent,
    CustomStyleDirective,
    CustomDiStyleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AllpracticesModule,
    NgbModule,
    BrowserAnimationsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
