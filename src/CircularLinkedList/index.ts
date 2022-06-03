import LinkedListNode from "../LinkedList/Node";
import Node from "../LinkedList/Node";
import { ICircularLinkedList } from "./types";

export class CircularLinkedList<T> implements ICircularLinkedList<T> {
  last: LinkedListNode<T> | null = null
  length: number;

  constructor() {
    this.last = null;
    this.length = 0;  
  }
 
  insertWhenEmpty(data: LinkedListNode<T>): LinkedListNode<T> | void {
    if(this.last !== null) {
      return data;
    } else {
      this.last = data;
      this.last.next = data;
      this.length += 1;
    }
  }

  insertAtEnd(data: Node<T>): void {
    if(!this.last) {
      this.insertWhenEmpty(data)
      return
    }
    
    data.next = this.last.next;
    this.last.next = data;
    this.last = data;

    this.length += 1;
  }
  insertInBegin(data: Node<T>): void {
    if(!this.last) {
     this.insertWhenEmpty(data);
     return
    } else {
      data.next = this.last.next;
      this.last.next = data;

      this.length += 1;
    }

    
  }
  insert(data: Node<T>, index: number): void {
    if(index < 0 || index > this.length) return null;

    if(index === 0) {
      this.insertInBegin(data);
      return
    } else if(index === this.length) {
      
      this.insertAtEnd(data);
      return
    } else {
      const previousNode = this.get(index - 1);
      data.next = previousNode.next;
      previousNode.next = data;

      this.length += 1;
    }
  }
  deleteNode(index: number): Node<T> {
    if(index < 0 || index > this.length || this.length === 0) 
      return null;


    if(index === 0) {
      if(this.length === 1) {
        const nodeToBeDeleted = this.last;
        this.last.next = null;
        this.last = null;

        this.length -= 1;

        return nodeToBeDeleted;
      }
      const firstNode = this.last.next;
      this.last.next = firstNode.next;

      this.length -= 1;

      return firstNode;
    } else if (index === this.length - 1) {
      const previousNode = this.get(index - 1);
      const nodeToBeDeleted = this.last;

      previousNode.next = this.last.next;
      this.last = previousNode;

      this.length -= 1;
      

      return nodeToBeDeleted
    }

  }

  print(): string {
    if(!this.last) return ''

    let values = [];
    let node = this.last.next;

    for(let i = 0; i < this.length; i++){
      values.push(`${node.value}`)
      node = node.next;
    }

    return values.join(', ')
  }

  size(): number {
   return this.length;
  }
  get(index: number): Node<T> {
    if(index < 0 || index > this.length) return null;

    let node = this.last.next;

    for(let i = 0; i < index; i++) {
      node = node.next;
    }
    
    return node;
  }
  set(data: Node<T>, index: number): void {
    throw new Error("Method not implemented.");
  }

}