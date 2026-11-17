import { Component, inject } from '@angular/core';
import { Session } from '../core/session';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
})
export class Login {
  protected readonly session = inject(Session);
}
