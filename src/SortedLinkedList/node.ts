export class SortedLinkedListNode {
  value: number | null = null
  next: SortedLinkedListNode  | null = null

  constructor(value=null) {
    this.value = value;
    this.next = null
  }
}