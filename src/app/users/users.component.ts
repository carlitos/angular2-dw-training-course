import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',

})
export class UsersComponent  {

  // The easy way to build the object
  item = {
    name: "",
    title: "",
    email: "",
    twitter: ""    
  };

  title = "";
  name  = "";
  email = "";
  twitter = "";

  saveTitle(){

    // One way to build the object
    // var anyObject = {
    //   name: this.name,
    //   email: this.email,
    //   twitter: this.twitter
    // }

    // Editor error but it works
    this.items.push(this.item);
  };


  items = [
    {
      name: "John Smith",
      email: "me@carlitos.cc",
      twitter: "@carlitos",
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
