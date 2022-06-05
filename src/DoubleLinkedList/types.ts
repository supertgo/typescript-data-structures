import { DoubleLinkedListNode } from "./node";

export interface IDoubleLinkedList<Number> {
  size(): number;
  isEmpty(): boolean;
  insertWhenEmpty(data: DoubleLinkedListNode): null | void
  insertInBegin(data: DoubleLinkedListNode): void;
}