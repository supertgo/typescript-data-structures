import { BinaryTreeNode } from "./node";
import { IBinarySearchTree } from "./types";

export class BinarySearchTree implements IBinarySearchTree {
  root: BinaryTreeNode | null = null

  constructor() {
    this.root = null;
  }
 
  insert( data: BinaryTreeNode): void {
    if(this.root) {
      this.insertNode(this.root, data)

      return
    } 

    this.root = data;
    return
  }

  insertNode(root: BinaryTreeNode, newNode: BinaryTreeNode): void {
    if(newNode.value < root.value) {
      if(root.left) {
        return this.insertNode(root.left, newNode)
      } else {
        root.left = newNode
      }
    } else if (newNode.value > root.value) {
      if(root.right) {
        return this.insertNode(root.right, newNode)
      } else {
        root.right = newNode
      }
    }
  }
}