import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { CourseCard } from '../../shared/course-card/course-card';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-cursos',
  imports: [FormsModule, Header, Footer, CourseCard],
  templateUrl: './cursos.html',
})
export class Cursos implements OnInit {
  allCursos: Curso[] = [];
  filteredCursos: Curso[] = [];
  searchTerm = '';
  categoriaFiltro = '';
  nivelFiltro = '';

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.allCursos = this.cursoService.getAll();
    this.filteredCursos = [...this.allCursos];
  }

  filtrar(): void {
    this.filteredCursos = this.allCursos.filter(c => {
      const matchSearch = !this.searchTerm ||
        c.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchCategoria = !this.categoriaFiltro || c.categoria === this.categoriaFiltro;
      const matchNivel = !this.nivelFiltro || c.nivel === this.nivelFiltro;
      return matchSearch && matchCategoria && matchNivel;
    });
  }
}
