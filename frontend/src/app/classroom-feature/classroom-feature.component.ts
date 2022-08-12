import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ClassRoomService} from "../create-classroom/classRoomService";
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-classroom-feature',
  templateUrl: './classroom-feature.component.html',
  styleUrls: ['./classroom-feature.component.css']
})
export class ClassroomFeatureComponent implements OnInit {

  classroomsComingSoon: any[] = [];
  classroomsInProgress: any[] = [];
  classroomsCompleted: any[] = [];
  selectedTab = 'InProgress';
  onClickCreateClassroom = false;
  loggedInUser: any;
  disableJoinBtn = false;
  constructor(private classRoomService: ClassRoomService, private router: Router, private tokenStorageService: TokenStorageService) {
    this.classroomsComingSoon = [];
    this.classroomsInProgress = [];
    this.classroomsCompleted = [];
  }
  ngOnInit(): void {
    this.loggedInUser = this.tokenStorageService.getUser();
    this.getAllClassrooms();
  }
  public getAllClassrooms(): void {
    this.classRoomService.getClassroomDetails().subscribe(response => {
      console.log('getData' + JSON.stringify(response));
      response.filter(record => {
        let startDateForDisplay: any;
        let associatedTags: any;
        // @ts-ignore
        startDateForDisplay = record.startDate.split(' ');
        // @ts-ignore
        associatedTags = record.tags.split(',');
        record.startDate = startDateForDisplay[0];
        record.tags = associatedTags;
      });
      this.classroomsComingSoon = response.filter(record => record.status === 'SCHEDULED');
      this.classroomsCompleted = response.filter(val => val.status === 'COMPLETED');
      this.classroomsInProgress = response.filter(cls => cls.status === 'INPROGRESS');
    });
  }

  public tabClicked(tab: string): void {
    this.getAllClassrooms();
    this.selectedTab = tab;
  }

  public onClickCreate(): void{
    this.onClickCreateClassroom = true;
  }

  onViewClassroom(roomId: number) {
    this.router.navigateByUrl('classroom/' + roomId);
  }

  onJoinClassroom(roomId: number) {
    this.disableJoinBtn  = true;
    this.classRoomService.joinClassroom(roomId).subscribe(response => {
      this.onViewClassroom(roomId);
    }, err => {},
    () => {
      this.disableJoinBtn  = false;
    });
  }

  isUserParticipant(room: any) {
    if(room?.participants?.length > 0) {
      const pIds = room.participants.map((p: any) => p.id);
      return pIds.includes(this.loggedInUser.id);
    } else {
      return false;
    }
  }
}
