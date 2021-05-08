import { Component, Input, OnInit } from '@angular/core';
import { Reward } from 'src/app/models/Reward';

@Component({
  selector: 'app-achievements-list',
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.css', '../../styles.css']
})
export class AchievementsListComponent implements OnInit {

  @Input()
  achievementsList: Reward[];

  @Input()
  chosedAchievementsList: Reward[];
  optionsSelect: Array<any>;

  constructor(
  ) { 
  }

  ngOnInit(): void {
  }

}
