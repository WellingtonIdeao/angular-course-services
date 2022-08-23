import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService],
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursoService: CursoService;

  constructor(private cursosService: CursosService) { 
    //this.cursoService = new CursoService();
    //this.cursoService = _cursoService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
