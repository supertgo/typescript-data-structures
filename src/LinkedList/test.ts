import LinkedList from "."
import LinkedListNode from "./Node"

const node1 = new LinkedListNode({ content: '1'})
const node2 = new LinkedListNode({ content: '2'})
const node3 = new LinkedListNode({ content: '3'})
const node4 = new LinkedListNode({ content: '4'})
const node5 = new LinkedListNode({ content: '5'})



describe('LinkedList', () => {
  let linkedList: LinkedList<unknown>
  beforeEach(() => {
    linkedList = new LinkedList()
  })
  it('should start with a null head and tail', () => {
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
  })

  it('should add only a node in begin', () => {
    const node = new LinkedListNode({ content: '1'})

    linkedList.insertAtEnd(node)

    expect(linkedList.head).toStrictEqual(node)
    expect(linkedList.tail).toStrictEqual(node)
  })

  it('should add a node at end', () => {
    const firstNode = new LinkedListNode({ content: '1'})
    const secondNode = new LinkedListNode({ content: '2'})


    linkedList.insertAtEnd(firstNode)
    linkedList.insertAtEnd(secondNode)

    expect(linkedList.head).toStrictEqual(firstNode)
    expect(linkedList.tail).toStrictEqual(secondNode)
    expect(linkedList.size()).toBe(2)
  })

  it('should add only a node in begin', () => {

    linkedList.insertInBegin(node1)
    linkedList.insertInBegin(node2)

    expect(linkedList.head).toStrictEqual(node2)
    expect(linkedList.tail).toStrictEqual(node1)
    expect(linkedList.size()).toBe(2)
  })

  it('should add get the third node', () => {

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)
    linkedList.insertAtEnd(node3)
    linkedList.insertAtEnd(node4)
    linkedList.insertAtEnd(node5)

    expect(linkedList.get(2)).toStrictEqual(node3)
  })

  it('should add get the third node', () => {

    linkedList.insertAtEnd(node1)


    expect(linkedList.get(10)).toStrictEqual(null)
  })

  it('should return null if the index is greater than size on trying to delete', () => {

    linkedList.insertAtEnd(node1)

    expect(linkedList.deleteNode(10)).toStrictEqual(null)
  })


  it('should set head and tail to null when has only a node', () => {
    const node1 = new LinkedListNode({ content: '1'})

    linkedList.insertAtEnd(node1)

    expect(linkedList.deleteNode(0)).toStrictEqual(node1)
    expect(linkedList.head).toBeNull()
    expect(linkedList.tail).toBeNull()
  })

  it('should update the and head tail', () => {
    const node1 = new LinkedListNode({ content: '1'})
    const node2 = new LinkedListNode({ content: '1'})

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)

    expect(linkedList.head).toStrictEqual(node1)
    expect(linkedList.tail).toStrictEqual(node2)

    expect(linkedList.deleteNode(1)).toStrictEqual(node2)
    expect(linkedList.head).toStrictEqual(node1)
    expect(linkedList.tail).toStrictEqual(node1)
    expect(linkedList.tail.next).toBeNull()
  })


  it('should add get the third node', () => {

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)
    linkedList.insertAtEnd(node4)
    linkedList.insertAtEnd(node5)

    linkedList.insert(node3, 2)

    expect(linkedList.get(2)).toStrictEqual(node3)
  })

  it('should return null is the index to add is greater than size', () => {

    linkedList.insertAtEnd(node1)

    expect(linkedList.insert(node3, 5)).toStrictEqual(null)
  })

  it('should add in the begin if index equals 0', () => {

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)
    linkedList.insertAtEnd(node4)
    linkedList.insertAtEnd(node5)

    linkedList.insert(node3, 0)

    expect(linkedList.get(0)).toStrictEqual(node3)
  })


  it('should delete get the first node', () => {

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)
    linkedList.insertAtEnd(node3)
    linkedList.insertAtEnd(node4)
    linkedList.insertAtEnd(node5)


    expect(linkedList.deleteNode(0)).toStrictEqual(node1)
    expect(linkedList.head).toStrictEqual(node2)
    
  })

  it('should delete get the third node', () => {

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)
    linkedList.insertAtEnd(node3)
    linkedList.insertAtEnd(node4)
    linkedList.insertAtEnd(node5)


    expect(linkedList.get(2)).toStrictEqual(node3)
    expect(linkedList.deleteNode(2)).toStrictEqual(node3)
    expect(linkedList.get(2)).toStrictEqual(node4)
    
  })


  it('should delete get the last node', () => {

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)
    linkedList.insertAtEnd(node3)
    linkedList.insertAtEnd(node4)
    linkedList.insertAtEnd(node5)


    expect(linkedList.deleteNode(4)).toStrictEqual(node5)
    expect(linkedList.tail).toStrictEqual(node4)
  })

  it('should set a value passed index', () => {
    const node1 = new LinkedListNode({ content: '1'})
    const node2 = new LinkedListNode({ content: '2'})
    const updatedNode = new LinkedListNode({ content: 'update'})

    linkedList.insertAtEnd(node1)
    linkedList.insertAtEnd(node2)
    linkedList.set(updatedNode, 1)

    expect(linkedList.get(1)).toStrictEqual(updatedNode)
  })
})