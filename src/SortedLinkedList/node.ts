export class SortedLinkedListNode {
  value: number | null = null
  next:  number | null = null

  constructor(value=null) {
    this.value = value;
    this.next = null
  }
}