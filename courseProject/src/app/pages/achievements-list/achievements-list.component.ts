import { Component, Input, OnInit } from '@angular/core';
import { AchievementService } from 'src/app/api/achievement.service';
import { Achievement } from 'src/app/models/Achievement';

@Component({
  selector: 'app-achievements-list',
  templateUrl: './achievements-list.component.html',
  styleUrls: ['./achievements-list.component.css']
})
export class AchievementsListComponent implements OnInit {

  @Input()
  achievementsList: Achievement[];

  @Input()
  chosedAchievementsList: Achievement[];
  optionsSelect: Array<any>;

  constructor(
  ) { 
  }

  ngOnInit(): void {
  }

}
