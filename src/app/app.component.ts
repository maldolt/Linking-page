import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Got Game';

  challenge: string = 'Cup Flip'
  username: string = 'Brando'
  videoSource: string = 'http://54.89.2.39/storage/challenge_videos/brando_1.mp4'
  // You can add a method to handle the download action
  downloadApp() {
    // Add your download logic here
    console.log('Downloading the app...');
  }
}