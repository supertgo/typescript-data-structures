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
})