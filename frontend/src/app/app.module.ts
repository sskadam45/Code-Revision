import { AddQuestionComponent } from './add-question/add-question.component';
import { MaterialModuleApp } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ClassroomDetailsComponent } from './classroom-details/classroom-details.component';
import { ClassroomFeatureComponent } from './classroom-feature/classroom-feature.component';
import { MyLearningsComponent } from './profile/my-learnings/my-learnings.component';
import { MyAchievementsComponent } from './profile/my-achievements/my-achievements.component';
import {CreateClassroomComponent} from './create-classroom/create-classroom.component';
import {ClassRoomService} from './create-classroom/classRoomService';
import { TopicsStudyComponent } from './topics-study/topics-study.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CategoryComponent } from './category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterCategoryComponent } from './register-category/register-category.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ClassroomDetailsComponent,
    ClassroomFeatureComponent,
    CreateClassroomComponent,
    MyLearningsComponent,
    MyAchievementsComponent,
    TopicsStudyComponent,
    CategoryComponent,
    RegisterCategoryComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    MaterialModuleApp

  ],
  providers: [authInterceptorProviders, ClassRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
