import { Injectable } from '@angular/core';
import {ApiAiClient} from 'api-ai-javascript';
import { Obervable } from 'rxjs/Obervable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
export class Message{
  constructor(public content:string, public sendBy:string){

  }
}
@Injectable()
export class MainService {
dialogFlow={
  ClientAccessToken:'c543defd08c14cb9bb27b4b2c782b39e',
  DeveloperAccessToken: '2729ce8c55774d10914bc7ada1e6628d'
};
  readonly token = this.dialogFlow.ClientAccessToken;
  readonly client = new ApiAiClient({accessToken: this.token});
  private conversation = new BehaviorSubject<Message[]>([]);
  castConversation = this.conversation.asObservable();
  constructor() { }
  talk(){
    // this.client.textRequest('who are you?').then(res=>{
    //   console.log(res);
    // });
    
  }
  //add message
  update(msg : Message){
      this.conversation.next([msg]);
    }
    //send and receive message from dialog dialogFlow
    converse(msg: string){
      const userMessage = new Message(msg,'user');
      this.update(userMessage);
      console.log(msg);
      return this.client.textRequest(msg).then(res=>{
        console.log(res);
        const speech = res.result.fulfillment.speech;
        const botMessage = new Message(speech,'bot')
        this.update(botMessage);
      })
    }
}