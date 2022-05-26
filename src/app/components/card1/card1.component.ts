import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {
  @Input() active?: boolean = false;
  @Input() title: string = '';
  @Input() subt: string = '';
  @Input() thumbnails: string[] = []
  @Input() bg = '';
  @Input() color = '$col-primary';


  constructor() { }

  ngOnInit(): void {
    console.log(this.bg);
    
  }

}
