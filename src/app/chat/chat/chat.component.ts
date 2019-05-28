import { Component, OnInit } from '@angular/core';
import {MainService, Message} from '../../service/main.service';
import { Obervable } from 'rxjs/Obervable';
import   'rxjs/add/operator/scan';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages:Obervable<Message[]>;
  formValue:string
  constructor(private chat: MainService ) { }

  ngOnInit() {
    this.chat.talk();
    // this.messages = this.chat.conversation.asObservable.scan((acc,val)=>{
    //   acc.concat(val);
    // })
    this.messages = this.chat.castConversation.scan((acc,val)=>acc.concat(val))
  }
  sendMessage(){
    console.log(this.formValue);
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

}