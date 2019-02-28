import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(public router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
        if (event.url === '/dashboard') {
          this.pageTitle = 'This is home page';
          this.pageDesc = '';
        } else if (event.url.startsWith('/stock')) {
          this.pageTitle = 'Stock Information Management.';
          this.pageDesc = 'Manage and customize your stock information.';
        }
    });
  }

  ngOnInit() {
  }

}
