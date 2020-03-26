import { ModuleListComponent } from './components/module-list/module-list.component';
import { CourseViewerComponent } from './components/course-viewer/course-viewer.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'table/courses', component: CourseTableComponent },
  { path: ':layout/courses/:cid/modules', component: CourseViewerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
