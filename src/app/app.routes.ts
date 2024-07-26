import { Routes } from '@angular/router';
import { WelcomeComponent } from './src/components/welcome/welcome.component';
import { LoginComponent } from './src/components/auth/login/login.component';
import { RegistroComponent } from './src/components/auth/registro/registro.component';

export const routes: Routes = [
    {
        path: '', component: WelcomeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'registro', component: RegistroComponent
    }
];
