import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-course-card',
  imports: [RouterLink, NgClass],
  templateUrl: './course-card.html',
})
export class CourseCard {
  @Input() curso!: Curso;
  @Input() showFavoriteButton = false;
  @Output() favoriteToggled = new EventEmitter<number>();

  readonly DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=400';

  getLevelClass(): string {
    switch (this.curso.nivel) {
      case 'Basico': return 'level-basico';
      case 'Intermedio': return 'level-intermedio';
      case 'Avanzado': return 'level-avanzado';
      default: return '';
    }
  }
}
