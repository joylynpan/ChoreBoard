import { Component, OnInit } from '@angular/core';
import { ChoreService } from '../chore.service';
import { Chore } from '../chore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-chore',
  templateUrl: './update-chore.component.html',
  styleUrl: './update-chore.component.css'
})
export class UpdateChoreComponent implements OnInit {

  id: number = 0;
  chore: Chore = new Chore();
  constructor(private choreService: ChoreService, 
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.choreService.getChoreById(this.id).subscribe(data => {
      this.chore = data;
    }, error => console.log(error));
    
  }

  goToChoreList() {
    this.router.navigate(['/chores']);
  }

  onSubmit(){
    this.choreService.updateChore(this.id, this.chore).subscribe( data =>{
      this.goToChoreList();
    }, error => console.log(error));
  }

}
