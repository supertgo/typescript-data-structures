export default class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> | null = null


  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}