import LinkedList from "../LinkedList";
import Node from "../LinkedList/Node";
import { IStack } from "./types";

export class Stack<T> implements IStack<T> {
  private linkedList: LinkedList<T>;

  constructor() {
    this.linkedList = new LinkedList() 
  }
 
  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if(this.isEmpty()) return null

    return this.linkedList.get(this.size() - 1)
  }

  push(data: Node<T>): void {
    this.linkedList.insertAtEnd(data);
  }
  
  pop(): Node<T> {
    if(this.isEmpty()) return null;

    const lastNodeIndex = this.size()
    const nodeToBeDeleted = this.peek()

    this.linkedList.deleteNode(lastNodeIndex - 1)

    return nodeToBeDeleted
  }
  size(): number {
    return this.linkedList.size()
  }
}