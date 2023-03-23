import { DynamoDB } from 'aws-sdk';
import { Injectable } from '@angular/core';

import { MainTodoComponent } from './main-todo.component'

export interface Todo {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
  }

@Injectable({
  providedIn: 'root'
})
export class MainTodoService {
  private dynamoDB: DynamoDB.DocumentClient;

  constructor() {
    this.dynamoDB = new DynamoDB.DocumentClient({ region: 'us-east-1' });
  }

  restApiEndpoint = 'https://0yonwamata.execute-api.us-east-1.amazonaws.com/dev';

   // Create a new todo
   async createTodo(todo: Omit<Todo, 'id'>): Promise<void> {
    const params: DynamoDB.DocumentClient.PutItemInput = {
      TableName: 'TodosTable-dev',
      Item: {
        id: new Date().getTime().toString(), // Generate a unique ID based on timestamp
        ...todo
      }
    };

    await this.dynamoDB.put(params).promise();
  }

  // Fetch all todos
  async getTodos(): Promise<Todo[]> {
    const params: DynamoDB.DocumentClient.ScanInput = { TableName: 'TodosTable-dev' };

    const response = await this.dynamoDB.scan(params).promise();
    return response.Items as Todo[];
  }

  // Implement update and delete operations similarly

}
