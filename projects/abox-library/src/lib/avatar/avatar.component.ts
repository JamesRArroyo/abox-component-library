import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'abox-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() image: string;
  @Input() active: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
