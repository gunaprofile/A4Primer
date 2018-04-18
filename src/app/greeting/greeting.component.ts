import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person/person'

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  names: String[] = ["Paul", "Dave", "Guna", "Aadvik"]
  companies:[{company: String}] = [{company:"Deforay"},{company:"Tech Mahindra"},{company:"Cisco"}]

  @Input() person: Person;
  constructor() { }

  ngOnInit() {
  }

}
