import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Components/layouts/admin-layout/admin-layout.component';
import { TeacherLayoutComponent } from './Components/layouts/teacher-layout/teacher-layout.component';
import { NavbarComponent } from './Components/shared/navbar/navbar.component';
import { SidebarComponent } from './Components/shared/sidebar/sidebar.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'teacher',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./Components/Moduls/shared-component.module').then(m => m.SharedComponentModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
