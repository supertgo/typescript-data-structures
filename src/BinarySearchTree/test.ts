import { BinarySearchTree } from "."
import { BinaryTreeNode } from "./node"

const node1 = new BinaryTreeNode(1)
const node2 = new BinaryTreeNode(2)
const node3 = new BinaryTreeNode(3)


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
})