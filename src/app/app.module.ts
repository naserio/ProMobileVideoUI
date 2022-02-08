import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProMobileAPIClient } from './Services/ProMobileAPIClient';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { UserDashboardComponent } from './UserDashboard/UserDashboard.component';
import { VideoChatService } from './Services/videochat.service';

@NgModule({
  declarations: [
    AppComponent,
      AdminDashboardComponent,
      UserDashboardComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    HttpClientModule,

  ],
  providers: [{provide: ProMobileAPIClient.API_BASE_URL, useValue: environment.API_BASE_URL},
    VideoChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
