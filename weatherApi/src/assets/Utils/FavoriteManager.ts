export class FavoriteManger<T> {
  public favorites: T[] = [];

  constructor() {
    //생성자는
    const stored = localStorage.getItem("favorite");
    if (stored) {
      this.favorites = JSON.parse(stored);
    }
  }

  add(item: T) {
    if (!this.favorites.includes(item)) {
      this.favorites.push(item);
      localStorage.setItem("favorite", JSON.stringify(this.favorites));
    }
  }

  remove(item: T) {
    this.favorites = this.favorites.filter((fav) => fav !== item);
    localStorage.setItem("favorite", JSON.stringify(this.favorites));
  }

  list(): T[] {
    return [...this.favorites];
  }
}

export const favariteCityManager = new FavoriteManger<string>();
//인스턴스 생성하면 생성자 실행
