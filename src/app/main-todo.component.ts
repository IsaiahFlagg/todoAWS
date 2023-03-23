import { Component, IterableDiffers } from '@angular/core';
import { MainTodoService, Todo } from './main-todo-service';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})



export class MainTodoComponent {
  
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
