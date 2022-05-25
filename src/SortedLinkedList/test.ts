import { SortedLinkedList } from "."

describe('SortedLinkedList', () => {
  it('should start with a null head and tail', () => {
    const sortedLinkedList = new SortedLinkedList()
    expect(sortedLinkedList.head).toBeNull()
    expect(sortedLinkedList.tail).toBeNull()
  })

  // it('should insert 2 and 1 but the list should be 1 - 2', () => {
  //   const sortedLinkedList = new SortedLinkedList()

  //   sortedLinkedList.insert(2);
  //   sortedLinkedList.insert(1);

  //   expect(sortedLinkedList.print).toStrictEqual('1, 2')
  //   expect(sortedLinkedList.size()).toBe(2)
  // })
})