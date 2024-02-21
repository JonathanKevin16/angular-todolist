import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(params =>
      this.taskId = params['taskId']
    )
  }

  ngOnInit(): void {
    this.readFromLocal()
  }

  readFromLocal(){
    let json_data = localStorage.getItem('tasks')
    if(json_data){
    this.task = JSON.parse(json_data)
    }
  }

  taskId!: number
  task: any

}

