import LinkedListNode from "./Node";

export interface ILinkedList<T> {
  insertAtEnd(data: LinkedListNode<T>): void;
  insertInBegin(data: LinkedListNode<T>): void;
  insert(data: LinkedListNode<T>, index: number): void;
  deleteNode(index: number): LinkedListNode<T>
  size(): number;
  get(index: number): LinkedListNode<T>,
  set(data: LinkedListNode<T>, index: number): void;
}