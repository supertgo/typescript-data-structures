export class BinaryTreeNode {
  value: Number | null = null
  left: BinaryTreeNode | null = null
  right: BinaryTreeNode | null = null

  constructor (value = null) {
    this.value = value;
    this.left = this.right = null;
  }
}