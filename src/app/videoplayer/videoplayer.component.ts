import { Component, Input } from '@angular/core';

@Component({
  selector: 'gg-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent {
  @Input() challenge: string = '';
  @Input() username: string = '';
  @Input() videoSource: string = ''; 

  constructor() { }
}
