import { CircularLinkedList } from "."
import LinkedListNode from "../LinkedList/Node";

describe('CircularLinkedList', () => {
  it('the last pointer should be null when the list is empty', () => {
    const circularLinkedList = new CircularLinkedList()

    expect(circularLinkedList.last).toBeNull()
  });

  it('last pointer should pointer to the first node inserted', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);

    circularLinkedList.insertWhenEmpty(node1)
    expect(circularLinkedList.last).toStrictEqual(node1)
    expect(circularLinkedList.last.next).toStrictEqual(node1)
  })

  it('should insert at the beginning of an nonempty list', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);

    circularLinkedList.insertWhenEmpty(node1)
    expect(circularLinkedList.last).toStrictEqual(node1)
    expect(circularLinkedList.last.next).toStrictEqual(node1)

    circularLinkedList.insertInBegin(node2);
    expect(circularLinkedList.last.next).toStrictEqual(node2)
    expect(circularLinkedList.last.next.next).toStrictEqual(node1)
  })

  it('should insert at the end of an nonempty list', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);

    circularLinkedList.insertWhenEmpty(node1)
    expect(circularLinkedList.last).toStrictEqual(node1)
    expect(circularLinkedList.last.next).toStrictEqual(node1)

    circularLinkedList.insertAtEnd(node2);
    expect(circularLinkedList.last).toStrictEqual(node2)
    expect(circularLinkedList.last.next).toStrictEqual(node1)
  })


  it('should get the values in the order that was added', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);

    circularLinkedList.insertAtEnd(node1)
    circularLinkedList.insertAtEnd(node2)
    circularLinkedList.insertAtEnd(node3)

    expect(circularLinkedList.get(0)).toStrictEqual(node1);
    expect(circularLinkedList.get(1)).toStrictEqual(node2);
    expect(circularLinkedList.get(2)).toStrictEqual(node3);

  })

  fit('should insert at postion 2', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);

    circularLinkedList.insertWhenEmpty(node1)
    circularLinkedList.insertAtEnd(node2)
    circularLinkedList.insert(node3, 1)

    const firstNode = circularLinkedList.last.next;

    
    expect(firstNode).toStrictEqual(node1);
    expect(circularLinkedList.get(1)).toStrictEqual(node3);
    expect(circularLinkedList.last).toStrictEqual(node2);
    expect(circularLinkedList.size()).toBe(3)
  })
})