import { Stack } from "."
import LinkedListNode from "../LinkedList/Node"

const node1 = new LinkedListNode({ content: '1'})
const node2 = new LinkedListNode({ content: '2'})

describe('Stack', () => {
  let stack: Stack<unknown>
  beforeEach(() => {
     stack = new Stack()

  })
  it('should start with an empty stack', () => {
    expect(stack.isEmpty()).toStrictEqual(true)
  })

  it('should add the second element at end', () => {
    stack.push(node1)
    stack.push(node2)

    expect(stack.size()).toBe(2)
    expect(stack.peek()).toStrictEqual(node2)
    expect(stack.isEmpty()).toBe(false)
  })

  it('should return null when peek an empty stack', () => {
    expect(stack.peek()).toStrictEqual(null)
  })

  it('should peek the last stack node', () => {
    stack.push(node1)
    stack.push(node2)

    expect(stack.peek()).toStrictEqual(node2)
  })

  it('should remove the last node', () => {
    stack.push(node1)
    stack.push(node2)

    expect(stack.pop()).toStrictEqual(node2)
  })

  it('should return null on trying to delete an empty stack', () => {
    expect(stack.pop()).toStrictEqual(null)
  })
})