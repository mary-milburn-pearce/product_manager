import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    // this.newTask = { title: "", description: "" }
    // this.editTask = { id: "", title: "", description: "" }
    // this.addResults = { content: "" }
    // this.editResults = { content: "" }
    // this.deleteResults = { content: "" }
    // this.showEdit = false;
    // this.getTasksFromService();
  }
}
