import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',

})
export class UsersComponent  {
  name = 'Angular 2';
  // items = ['item 1', 'item 2', 'item 3'];
  items = [
    {
      name: "John Smith",
      email: "me@carlitos.cc",
      twitter: "@carlitos"
    },
    {
      name: "John Smith 2",
      email: "me@carlitos.com",
      twitter: "@john_wick"
    },
    {
      name: "John Smith 3",
      email: "me@carlitos.cc",
      twitter: "@john_wick_3"
    }
]
}
