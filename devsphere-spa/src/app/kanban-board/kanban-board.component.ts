import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    NgFor
  ]
})
export class KanbanBoardComponent implements OnInit {
  @Input() projectId!: number;
  
  columns: { name: string, tasks: { title: string }[] }[] = [];


  ngOnInit() {
    this.loadColumns();
  }

  loadColumns() {
    // Sample data for testing
    this.columns = [
      {
        name: 'To Do',
        tasks: [
          { title: 'Task 1' },
          { title: 'Task 2' }
        ]
      },
      {
        name: 'In Progress',
        tasks: [
          { title: 'Task 3' }
        ]
      },
      {
        name: 'Done',
        tasks: [
          { title: 'Task 4' }
        ]
      }
    ];
  }
}