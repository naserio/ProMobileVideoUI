import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { connect, ConnectOptions, createLocalAudioTrack, LocalTrack, Room } from 'twilio-video';
import { Rooms } from '../Models/RoomModel';
import { AuthToken } from '../Models/TokenModel';
import { ProMobileAPIClient } from '../Services/ProMobileAPIClient';

@Component({
  selector: 'app-AdminDashboard',
  templateUrl: './AdminDashboard.component.html',
  styleUrls: ['./AdminDashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  token : AuthToken = new AuthToken();
  constructor(
    private proMobileVideoClient : ProMobileAPIClient.VideoClient,

    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }
  roomForm = this.fb.group({
    roomName: ['', ''],

});
createOrJoinForm = this.fb.group({
  roomName: ['', ''],

});
 async getJWTToken()
  {
    var token = this.proMobileVideoClient.token().toPromise();
    var roomToken = token.toString();
   return roomToken
  }

createRoom() {
    let inputModel = new ProMobileAPIClient.RoomModel();
    inputModel.roomName = this.roomForm.get("roomName")?.value;
    let createRomm$ = this.proMobileVideoClient.createRoom(inputModel);
    createRomm$.pipe(
      finalize(() => {

      })
    )
    .subscribe(
      (x) => {
        console.log(x)
      },
      (error: Error) => {
        console.log(error)
        });


    () => {};
}

}


