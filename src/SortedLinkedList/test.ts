import { SortedLinkedList } from "."
import { SortedLinkedListNode } from "./node"


describe('SortedLinkedList', () => {
  it('should start with a null head and tail', () => {
    const sortedLinkedList = new SortedLinkedList()
    expect(sortedLinkedList.head).toBeNull()
    expect(sortedLinkedList.tail).toBeNull()
  })

 
  it('should insert 3 items disordered and ordered', () => {
    const sortedLinkedList = new SortedLinkedList()

    const node1 = new SortedLinkedListNode(55)
    const node2 = new SortedLinkedListNode(11)
    const node3 = new SortedLinkedListNode(32)


    sortedLinkedList.insert(node1);
    sortedLinkedList.insert(node2);
    sortedLinkedList.insert(node3);

    expect(sortedLinkedList.print()).toStrictEqual('11, 32, 55')
    expect(sortedLinkedList.size()).toBe(3)
  })

  it('should be to add a node with the same value at head', () => {
    const sortedLinkedList = new SortedLinkedList()

    const node3 = new SortedLinkedListNode(32)
    const node4 = new SortedLinkedListNode(32)

    sortedLinkedList.insert(node3);
    sortedLinkedList.insert(node4);

    expect(sortedLinkedList.print()).toStrictEqual('32, 32')
    expect(sortedLinkedList.size()).toBe(2)
  })

  it('should be able to handle with node that has the same value', () => {
    const sortedLinkedList = new SortedLinkedList()

    const node1 = new SortedLinkedListNode(55)
    const node2 = new SortedLinkedListNode(11)
    const node3 = new SortedLinkedListNode(32)
    const node4 = new SortedLinkedListNode(32)


    sortedLinkedList.insert(node1);
    sortedLinkedList.insert(node2);
    sortedLinkedList.insert(node3);
    sortedLinkedList.insert(node4);

    
    expect(sortedLinkedList.print()).toStrictEqual('11, 32, 32, 55')
    expect(sortedLinkedList.size()).toBe(4)
  })
})