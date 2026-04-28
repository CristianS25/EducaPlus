import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { CourseCard } from '../../shared/course-card/course-card';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Header, Footer, CourseCard],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getAll().slice(0, 4);
  }
}
