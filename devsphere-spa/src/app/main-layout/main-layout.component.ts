import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ]
})
export class MainLayoutComponent implements OnInit {
  isLoggedIn = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    });
  }

  openSignup() {
    const dialogRef = this.dialog.open(SignupComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    });
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}
