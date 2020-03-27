import { Component, OnInit, ViewChild, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements AfterViewInit {
  @ViewChild('messageWrapper', { read: ElementRef}) messageWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandedHeight") expandHeight: string = "150px";

  constructor(public renderer: Renderer2) { }

ngAfterViewInit() {
  this.renderer.setStyle(this.messageWrapper.nativeElement, "max-height", this.expandHeight);
}
}
