import { Component , inject} from '@angular/core';
import { PortfolioService, EducationInterface} from '../../services/portfolio';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  private portfolioService = inject(PortfolioService);
  
  educationList: EducationInterface[] = this.portfolioService.getEducation();
}
