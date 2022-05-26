import { SortedLinkedListNode } from "./node";

export interface ISortedLinkedList {
  insert(data: SortedLinkedListNode): void;
  delete(data: SortedLinkedListNode): void;
  size(): number;
  removeDuplicatedNodes(): number[]
  print(): string;
  getAt(index: number): SortedLinkedListNode
}