import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input()
  tags: Tag[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
