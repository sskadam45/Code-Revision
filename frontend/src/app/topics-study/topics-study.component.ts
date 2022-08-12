import { Component, OnInit } from '@angular/core';

export class Topics {
  id?: number;
  name?:string;
  status?:string;
  filepath?:string;
 }
@Component({
  selector: 'app-topics-study',
  templateUrl: './topics-study.component.html',
  styleUrls: ['./topics-study.component.css'],
})
export class TopicsStudyComponent implements OnInit {
  pdf4 = '../../assets/content/java8_tutorial.pdf';
  pdf2 = '../../assets/content/spring-boot-essentials.pdf';
  pdf3 = '../../assets/content/sqlserver-procedures.pdf';
  pdf1 = '../../assets/content/aws-ec2.pdf';
  pdf5 = '../../assets/content/Python-OOP.pdf';

  selectedFile: any;
  topics : Topics[] = [];
  constructor() {}

  ngOnInit(): void {
    this.selectedFile = this.pdf1;
    this.topics = [
      { id: 1, name: 'AWS EC2 Instance', status: 'active', filepath: this.pdf1 },
      { id: 2, name: 'Spring boot essentials', status: '', filepath: this.pdf2 },
      { id: 3, name: 'SQL Server Procedures', status: '', filepath: this.pdf3 },
      { id: 4, name: 'Java 8 Tutorial', status: '', filepath: this.pdf4 },
    ];
  }
  selectedTopic(topic: any) {
    this.topics.forEach((data) => {
      data.status = '';
    });
    this.selectedFile = topic.filepath;
    topic.status = 'active';
  }
}
