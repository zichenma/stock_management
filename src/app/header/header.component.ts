import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../shared/web-socket.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'SMS';
  messageCount = 0;
  socketUrl = 'ws://localhost:9091';

  constructor(public socketService: WebSocketService) {}

  ngOnInit() {
    this.socketService.createObservableSocket(this.socketUrl)
    .pipe(
      map(event => JSON.parse(event))
    ).subscribe(
      event => this.messageCount = event.messageCount
    );
  }
}
