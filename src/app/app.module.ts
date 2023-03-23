import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTodoComponent } from './main-todo/main-todo.component';

import { Amplify } from 'aws-amplify';

@NgModule({
  declarations: [
    AppComponent,
    MainTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
