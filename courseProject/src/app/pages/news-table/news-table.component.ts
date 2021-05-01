import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/api/news.service';
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

  constructor(
    private readonly newsService: NewsService,
  ) {
    this.newsArray = this.newsService.GetNews();
   }

  ngOnInit(): void {
  }

}
