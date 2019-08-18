import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@Component({
  selector: 'user-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss'],
  encapsulation:ViewEncapsulation.Native
})
export class PollsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
