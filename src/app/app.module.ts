import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {UsersModule} from './users/users.module';
import { FunctionCallOnbtnComponent } from './function-call-onbtn/function-call-onbtn.component';
import { AlleventsComponent } from './allevents/allevents.component';
import{AllpracticesModule} from './allpractices/allpractices.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FunctionCallOnbtnComponent,
    AlleventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    AllpracticesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
