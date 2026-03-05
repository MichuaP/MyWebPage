import { Component, inject } from '@angular/core';
import {PortfolioService, ExperienceInterface } from '../../services/portfolio';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  private portfolioService = inject(PortfolioService);
  
  experienceList: ExperienceInterface[] = this.portfolioService.getExperience();
}
