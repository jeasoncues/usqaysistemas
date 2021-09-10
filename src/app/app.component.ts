import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  subscriptions = new Subscription();

  constructor(private router : Router) {
    this.subscriptions.add(
      router.events.subscribe(e => {
        if(e instanceof NavigationEnd){
          window.scroll(0, 0);
        }
      })
    )
  }

}
