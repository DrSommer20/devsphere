import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { KanbanBoardComponent } from "../kanban-board/kanban-board.component";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  standalone: true,
  imports: [MatDialogModule, KanbanBoardComponent]
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.project = data.project || {
      id: 1,
      name: 'Sample Project',
      description: 'This is a sample project description.'
    };
  }

  ngOnInit() {
    // Additional initialization if needed
  }
}