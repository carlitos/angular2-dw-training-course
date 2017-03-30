import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './my-app/app.component';
import { UsersComponent} from './users/users.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, UsersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
