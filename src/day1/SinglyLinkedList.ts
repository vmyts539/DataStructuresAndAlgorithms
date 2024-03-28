class Node<T> {
  public prev: T | undefined;
  public next: T | undefined;

  constructor(prev, next) {
    this.prev = prev 
    this.next = next
  }
}

export default class SinglyLinkedList<T> {
  public length: number;

  constructor() {
    length = 0;
  }

  prepend(item: T): void {

  }
  insertAt(item: T, idx: number): void {

  }
  append(item: T): void {

  }
  remove(item: T): T | undefined {

  }
  get(idx: number): T | undefined {

  }
  removeAt(idx: number): T | undefined {

  }
}
