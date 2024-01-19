import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LeaderboardCommentsComponent } from './leaderboard-comments/leaderboard-comments.component';

@NgModule({
  declarations: [AppComponent, VideoplayerComponent, HeaderComponent, UserInfoComponent, LeaderboardCommentsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
