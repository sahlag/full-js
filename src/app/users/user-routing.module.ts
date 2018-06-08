// component angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

// component perso
import { UserRegisterComponent } from './user-register/user-register.component';


const routesUsers: Routes = [
{path: 'inscription', component: UserRegisterComponent},
];
@NgModule({
  imports: [ RouterModule.forChild(routesUsers)],
  exports: [ RouterModule]
})
export class UserRoutingModule { }
