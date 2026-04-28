import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { CursoService } from '../../services/curso.service';
import { FavoritosService } from '../../services/favoritos.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-curso-detalle',
  imports: [RouterLink, NgClass, Header, Footer],
  templateUrl: './curso-detalle.html',
})
export class CursoDetalle implements OnInit {
  curso: Curso | undefined;
  esFavorito = false;
  readonly DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=400';

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursoService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.curso = this.cursoService.getById(id);
    if (this.curso) {
      this.esFavorito = this.favoritosService.isFavorito(this.curso.id);
    }
  }

  toggleFavorito(): void {
    if (!this.curso) return;
    this.favoritosService.toggle(this.curso.id);
    this.esFavorito = this.favoritosService.isFavorito(this.curso.id);
  }

  getLevelClass(): string {
    switch (this.curso?.nivel) {
      case 'Basico': return 'level-basico';
      case 'Intermedio': return 'level-intermedio';
      case 'Avanzado': return 'level-avanzado';
      default: return '';
    }
  }
}
