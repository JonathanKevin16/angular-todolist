import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
