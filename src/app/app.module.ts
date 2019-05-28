import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainService } from './service/main.service';
import { ChatComponent } from './chat/chat/chat.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChatComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MainService]
})
export class AppModule { }
