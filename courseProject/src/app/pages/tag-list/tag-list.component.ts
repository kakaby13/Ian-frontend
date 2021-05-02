import { Component, Input, OnInit } from '@angular/core';
import { TagService } from 'src/app/api/tag.service';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  @Input()
  tags: Tag[];

  @Input()
  startupId: number;
  
  public newTag = "";

  constructor(
    private readonly tagService: TagService,
  ) { }

  ngOnInit(): void {
  }

  public addTag() {
    this.tagService.SaveTagIfNotExist(this.newTag, this.startupId);
    let freshTag: Tag = new Tag();
    freshTag.text = this.newTag;
    this.tags.push(freshTag);

    this.newTag = "";
  }

}
