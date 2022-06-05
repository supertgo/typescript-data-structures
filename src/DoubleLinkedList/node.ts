export class DoubleLinkedListNode {
  value: Number;
  prev: DoubleLinkedListNode  | null = null;
  next: DoubleLinkedListNode  | null = null;

  constructor(value = null) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
} 