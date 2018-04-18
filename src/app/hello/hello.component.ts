import { Component, OnInit } from '@angular/core';
import { PEOPLE, Person } from '../person/person'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  // greeting : String
  personName : Person;
  people = PEOPLE;

  constructor() {
    // this.greeting = 'Hello Aadvik';
  }
  addPerson(personName){
    this.people.push({name : personName });
  }
  ngOnInit() {

  }

  // log(event){
  //   console.log(event)
  // }

}
