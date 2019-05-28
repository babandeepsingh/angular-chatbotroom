import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainService} from '../service/main.service';
import { ChatComponent } from '../chat/chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChatComponent
  ],
  exports: [
    ChatComponent
  ],
  providers:[
    MainService
  ]
})
export class MainModule { }