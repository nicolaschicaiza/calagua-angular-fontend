import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-alertaspublico',
  templateUrl: './alertaspublico.component.html',
  styleUrls: ['./alertaspublico.component.scss']
})
export class AlertaspublicoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ShowDiv1(){
    document.getElementById("myDiv1").style.display="";
    document.getElementById("myDiv2").style.display="none";
  }
  ShowDiv2(){
    document.getElementById("myDiv2").style.display="";
    document.getElementById("myDiv1").style.display="none";
  }

  value = 25;
  setValue(newValue) {
    this.value = Math.min(Math.max(newValue, 0), 100)
  }

  get status() {
    if (this.value <= 20) {
      return 'danger';
    } else if (this.value <= 45) {
      return 'warning';
    } else if (this.value <= 55) {
      return 'success';
    } else if (this.value <= 80) {
      return 'warning';
    }  else {
      return 'danger';
    }
  }
}
