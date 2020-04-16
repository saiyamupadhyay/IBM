import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // @Input("serverName")
  serverName="";
  serverStatus="Not created";
  serverCreated=false;
  servers=["Test","Test2"];
  constructor() { }

  ngOnInit(): void {
  }
  onUpdateServer(event : Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  onClickServer(){
    console.log("lol")
    this.servers.push(this.serverName)
    this.serverCreated=true;
    this.serverStatus="server created "+this.serverName;
  }

}
