import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/News';
import { NewsItemComponent } from 'src/app/pages/news-item/news-item.component';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css']
})
export class NewsTableComponent implements OnInit {

  newsArray: News[];
  newsComponent: NewsItemComponent = new NewsItemComponent();

  constructor() {
    let foo: News = 
    {
      id: 13,
      author: 'Автор',
      content: 'Контент новости',
      header: 'Заголовок'
    }
    this.newsArray = [foo,foo,foo,foo,foo,foo,foo,foo,foo];


   }

  ngOnInit(): void {
  }

}
