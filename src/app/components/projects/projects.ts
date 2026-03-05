import { Component, inject } from '@angular/core';
import { PortfolioService,ProjectInterface } from '../../services/portfolio';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [RouterModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private portfolioService = inject(PortfolioService);
  
  projectList: ProjectInterface[] = this.portfolioService.getProjects();
}
