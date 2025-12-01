import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class TodoListComponent implements OnInit {
  novaTarefa = '';
  listaTarefas: string[] = [];
  constructor() {}

  ngOnInit() {}

  adicionar() {
    this.listaTarefas.push(this.novaTarefa);
    console.log(this.listaTarefas);
  }
}
