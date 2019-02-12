import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
@Component({
  
  templateUrl: './listemployees.component.html',
  styleUrls: ['./listemployees.component.css']
})
export class ListemployeesComponent implements OnInit {

 employee: Employee[] = [
  {
  
    id:1,
    name:'Malindu ruwantha',
    gender:'Male',
    email:'malinduruwantha@gmail.com',
    phone: 755632321,
    dateofbirth:new Date('07/10/1995'),
    department:'IT',
    isactive:true,
    photopath:'assets/images/1.jpg',  

  },
  {
  
    id:2,
    name:'Amith Liyanage',
    gender:'Male',
    email:'Amithliyanage@gmail.com',
    phone: 75563321,
    dateofbirth:new Date('08/10/1995'),
    department:'IT',
    isactive:true,
    photopath:'assets/images/2.jpg',  

  },
  {
  
    id:3,
    name:'lanka Rathnayake',
    gender:'Male',
    email:'lanka@gmail.com',
    phone: 7555632321,
    dateofbirth:new Date('07/8/1995'),
    department:'IT',
    isactive:true,
    photopath:'assets/images/3.jpg',  

  },
  
  ];


  constructor() { }

  ngOnInit() {
  }

}
