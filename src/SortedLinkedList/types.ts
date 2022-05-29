import { SortedLinkedListNode } from "./node";

export interface ISortedLinkedList {
  insert(data: SortedLinkedListNode): void;
  delete(index: number): SortedLinkedListNode;
  size(): number;
  removeDuplicatedNodes(): SortedLinkedListNode[]
  print(): string;
  getAt(index: number): SortedLinkedListNode
}