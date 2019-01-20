import { Component } from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class Servercomponent{
Name = 'malindu Ruwantha';
Id = 10;
numberone=0;
numbertwo=0;
total=0;
getName(){
    return this.Name;
}

getvalue(){
    this.total=this.numberone+this.numbertwo;
    return this.total;
}


}