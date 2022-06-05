import { DoubleLinkedList } from "."
import { DoubleLinkedListNode } from "./node";

const node = new DoubleLinkedListNode(1)
const node2 = new DoubleLinkedListNode(1)

describe('DoubleLinkedList', () => {
  let doubleLinkedList: DoubleLinkedList;
  beforeEach(() => {
     doubleLinkedList = new DoubleLinkedList()
  })

  it('should start with a null head and size 0', () => {
    expect(doubleLinkedList.head).toBeNull();
    expect(doubleLinkedList.size()).toBe(0)
    expect(doubleLinkedList.isEmpty()).toBeTruthy()
  })

  it('should call insert in begin method but insert in an empty list', () => {
    expect(doubleLinkedList.head).toBeNull();
    expect(doubleLinkedList.size()).toBe(0)
    expect(doubleLinkedList.isEmpty()).toBeTruthy()

    doubleLinkedList.insertWhenEmpty(node)

    expect(doubleLinkedList.head).toStrictEqual(node);
    expect(doubleLinkedList.size()).toBe(1)
    expect(doubleLinkedList.insertWhenEmpty(node)).toBeNull()
    expect(doubleLinkedList.isEmpty()).toBeFalsy()
  })

  it('should insert a node in begin', () => {
    doubleLinkedList.insertWhenEmpty(node)
    doubleLinkedList.insertInBegin(node2)

    const secondNode = doubleLinkedList.head.next;

    expect(doubleLinkedList.head).toStrictEqual(node2);
    expect(doubleLinkedList.size()).toBe(2)
    expect(secondNode).toBe(node);
    expect(secondNode.prev).toStrictEqual(node2)
  })
})