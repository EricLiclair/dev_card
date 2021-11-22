const COMPLETED_QUESTIONS = {}
export default COMPLETED_QUESTIONS;
// const store = {
//     "QID-FYCQOH": {
//         "link": "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
//         "description": "Reverse the array",
//         "topics": ["ARRAY"]
//     },
//     "QID-PZLCUG": {
//         "link": "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
//         "description": "Find the Kth max and min element of an array ",
//         "topics": ["ARRAY"]
//     },
//     "QID-ZACMMX": {
//         "link": "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
//         "description": "Move all the negative elements to one side of the array ",
//         "topics": ["ARRAY"]
//     },
//     "QID-XXFZCD": {
//         "link": "https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0",
//         "description": "Find the Union and Intersection of the two sorted arrays.",
//         "topics": ["ARRAY"]
//     },
//     "QID-QONRAL": {
//         "link": "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
//         "description": "find Largest sum contiguous Subarray [V. IMP]",
//         "topics": ["ARRAY", "ARRAY", "DYNAMIC PROGRAMMING"]
//     },
//     "QID-TENVNI": {
//         "link": "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
//         "description": "Merge 2 sorted arrays without using Extra space.",
//         "topics": ["ARRAY", "SEARCHING AND SORTING"]
//     },
//     "QID-GFWPJF": {
//         "link": "https://leetcode.com/problems/next-permutation/",
//         "description": "Next Permutation",
//         "topics": ["ARRAY"]
//     },
//     "QID-ULQKOV": {
//         "link": "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
//         "description": "Count Inversion",
//         "topics": ["ARRAY", "SEARCHING AND SORTING"]
//     },
//     "QID-MYHZCL": {
//         "link": "https://practice.geeksforgeeks.org/problems/common-elements1132/1",
//         "description": "find common elements In 3 sorted arrays",
//         "topics": ["ARRAY"]
//     },
//     "QID-SESTQT": {
//         "link": "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
//         "description": "Rearrange the array in alternating positive and negative items with O(1) extra space",
//         "topics": ["ARRAY"]
//     },
//     "QID-KJHNUR": {
//         "link": "https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0",
//         "description": "Find factorial of a large number",
//         "topics": ["ARRAY"]
//     },
//     "QID-EBZCEI": {
//         "link": "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
//         "description": "Maximum profit by buying and selling a share atmost twice",
//         "topics": ["ARRAY", "DYNAMIC PROGRAMMING"]
//     },
//     "QID-RILRBA": {
//         "link": "https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
//         "description": "Find whether an array is a subset of another array",
//         "topics": ["ARRAY"]
//     },
//     "QID-VWILPE": {
//         "link": "https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0",
//         "description": "Find the triplet that sum to a given value",
//         "topics": ["ARRAY"]
//     },
//     "QID-FUCUGD": {
//         "link": "https://practice.geeksforgeeks.org/problems/trapping-rain-water/0",
//         "description": "Trapping Rain water problem",
//         "topics": ["ARRAY"]
//     },
//     "QID-WSLYCJ": {
//         "link": "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
//         "description": "Chocolate Distribution problem",
//         "topics": ["ARRAY", "GREEDY"]
//     },
//     "QID-OTGOTZ": {
//         "link": "https://practice.geeksforgeeks.org/problems/palindromic-array/0",
//         "description": "Minimum no. of operations required to make an array palindrome",
//         "topics": ["ARRAY"]
//     },
//     "QID-LSIDFB": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
//         "description": "Median of 2 sorted arrays of equal size",
//         "topics": ["ARRAY"]
//     },
//     "QID-SOHMZP": {
//         "link": "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
//         "description": "Median of 2 sorted arrays of different size",
//         "topics": ["ARRAY"]
//     },
//     "QID-WTJDJC": {
//         "link": "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0",
//         "description": "Spiral traversal on a Matrix",
//         "topics": ["MATRIX"]
//     },
//     "QID-TYOOUS": {
//         "link": "https://leetcode.com/problems/search-a-2d-matrix/",
//         "description": "Search an element in a matriix",
//         "topics": ["MATRIX"]
//     },
//     "QID-SGWWPP": {
//         "link": "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
//         "description": "Find median in a row wise sorted matrix",
//         "topics": ["MATRIX"]
//     },
//     "QID-OQNAPO": {
//         "link": "https://practice.geeksforgeeks.org/problems/sorted-matrix/0",
//         "description": "Print elements in sorted order using row-column wise sorted matrix",
//         "topics": ["MATRIX"]
//     },
//     "QID-XIQNKC": {
//         "link": "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
//         "description": "Maximum size rectangle",
//         "topics": ["MATRIX"]
//     },
//     "QID-FOJMBM": {
//         "link": "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
//         "description": "Kth smallest element in a row-cpumn wise sorted matrix",
//         "topics": ["MATRIX"]
//     },
//     "QID-NMURZN": {
//         "link": "",
//         "description": "Why strings are immutable in Java?",
//         "topics": ["STRING", "LINKED LIST", "LINKED LIST"]
//     },
//     "QID-OGWRIU": {
//         "link": "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
//         "description": "Write a Code to check whether one string is a rotation of another",
//         "topics": ["STRING"]
//     },
//     "QID-FUAITC": {
//         "link": "https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings",
//         "description": "Write a Program to check whether a string is a valid shuffle of two strings or not",
//         "topics": ["STRING"]
//     },
//     "QID-YLXCTL": {
//         "link": "https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0",
//         "description": "Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]",
//         "topics": ["STRING"]
//     },
//     "QID-VJGGHG": {
//         "link": "https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/",
//         "description": "Split the Binary string into two substring with equal 0s and 1s",
//         "topics": ["STRING"]
//     },
//     "QID-XGGYWD": {
//         "link": "https://practice.geeksforgeeks.org/problems/word-wrap/0",
//         "description": "Word Wrap Problem [VERY IMP].",
//         "topics": ["STRING", "DYNAMIC PROGRAMMING"]
//     },
//     "QID-SRMIPM": {
//         "link": "https://practice.geeksforgeeks.org/problems/next-permutation/0",
//         "description": "Find next greater number with same set of digits. [Very Very IMP]",
//         "topics": ["STRING"]
//     },
//     "QID-HBCJVY": {
//         "link": "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
//         "description": "Balanced Parenthesis problem.[Imp]",
//         "topics": ["STRING", "STACKS AND QUEUES"]
//     },
//     "QID-GTYMDB": {
//         "link": "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
//         "description": "Rabin Karp Algo",
//         "topics": ["STRING"]
//     },
//     "QID-SHTAHZ": {
//         "link": "https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
//         "description": "KMP Algo",
//         "topics": ["STRING"]
//     },
//     "QID-PDLUOD": {
//         "link": "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
//         "description": "Count All Palindromic Subsequence in a given String.",
//         "topics": ["STRING", "DYNAMIC PROGRAMMING"]
//     },
//     "QID-OIFRWE": {
//         "link": "https://www.geeksforgeeks.org/find-count-number-given-string-present-2d-character-array/",
//         "description": "Count of number of given string in 2D character array",
//         "topics": ["STRING"]
//     },
//     "QID-BICWSY": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-the-string-in-grid/0",
//         "description": "Search a Word in a 2D Grid of characters.",
//         "topics": ["STRING"]
//     },
//     "QID-QDMJVY": {
//         "link": "https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/",
//         "description": "Boyer Moore Algorithm for Pattern Searching.",
//         "topics": ["STRING"]
//     },
//     "QID-XSEPVZ": {
//         "link": "https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0",
//         "description": "Converting Roman Numerals to Decimal",
//         "topics": ["STRING"]
//     },
//     "QID-MZYJRW": {
//         "link": "https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/",
//         "description": "Program to generate all possible valid IP addresses from given  string.",
//         "topics": ["STRING"]
//     },
//     "QID-QNUQXY": {
//         "link": "https://practice.geeksforgeeks.org/problems/smallest-distant-window/0",
//         "description": "Write a program tofind the smallest window that contains all characters of string itself.",
//         "topics": ["STRING"]
//     },
//     "QID-COJCSE": {
//         "link": "https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/",
//         "description": "Transform One String to Another using Minimum Number of Given Operation",
//         "topics": ["STRING"]
//     },
//     "QID-WWJJKT": {
//         "link": "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
//         "description": "Find first and last positions of an element in a sorted array",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-XEAYZI": {
//         "link": "https://practice.geeksforgeeks.org/problems/count-squares3649/1",
//         "description": "square root of an integer",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-ZYVWBQ": {
//         "link": "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
//         "description": "Maximum and minimum of an array using minimum number of comparisons",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-CADRFP": {
//         "link": "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
//         "description": "Optimum location of point to minimize total distance",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-UTMDEZ": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
//         "description": "Find the repeating and the missing",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-ZORCYS": {
//         "link": "https://practice.geeksforgeeks.org/problems/majority-element/0",
//         "description": "find majority element",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-XDSKEX": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
//         "description": "find a pair with a given difference",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-TIGEWL": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
//         "description": "find four elements that sum to a given value",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-NWLGXV": {
//         "link": "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
//         "description": "maximum sum such that no 2 elements are adjacent",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-NVKLQK": {
//         "link": "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
//         "description": "Count triplet with sum smaller than a given value",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-TGRYQB": {
//         "link": "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
//         "description": "print all subarrays with 0 sum",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-NEQEGL": {
//         "link": "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
//         "description": "Product array Puzzle",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-MNLYNJ": {
//         "link": "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
//         "description": "Rasta and Kheshtak",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-GGWDTF": {
//         "link": "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/",
//         "description": "Find pivot element in a sorted array",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-HXABJC": {
//         "link": "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
//         "description": "Book Allocation Problem",
//         "topics": ["SEARCHING AND SORTING", "SEARCHING AND SORTING"]
//     },
//     "QID-DMFQBK": {
//         "link": "https://www.spoj.com/problems/EKO/",
//         "description": "EKOSPOJ:",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-MPHQNB": {
//         "link": "https://www.spoj.com/problems/PRATA/",
//         "description": "ROTI-Prata SPOJ",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-LVQMVU": {
//         "link": "https://www.spoj.com/problems/ANARC05B/",
//         "description": "DoubleHelix SPOJ",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-JRMMHH": {
//         "link": "https://www.spoj.com/problems/SUBSUMS/",
//         "description": "Subset Sums",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-ILBGTK": {
//         "link": "https://www.geeksforgeeks.org/in-place-merge-sort/",
//         "description": "Implement Merge-sort in-place",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-CSBDDV": {
//         "link": "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries",
//         "description": "Partitioning and Sorting Arrays with Many Repeated Entries",
//         "topics": ["SEARCHING AND SORTING"]
//     },
//     "QID-SAJYNE": {
//         "link": "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
//         "description": "Reverse a Linked List in group of Given Size. [Very Imp]",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-DFHIUM": {
//         "link": "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
//         "description": "Write a program to Detect loop in a linked list.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-RWZRNX": {
//         "link": "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
//         "description": "Remove Duplicates in a sorted Linked List.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-RANQMO": {
//         "link": "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
//         "description": "Add 1 to a number represented as a Linked List.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-FPHMZH": {
//         "link": "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
//         "description": "Add two numbers represented by linked lists.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-DSWDRL": {
//         "link": "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
//         "description": "Intersection Point of two Linked Lists.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-ZZSECP": {
//         "link": "https://leetcode.com/problems/middle-of-the-linked-list/",
//         "description": "Find the middle Element of a linked list.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-HAFGQP": {
//         "link": "https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
//         "description": "Check if a linked list is a circular linked list.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-JMQQRH": {
//         "link": "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
//         "description": "Split a Circular linked list into two halves.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-NRCUJS": {
//         "link": "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
//         "description": "Write a Program to check whether the Singly Linked list is a palindrome or not.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-BZSPSF": {
//         "link": "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
//         "description": "Deletion from a Circular Linked List.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-OPMQQC": {
//         "link": "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
//         "description": "Find pairs with a given sum in a DLL.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-UIDAFJ": {
//         "link": "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
//         "description": "Rotate DoublyLinked list by N nodes.",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-EJFWKJ": {
//         "link": "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
//         "description": "Rotate a Doubly Linked list in group of Given Size.[Very IMP]",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-NLNWNT": {
//         "link": "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
//         "description": "Clone a linked list with next and random pointer",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-WAPSQU": {
//         "link": "https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
//         "description": "Multiply 2 no. represented by LL",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-JZJETU": {
//         "link": "https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
//         "description": "Delete nodes which have a greater value on right side",
//         "topics": ["LINKED LIST"]
//     },
//     "QID-TQDAYT": {
//         "link": "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
//         "description": "Find the first non-repeating character from a stream of characters",
//         "topics": ["LINKED LIST", "STACKS AND QUEUES"]
//     },
//     "QID-JKKOTR": {
//         "link": "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
//         "description": "Diameter of a tree",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-VMRKHM": {
//         "link": "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/",
//         "description": "Inorder Traversal of a tree both using recursion and Iteration",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-NJYLFG": {
//         "link": "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/",
//         "description": "Postorder Traversal of a tree both using recursion and Iteration",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-LZQFNK": {
//         "link": "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
//         "description": "Left View of a tree",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-RWYSUK": {
//         "link": "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
//         "description": "Top View of a tree",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-PIYUGF": {
//         "link": "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
//         "description": "Zig-Zag traversal of a binary tree",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-ERODWL": {
//         "link": "https://www.geeksforgeeks.org/construct-binary-tree-string-bracket-representation/",
//         "description": "Construct Binary Tree from String with Bracket Representation",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-ASOAHA": {
//         "link": "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
//         "description": "Convert Binary tree into Doubly Linked List",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-JAMCZI": {
//         "link": "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/",
//         "description": "Find minimum swaps required to convert a Binary tree into BST",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-XYPCTO": {
//         "link": "https://practice.geeksforgeeks.org/problems/sum-tree/1",
//         "description": "Check if Binary tree is Sum tree or not",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-DMKIKF": {
//         "link": "https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
//         "description": "Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-WHOTXB": {
//         "link": "https://www.geeksforgeeks.org/check-given-graph-tree/",
//         "description": "Check if given graph is tree or not.  [ IMP ]",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-KNEKFH": {
//         "link": "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
//         "description": "Find Largest subtree sum in a tree",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-ZAOXUD": {
//         "link": "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
//         "description": "Maximum Sum of nodes in Binary tree such that no two are adjacent ",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-RVGNVI": {
//         "link": "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
//         "description": "Find LCA in a Binary tree",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-ZUDRSZ": {
//         "link": "https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
//         "description": "Tree Isomorphism Problem",
//         "topics": ["BINARY TREES"]
//     },
//     "QID-SCYMIC": {
//         "link": "https://leetcode.com/problems/delete-node-in-a-bst/",
//         "description": "Deletion of a node in a BST",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-HKZCIZ": {
//         "link": "https://practice.geeksforgeeks.org/problems/check-for-bst/1",
//         "description": "Check if a tree is a BST or not ",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-FVCGBV": {
//         "link": "https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
//         "description": "Populate Inorder successor of all nodes",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-UNGAHI": {
//         "link": "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
//         "description": "Merge two BST [ V.V.V>IMP ]",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-MMDBXU": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
//         "description": "Find Kth smallest element in a BST",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-DVSCIM": {
//         "link": "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
//         "description": "Find the median of BST in O(n) time and O(1) space",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-UTFHLP": {
//         "link": "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
//         "description": "Count BST ndoes that lie in a given range",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-DAROKW": {
//         "link": "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
//         "description": "Flatten BST to sorted list",
//         "topics": ["BINARY SEARCH TREES"]
//     },
//     "QID-ODGMWD": {
//         "link": "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room/0",
//         "description": "Activity Selection Problem",
//         "topics": ["GREEDY"]
//     },
//     "QID-ULYYAX": {
//         "link": "https://practice.geeksforgeeks.org/problems/job-sequencing-problem/0",
//         "description": "Job SequencingProblem",
//         "topics": ["GREEDY"]
//     },
//     "QID-ENOFKX": {
//         "link": "https://practice.geeksforgeeks.org/problems/water-connection-problem/0",
//         "description": "Water Connection Problem",
//         "topics": ["GREEDY"]
//     },
//     "QID-KMCKMB": {
//         "link": "https://practice.geeksforgeeks.org/problems/fractional-knapsack/0",
//         "description": "Fractional Knapsack Problem",
//         "topics": ["GREEDY"]
//     },
//     "QID-LKZRZP": {
//         "link": "https://practice.geeksforgeeks.org/problems/coin-piles/0",
//         "description": "Greedy Algorithm to find Minimum number of Coins",
//         "topics": ["GREEDY"]
//     },
//     "QID-GNKCTO": {
//         "link": "https://practice.geeksforgeeks.org/problems/minimum-platforms/0",
//         "description": "Minimum Platforms Problem",
//         "topics": ["GREEDY"]
//     },
//     "QID-ORSKTR": {
//         "link": "https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/",
//         "description": "Buy Maximum Stocks if i stocks can be bought on i-th day",
//         "topics": ["GREEDY"]
//     },
//     "QID-FSYLZM": {
//         "link": "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
//         "description": "Minimize Cash Flow among a given set of friends who have borrowed money from each other",
//         "topics": ["GREEDY", "GRAPH"]
//     },
//     "QID-TXXAOU": {
//         "link": "https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/",
//         "description": "Minimum Cost to cut a board into squares",
//         "topics": ["GREEDY"]
//     },
//     "QID-AJKSGY": {
//         "link": "https://www.geeksforgeeks.org/survival/",
//         "description": "Check if it is possible to survive on Island",
//         "topics": ["GREEDY"]
//     },
//     "QID-MKXLZM": {
//         "link": "https://practice.geeksforgeeks.org/problems/swap-and-maximize/0",
//         "description": "Maximize sum of consecutive differences in a circular array",
//         "topics": ["GREEDY"]
//     },
//     "QID-OFGEMS": {
//         "link": "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
//         "description": "Program for Shortest Job First (or SJF) CPU Scheduling",
//         "topics": ["GREEDY"]
//     },
//     "QID-NBYSMC": {
//         "link": "https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
//         "description": "Program for Least Recently Used (LRU) Page Replacement algorithm",
//         "topics": ["GREEDY"]
//     },
//     "QID-ZRIFCI": {
//         "link": "https://www.spoj.com/problems/DEFKIN/",
//         "description": "DEFKIN -Defense of a Kingdom",
//         "topics": ["GREEDY"]
//     },
//     "QID-SLKTPH": {
//         "link": "https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/",
//         "description": "K Centers Problem",
//         "topics": ["GREEDY"]
//     },
//     "QID-CCECSL": {
//         "link": "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
//         "description": "Minimum Cost of ropes",
//         "topics": ["GREEDY", "HEAP"]
//     },
//     "QID-LKLNLW": {
//         "link": "https://practice.geeksforgeeks.org/problems/smallest-number5829/1",
//         "description": "Find smallest number with given number of digits and sum of digits",
//         "topics": ["GREEDY"]
//     },
//     "QID-OWNTKK": {
//         "link": "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
//         "description": "Printing all solutions in N-Queen Problem",
//         "topics": ["BACKTRACKING"]
//     },
//     "QID-IYNMGP": {
//         "link": "https://practice.geeksforgeeks.org/problems/word-break-part-2/0",
//         "description": "Word Break Problem using Backtracking",
//         "topics": ["BACKTRACKING"]
//     },
//     "QID-GMSSPN": {
//         "link": "https://leetcode.com/problems/remove-invalid-parentheses/",
//         "description": "Remove Invalid Parentheses",
//         "topics": ["BACKTRACKING"]
//     },
//     "QID-AUPVQO": {
//         "link": "https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0",
//         "description": "Sudoku Solver",
//         "topics": ["BACKTRACKING"]
//     },
//     "QID-ICVBAG": {
//         "link": "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
//         "description": "Subset Sum Problem",
//         "topics": ["BACKTRACKING", "DYNAMIC PROGRAMMING", "DYNAMIC PROGRAMMING"]
//     },
//     "QID-MLYYSR": {
//         "link": "https://www.geeksforgeeks.org/tug-of-war/",
//         "description": "Tug of War",
//         "topics": ["BACKTRACKING"]
//     },
//     "QID-PMPYVH": {
//         "link": "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
//         "description": "Find if there is a path of more than k length from a source",
//         "topics": ["BACKTRACKING", "GRAPH"]
//     },
//     "QID-OWKNHD": {
//         "link": "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
//         "description": "Print all possible paths from top left to bottom right of a mXn matrix",
//         "topics": ["BACKTRACKING"]
//     },
//     "QID-ZUWOWS": {
//         "link": "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
//         "description": "find the middle element of a stack",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-PPBYYB": {
//         "link": "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
//         "description": "Implement N stacks in an Array",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-ASODKI": {
//         "link": "https://practice.geeksforgeeks.org/problems/next-larger-element/0",
//         "description": "Find the next Greater element",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-TDSWRA": {
//         "link": "https://www.geeksforgeeks.org/arithmetic-expression-evalution/",
//         "description": "Arithmetic Expression evaluation",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-KXVKTQ": {
//         "link": "https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
//         "description": "Evaluation of Postfix expression",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-SKWAUO": {
//         "link": "https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack",
//         "description": "Implement a method to insert an element at its bottom without using any other data structure.",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-OMQGFM": {
//         "link": "https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
//         "description": "Sort a Stack using recursion",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-EUFHNN": {
//         "link": "https://practice.geeksforgeeks.org/problems/overlapping-intervals/0",
//         "description": "Merge Overlapping Intervals",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-DOVSBP": {
//         "link": "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0",
//         "description": "Largest rectangular Area in Histogram",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-VOTJLG": {
//         "link": "https://practice.geeksforgeeks.org/problems/valid-substring0624/1",
//         "description": "Length of the Longest Valid Substring",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-GAIDKR": {
//         "link": "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
//         "description": "Implement Stack using Queue",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-BVRANB": {
//         "link": "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
//         "description": "Implement Queue using Stack  ",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-YNLDEC": {
//         "link": "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
//         "description": "Implement n queue in an array",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-EYETTF": {
//         "link": "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
//         "description": "Implement a Circular queue",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-UQSBHW": {
//         "link": "https://practice.geeksforgeeks.org/problems/lru-cache/1",
//         "description": "LRU Cache Implementationa",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-ENWHJC": {
//         "link": "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
//         "description": "Reverse a Queue using recursion",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-MOVOXB": {
//         "link": "https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
//         "description": "Reverse the first K elements of a queue",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-ZETKDX": {
//         "link": "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
//         "description": "Interleave the first half of the queue with second half",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-VQTRZX": {
//         "link": "https://practice.geeksforgeeks.org/problems/circular-tour/1",
//         "description": "Find the first circular tour that visits all Petrol Pumps",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-RIAAKR": {
//         "link": "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
//         "description": "First negative integer in every window of size k",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-PHVTRU": {
//         "link": "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
//         "description": "Sum of minimum and maximum elements of all subarrays of size k.",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-FEWHMK": {
//         "link": "https://www.geeksforgeeks.org/next-smaller-element/",
//         "description": "Next Smaller Element",
//         "topics": ["STACKS AND QUEUES"]
//     },
//     "QID-GLQWNQ": {
//         "link": "https://www.geeksforgeeks.org/heap-sort/",
//         "description": "Sort an Array using heap. (HeapSort)",
//         "topics": ["HEAP"]
//     },
//     "QID-VZFGPE": {
//         "link": "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
//         "description": "Maximum of all subarrays of size k.",
//         "topics": ["HEAP"]
//     },
//     "QID-VKOSTC": {
//         "link": "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
//         "description": "Merge K sorted arrays. [ IMP ]",
//         "topics": ["HEAP"]
//     },
//     "QID-LEDHFM": {
//         "link": "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0",
//         "description": "Merge 2 Binary Max Heaps",
//         "topics": ["HEAP"]
//     },
//     "QID-WTBUBF": {
//         "link": "https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/",
//         "description": "Kth largest sum continuous subarrays",
//         "topics": ["HEAP"]
//     },
//     "QID-QVYBVO": {
//         "link": "https://leetcode.com/problems/reorganize-string/",
//         "description": "Leetcode- reorganize strings",
//         "topics": ["HEAP"]
//     },
//     "QID-SKNWWO": {
//         "link": "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
//         "description": "Convert min heap to max heap",
//         "topics": ["HEAP"]
//     },
//     "QID-MVSYQM": {
//         "link": "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/",
//         "description": "Detect Cycle in Directed Graph using BFS/DFS Algo ",
//         "topics": ["GRAPH"]
//     },
//     "QID-KSVRKC": {
//         "link": "https://practice.geeksforgeeks.org/problems/steps-by-knight/0",
//         "description": "Minimum Step by Knight",
//         "topics": ["GRAPH"]
//     },
//     "QID-RPHLTC": {
//         "link": "https://leetcode.com/problems/flood-fill/",
//         "description": "flood fill algo",
//         "topics": ["GRAPH"]
//     },
//     "QID-KIVQBI": {
//         "link": "https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/",
//         "description": "Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
//         "topics": ["GRAPH"]
//     },
//     "QID-UNJTIU": {
//         "link": "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
//         "description": "Find whether it is possible to finish all tasks or not from given dependencies",
//         "topics": ["GRAPH"]
//     },
//     "QID-SNYWMG": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
//         "description": "Find the no. of Isalnds",
//         "topics": ["GRAPH"]
//     },
//     "QID-ZMCGUU": {
//         "link": "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
//         "description": "Implement Prims Algorithm",
//         "topics": ["GRAPH"]
//     },
//     "QID-MZILUD": {
//         "link": "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
//         "description": "Total no. of Spanning tree in a graph",
//         "topics": ["GRAPH"]
//     },
//     "QID-ULERJV": {
//         "link": "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
//         "description": "Travelling Salesman Problem",
//         "topics": ["GRAPH"]
//     },
//     "QID-HRBMHK": {
//         "link": "https://www.geeksforgeeks.org/graph-coloring-applications/",
//         "description": "Graph ColouringProblem",
//         "topics": ["GRAPH"]
//     },
//     "QID-HOSUCU": {
//         "link": "https://leetcode.com/problems/snakes-and-ladders/",
//         "description": "Snake and Ladders Problem",
//         "topics": ["GRAPH"]
//     },
//     "QID-ZQZXOF": {
//         "link": "https://www.geeksforgeeks.org/bridge-in-a-graph/",
//         "description": "Find bridge in a graph",
//         "topics": ["GRAPH"]
//     },
//     "QID-LHPJMW": {
//         "link": "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
//         "description": "Count Strongly connected Components(Kosaraju Algo)",
//         "topics": ["GRAPH"]
//     },
//     "QID-YDVBLS": {
//         "link": "https://www.geeksforgeeks.org/bipartite-graph/",
//         "description": "Check whether a graph is Bipartite or Not",
//         "topics": ["GRAPH"]
//     },
//     "QID-BORMTJ": {
//         "link": "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
//         "description": "Detect Negative cycle in a graph",
//         "topics": ["GRAPH"]
//     },
//     "QID-CFSNTN": {
//         "link": "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
//         "description": "Longest path in a Directed Acyclic Graph",
//         "topics": ["GRAPH"]
//     },
//     "QID-PGJDCR": {
//         "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
//         "description": "Cheapest Flights Within K Stops",
//         "topics": ["GRAPH"]
//     },
//     "QID-KZAICG": {
//         "link": "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
//         "description": "Minimum edges to reverse o make path from source to destination",
//         "topics": ["GRAPH"]
//     },
//     "QID-TDGWIV": {
//         "link": "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
//         "description": "Paths to travel each nodes using each edge(Seven Bridges)",
//         "topics": ["GRAPH"]
//     },
//     "QID-BCJSDR": {
//         "link": "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
//         "description": "Two Clique Problem",
//         "topics": ["GRAPH"]
//     },
//     "QID-OQDMMA": {
//         "link": "https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/",
//         "description": "Find shortest unique prefix for every word in a given list",
//         "topics": ["TRIE"]
//     },
//     "QID-AHOSHH": {
//         "link": "https://practice.geeksforgeeks.org/problems/phone-directory/0",
//         "description": "Implement a Phone Directory",
//         "topics": ["TRIE"]
//     },
//     "QID-IZSOMN": {
//         "link": "https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
//         "description": "Print unique rows in a given boolean matrix",
//         "topics": ["TRIE"]
//     },
//     "QID-YBWVUB": {
//         "link": "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
//         "description": "Knapsack Problem",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-VOPAUX": {
//         "link": "https://www.geeksforgeeks.org/permutation-coefficient/",
//         "description": "Permutation CoefficientProblem",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-FWAWZB": {
//         "link": "https://www.geeksforgeeks.org/program-nth-catalan-number/",
//         "description": "Program for nth Catalan Number",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-FKSPHV": {
//         "link": "https://www.geeksforgeeks.org/gold-mine-problem/",
//         "description": "Gold Mine Problem",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-UUDTMO": {
//         "link": "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/",
//         "description": "Assembly Line SchedulingProblem",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-MKHDRC": {
//         "link": "https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0",
//         "description": "Longest Increasing Subsequence",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-EXTQKM": {
//         "link": "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
//         "description": "Maximum Sum Increasing Subsequence",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-VJOBCE": {
//         "link": "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
//         "description": "Maximum subsequence sum such that no three are consecutive",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-JTBWHX": {
//         "link": "https://practice.geeksforgeeks.org/problems/max-length-chain/1",
//         "description": "Maximum Length Chain of Pairs",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-ABYSSS": {
//         "link": "https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0",
//         "description": "Maximum size square sub-matrix with all 1s",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-PDEUEZ": {
//         "link": "https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference/0",
//         "description": "Maximum sum of pairs with specific difference",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-KMJEXR": {
//         "link": "https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1",
//         "description": "Min Cost PathProblem",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-FFSDEF": {
//         "link": "https://practice.geeksforgeeks.org/problems/longest-common-substring/0",
//         "description": "Longest Common Substring",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-TUWDIA": {
//         "link": "https://practice.geeksforgeeks.org/problems/reach-a-given-score/0",
//         "description": "Count number of ways to reacha given score in a game",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-BYHTBT": {
//         "link": "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
//         "description": "Longest Palindromic Subsequence",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-WSFRFV": {
//         "link": "https://leetcode.com/problems/longest-palindromic-substring/",
//         "description": "Longest Palindromic Substring",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-WTVVGD": {
//         "link": "https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
//         "description": "Count Derangements (Permutation such that no element appears in its original position) [ IMPORTANT ]",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-PKUPCG": {
//         "link": "https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
//         "description": "Palindrome PartitioningProblem",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-DUWCAD": {
//         "link": "https://practice.geeksforgeeks.org/problems/boolean-parenthesization/0",
//         "description": "Boolean Parenthesization Problem",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-HMRKVV": {
//         "link": "https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
//         "description": "Largest area rectangular sub-matrix with equal number of 1s and 0s [ IMP ]",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-SFARWR": {
//         "link": "https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0",
//         "description": "Maximum sum rectangle in a 2D matrix",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-COREUP": {
//         "link": "https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
//         "description": "Maximum profit by buying and selling a share at most k times",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-FVKNKH": {
//         "link": "https://practice.geeksforgeeks.org/problems/interleaved-strings/1",
//         "description": "Find if a string is interleaved of two other strings",
//         "topics": ["DYNAMIC PROGRAMMING"]
//     },
//     "QID-LICJUW": {
//         "link": "https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
//         "description": "Count total set bits in all numbers from 1 to n",
//         "topics": ["BIT MANIPULATION"]
//     },
//     "QID-KBNOCU": {
//         "link": "https://practice.geeksforgeeks.org/problems/power-of-2/0",
//         "description": "Program to find whether a no is power of two",
//         "topics": ["BIT MANIPULATION"]
//     },
//     "QID-DUSGCR": {
//         "link": "https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
//         "description": "Find position of the only set bit",
//         "topics": ["BIT MANIPULATION"]
//     },
//     "QID-JNQHYH": {
//         "link": "https://practice.geeksforgeeks.org/problems/power-set4302/1",
//         "description": "Power Set",
//         "topics": ["BIT MANIPULATION"]
//     }
// }
