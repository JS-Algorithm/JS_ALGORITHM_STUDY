function solution(numbers) {
  // 1. 숫자 가지고 이진수 생성
  // - 이때 포화이진트리 만들기 위해 앞에 빈 노드 개수만큼 0 붙여줌
  numbers = numbers.map((number) => getBinaryNumber(number));

  // 2. 1에서 구한 이진수로 원래 이진 트리를 구한 후 유효한지 확인
  isBinaryTree = numbers.map((number) =>
    checkValidBinaryTree(findOriginalArray(number)),
  );

  isBinaryTree = isBinaryTree.map((item) => (item === true ? 1 : 0));
  return isBinaryTree;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function getBinaryNumber(number) {
  let binaryNumber = [];

  while (number > 1) {
    binaryNumber.unshift(number % 2);
    number = Math.floor(number / 2);
  }
  binaryNumber.unshift(1);

  // 포화이진트리 만들기 위해 빈 노드 개수만큼 앞에 0붙여주기
  let n = binaryNumber.length;
  let m = n.toString(2).length;
  let zeros = '0'.repeat(2 ** m - 1 - n);
  let str = zeros + binaryNumber.join('');

  return str;
}

function checkValidBinaryTree(root) {
  if (root.left === null && root.right === null) return true; // 리프노드면 true
  if (root.left === null) return checkValidBinaryTree(root.right);
  if (root.right === null) return checkValidBinaryTree(root.left);

  if (root.val === '0') {
    // 내가 0이면 자식들도 다 0이여야 함
    if (root.left.val !== '0' || root.right.val !== '0') return false;
  }

  // 왼쪽, 오른쪽 중에 하나라도 false가 있다면 false
  if (checkValidBinaryTree(root.left) && checkValidBinaryTree(root.right))
    return true;

  return false;
}

function findOriginalArray(inorder) {
  let root = buildTree(inorder, 0, inorder.length - 1);
  return root;
}

function buildTree(inorder, left, right) {
  if (left > right) return null;

  let mid = Math.floor((left + right) / 2);
  let node = new TreeNode(inorder[mid]); // val 주기

  node.left = buildTree(inorder, left, mid - 1);
  node.right = buildTree(inorder, mid + 1, right);

  return node;
}

solution(numbers);
