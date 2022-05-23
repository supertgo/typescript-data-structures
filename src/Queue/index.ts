import LinkedList from "../LinkedList";
import Node from "../LinkedList/Node";
import { IQueue } from "./types";

export class Queue<T> implements IQueue<T> {
  private linkedList: LinkedList<T>;

  constructor() {
    this.linkedList = new LinkedList()
  }

  isEmpty(): boolean {
    return !this.linkedList.head
  }
  peek(): Node<T> {
   if(this.isEmpty()) return null;

   return this.linkedList.get(0)
  }
  enqueue(data: Node<T>): void {
    this.linkedList.insertAtEnd(data);
  }
  dequeue(): Node<T> {
    if(this.isEmpty()) return null;
    
    const nodeToBeDeleted = this.linkedList.deleteNode(0)

    return nodeToBeDeleted
  }

  size(): number {
    return this.linkedList.size()
  }
}