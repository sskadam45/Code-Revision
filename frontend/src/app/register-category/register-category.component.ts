import { Category } from './../models/category.models';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-category',
  templateUrl: './register-category.component.html',
  styleUrls: ['./register-category.component.css']
})
export class RegisterCategoryComponent implements OnInit {
  category: Category;
  action: string;
  //local_data: Category;
  constructor(
    public dialogRef: MatDialogRef<RegisterCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category
  ) {
    this.category = {...data }
    this.action = 'Save';
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close({ event: 'Cancel'});
  }
  saveCategory(): void{
    this.dialogRef.close({ event: this.action, data: this.category } );
  }

}

