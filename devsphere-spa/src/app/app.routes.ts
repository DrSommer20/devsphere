import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { ProjectsComponent } from './projects/projects.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { ForumComponent } from './forum/forum.component';
import { ResourcesComponent } from './resources/resources.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'snippets', component: SnippetsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'algorithms', component: AlgorithmsComponent },
      { path: 'forum', component: ForumComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];

