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

  it('should insert at postion 2', () => {
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

  it('should print an empty string when the list is empty', () => {
    const circularLinkedList = new CircularLinkedList()
 
    expect(circularLinkedList.print()).toStrictEqual('')
  })

  it('should should print the list items', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);

    circularLinkedList.insertWhenEmpty(node1)
    circularLinkedList.insertAtEnd(node2)
    circularLinkedList.insertAtEnd(node3)


    expect(circularLinkedList.print()).toStrictEqual('1, 2, 3')
  })

  it('should return null trying to delete an empty list', () => {
    const circularLinkedList = new CircularLinkedList()

    expect(circularLinkedList.deleteNode(0)).toBeNull()
    expect(circularLinkedList.deleteNode(-1)).toBeNull()
    expect(circularLinkedList.deleteNode(5)).toBeNull()
  })

  it('should set the list to null when trying to delete a single node', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);

    circularLinkedList.insertWhenEmpty(node1)

    expect(circularLinkedList.deleteNode(0)).toStrictEqual(node1)
    expect(circularLinkedList.last).toStrictEqual(null);
    expect(circularLinkedList.print()).toStrictEqual('')
  })

  it('should return the first node of the list', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);

    circularLinkedList.insertWhenEmpty(node1)
    circularLinkedList.insertAtEnd(node2)
    circularLinkedList.insertAtEnd(node3)

    expect(circularLinkedList.deleteNode(0)).toStrictEqual(node1);
    expect(circularLinkedList.print()).toStrictEqual('2, 3')
  })

  it('should delete the last node of the list', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);

    circularLinkedList.insertWhenEmpty(node1)
    circularLinkedList.insertAtEnd(node2)
    circularLinkedList.insertAtEnd(node3)

    expect(circularLinkedList.print()).toStrictEqual('1, 2, 3')
    expect(circularLinkedList.deleteNode(2)).toStrictEqual(node3);
    expect(circularLinkedList.last).toStrictEqual(node2);
    expect(circularLinkedList.last.next).toStrictEqual(node1);
    expect(circularLinkedList.print()).toStrictEqual('1, 2')
  })

  it('should set a value', () => {
    const circularLinkedList = new CircularLinkedList()
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);

    const newNode = new LinkedListNode(5);

    circularLinkedList.insertWhenEmpty(node1)
    circularLinkedList.insertAtEnd(node2)
    circularLinkedList.insertAtEnd(node3)

    expect(circularLinkedList.print()).toStrictEqual('1, 2, 3')
    circularLinkedList.set(newNode, 0)
    expect(circularLinkedList.print()).toStrictEqual('5, 2, 3')
    expect(circularLinkedList.last.next.value).toStrictEqual(newNode.value);
  })
})