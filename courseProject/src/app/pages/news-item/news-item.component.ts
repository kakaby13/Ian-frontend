import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/News';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css', '../../styles.css']
})
export class NewsItemComponent implements OnInit {

  @Input() news: News;

  constructor(
    private router: Router,
  ) {
   }

  ngOnInit(): void {
  }

  goToStartup() {
    this.router.navigate(['/startup', this.news.startupId])
  }

}
