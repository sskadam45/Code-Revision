import {Injectable} from '@angular/core';
import {ClassRoomDTO} from './ClassRoomDTO';
import {APIs, DataPoint} from './dataPoint';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalVariable} from '../_globals/global-variables';

@Injectable()
export class ClassRoomService {

  baseUrl = GlobalVariable.BASE_API_URL;
  constructor(private http: HttpClient) {
  }

 getClassroomDetails(): Observable<ClassRoomDTO[]>{
    return this.http.get<ClassRoomDTO[]>(this.baseUrl + '/classroom/getAll');
 }
 createClassroom(classRoomDTO: ClassRoomDTO): Observable<any>  {
   const headers = { 'content-type': 'application/json'};
   return this.http.post<any>(this.baseUrl + '/classroom/create', classRoomDTO, {headers , observe: 'response'});
  }
  getClassRoomById(id: number): Observable<ClassRoomDTO>{
    return this.http.get<any>(this.baseUrl + '/classroom/' + id);
  }
  getDiscussions(id: number) {
    return this.http.get<any>(this.baseUrl + '/classroom/' + id + '/discussion/getAll');
  }
  createDiscussion(id: number, discussion: { title: string, description: string }): Observable<any>  {
    const headers = { 'content-type': 'application/json'};
    return this.http.post<any>(this.baseUrl + '/classroom/' + id + '/discussion/create', discussion, {headers , observe: 'response'});
   }
   createComment(classId: number, discussionId: number, comment: string) {
    const headers = { 'content-type': 'application/json'};
    const payload = { message: comment };
    return this.http.post<any>(this.baseUrl + '/classroom/' + classId + '/discussion/' + discussionId + '/add', payload, {headers , observe: 'response'});
   }
   getTopicsByClassroomId(id: number): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + '/classroom/' + id + '/topic/getAll');
  }
  joinClassroom(roomId: number): Observable<any>  {
    const headers = { 'content-type': 'application/json'};
    return this.http.put<any>(this.baseUrl + '/classroom/' + roomId + '/addParticipant/', {headers , observe: 'response'});
   }
}
