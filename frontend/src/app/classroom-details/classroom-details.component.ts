import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClassRoomDTO } from '../create-classroom/ClassRoomDTO';
import { ClassRoomService } from '../create-classroom/classRoomService';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css']
})
export class ClassroomDetailsComponent implements OnInit {

  selectedTab = 'content';
  topics: any[] = [];
  discuss = { title: '', description: '', timeAgo: '', author: '' };
  discussions: any[] = [];
  currentUser: any;
  newDiscussion = { title: '', description: '' };
  currentClassRoom : any;
  isTopicClicked:boolean = false;
  classId!: number;
  isContentLocked = true;
  constructor(private tokenStorage: TokenStorageService,
    private router: Router, private route: ActivatedRoute,
    private classRoomService: ClassRoomService ) { }

  ngOnInit(): void {
    this.topics = [
      { id: 1, title: 'Java Streams', path: '', description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'},
      { id: 2, title: 'Angular Observables', path: '', description: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'}
    ];
    this.currentUser = this.tokenStorage.getUser();
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = +params['id'];
          this.classId = id;
          this.getClassroomById();
          this.getDiscussions();
          this.getTopicsByClassroomId();
        }
      );
  }

  getClassroomById(): void{
    this.classRoomService.getClassRoomById(this.classId).subscribe((data: any) =>{
     this.currentClassRoom = data;
     const participants = data.participants.map((p:any) => p.id);
     this.isContentLocked = !participants.includes(this.currentUser.id);
     console.log(data);
    })
  }

  getTopicsByClassroomId(): void{
    this.classRoomService.getTopicsByClassroomId(this.classId).subscribe(data =>{
     this.topics = data;
     console.log(data);
    })
  }
  tabClicked(tab: string): void{
    this.selectedTab = tab;
    if(this.isTopicClicked === true){
      this.isTopicClicked = false;
    }
    if(tab === 'discuss') {
      this.getDiscussions();
    }
  }

getDiscussions(): void{
  this.classRoomService.getDiscussions(this.classId).subscribe(response => {
    this.discussions = response;
  });
}
clickme(item: any): void{
  this.classRoomService.createComment(this.classId, item.id, item.newComment).subscribe((response: any) => {
    console.log(response);
    this.getDiscussions();
  });
  item.newComment = '';
}
newPostClick(data: any): void{
  this.classRoomService.createDiscussion(this.classId, data).subscribe(response => {
    console.log(response);
    this.getDiscussions();
    this.newDiscussion = { title: '', description: '' };
  })
}
openQuiz(): void {
  //this.router.navigate(['/account']);
}

study(){
  this.isTopicClicked = true;
}
}
