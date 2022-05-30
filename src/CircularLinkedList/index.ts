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
    if(this.last === null) {
      this.last = data;
      this.last.next = data;

      return
    }

    return data;
  }

  insertAtEnd(data: Node<T>): void {
    if(!this.last) {
      this.insertWhenEmpty(data)
    }

    data.next = this.last.next;
    this.last.next = data;
    this.last = data;
  }
  insertInBegin(data: Node<T>): void {
    if(!this.last) {
     this.insertWhenEmpty(data)
    } else {
      data.next = this.last.next;
      this.last.next = data;
    }
  }
  insert(data: Node<T>, index: number): void {
    throw new Error("Method not implemented.");
  }
  deleteNode(index: number): Node<T> {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  get(index: number): Node<T> {
    throw new Error("Method not implemented.");
  }
  set(data: Node<T>, index: number): void {
    throw new Error("Method not implemented.");
  }

}