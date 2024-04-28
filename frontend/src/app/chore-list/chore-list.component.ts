import { Component, OnInit } from '@angular/core';
import { Chore } from '../chore';
import { ChoreService } from '../chore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrl: './chore-list.component.css'
})
export class ChoreListComponent implements OnInit {

  chores: Chore[] = [];

  constructor(private choreService: ChoreService, private router: Router) {}

  ngOnInit(): void {
    this.getChores();
  }

  private getChores() {
    this.choreService.getChoreList().subscribe(data => {
      this.chores = data;
    });
  }

  updateChore(id: number) {
    this.router.navigate(['update-chore', id]);
  }

  deleteChore(id: number) {
    this.choreService.deleteChore(id).subscribe( data => {
      console.log(data);
      this.getChores();
    })
  }
}
