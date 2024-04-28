import { Component, OnInit } from '@angular/core';
import { Chore } from '../chore';
import { ChoreService } from '../chore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-chore',
  templateUrl: './create-chore.component.html',
  styleUrl: './create-chore.component.css'
})
export class CreateChoreComponent implements OnInit {

  chore: Chore = new Chore();
  constructor(private choreService: ChoreService, private router: Router) {}

  ngOnInit(): void {
    
  }

  saveChore() {
    this.choreService.createChore(this.chore).subscribe( data => {
      console.log(data);
      this.goToChoreList();
    },
    error => console.log(error));
  }

  goToChoreList() {
    this.router.navigate(['/chores']);
  }

  onSubmit() {
    console.log(this.chore);
    this.saveChore();
  }
}
