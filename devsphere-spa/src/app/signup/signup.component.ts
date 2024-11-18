import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule,BrowserModule,MatDialogModule,CommonModule,ReactiveFormsModule,MatDialogModule,MatInputModule,MatButtonModule,MatFormFieldModule]
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<SignupComponent>) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Perform signup logic here
      localStorage.setItem('isLoggedIn', 'true');
      this.dialogRef.close();
    }
  }
}