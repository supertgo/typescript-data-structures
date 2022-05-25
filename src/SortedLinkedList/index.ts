import { SortedLinkedListNode } from "./node";
import { ISortedLinkedList } from "./types";

export class SortedLinkedList implements ISortedLinkedList {
  head: SortedLinkedListNode  | null = null;
  tail: SortedLinkedListNode | null = null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
 
  insert(data: SortedLinkedListNode): void {
    if(!this.head) {
      this.head = data;
      this.tail = data;
    } else {
      let node = this.head;

      if(data < node) {
        this.head = data;
      
      }

      for(let i = 0; i < this.length - 1; i++) {

      }
    }
  }
  delete(data: SortedLinkedListNode): void {
    throw new Error("Method not implemented.");
  }
  size(): number {
    return this.length;
  }
  removeDuplicatedNodes(): number[] {
    throw new Error("Method not implemented.");
  }
  print(): string {
    throw new Error("Method not implemented.");
  }
}