import { Routes } from '@angular/router';
import { WelcomeComponent } from './src/components/welcome/welcome.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardWelcomeComponent } from './layout/dashboard-welcome/dashboard-welcome.component';

export const routes: Routes = [
    {
        path: '', component: WelcomeComponent
    },
    {
        path: 'login', loadComponent: () => import('./src/components/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'registro', loadComponent: () => import('./src/components/auth/registro/registro.component').then(m => m.RegistroComponent)
    },
    {
        path: 'dashboard',
        component: MainLayoutComponent,
        children: [
            {
                path: '', component: DashboardWelcomeComponent
            },
            {
                path: 'jobs',
                loadComponent: () => import('./src/components/job-list/job-list.component').then(m => m.JobListComponent)
            },
            // Agrega aquí otras rutas hijas si es necesario
        ]
    }
];
