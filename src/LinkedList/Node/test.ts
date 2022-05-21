import LinkedListNode from "."

describe('LinkedListNode', () => {
  it('should add a value and next should be null', () => {
    const node = new LinkedListNode('1')

    expect(node.value).toStrictEqual('1');
    expect(node.next).toBeNull()
  })

  it('should link nodes together', () => {
    const secondNode = new LinkedListNode('2')
    const firstNode = new LinkedListNode('1', secondNode)

    expect(firstNode.value).toStrictEqual('1')
    expect(firstNode.next).toStrictEqual(secondNode)
    expect(secondNode.value).toStrictEqual('2')
    expect(secondNode.next).toBeNull()
  })
})