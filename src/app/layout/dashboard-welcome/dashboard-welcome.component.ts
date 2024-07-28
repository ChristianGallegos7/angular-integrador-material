import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-welcome',
  standalone: true,
  template: `
    <div class="dashboard-welcome">
      <h2>Bienvenido al Dashboard</h2>
      <p>Aquí puedes gestionar tus trabajos y ver información importante.</p>
    </div>
  `,
  styles: [`
    .dashboard-welcome {
      text-align: center;
      margin-top: 20px;
    }
  `]
})
export class DashboardWelcomeComponent {}
