import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilerService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Quiz App',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/quiz_app.png',
      tech: 'Javascript, Html, Css'
    },

    {
      id: 2,
      title: 'To-Do-List',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/todo_list.png',
      tech: 'Javascript, Html, Css'
    },


    {
      id: 3,
      title: 'Login Page',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/Login_page.png',
      tech: 'Angular 10, Java, Mysql '
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/table.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/portfolio.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/Adminpage.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: '',
      githurl: '',
      mediumlink: '',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Developer with 1+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 6+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Java, Jquery, Bootstrap, MongoDB, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1UF3iIO4tm2ah5A3F04SkGIOP9iwOweoiPCkA5N9_Aec/edit"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 8..17',
      'progress': '80%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'JAVA SCRIPT, JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL, MYSQL, MONOGO ',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'JAVA, SPRING BOOT',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2019 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of computer science engineering',
      'info': `Mewar University Rajasthan 
Completed B.TECH in Computer science Engineering with 6.85 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College .`,
      'institution': 'MEWAR UNIVESITY CHTTORGARH, RAJASTHAN,INDIA'
    },
    {
      'id': '2',
      'from_to_year': '2018 - 2019',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'MAHARANI KALYANI COLLEGE DARBHANGA',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 53%.`
    },
    {
      'id': '3',
      'from_to_year': '2017 - 2018',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': '+2 LALITESHWAR MADHUSUDAN HIGH SCHOOL',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 53%.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Neo Infra Fintech Inclusion Private Limited',
      location: 'Noida',
      timeline: 'Oct 2023 to Present',
      role: ' Java Full Stack Developer',
      work: 'Working as a full stack developer .Responsible for handling the UI in React and Managing the api calls in Java.'

    },
    {
      id: 3,
      company: 'Csii India Pvt Ltd',
      location: 'Noida',
      timeline: 'Feb 2023 to Apr 2023',
      role: 'Software Developer',
      work: `Technologies : Angular , Oracle , Java .
      Worked on the web application built in Angular for different business and Campaigns .
      Contributed on developing the admin dashboard with different charts and insights for the application.`
    },

    {
      id: 1,
      company: 'Max Pacific Corporation Ltd',
      location: 'Gurgaon, Haryana',
      timeline: 'Apr 2022 - Dec 2022',
      role: 'Software Developer',
      work: `Technologies : Java , Spring MVC , Oracle, Apache Solr .

  Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Vikash_belog.png',
      url: 'https://vikash846.blogspot.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/vikash_github.png',
      url: 'https://github.com/Vikash8460/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/Vikash_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~01fa4f038c30c1d418'
    },
  ]
 

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

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