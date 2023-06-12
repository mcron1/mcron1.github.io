import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

// Informations du menu : INFORMATIONS ET A PROPOS

about2 = `3 ans d'expériences dans la programmation WEB .
Travail Cycle de vie du Développement ainsi qu'en méthode Agile .
Expérience avec Angular 2+ et une compréhension de Java, DB2, JIRA et Git`

about = "J'ai 25 ans et j'effectue une alternance au sein du service développement WEB de la société familiale Les Grands Chais de France pour préparer un Master Manager en architecture et applications logicielles des systèmes d'information au CESI de Lingolsheim."

 // Informations du menu : EXPERIENCES

 exprienceData: any = [
  {
    id: 1,
    company: 'Les Grands Chais de France',
    location: 'Strasbourg (France)',
    timeline: 'Oct 2021 - En cours (Fin Oct 2023)',
    role: 'Alternant - Analyste Programmeur WEB',
    work: `Environnement technique : XML, JAVA, SQL, DB2, ANGULAR, GIT, JIRA .
Basculement d'applications, anciennement sur LDAP, vers Active directory. Objectif visant à ne plus utiliser LDAP .
Coordination avec les métiers (RH, Commerce, Marketing etc...) dans l'accompagnement au changement des solutions mises en œuvre et atelier pour définir clairement les besoins et attentes.(procédures & aides) .
Mise en conformité des sites de contact de l'entreprise selon cahier des charges. Mises à jour cookies, ajout d'une section pour le DPO, validation de mail et autres besoins règlementaires.
`
  },
  {
    id: 2,
    company: 'Les Grands Chais de France',
    location: 'Strasbourg (France)',
    timeline: 'Oct 2020 - Octobre 2021',
    role: 'Alternant - Analyste Programmeur WEB',
    work: `Environnement technique : JAVA, SQL, ANGULAR, GIT .
Mise en place d'un catalogue pour intégrer des produits Grands Crus sélectionnés sur la place de marché VIVINO. Application disponible sur l'extranet LGCF et envoyé à VIVINO sous forme de CSV .
Collaboration avec les métiers sous forme d'atelier avec conception, KPI, ROI, démo, tests avec les métiers, suivis et maintenance avec les évolutions suggérées .
Ticketing d'incident spécifique au WEB avec ajout de fonctionnalités, gestion des incidents et demandes de service, procédures.
`
   },
  {
    id: 3,
    company: 'Les Grands Chais de France',
    location: 'Strasbourg (France)',
    timeline: 'Janvier 2017 - Octobre 2020',
    role: 'Service Desk',
    work: `Environnement technique : Easyvista, Windows/Mac, IP .
Gestion de l'Active Directory avec maintenance des ordinateurs et autres appareils comme des clients légers, matériel audio et tv pour salles de réunion, installation de doubles écrans, câblage réseau.
Ticketing pour du support applicatif avec la pratique fréquente de l'Allemand et l'Anglais pour la résolution d'incidents logiciels et matériels .
Migration Citrix (2300 utilisateurs) et mises en place de moyens matériels et applicatifs en vue du télétravail suite à l'épidémie de Covid 19
`
   },
]

 // Informations du menu : CERTIFICATIONS

 extraCircularInfo: any = [
  {
    id:1,
    title: 'Angular 2+ Développement appli. Web Novembre 2022 / IB - Groupe CEGOS',
    img: 'assets/images/cert cegos.png',
    url: 'https://www.ib-formation.fr/formations/developpement-web-et-mobilite/angular-2-plus-developpement-dapplications-web'
  },
  {
    id:2,
    title: 'ITIL Foundation Cert. en IT Service Management. Juillet 2019 / AXELOS',
    img: 'assets/images/cert axelos.png',
    url: 'https://www.axelos.com/certifications/itil-service-management'
  },
  {
    id:3,
    title: 'Optimiser le traitement des incidents Mai 2018 / Organisme : ORSYS Formation',
    img: 'assets/images/orys cert.png',
    url: 'https://www.orsys.fr/formation-hotline-optimiser-traitement-des-incidents.html'
  },
]

// Liste des projet du menu : PROJETS

  projects:any = [
    {
      id: 1,
      title: 'Catalogue pour export de Grands Crus vers la plateforme en ligne VIVINO',
      desc: ' Application disponible sur Extranet d`entreprise et listing des Grands Crus envoyé à VIVINO sous forme de fichier CSV.',
      imgUrl: 'assets/images/proj vivino.png',
      tech: 'JAVA, BD2, XML, AGILE, GIT'
    },

    {
      id: 2,
      title: 'Refonte d`une boutique en ligne d`épicerie fine en ligne avec un CMS',
      desc: 'Site repris dans son entièreté pour modernisation et simplification de l`expérience utilisateur.',
      imgUrl: 'assets/images/proj meyer.png',
      tech: 'WIX, CANVA, INSTAGRAM'
    },

    {
      id: 3,
      title: 'Fiverr - Tests de scénarios et rédactions des tests de boîte vocal téléphonique',
      desc: 'Durée de 2h ou les tests devaient être réaliser et noter en autonomie pour client Neerlandais.',
      imgUrl: 'assets/images/proj fiverr 1.png',
      tech: 'MICROSOFT EXCEL, CANVA'
    },

    {
      id: 4,
      title: 'Réalisation de la base d`un projet Nutri-score pour les vins et spiritueux',
      desc: 'Réalisations de différentes tables et composant servant ont facilité la réalisation du projet.',
      imgUrl: 'assets/images/proj nutriscore.png',
      tech: 'ANGULAR, GIT, JIRA, MOCKOON'
    },

    {
      id: 5,
      title: 'Fiverr - Traduction et traitement de données pour publication sur site Word Press',
      desc: 'Traduction Allemand-Français puis publication sur CMS WordPress pour client Allemand (4 x 5j / 7j).',
      imgUrl: 'assets/images/proj Fiverr 2.png',
      tech: 'WORDPRESS, CHAT GPT, CANVA'
    },

    {
      id: 6,
      title: 'Site de livraison et commande de plat a distance',
      desc: 'Projet école, avec itinéraire, mise en relation avec livreur, restaurants et menus etc...',
      imgUrl: 'assets/images/proj gf.png',
      tech: '.NET, ANGULAR, SQL, TRELLO'
    },
  ];

  // Informations du menu : SCOLARITE

  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }
  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
