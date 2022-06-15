class BinaryTreeNode {
  data: Number | null = null
  left: BinaryTreeNode | null = null
  right: BinaryTreeNode | null = null

  constructor (data = null) {
    this.data = data;
    this.left = this.right = null;
  }
}