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
  ClientAccessToken:'855005f9b71a4e4995d2137c657f56f0',
  DeveloperAccessToken: '4417f31edd5b46d788f3edae9cf52064'
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