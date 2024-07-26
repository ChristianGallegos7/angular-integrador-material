import { Routes } from '@angular/router';
import { WelcomeComponent } from './src/components/welcome/welcome.component';

export const routes: Routes = [
    {
        path: '', component: WelcomeComponent
    },
    {
        path: 'login', loadComponent: () => import('./src/components/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'registro', loadComponent: () => import('./src/components/auth/registro/registro.component').then(m => m.RegistroComponent)
    }
];
