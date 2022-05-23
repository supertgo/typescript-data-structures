import LinkedListNode from "../LinkedList/Node";

export interface IQueue<T> {
  isEmpty(): boolean;
  enqueue(data: LinkedListNode<T>): void;
  dequeue(): LinkedListNode<T>
  peek(): LinkedListNode<T>;
  size(): number;
}