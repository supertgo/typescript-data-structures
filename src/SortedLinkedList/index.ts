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

      for(let i = 0; i < this.length; i++) {
        if(data.value < node.value) {
          if(i > 0) {
            const previousNode = this.getAt(i - 1)
            previousNode.next = data;
            data.next = node;
          } else {
            this.head = data;
            data.next = node;
          }
        }

        if (data.value === node.value) {
          if(i > 0) {
            const nextNodeOfCurrentNode = node.next; 
            node.next = data;
            data.next = nextNodeOfCurrentNode
          } else {
            this.head = data;
            data.next = node;
          }
        }

        node = node.next;
      }

    }
    this.length += 1
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
    const values: String[] = [];
    let node = this.head;

    for(let i = 0; i < this.length; i++) {
      values.push(`${node.value}`)
      node = node.next;
    }

    return values.join(', ')
  }
  getAt(index: number): SortedLinkedListNode {
    if(index < 0 || index > this.length ) return null

    let node = this.head;

    for(let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }
}