import { BinarySearchTree } from "."
import { BinaryTreeNode } from "./node"

const node1 = new BinaryTreeNode(1)
const node2 = new BinaryTreeNode(2)
const node3 = new BinaryTreeNode(3)
const node4 = new BinaryTreeNode(4)
const node5 = new BinaryTreeNode(5)


describe('BinarySearchTree', () => {
  let binarySearchTree: BinarySearchTree

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree()
  })
  it('should insert in an empty tree', () => {
    expect(binarySearchTree.root).toBeNull();

    binarySearchTree.insert(node1)
    expect(binarySearchTree.root).not.toBeNull();
    expect(binarySearchTree.root).toStrictEqual(node1);
  })

  it('should add the smaller node in left and the greater in right', () => {
    binarySearchTree.insert(node2)
    binarySearchTree.insert(node1)
    binarySearchTree.insert(node3)

    expect(binarySearchTree.root.right).toStrictEqual(node3)
    expect(binarySearchTree.root.left).toStrictEqual(node1);
  })

  it('should find the minimal value in a tree', () => {
    binarySearchTree.insert(node2)
    binarySearchTree.insert(node1)
    binarySearchTree.insert(node3)

    expect(binarySearchTree.root.right).toStrictEqual(node3)
    expect(binarySearchTree.root.left).toStrictEqual(node1);
  })

  it('should return null trying delete an empty tree', () => {
    expect(binarySearchTree.delete(10)).toBeNull()
  })

  it('should search and delete a leaf node', () => {
    const nodeN0 = new BinaryTreeNode(0)
    const nodeN1 = new BinaryTreeNode(-1)

    binarySearchTree.insert(node2)
    binarySearchTree.insert(node1)
    binarySearchTree.insert(node3)
    binarySearchTree.insert(nodeN0)
    binarySearchTree.insert(nodeN1)

    expect(binarySearchTree.findMinValue(binarySearchTree.root)).toStrictEqual(nodeN1.value)
  })

  it('should delete the node that has only on child at left', () => {
    const nodeN0 = new BinaryTreeNode(0)
    const nodeN1 = new BinaryTreeNode(-1)

    binarySearchTree.insert(node2)
    binarySearchTree.insert(node1)
    binarySearchTree.insert(node3)
    binarySearchTree.insert(nodeN0)
    binarySearchTree.insert(nodeN1)

    expect(binarySearchTree.root.right).toStrictEqual(node3)
    expect(binarySearchTree.root.left).toStrictEqual(node1);
    expect(binarySearchTree.root.left.left).toStrictEqual(nodeN0)
    expect(binarySearchTree.root.left.left.left).toStrictEqual(nodeN1)

    binarySearchTree.delete(1)

    expect(binarySearchTree.root.left).toStrictEqual(nodeN0)
    expect(binarySearchTree.root.left.left).toStrictEqual(nodeN1)
  })

  it('should delete the node that has only on child at right', () => {
    binarySearchTree.insert(node2)
    binarySearchTree.insert(node1)
    binarySearchTree.insert(node3)
    binarySearchTree.insert(node4)
    binarySearchTree.insert(node5)

    expect(binarySearchTree.root.right).toStrictEqual(node3)
    expect(binarySearchTree.root.left).toStrictEqual(node1);

    expect(binarySearchTree.root.right.right).toStrictEqual(node4)
    expect(binarySearchTree.root.right.right.right).toStrictEqual(node5)

    binarySearchTree.delete(3)

    expect(binarySearchTree.root.right).toStrictEqual(node4)
    expect(binarySearchTree.root.right.right).toStrictEqual(node5)
    expect(binarySearchTree.root.left).toStrictEqual(node1);
  })

  it('should delete the node that has 2 children', () => {
    binarySearchTree.insert(node2)
    binarySearchTree.insert(node1)
    binarySearchTree.insert(node4)
    binarySearchTree.insert(node3)
    binarySearchTree.insert(node5)

    expect(binarySearchTree.root.right).toStrictEqual(node4)
    expect(binarySearchTree.root.left).toStrictEqual(node1);
    expect(binarySearchTree.root.right.left).toStrictEqual(node3)
    expect(binarySearchTree.root.right.right).toStrictEqual(node5)

    binarySearchTree.delete(4)

    expect(binarySearchTree.root.right).toEqual({value: 5, left: node3, right: null})
    expect(binarySearchTree.root.right.left).toStrictEqual(node3)
    expect(binarySearchTree.root.left).toStrictEqual(node1);
  })

  fit('should print the tree in preorder', () => {
    binarySearchTree.insert(node2)
    binarySearchTree.insert(node1)
    binarySearchTree.insert(node4)
    binarySearchTree.insert(node3)
    binarySearchTree.insert(node5)

    expect(binarySearchTree.printPreOrder()).toBe('2, 1, 4, 3, 5')
  })
})