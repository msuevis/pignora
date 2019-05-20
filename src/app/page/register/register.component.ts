import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User;
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';


  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) {  }

  ngOnInit() {

    this.registerForm =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get field() { return this.registerForm.controls; }


  onSubmit() {
     this.submitted = true;

     if ( this.registerForm.invalid) {
       return ;
     }
     this.loading = true;
     this.user = this.registerForm.value;
     this.usersService.createUser(this.user).pipe(first())
     .subscribe(
         data => {
             this.router.navigate([this.returnUrl]);
         },
         error => {
             this.error = error;
             this.loading = false;
         });
  }

}
