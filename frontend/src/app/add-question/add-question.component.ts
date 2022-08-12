import { DificultyLevel, Question } from '../models/category.models';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question: Question ={
    name: '',
    dificultyLevel: DificultyLevel.Easy,
    patterns: ''
  };
  action: string;
  dificultyLevel =['VeryEasy', 'Easy',  'Medium', 'Hard'];
  constructor(
    public dialogRef: MatDialogRef<AddQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question
  ) {
    this.question = {...data };
    this.action = 'Save';
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close({ event: 'Cancel'});
  }
  saveQruestion(): void{
    this.dialogRef.close({ event: this.action, data: this.question } );
  }

}

