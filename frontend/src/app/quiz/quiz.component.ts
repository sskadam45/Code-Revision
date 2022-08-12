import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  index = 0;
  isCorrectAns: boolean = false;
  radioSelected: any;
  constructor() { }

  quiz: any = [
    // tslint:disable-next-line: max-line-length
    {question: 'whats ur name?', answers: [{option1: 'Ind', isCorrect: true}, {option1: 'USA', isCorrect: false}, {option1: 'Aus', isCorrect: false}, {option1: 'Pak', isCorrect: false}]},
    {question: 'r u indian?',
    answers: [{option1: 'Ind2', isCorrect: true},
              {option1: 'USA2', isCorrect: false}, {option1: 'Aus2', isCorrect: false}, {option1: 'Pak2', isCorrect: false}]}
  ];

  ngOnInit(): void {
  }

  nextQuestion(): void{
    this.index++;
    if (this.index === this.quiz.length){
      this.index = this.quiz.length - 1;
    }
  }
  preQuestion(): void{
    if (this.index <= 0){
      this.index = 0;
    }else{
      this.index--;
    }
  }

  answerClick(selectedAns: any): void{
    if (selectedAns.isCorrect === true){
      this.isCorrectAns = true;
    }
  }
}
