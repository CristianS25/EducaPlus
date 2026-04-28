import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule, NgClass, Header, Footer],
  templateUrl: './admin.html',
})
export class Admin implements OnInit {
  cursos: Curso[] = [];
  modalVisible = false;
  deleteModalVisible = false;
  editingId: number | null = null;
  deletingId: number | null = null;
  courseForm!: FormGroup;
  readonly DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=400';

  constructor(private cursoService: CursoService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loadCursos();
    this.courseForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['Desarrollo Web', Validators.required],
      nivel: ['Basico', Validators.required],
      duracion: ['', Validators.required],
      imagen: [''],
    });
  }

  loadCursos(): void {
    this.cursos = this.cursoService.getAll();
  }

  get totalCursos(): number { return this.cursos.length; }

  openCreateModal(): void {
    this.editingId = null;
    this.courseForm.reset({ categoria: 'Desarrollo Web', nivel: 'Basico' });
    this.modalVisible = true;
  }

  openEditModal(curso: Curso): void {
    this.editingId = curso.id;
    this.courseForm.patchValue(curso);
    this.modalVisible = true;
  }

  closeModal(): void {
    this.modalVisible = false;
  }

  saveCourse(): void {
    if (this.courseForm.invalid) return;
    const data = this.courseForm.value;
    if (this.editingId !== null) {
      this.cursoService.update(this.editingId, data);
    } else {
      this.cursoService.save(data);
    }
    this.loadCursos();
    this.closeModal();
  }

  openDeleteModal(id: number): void {
    this.deletingId = id;
    this.deleteModalVisible = true;
  }

  closeDeleteModal(): void {
    this.deleteModalVisible = false;
    this.deletingId = null;
  }

  confirmDelete(): void {
    if (this.deletingId !== null) {
      this.cursoService.delete(this.deletingId);
      this.loadCursos();
    }
    this.closeDeleteModal();
  }

  getLevelBadgeClass(nivel: string): string {
    switch (nivel) {
      case 'Basico': return 'badge badge-green';
      case 'Intermedio': return 'badge badge-yellow';
      case 'Avanzado': return 'badge badge-red';
      default: return 'badge badge-blue';
    }
  }
}
