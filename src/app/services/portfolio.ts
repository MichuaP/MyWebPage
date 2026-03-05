import { Injectable } from '@angular/core';

export interface EducationInterface {
  icon: string;
  title: string;
  subtitle: string;
}

export interface ExperienceInterface {
  title: string;
  company: string;
  period: string;
  description: string;
  isCurrent: boolean;
  icon: string;
}

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  longDescription: string[]; 
  image: string;
  imageAlt: string;
  technologies: string[];
  link: string;
  deploymentLink: string;
  achievements: { icon: string; title: string; desc: string }[];
  gallery: string[];
  timeline: string;
  role: string;
  client: string;
}

export interface SocialInterface {
  linkedin: string;
  github: string;
  gitlab: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getEducation(): EducationInterface[] {
    return [
      {
        icon: 'school',
        title: 'Computer Systems Engineer',
        subtitle: 'Universidad Autónoma de Aguascalientes • 2025'
      },
      {
        icon: 'language',
        title: 'English B2',
        subtitle: 'ESLI Institute • 2022'
      },
      {
        icon: 'cloud',
        title: 'AWS Academy Graduate',
        subtitle: 'Cloud Security Foundations - Training Badge'
      }
    ];
  }

  getExperience(): ExperienceInterface[] {
    return [
      {
        title: 'Test Automation Engineer',
        company: 'EPAM Systems - Internship',
        period: 'Jan 2025 - Feb 2026',
        description: 'Designed and implemented web and API test automation frameworks using tools like TestNG, JUnit, Selenium and RestAssured. All test framework architecture implemented in delivery pipeline using Jenkins Jobs.',
        isCurrent: true,
        icon: 'check'
      },
      {
        title: 'Full-Stack Developer / System & Database Architect',
        company: 'Surveillance Department - Universidad Autónoma de Aguascalientes',
        period: 'Aug 2024 - Aug 2025',
        description: 'Designed the system architecture and its components (Front-End and API) and developed and implemented web-based system modules and their logic.',
        isCurrent: false,
        icon: 'history'
      }
    ];
  }

