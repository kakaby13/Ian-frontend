import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/api/news.service';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.css', '../../styles.css']
})
export class NewsTableComponent implements OnInit {

  newsArray: News[];

  constructor(
    private readonly newsService: NewsService,
  ) {
    this.newsArray = this.newsService.GetNews();
   }

  ngOnInit(): void {
  }

}
