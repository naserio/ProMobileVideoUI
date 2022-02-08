import { connect, ConnectOptions, LocalTrack, Room } from 'twilio-video';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject , Observable } from 'rxjs';
import { ProMobileAPIClient } from './ProMobileAPIClient';
import { finalize } from 'rxjs/operators';
//import { AuthToken } from '../Models/TokenModel';

interface AuthToken {
    token: string;
}

export interface NamedRoom {
    id: string;
    name: string;
    maxParticipants?: number;
    participantCount: number;
}

export type Rooms = NamedRoom[];

@Injectable()
export class VideoChatService implements OnDestroy {
    $roomsUpdated: Observable<boolean>;
    authToken :string;

    private roomBroadcast = new ReplaySubject<boolean>();

    constructor(private readonly http: HttpClient,
      private proMobileVideoClient : ProMobileAPIClient.VideoClient,
      ) {
        this.$roomsUpdated = this.roomBroadcast.asObservable();
    }

    ngOnDestroy(): void {
        if (this.roomBroadcast) {
            this.roomBroadcast.unsubscribe();
        }
    }


    async getJWTToken()
    {
      var token$ = this.proMobileVideoClient.token();
      token$.subscribe(
        (results) => {
          return results;
        },
        (error: Error) => {
          console.log(error)
          });


      () => {};;
      //var roomToken = token.toString();
     //return roomToken
    }
    connectToRoom(roomID:string)
    {
      var token$ = this.proMobileVideoClient.token();
      token$.subscribe(
        (results) => {
          connect(results, {
            name: roomID,
            audio: true,
            maxAudioBitrate: 16000, //For music remove this line
            video: { height: 720, frameRate: 24, width: 1280 }
        });



          });
  }
   
}
