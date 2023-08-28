import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit  {

  sidebarVisible: boolean = false;
  selectedActivity: string  = 'My Tasks';
  selectedKey: string  = '';

  todoList:Array<any> = [];
  todoListAll:Array<any> = [
    {
        "id": 1,
        "title": "Learn about Polymer",
        "due_date": 1649625594000,
        "tags": [
            "high"
        ],
        "completed": true,
        "starred": true,
        "deleted": false,
        "owner": {
            "id": 1,
            "first": "Darlene",
            "last": "Shields"
        }
    },
    {
        "id": 2,
        "title": "Watch Pluralsight course on Docker",
        "due_date": 1649884794000,
        "tags": [
            "update"
        ],
        "completed": true,
        "starred": false,
        "deleted": false,
        "owner": {
            "id": 4,
            "first": "Jacob",
            "last": "Ramirez"
        }
    },
    {
        "id": 3,
        "title": "Complete presentation prep for Aurelia presentation",
        "due_date": 1650057594000,
        "tags": [
            "blocked",
            "high"
        ],
        "completed": false,
        "starred": true,
        "deleted": false,
        "owner": {
            "id": 3,
            "first": "Semantha",
            "last": "Mills"
        }
    },
    {
        "id": 4,
        "title": "Instrument creation of development environment with Puppet",
        "due_date": 1650489594000,
        "tags": [
            "low"
        ],
        "completed": false,
        "starred": false,
        "deleted": false,
        "owner": {
            "id": 2,
            "first": "Pete",
            "last": "Jackson"
        }
    },
    {
        "id": 5,
        "title": "Transition code base to ES6",
        "due_date": 1651785594000,
        "tags": [
            "low"
        ],
        "completed": false,
        "starred": false,
        "deleted": true,
        "owner": {
            "id": 5,
            "first": "Cindy",
            "last": "Powell"
        }
    },
    {
        "id": 6,
        "title": "Zoom call with the client",
        "due_date": 1653859194000,
        "tags": [
            "medium"
        ],
        "completed": true,
        "starred": true,
        "deleted": false,
        "owner": {
            "id": 5,
            "first": "Cindy",
            "last": "Powell"
        }
    },
    {
        "id": 7,
        "title": "Meet with the boss for coffee",
        "due_date": 1654118394000,
        "tags": [
            "high"
        ],
        "completed": false,
        "starred": true,
        "deleted": false,
        "owner": {
            "id": 6,
            "first": "Adam",
            "last": "Carillo"
        }
    }
];
  ngOnInit(): void {
    this.todoList = this.todoListAll;
  }

  onFilter(activity: string, key: string = 'high'){
    this.selectedActivity =activity;
    this.selectedKey = key;
    switch (activity) {
      case 'My Tasks':
        this.todoList = this.todoListAll;
        break;
      case 'Important':
        this.todoList = this.todoListAll.filter(x=>x.starred==true);
        break;
      case 'Completed':
        this.todoList = this.todoListAll.filter(x=>x.completed==true);
        break; 
      case 'Deleted':
        this.todoList = this.todoListAll.filter(x=>x.deleted==true);
        break;
      case 'Tags':
        this.todoList = this.todoListAll.filter(x => x.tags.indexOf(key.toLowerCase()) >= 0);
        break;

      default:
        this.todoList = this.todoListAll;
        break;
    }
  }

  onChangeStatus(status: string, id: number){
    let item = this.todoListAll.findIndex(x=>x.id == id);

    switch (status) {
      case 'starred':
        this.todoListAll[item].starred = !this.todoListAll[item].starred;
        break;
        case 'completed':
        this.todoListAll[item].completed = !this.todoListAll[item].completed;
        break;
    
      default:
        break;
    }
    this.onFilter(this.selectedActivity, this.selectedKey)
  }

  onSelectionChange(){
    this.sidebarVisible = true;
  }
}
