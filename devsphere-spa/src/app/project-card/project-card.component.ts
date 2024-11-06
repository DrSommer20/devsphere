import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { MatCardModule, MatCardAvatar } from '@angular/material/card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatCardAvatar]
})
export class ProjectCardComponent {
  @Input() project: any;

  constructor(private dialog: MatDialog) {}

  goToDetails() {
    this.dialog.open(ProjectDetailsComponent, {
      data: { project: this.project }
    });
  }
}