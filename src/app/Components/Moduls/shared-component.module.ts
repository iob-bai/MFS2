import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NgMaterialModule } from './ng-material.module';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { TeacherLayoutComponent } from '../layouts/teacher-layout/teacher-layout.component';

import { StudentLayoutComponent } from '../layouts/student-layout/student-layout.component';
import { RouterModule } from '@angular/router';
import { CustumRoutingModule } from './custum-routing.module';
import { UsersLayoutComponent } from '../layouts/users-layout/users-layout.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    TeacherLayoutComponent,
    StudentLayoutComponent,
    UsersLayoutComponent
   
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    RouterModule.forChild(CustumRoutingModule)
  ],
  exports :[
    CommonModule,
    NgMaterialModule,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    StudentLayoutComponent,
    UsersLayoutComponent
    
   
  ]
})
export class SharedComponentModule { }
