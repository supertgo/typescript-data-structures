import { DoubleLinkedListNode } from "./node";

export interface IDoubleLinkedList<Number> {
  size(): number;
  isEmpty(): boolean;
  get(index: number): DoubleLinkedListNode;
  insertWhenEmpty(data: DoubleLinkedListNode): null | void;
  insertInBegin(data: DoubleLinkedListNode): void;
  insertAfter(data: DoubleLinkedListNode, index: number): void;
  insertAtEnd(data: DoubleLinkedListNode): void;
  insertBefore(data: DoubleLinkedListNode, index: number): void;
  deleteAt(index: number): DoubleLinkedListNode;
}