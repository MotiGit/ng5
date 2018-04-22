import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  itemCount: number;

  constructor( private route: ActivatedRoute, private router: Router, private _data: DataService ) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res)
    this.itemCount = this.goals.length;
  this._data.changeGoal(this.goals);
  }

  sendMeHome(){
    this.router.navigate(['']);
  }

  removeItem(i){
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);
  }

}
