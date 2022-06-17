import { BinaryTreeNode } from "./node";

export interface IBinarySearchTree {
  insert(root: BinaryTreeNode, data: BinaryTreeNode): void;
  insertNode(node: BinaryTreeNode, newNode: BinaryTreeNode): void;
}