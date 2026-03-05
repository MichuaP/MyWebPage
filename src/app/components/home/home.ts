import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Experience } from '../experience/experience';
import { Projects } from '../projects/projects';
import { Education } from '../education/education';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Experience, Projects, Education, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
