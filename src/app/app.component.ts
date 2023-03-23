import { Component, IterableDiffers } from '@angular/core';
import { MainTodoService, Todo } from './main-todo-service';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  
  title = 'ProfessionalDirectory';
  todo!: Todo[];
  contactForm!: FormGroup;

  // ngOnInit(): void {
  //   this.contactForm = new FormGroup({
  //     fullName: new FormControl(null),
  //     occupation: new FormControl(null),
  //     companyName: new FormControl(null),
  //     phoneNumber: new FormControl(null),
  //     email: new FormControl(null),
  //     description: new FormControl(null)
  //   });
  // }
  itemNum = 0;
  createTodo() {
    Item: {
      TestField: this.itemNum + 1
    }
  }

}
