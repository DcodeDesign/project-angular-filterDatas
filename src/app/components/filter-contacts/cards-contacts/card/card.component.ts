import {Component, Input, OnInit} from '@angular/core';
import {IContact} from '../../IContact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() contact: IContact;
  constructor() { }

  ngOnInit(): void {
  }

}
