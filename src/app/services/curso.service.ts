import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';

@Injectable({ providedIn: 'root' })
export class CursoService {
  private readonly KEY = 'cursos';

  getAll(): Curso[] {
    return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
  }

  getById(id: number): Curso | undefined {
    return this.getAll().find(c => c.id === id);
  }

  save(data: Omit<Curso, 'id'>): void {
    const cursos = this.getAll();
    cursos.push({ ...data, id: Date.now() });
    localStorage.setItem(this.KEY, JSON.stringify(cursos));
  }

  update(id: number, data: Omit<Curso, 'id'>): void {
    const cursos = this.getAll().map(c => c.id === id ? { ...data, id } : c);
    localStorage.setItem(this.KEY, JSON.stringify(cursos));
  }

  delete(id: number): void {
    const cursos = this.getAll().filter(c => c.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(cursos));
  }
}
