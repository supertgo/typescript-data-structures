import LinkedListNode from "../LinkedList/Node";

export interface IStack<T> {
  isEmpty(): boolean;
  peek(): LinkedListNode<T> | null;
  push(data: LinkedListNode<T>): void;
  pop(): LinkedListNode<T> | null;
  size(): number;
}