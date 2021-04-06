import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-escolas',
  templateUrl: './escolas.component.html',
  styleUrls: ['./escolas.component.css']
})
export class EscolasComponent implements OnInit {

  
  public responsaveis = [

    {
      id: 1,
      date: '28-02-2021',
      nome: "Elisa",
    },
    {
      id: 2,
      date: '28-02-2021',
      nome: "Ana"
    },
    {
      id:3,
      date: "05-04-2021",
      nome: "Luciano"
    },
    {
      id:4,
      date: "05-04-2021",
      nome: "Patrick"
    },
    {
      id:5,
      date: "04-04-2021",
      nome: "Zack"
    },
    
  ]
    
  constructor() { }

  ngOnInit() {
    
  }

}
