import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'Sample Project 1',
      shortDescription: 'This is a short description for project 1.'
    },
    {
      id: 2,
      name: 'Sample Project 2',
      shortDescription: 'This is a short description for project 2.'
    }
  ];
}