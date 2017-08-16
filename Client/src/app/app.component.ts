import { Component, OnInit } from '@angular/core';
import { SignalR, SignalRConnection, ISignalRConnection, IConnectionOptions } from 'ng2-signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  signalRConnection: ISignalRConnection;
  messages: string[] = [];
  message: string;

  constructor(private signalR: SignalR) {

  }
  ngOnInit() {
    setTimeout(() => {
      this.signalR.connect().then(conn => {
        this.signalRConnection = conn;
        // console.log('connected');

        // subscribed
        const onMessageReceived = this.signalRConnection.listenFor<string>('ReceiveMessage');
        onMessageReceived.subscribe(message => {
          // console.log(message);
          this.messages.push(message);
        });
      });
    }, 500);
  }
  sendMessage(message: string) {
    this.signalRConnection.invoke('SendMessage', message).then(() => {
      console.log('message sent!');
      this.message = '';
    });
  }
}
