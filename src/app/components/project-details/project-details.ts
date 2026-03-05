import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService, ProjectInterface } from '../../services/portfolio';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-details',
  imports: [RouterModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private portfolioService = inject(PortfolioService);
  
  project: ProjectInterface | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.project = this.portfolioService.getProjectById(id);
      }
    });
  }

}
