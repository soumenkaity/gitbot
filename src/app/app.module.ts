import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubService } from './github.service';
import { CreateRepositoryService } from './create-repository.service';
import {  AllRepositoryService} from './all-repository.service';
import {  DeleteRepositoryService} from './delete-repository.service';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { HttpClientModule } from '@angular/common/http';
import { AllRepoComponent } from './all-repo/all-repo.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { DeleteRepoComponent } from './delete-repo/delete-repo.component';
import { FormsModule } from '@angular/forms';
import { MyMainComponent } from './my-main/my-main.component';
import { ChatComponent } from './chat/chat-dialog/chat-dialog.component';
import { ChatService } from './chat/chat.service';
import { FavRepoComponent } from './fav-repo/fav-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    AllRepoComponent,
    CreateRepoComponent,
    DeleteRepoComponent,
    MyMainComponent,
    ChatComponent,
    FavRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GithubService, AllRepositoryService, CreateRepositoryService, DeleteRepositoryService
  , ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
