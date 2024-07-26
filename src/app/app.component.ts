import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';
import { LoginComponent } from './src/components/auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = '01-inicio';
}
