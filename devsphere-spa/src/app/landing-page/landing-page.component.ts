import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  constructor(private dialog: MatDialog) {}

  openLogin() {
    this.dialog.open(LoginComponent);
  }

  openSignup() {
    this.dialog.open(SignupComponent);
  }
}