  getProjects(): ProjectInterface[] {
    return [
      {
        id: 'googleTAF',
        title: 'Web Test Automation Framework -  Google instance calculator',
        description: 'Designed and implemented an automation suite for the Google Cloud Pricing Calculator using Page Object Model as the test automation design pattern.',
        longDescription: [
          'A custom Selenium & Java automation suite for the Google Cloud Pricing Calculator.',
          'Features a modular POM/BDD architecture, Abstract Page encapsulation for stability, and automated failure-state analytics for high-performance QA delivery at EPAM Systems'
        ] ,
        image: 'assets/projects/seleniumTAF1.png',
        imageAlt: 'cloud instance calculator page',
        technologies: ['Java', 'Selenium WD', 'Maven', 'Jenkins', 'TestNG','Cucumber'],
        link: 'https://gitlab.com/paulacruz-group/hardcoretask',
        deploymentLink: '',
        achievements: [
          { icon: 'architecture', title: 'Scalable architecture', desc: 'Implemented an Entity-based testing model to represent business data.' },
          { icon: 'clear_all', title: 'Parameterized tests', desc: 'featuring Maven profiles and TestNG suites.' },
          { icon: 'auto_graph', title: 'Real time reporting', desc: 'Implemented ReportPortal for centralized failure analysis and trend tracking.' },
          { icon: 'hub', title: 'CI/CD Pipeline', desc: 'Implemented end-to-end execution through Jenkins pipelines. ' },
          { icon: 'feedback', title: 'Failure Handling', desc: 'Implemented automated failure-state screenshots. ' }
        ],
        gallery: [
          '',
          ''
        ],
        timeline: 'Sep 2025 - Feb 2026',
        role: 'Test Automation Engineer',
        client: 'EPAM Systems'
      },
      {
        id: 'jsonplaceTAF',
        title: 'API Test automation Framework - JSON Placeholder',
        description: 'Developed an automation suite to validate the JSONPlaceholder REST API, targeting the /users endpoint.',
        longDescription: [
          'A high-performance API Test Automation suite for JSONPlaceholder using Java and REST Assured.',
          'It implements a Service Object Model (SOM) with POJO serialization for strict data validation, providing a scalable and maintainable solution for full CRUD regression testing and data integrity verification'
        ] ,
        image: 'assets/projects/restTAF1.png',
        imageAlt: 'json placeholder website',
        technologies: ['Java', 'REST Assured', 'POJO', 'API Testing', 'Jenkins'],
        link: 'https://gitlab.com/paulacruz-group/apiautomationtask',
        deploymentLink: '',
        achievements: [
          { icon: 'architecture', title: 'Arquitectura Escalable', desc: 'Capas Abstract Page para centralizar la lógica de negocio.' },
          { icon: 'speed', title: 'Ejecución Eficiente', desc: 'Uso de perfiles Maven para entornos de prueba paralelos.' },
          { icon: 'auto_graph', title: 'Reportes en Tiempo Real', desc: 'Integración nativa con ReportPortal.io para analíticas de ejecución.' },
          { icon: 'hub', title: 'CI/CD Pipeline', desc: 'Configuración de jobs en Jenkins para ejecución desatendida.' }
        ],
        gallery: [
          '',
          ''
        ],
        timeline: 'Sep 2025 - Feb 2026',
        role: 'Test Automation Engineer',
        client: ''
      },
      {
        id: 'vitalCare',
        title: 'Vital Care',
        description: 'Hospital website developed with Angular and Firebase.',
        longDescription: ['',''] ,
        image: 'assets/projects/vital.png', 
        imageAlt: 'vital care home page',
        technologies: ['Angular', 'Bootstrap', 'Firebase'],
        link: 'https://github.com/MichuaP/Miniproyecto2_TecWeb',
        deploymentLink: 'https://michuap.github.io/Miniproyecto2_TecWeb/inicio',
        achievements: [
          { icon: 'architecture', title: 'Arquitectura Escalable', desc: 'Capas Abstract Page para centralizar la lógica de negocio.' },
          { icon: 'speed', title: 'Ejecución Eficiente', desc: 'Uso de perfiles Maven para entornos de prueba paralelos.' },
          { icon: 'auto_graph', title: 'Reportes en Tiempo Real', desc: 'Integración nativa con ReportPortal.io para analíticas de ejecución.' },
          { icon: 'hub', title: 'CI/CD Pipeline', desc: 'Configuración de jobs en Jenkins para ejecución desatendida.' }
        ],
        gallery: [
          '',
          ''
        ],
        timeline: 'Apr 2024 - Jun 2024',
        role: 'Full-Stack Engineer',
        client: 'Academic project'
      },
      {
        id: 'cantuCompiler',
        title: 'Cantu Compilot',
        description: 'Complete compiler and IDE built using python.',
        longDescription: ['',''] ,
        image: 'assets/projects/cantu.png', 
        imageAlt: 'cantu IDE',
        technologies: ['Python', 'Tkinter', 'Scrum'],
        link: '#',
        deploymentLink: '#',
        achievements: [
          { icon: 'architecture', title: 'Arquitectura Escalable', desc: 'Capas Abstract Page para centralizar la lógica de negocio.' },
          { icon: 'speed', title: 'Ejecución Eficiente', desc: 'Uso de perfiles Maven para entornos de prueba paralelos.' },
          { icon: 'auto_graph', title: 'Reportes en Tiempo Real', desc: 'Integración nativa con ReportPortal.io para analíticas de ejecución.' },
          { icon: 'hub', title: 'CI/CD Pipeline', desc: 'Configuración de jobs en Jenkins para ejecución desatendida.' }
        ],
        gallery: [
          '',
          ''
        ],
        timeline: 'Feb 2025 - Dic 2025',
        role: 'Software Developer',
        client: 'Academic Project'
      },
      {
        id: 'javaClash',
        title: 'Clash Royale - Imitation',
        description: 'Java-based application developed from the ground up to replicate the core gameplay of the popular game Clash Royale.',
        longDescription: [
          '',
          ''
        ] ,
        image: 'assets/projects/homePage.png', 
        imageAlt: 'intro page',
        technologies: ['Java', 'Sprites'],
        link: 'https://github.com/MichuaP/Clash-Royale',
        deploymentLink: '#',
        achievements: [
          { icon: 'architecture', title: 'Arquitectura Escalable', desc: 'Capas Abstract Page para centralizar la lógica de negocio.' },
          { icon: 'speed', title: 'Ejecución Eficiente', desc: 'Uso de perfiles Maven para entornos de prueba paralelos.' },
          { icon: 'auto_graph', title: 'Reportes en Tiempo Real', desc: 'Integración nativa con ReportPortal.io para analíticas de ejecución.' },
          { icon: 'hub', title: 'CI/CD Pipeline', desc: 'Configuración de jobs en Jenkins para ejecución desatendida.' }
        ],
        gallery: [
          '',
          ''
        ],
        timeline: '2023',
        role: 'Software Developer',
        client: 'Academic Project'
      }
    ];
  }

  getProjectById(id: string): ProjectInterface | undefined {
    return this.getProjects().find(p => p.id === id);
  }

  getContact(): SocialInterface {
    return {
      linkedin: 'https://www.linkedin.com/in/michelle-cruz-a5255a323',
      github: 'https://github.com/MichuaP',
      gitlab: 'https://gitlab.com/paulacruz-group'
    }
  }

}