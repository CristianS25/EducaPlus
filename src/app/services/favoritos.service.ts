import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritosService {
  private readonly KEY = 'favoritos';

  getAll(): number[] {
    return JSON.parse(localStorage.getItem(this.KEY) ?? '[]');
  }

  toggle(id: number): void {
    const favs = this.getAll();
    const idx = favs.indexOf(id);
    if (idx === -1) favs.push(id);
    else favs.splice(idx, 1);
    localStorage.setItem(this.KEY, JSON.stringify(favs));
  }

  isFavorito(id: number): boolean {
    return this.getAll().includes(id);
  }
}
