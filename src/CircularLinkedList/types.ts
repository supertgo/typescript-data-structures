import LinkedListNode from "../LinkedList/Node";
import { ILinkedList } from "../LinkedList/types";

export interface ICircularLinkedList<T> extends ILinkedList<T> {
  insertWhenEmpty(data: LinkedListNode<T>): LinkedListNode<T> | void;
}