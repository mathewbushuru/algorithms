// gcc binaryTree.c -o binaryTree && ./binaryTree

#include <stdio.h>
#include <stdlib.h>  //for malloc function, free function and NULL pointer

struct Node
{
    int value;
    struct Node *left;
    struct Node *right;
};

struct BinaryTree
{
    struct Node *root;
};

struct Node *createNode(int value)
{
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    newNode->value = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

// node is a pointer to a pointer (double pointer)
void insert(struct Node **node, int value)
{
    if (*node == NULL)
    {
        *node = createNode(value);
    }
    else
    {
        if (value < (*node)->value)
        {
            insert(&(*node)->left, value);
        }
        else
        {
            insert(&(*node)->right, value);
        }
    }
}

struct Node *deleteNode(struct Node *node, int value)
{
    if (node == NULL)
    {
        return NULL;
    }

    if (value < node->value)
    {
        node->left = deleteNode(node->left, value);
    }
    else if (value > node->value)
    {
        node->right = deleteNode(node->right, value);
    }
    else
    {
        if (node->left == NULL && node->right == NULL)
        {
            free(node);
            node = NULL;
        }
        else if (node->left == NULL)
        {
            struct Node *temp = node;
            node = node->right;
            free(temp);
        }
        else if (node->right == NULL)
        {
            struct Node *temp = node;
            node = node->left;
            free(temp);
        }
        else
        {
            struct Node *minRight = node->right;
            while (minRight->left != NULL)
            {
                minRight = minRight->left;
            }
            node->value = minRight->value;
            node->right = deleteNode(node->right, minRight->value);
        }
    }
    return node;
}

void inOrderTraversal(struct Node *node)
{
    if (node != NULL)
    {
        inOrderTraversal(node->left);
        printf("%d ", node->value);
        inOrderTraversal(node->right);
    }
}

void preOrderTraversal(struct Node *node)
{
    if (node != NULL)
    {
        printf("%d ", node->value);
        preOrderTraversal(node->left);
        preOrderTraversal(node->right);
    }
}

void postOrderTraversal(struct Node *node)
{
    if (node != NULL)
    {
        postOrderTraversal(node->left);
        postOrderTraversal(node->right);
        printf("%d ", node->value);
    }
}

int main()
{
    struct BinaryTree binaryTree;
    binaryTree.root = NULL;

    insert(&(binaryTree.root), 8);
    insert(&(binaryTree.root), 3);
    insert(&(binaryTree.root), 10);
    insert(&(binaryTree.root), 1);
    insert(&(binaryTree.root), 6);
    insert(&(binaryTree.root), 14);
    insert(&(binaryTree.root), 4);
    insert(&(binaryTree.root), 7);
    insert(&(binaryTree.root), 13);

    printf("In order traversal\n");
    inOrderTraversal(binaryTree.root);
    printf("\n-----\n");

    printf("Pre order traversal\n");
    preOrderTraversal(binaryTree.root);
    printf("\n-----\n");

    printf("Post order traversal\n");
    postOrderTraversal(binaryTree.root);
    printf("\n-----\n");

    binaryTree.root = deleteNode(binaryTree.root, 6);

    printf("In order traversal after deleting 6\n");
    inOrderTraversal(binaryTree.root);
    printf("\n------\n");

    return 0;
}