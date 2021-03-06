import { DoubleLinkedList } from "."
import { DoubleLinkedListNode } from "./node";

const node = new DoubleLinkedListNode(1)
const node2 = new DoubleLinkedListNode(2)
const node3 = new DoubleLinkedListNode(3)

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

  it('should return null if the param at get is greater than list size', () => {
    expect(doubleLinkedList.get(5)).toBeNull()
  })

  it('should return null if the param at get is smaller than 0', () => {
    expect(doubleLinkedList.get(-5)).toBeNull()
  })

  it('should return null if the param at insertAfter is greater than list size', () => {
    expect(doubleLinkedList.insertAfter(node3, 5)).toBeNull()
  })

  it('should return null if the param at insertAfter is smaller than 0', () => {
    expect(doubleLinkedList.insertAfter(node3, -5)).toBeNull()
  })

  it('should insert in a empty list when index is 0 but the size is 1', () => {
    const node = new DoubleLinkedListNode(1)
    doubleLinkedList.insertAfter(node, 0)

    expect(doubleLinkedList.head).toStrictEqual(node)
    expect(doubleLinkedList.head.next).toBeNull()
    expect(doubleLinkedList.head.prev).toBeNull()
  })

  it('should insert a node after a give index', () => {
    doubleLinkedList.insertWhenEmpty(node)
    expect(doubleLinkedList.size()).toBe(1)

    doubleLinkedList.insertInBegin(node2)
    expect(doubleLinkedList.size()).toBe(2)

    
    doubleLinkedList.insertAfter(node3, 0)
    expect(doubleLinkedList.size()).toBe(3)

    const secondNode = doubleLinkedList.head.next;

    expect(doubleLinkedList.head).toStrictEqual(node2);
    expect(secondNode).toBe(node3);
    expect(secondNode.prev).toStrictEqual(node2)
    expect(secondNode.next).toStrictEqual(node)
  })

  it('should insert a node at end calling insertAfter', () => {
    doubleLinkedList.insertWhenEmpty(node)
    doubleLinkedList.insertInBegin(node2)
    doubleLinkedList.insertAfter(node3, 1)
  

    const secondNode = doubleLinkedList.head.next;

    expect(doubleLinkedList.head).toStrictEqual(node2);
    expect(secondNode).toBe(node);
    expect(secondNode.prev).toStrictEqual(node2)
    expect(secondNode.next).toStrictEqual(node3)
    expect(doubleLinkedList.size()).toBe(3)
  })

  it('should insert at end', () => {
    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node2)
    doubleLinkedList.insertAtEnd(node3)
  
    expect(doubleLinkedList.head).toStrictEqual(node)
    expect(doubleLinkedList.head.next).toStrictEqual(node2)
    expect(doubleLinkedList.head.next.next).toStrictEqual(node3)
  })

  it('should at begin when insertBefore index is 0', () => {
    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node2)
    doubleLinkedList.insertBefore(node3, 0)
  
    expect(doubleLinkedList.head).toStrictEqual(node3)
    expect(doubleLinkedList.head.next).toStrictEqual(node)
    expect(doubleLinkedList.head.next.next).toStrictEqual(node2)
  })

  it('should insert before a given index', () => {
    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node3)
    doubleLinkedList.insertBefore(node2, 1)
  
    expect(doubleLinkedList.head).toStrictEqual(node)
    expect(doubleLinkedList.head.next).toStrictEqual(node2)
    expect(doubleLinkedList.head.next.next).toStrictEqual(node3)
  })

  it('should delete the first node', () => {
    

    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node3)
   
    expect( doubleLinkedList.deleteAt(0)).toStrictEqual(node)
    expect(doubleLinkedList.head).toStrictEqual(node3)
    expect(doubleLinkedList.head.next).toStrictEqual(null)
    expect(doubleLinkedList.size()).toBe(1)
  })

  it('should delete the last node', () => {
    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node3)
    
    expect( doubleLinkedList.deleteAt(1)).toStrictEqual(node3)
    expect(doubleLinkedList.head).toStrictEqual(node)
    expect(doubleLinkedList.head.next).toStrictEqual(null)
    expect(doubleLinkedList.size()).toBe(1)
  })

  it('should delete a node at give index', () => {
    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node2)
    doubleLinkedList.insertAtEnd(node3)
    doubleLinkedList.deleteAt(1)
  
    expect(doubleLinkedList.head).toStrictEqual(node)
    expect(doubleLinkedList.head.next).toStrictEqual(node3)
    expect(doubleLinkedList.size()).toBe(2)
  })

  it('should return a empty string when the list is empty', () => {
    expect(doubleLinkedList.print()).toStrictEqual('')
  })

  it('should return a print with the node values', () => {
    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node2)
    doubleLinkedList.insertAtEnd(node3)

    expect(doubleLinkedList.print()).toStrictEqual('1, 2, 3')
  })

  it('should reverse an empty list', () => {
    expect(doubleLinkedList.reverse()).toBeNull()
  })

  it('should reverse a doubly linked list', () => {
    doubleLinkedList.insertAtEnd(node)
    doubleLinkedList.insertAtEnd(node2)
    doubleLinkedList.insertAtEnd(node3)

    expect(doubleLinkedList.print()).toStrictEqual('1, 2, 3')
    doubleLinkedList.reverse()
    expect(doubleLinkedList.print()).toStrictEqual('3, 2, 1')
    doubleLinkedList.reverse()
    expect(doubleLinkedList.print()).toStrictEqual('1, 2, 3')
  })
})