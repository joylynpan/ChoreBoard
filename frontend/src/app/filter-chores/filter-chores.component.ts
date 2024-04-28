import { Component, OnInit } from '@angular/core';
import { Chore } from '../chore';
import { ChoreService } from '../chore.service';

@Component({
  selector: 'app-filter-chores',
  templateUrl: './filter-chores.component.html',
  styleUrl: './filter-chores.component.css'
})
export class FilterChoresComponent implements OnInit{

  resident: string = '';
  dayDue: string = '';
  timeLimit: string = '';
  filteredChores: Chore[] = [];
  avgTime: number = 0;
  avgChores: number = 0;

  constructor(private choreService: ChoreService) { }

  ngOnInit(): void {
    this.filterChores();
  }

  onSubmit() {
    this.filterChores();
  }

  filterChores() {
    this.choreService.getFilteredChores(this.resident, this.dayDue, this.timeLimit)
      .subscribe((response: any) => {
        console.log(response);
        this.filteredChores = response['chores'] as Chore[];
        this.avgTime = response['avgTime'] as number;
        this.avgChores = response['avgChores'] as number;
      });
  }
  
}
