import { Component } from '@angular/core';
import { ShellbarUser, ShellbarUserMenu } from '@fundamental-ngx/core/shellbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fundamental-app';
  user: ShellbarUser = {
    fullName: 'Daniel Richert',
    colorAccent: 6,
  };

  userMenu: ShellbarUserMenu[] = [
    { text: 'Settings', callback: this.settingsCallback },
    { text: 'Sign Out', callback: this.signOutCallback },
  ];

  settingsCallback(): void {
    alert('Settings Clicked');
  }

  signOutCallback(): void {
    alert('Sign Out Clicked');
  }
}
