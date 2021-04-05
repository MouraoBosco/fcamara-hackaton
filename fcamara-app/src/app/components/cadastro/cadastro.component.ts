import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  readonly apiURL: string;

  constructor() {
      this.apiURL = 'http://localhost:3000';
   }

  ngOnInit() {
  }

}

