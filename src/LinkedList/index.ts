import LinkedListNode from "./Node";
import { ILinkedList } from "./types";

export default class LinkedList<T> implements ILinkedList<T> {
  head: LinkedListNode<T> | null = null
  tail: LinkedListNode<T> | null = null
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length =0;
  }
 
  insertAtEnd(data: LinkedListNode<T>): void {
   if(!this.head) {
     this.head = data;
     this.tail = data;
   } else {
     this.tail.next = data;
     this.tail = data;
   }

    this.length += 1
  }
  insertInBegin(data: LinkedListNode<T>): void {
    if(!this.head) {
      this.head = data;
      this.tail = data;
    } else {
     data.next = this.head;
     this.head = data
    }
    
    this.length += 1
  }
 

  get(index: number): LinkedListNode<T> {
   if(index < 0 || index > this.length ) return null
   
    let node = this.head;

    for(let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  insert(data: LinkedListNode<T>, index: number): void {
    if(index < 0 || index > this.length ) return null

    if(index === 0) {
      this.insertInBegin(data)
    } else {
      const previousNode = this.get(index - 1)
      const nextNode = previousNode.next;

      previousNode.next = data;
      data.next = nextNode;
    }
  }

  deleteNode(index: number): LinkedListNode<T> {
    if(index < 0 || index > this.length ) return null

    if(index === 0) {
      const deletedNode = this.head
      this.head = deletedNode.next

      if(this.length === 1) {
        this.tail = deletedNode.next
      }

      return deletedNode
    } else if (index === this.length - 1) {
      const previousNode = this.get(index - 1)
      const nodeToBeDeleted = previousNode.next;

      previousNode.next = nodeToBeDeleted.next;

      this.tail = previousNode

      return nodeToBeDeleted
    } 
    else {
      const previousNode = this.get(index - 1)
      const nodeToBeDeleted = previousNode.next;

      previousNode.next = nodeToBeDeleted.next;

      return nodeToBeDeleted
    }
  }
  size(): number {
   return this.length
  }
  
  set(data: LinkedListNode<T>, index: number): void {
    const node = this.get(index)

    node.value = data.value
  }
}