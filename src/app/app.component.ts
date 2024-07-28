import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';
import { LoginComponent } from './src/components/auth/login/login.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, LoginComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = '01-inicio';
  showToolbar: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Aquí puedes ajustar las rutas donde quieres ocultar el toolbar
        this.showToolbar = !['/jobs', '/another-route', '/dashboard', '/dashboard/jobs'].includes(event.urlAfterRedirects);
      });
  }
}
