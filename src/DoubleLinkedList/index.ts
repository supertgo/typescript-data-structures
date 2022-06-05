
import { DoubleLinkedListNode } from "./node";
import { IDoubleLinkedList } from "./types";

export class DoubleLinkedList implements IDoubleLinkedList<Number> {
  head: DoubleLinkedListNode | null = null
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }
  isEmpty(): boolean {
    return !this.length;
  }
  size(): number {
    return this.length;
  }
  
  insertWhenEmpty(data: DoubleLinkedListNode): void {
    if(this.head) {
      return null;
    }
    
    this.head = data;
    this.length += 1;
  }
  insertInBegin(data: DoubleLinkedListNode): void {
    if(this.isEmpty()) {
      this.insertWhenEmpty(data)
      return 
    } else {
      data.next = this.head;
      this.head.prev = data;
      this.head = data;

      this.length += 1;
    }
  }
}