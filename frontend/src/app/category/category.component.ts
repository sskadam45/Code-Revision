import { Category, Question, Language, DificultyLevel } from './../models/category.models';
import { ChangeDetectionStrategy, Component, Inject, IterableDiffers, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable, ReplaySubject } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RegisterCategoryComponent } from '../register-category/register-category.component';
import { AddQuestionComponent } from '../add-question/add-question.component';
const questions: Question[] = [
  {id: 1, name: 'Sum 1', urlLink: '', language: Language.Java, dificultyLevel: DificultyLevel.Easy, patterns: ' two pointer',timeComplexity: '', 
  approaches: [], status: '', tags: [], important: false},
  // tslint:disable-next-line: max-line-length
  {id: 1, name: 'Sum 2', urlLink: '', language: Language.Cpp, dificultyLevel: DificultyLevel.Medium, patterns: 'sliding windo',timeComplexity: '',
   approaches: [], status: '', tags: [], important: false},
  {id: 1, name: 'Factorial of number',urlLink: '', language: Language.Java, dificultyLevel: DificultyLevel.VeryEasy, 
  patterns: 'Na', timeComplexity: '', approaches: [], status: '', tags: [], important: false},
  {id: 1, name: 'Fibonacy series',urlLink: '', language: Language.Java, dificultyLevel: DificultyLevel.VeryEasy, 
  patterns: 'Binaray Search',timeComplexity: '',approaches: [], status: '', tags: [], important: false},
]
const categories: Category[] = [
  {id: 1, name: 'Array', patterns: 'sliding window', isCollapsed: false, tags: [ 'array', 'dsa'], questions: []},
  {id: 2, name: 'LinkedList', patterns: ' two pinter', tags: ['array', 'dsa'], isCollapsed: false, questions:[]},
  { id: 3, name: 'Stack', patterns: ' Na', tags: [ 'array', 'dsa'], isCollapsed: false, questions: []}
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CategoryComponent implements OnInit {
  currentlyOpenedItemIndex = -1;
  questions: Question[] = [];
  displayedColumns: string[] = ['id', 'name', 'Language', 'Dificulty Level'];
  dataToDisplay = [...categories];

  dataSource = this.dataToDisplay;
  categories: Category[]  = [];
  iterableDiffer: any;

  constructor(public dialog: MatDialog, private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = iterableDiffers.find([]).create();
    this.questions = [...questions];
}
  ngOnInit(): void {
    this.categories = categories;
  }

  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    // this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    // this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    // this.dataSource.setData(this.dataToDisplay);
  }

  setOpened(itemIndex: any): void {
    this.currentlyOpenedItemIndex = itemIndex;
  }

  setClosed(itemIndex: any): void {
    if(this.currentlyOpenedItemIndex === itemIndex) {
      this.currentlyOpenedItemIndex = -1;
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RegisterCategoryComponent, {
      width: '700px',
      data: { name: '', patterns: '', tags: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Data received:', result);
      if (result.event === 'Save'){
        this.categories.push(result.data);
      }
    });
  }

  openQuestionDialog(catId: number): void {
    const dialogRef = this.dialog.open(AddQuestionComponent, {
      width: '700px',
      data: { id: 1, name: '', urlLink: '', dificultyLevel: DificultyLevel.Easy, patterns: '', tags: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Data received:', result);
      if (result.event === 'Save'){
       //this.questions.push(result.data)
       const selectedCat: any = this.categories.find(cat => cat.id === catId);
       selectedCat.questions = this.questions;
       this.questions.push(result.data)
       //this.questions = [];
      }
    });
  }

} 
