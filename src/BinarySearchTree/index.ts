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

  delete(value: number): void {
    if(!this.root) return null;
     this.deleteNode(this.root, value)
  }

  deleteNode(root: BinaryTreeNode, value: number): BinaryTreeNode {
    if(value < root.value) {
      root.left = this.deleteNode(root.left, value)
    }

    if(value > root.value) {
       root.right = this.deleteNode(root.right, value)
    }

    else {      
      if(!root.left && !root.right) {       
        root = null;
      }

      else if(root.right && !root.left) {
        root = root.right
      }

      else if(!root.right && root.left) {
        root = root.left
      }

      else {
        root.value = this.findMinValue(root.right);
        root.right = this.deleteNode(root.right, root.value)
      }
    }

    return root;
  }

  findMinValue(root: BinaryTreeNode): number {
    let minValue = root.value;

    while(root.left) {
      minValue = root.left.value;
      root = root.left;
    }

    return minValue
  }
}