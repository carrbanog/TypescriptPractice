export class FavoriteManger<T> {
  public favorites: T[] = [];

  add(item: T) {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
    }
  }
  list(): T[] {
    return [...this.favorites];
  }
}

export const favariteCityManager = new FavoriteManger<string>();
