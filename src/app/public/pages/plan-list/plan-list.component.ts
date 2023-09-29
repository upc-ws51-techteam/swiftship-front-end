import { Component } from '@angular/core';
import { PlansService } from '../../../shared/services/plans.service';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent {
  plans: any;

  constructor(private plansService: PlansService) {}

  ngOnInit(): void {
    this.plansService.GetAll().subscribe((data: any) => {
      this.plans = data;
      console.log(this.plans);
    });
  }
}
