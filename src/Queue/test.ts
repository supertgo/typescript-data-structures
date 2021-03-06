import { Queue } from "."
import LinkedListNode from "../LinkedList/Node"

const node1 = new LinkedListNode({ content: '1'})
const node2 = new LinkedListNode({ content: '2'})


describe('Queue', () => {
  let queue: Queue<unknown>
  beforeEach(() => {
    queue = new Queue()
  })
  it('should start with an empty queue', () => {
    expect(queue.isEmpty()).toBeTruthy()
    expect(queue.size()).toBe(0)
  })

  it('should add an node to queue', () => {
    queue.enqueue(node1)

    expect(queue.peek()).toStrictEqual(node1);
    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.size()).toBe(1)
  })

  it('should return null trying to delete an empty queue', () => {
    expect(queue.dequeue()).toBeNull()
  })

  it('should not peek an empty queue', () => {
    expect(queue.peek()).toBeNull()
  })


  it('should append the second element to the end of the queue', () => {
    queue.enqueue(node1)
    queue.enqueue(node2)

    expect(queue.size()).toBe(2)
    expect(queue.isEmpty()).toBeFalsy()
    expect(queue.peek()).not.toStrictEqual(node2);
    expect(queue.peek()).toStrictEqual(node1);

    expect(queue.dequeue()).toStrictEqual(node1)
    expect(queue.peek()).toStrictEqual(node2)
  })
})