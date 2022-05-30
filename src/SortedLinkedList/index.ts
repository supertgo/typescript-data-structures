import { SortedLinkedListNode } from "./node";
import { ISortedLinkedList } from "./types";

export class SortedLinkedList implements ISortedLinkedList {
  head: SortedLinkedListNode  | null = null;
  tail: SortedLinkedListNode | null = null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(data: SortedLinkedListNode): void {
    if(this.length == 0) {      
      this.head = data;
      this.tail = data;
    } else {
      let node = this.head; 
    
      for(let i = 0; i < this.length; i++) {     
        if(data.value < node.value) { 
          if(i > 0) {     
            const previousNode = this.getAt(i - 1)
            previousNode.next = data;
            data.next = node;
          } else {
            data.next = node;
            this.head = data;

            break;
          }
        } else if (data.value === node.value) {
          if(i > 0) {        
            const nextNodeOfCurrentNode = node.next; 
            node.next = data;
            data.next = nextNodeOfCurrentNode
          } else {
            data.next = node.next;
            this.head.next = data;  
            
            break;
          }
        } else {
          if(data.value > node.value) {
            if(node.next === null) {
              node.next = data;
              this.tail = data;
            } else {
              if (node.next.value > data.value) {
                data.next = node.next;
                node.next = data;
              }
            }
          }
        }
        node = node.next;
      }
    }

   this.length += 1;
  }
  delete(index: number): SortedLinkedListNode {
    if(index < 0 || index > this.length || !this.head) return null;

    let nodeToBeDeleted: SortedLinkedListNode;

    if(index === 0) {
      nodeToBeDeleted = this.head;
      this.head = this.head.next;
    } else {
      const previousNode = this.getAt(index - 1)
      nodeToBeDeleted = previousNode.next;
      previousNode.next = nodeToBeDeleted.next;
    }

    this.length -= 1;
    return nodeToBeDeleted
  }
  size(): number {
    return this.length;
  }
  removeDuplicatedNodes(): string {
    const removedNodes: string[] = [];
    let node = this.head;

    for(let i = 0; i < this.length; i++) {
      if(node.value === node.next.value) {
        removedNodes.push(`${this.delete(i).value}`)
      }
    }

    return removedNodes.join(', ')
  }
  print(): string {
    const values: String[] = [];
    let node = this.head;

    for(let i = 0; i < this.length; i++) {
        values.push(`${node.value}`)
        node = node.next;
    }

    return values.join(', ')
  }
  getAt(index: number): SortedLinkedListNode {
    if(index < 0 || index > this.length ) return null

    let node = this.head;

    for(let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }
}