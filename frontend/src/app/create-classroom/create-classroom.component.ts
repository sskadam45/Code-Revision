import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../_services/token-storage.service';
import {ClassRoomDTO} from './ClassRoomDTO';
import {ClassRoomService} from './classRoomService';
import {FormGroup} from '@angular/forms';


@Component({
  selector: 'app-create-classroom',
  templateUrl: './create-classroom.component.html',
  styleUrls: ['./create-classroom.component.css']
})
export class CreateClassroomComponent implements OnInit {
  currentUser: any;
  classRoomDTO = new ClassRoomDTO();
  title = '';

  constructor(private token: TokenStorageService, private classRoomService: ClassRoomService) {
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.classRoomService.getClassroomDetails().subscribe(response => {
      console.log(response);
    });
  }
  onSubmitClick(classroomDTO: any): void {
   /* this.classRoomDTO.startDate = '2022-07-01';
    this.classRoomDTO.endDate = '2022-07-01';*/
    this.classRoomService.createClassroom(this.classRoomDTO).subscribe((response: any) => {
      console.log(response);
    });
  }
}
