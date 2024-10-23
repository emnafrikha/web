import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './project/signin/signin.component';
import { RegisterComponent } from './project/register/register.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes : Routes = [
    {path : "signin", component : SigninComponent},
    {path : "register", component : RegisterComponent},
    {path : "home", component : HomeComponent},
    {path : "about-us", component : AboutUsComponent},

]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }