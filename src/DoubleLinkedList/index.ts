
import { DoubleLinkedListNode } from "./node";
import { IDoubleLinkedList } from "./types";

export class DoubleLinkedList implements IDoubleLinkedList<Number> {
  head: DoubleLinkedListNode | null = null
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }
  reverse() {
    if(!this.head) return null;
    let temp: DoubleLinkedListNode = null;
    let current = this.head;

    while(current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    if(temp !== null) {
      this.head = temp.prev;
    }
  }
 
  get(index: number): DoubleLinkedListNode {
    if(index < 0 || index > this.length) return null;
    let node = this.head;
    
    for(let i = 0; i < index; i++){
      node = node.next;
    }

    return node;
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

  insertAfter(data: DoubleLinkedListNode, index: number): void {
    if(index < 0 || index > this.length) return null;

    if(this.length === 0) {
      this.insertWhenEmpty(data)
      return
    } else {
      const previousNode = this.get(index);

      if(previousNode.next === null) {
        this.insertAtEnd(data)

        return
      } else {
        const nodeAfterPrevious = previousNode.next;
        nodeAfterPrevious.prev = data;
        previousNode.next = data;
        data.next = nodeAfterPrevious;
        data.prev = previousNode;
      }

      this.length += 1;
    }
  }

  insertAtEnd(data: DoubleLinkedListNode): void {
    if(this.isEmpty()) {      
      this.insertWhenEmpty(data)
      return;
    }    
    const lastNode = this.get(this.length - 1);

    lastNode.next = data;
    data.prev = lastNode;
    data.next = null;

    this.length += 1;
  }

  insertBefore(data: DoubleLinkedListNode, index: number): void {
    if(index < 0 || index > this.length) return null;

    if(index === 0) {
      this.insertInBegin(data); 
      return
    } else {
      const nextNode = this.get(index);
      const previousNode = nextNode.prev;

      data.prev = previousNode;
      previousNode.next = data;
      data.next = nextNode;
      nextNode.prev = data;

      this.length += 1;
    }
  }

  deleteAt(index: number): DoubleLinkedListNode {
    if(index < 0 || index > this.length) return null;

    if(index === 0) {
      const nodeToBeDeleted = this.head;
      this.head = this.head.next;
      this.head.prev = null;

      this.length -= 1;

      return nodeToBeDeleted
    } else if(index === this.length - 1) {
      const lastNode = this.get(index)
      const previousNode = lastNode.prev;
      previousNode.next = null;

      this.length -= 1;

      return lastNode
    } else {
      const nodeToBeDeleted = this.get(index)
      const previousNode = nodeToBeDeleted.prev;
      const nextNode = nodeToBeDeleted.next;

      previousNode.next = nextNode;
      nextNode.prev = previousNode;

      this.length -= 1;

      return nodeToBeDeleted;
    }
  }

  print(): string {
    if(!this.head) return ''

    let values: String[] = []
    let node = this.head;

    for(let i = 0; i < this.length; i++) {
      values.push(`${node.value}`)
      node = node.next;
    }

    return values.join(', ')
  }

}