import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { CourseCard } from '../../shared/course-card/course-card';
import { CursoService } from '../../services/curso.service';
import { FavoritosService } from '../../services/favoritos.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-favoritos',
  imports: [RouterLink, Header, Footer, CourseCard],
  templateUrl: './favoritos.html',
})
export class Favoritos implements OnInit {
  cursosFavoritos: Curso[] = [];

  constructor(
    private cursoService: CursoService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.loadFavoritos();
  }

  loadFavoritos(): void {
    const ids = this.favoritosService.getAll();
    this.cursosFavoritos = this.cursoService.getAll().filter(c => ids.includes(c.id));
  }

  quitarFavorito(id: number): void {
    this.favoritosService.toggle(id);
    this.loadFavoritos();
  }
}
