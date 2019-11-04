import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatComponent implements OnInit {
  public text;
  public speech;
  constructor(private _ser: ChatService, private router: Router) {
  }

  ngOnInit() {
    this._ser.currentSpeech.subscribe(
      speech => {
        this.speech = speech;
        if (this.speech == "creating a repository") {
          this.router.navigateByUrl('/create-repo');
        }
        else if (this.speech == "deleting a repository") {
          this.router.navigateByUrl('/delete-repo');
        }
        else if (this.speech == "showing all repositories") {
          this.router.navigateByUrl('/all-repo');
        }
        else if (this.speech == "showing your informations") {
          this.router.navigateByUrl('/my-info');
        }
        else if (this.speech == "showing favourite repositories") {
          this.router.navigateByUrl('/fav-repo');
        }
      }
    )
  }
  userData() {
    this._ser.talk(this.text);
  }

}
