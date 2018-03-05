import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';

const appRoutes: Routes = [
    {
      path: 'books',
      component: BookComponent,
      data: { title: 'Book List' }
    },
    {
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login' }
    },
    {
      path: 'signup',
      component: SignupComponent,
      data: { title: 'Sign Up' }
    },
    { path: '',
      redirectTo: '/books',
      pathMatch: 'full'
    }
  ];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(appRoutes, {enableTracing : true})],
  })
  export class AppRoutingModule { }