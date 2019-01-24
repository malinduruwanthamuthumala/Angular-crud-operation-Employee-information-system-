import { Component, OnInit } from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class Servercomponent implements OnInit {
Name = 'malindu Ruwantha';
Id = 10;
numberone=0;
numbertwo=0;
total=0;
allowNewServer=false;
innerhtmlTotal=0;


getName(){
    return this.Name;
}

getvalue(){
    this.total=this.numberone+this.numbertwo;
    this.innerhtmlTotal=this.total;
    return this.total;
    
}
    constructor() { 
        setTimeout( ()=>{
            this.allowNewServer=true;
        },2000)
    }
 
    ngOnInit() {
    }
}


