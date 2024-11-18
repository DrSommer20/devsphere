import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SnippetsComponent } from './snippets/snippets.component';
import { ProjectsComponent } from './projects/projects.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { ForumComponent } from './forum/forum.component';
import { ResourcesComponent } from './resources/resources.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthGuard } from './app.auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'snippets', component: SnippetsComponent, canActivate: [AuthGuard] },
      { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
      { path: 'algorithms', component: AlgorithmsComponent, canActivate: [AuthGuard] },
      { path: 'forum', component: ForumComponent, canActivate: [AuthGuard] },
      { path: 'resources', component: ResourcesComponent, canActivate: [AuthGuard] },
      { path: '', component: LandingPageComponent }
    ]
  }
];

