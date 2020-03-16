import { Component, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-signin',
  template: `<ion-input placeholder="Username"></ion-input>
    <br>
    <ion-input placeholder="Password"></ion-input>`
})
export class SignInComponent {
  @Input() user: User;
}

@Component({
  selector: 'app-signup',
  template: `sign up`
})
export class SignUpComponent {
    @Input() user: User;
  }

  @Component({
    selector: 'app-about',
    template: `about`
  })
  export class AboutComponent {
      @Input() user: User;
    }
    @Component({
      selector: 'app-default',
      template: `default`
    })
    export class DefaultComponent {
        @Input() user: User;
      }
 
export const homeSwitchComponents =
  [ AboutComponent, SignInComponent, SignUpComponent, DefaultComponent ];


