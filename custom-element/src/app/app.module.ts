import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from "@angular/elements";
import { PollsComponent } from './polls/polls.component';


@NgModule({
  declarations: [
    PollsComponent
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [],
  entryComponents:[
    PollsComponent
  ]
})
export class AppModule { 
  /**
   *
   */
  constructor(private injector:Injector) {
    
  }

  ngDoBootstrap() {
    const el  = createCustomElement(PollsComponent, { injector: this.injector });
    customElements.define('user-polls', el);
  }
}
