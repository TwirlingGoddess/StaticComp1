export default class Node {
  constructor(value) {
    this.value = value || null;
    this.children = {};
    this.completedWord = null;
  }
}