import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { VideoChatService } from '../Services/videochat.service';

@Component({
  selector: 'app-UserDashboard',
  templateUrl: './UserDashboard.component.html',
  styleUrls: ['./UserDashboard.component.css']
})
export class UserDashboardComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private router: Router,
    private readonly videoChatService: VideoChatService
    ) { }

  ngOnInit() {
  }
  joinRoomForm = this.fb.group({
    roomName: ['', ''],

});
connectToRoom()
{
  let room = this.joinRoomForm.get("roomName")?.value;
  this.videoChatService.connectToRoom(room);


}
}
