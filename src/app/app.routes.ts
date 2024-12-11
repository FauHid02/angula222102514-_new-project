import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';




export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "admin", component: AdminComponent },
    { path: "dashboard2", component: Dashboard2Component },
    { path: "dashboard3", component: Dashboard3Component },
    { path: "mahasiswa", component: MahasiswaComponent }



];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes { }

export { LoginComponent };

