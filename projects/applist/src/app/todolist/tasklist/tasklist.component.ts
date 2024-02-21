import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.readFromLocal()
  }

  tasks?:any[]

  addTask(input :HTMLInputElement){
    if(this.tasks){
      this.tasks.push({name : input.value, completed: false, created_at: new Date(), updated_at: new Date()})
    }
    else{
      this.tasks = [
        {name : input.value, completed: false, created_at: new Date(), updated_at: new Date()}

      ]
    }
    input.value = ""
    this.saveToLocal()
  }

  changeTaskStatus(id : number){
    if(this.tasks){
    this.tasks[id].completed = !this.tasks[id].completed
    }
    console.log(this.tasks)
    this.saveToLocal()

  }

  deleteTask(id : number){
    if(this.tasks){
    this.tasks.splice(id,1)
    }

    console.log(this.tasks)
    this.saveToLocal()
  }

  saveToLocal(){
    if(this.tasks){
    let json_data = JSON.stringify(this.tasks)
    localStorage.setItem('tasks', json_data)
    }
  }
  readFromLocal(){
    let json_data = localStorage.getItem('tasks')
    if(json_data){
    this.tasks = JSON.parse(json_data)
    }
  }

}
