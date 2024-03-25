// dotnet new console --framework net8.0 --use-program-main
// dotnet run

namespace BinaryTree;

public class Node
{
    public int Value { get; set; }
    public Node? Left { get; set; }
    public Node? Right { get; set; }

    public Node(int value)
    {
        Value = value;
    }
}

public class BinaryTree
{
    public Node? Root { get; private set; }

    public void Insert(int value)
    {
        if (Root == null)
        {
            Root = new Node(value);
        }
        else
        {
            InsertNode(Root, value);
        }
    }

    private void InsertNode(Node node, int value)
    {
        if (value < node.Value)
        {
            if (node.Left == null)
            {
                node.Left = new Node(value);
            }
            else
            {
                InsertNode(node.Left, value);
            }
        }
        else
        {
            if (node.Right == null)
            {
                node.Right = new Node(value);
            }
            else
            {
                InsertNode(node.Right, value);
            }
        }
    }

    public void Delete(int value)
    {
        Root = DeleteNode(Root, value);
    }

    private Node DeleteNode(Node node, int value)
    {
        if (node == null)
        {
            return null;
        }

        if (value < node.Value)
        {
            node.Left = DeleteNode(node.Left, value);
        }
        else if (value > node.Value)
        {
            node.Right = DeleteNode(node.Right, value);
        }
        else
        {
            if (node.Left == null && node.Right == null)
            {
                return null;
            }
            else if (node.Left == null)
            {
                return node.Right;
            }
            else if (node.Right == null)
            {
                return node.Left;
            }
            else
            {
                Node minRight = FindMinNode(node.Right);
                node.Value = minRight.Value;
                node.Right = DeleteNode(node.Right, minRight.Value);
            }
        }

        return node;
    }

    private Node FindMinNode(Node node)
    {
        Node current = node;
        while (current.Left != null)
        {
            current = current.Left;
        }
        return current;
    }

    public void InOrderTraversal(Action<int> action)
    {
        InOrderTraversalNode(Root, action);
    }

    private void InOrderTraversalNode(Node node, Action<int> action)
    {
        if (node != null)
        {
            InOrderTraversalNode(node.Left, action);
            action(node.Value);
            InOrderTraversalNode(node.Right, action);
        }
    }

    public void PreOrderTraversal(Action<int> action)
    {
        PreOrderTraversalNode(Root, action);
    }

    private void PreOrderTraversalNode(Node node, Action<int> action)
    {
        if (node != null)
        {
            action(node.Value);
            PreOrderTraversalNode(node.Left, action);
            PreOrderTraversalNode(node.Right, action);
        }
    }

    public void PostOrderTraversal(Action<int> action)
    {
        PostOrderTraversalNode(Root, action);
    }

    private void PostOrderTraversalNode(Node node, Action<int> action)
    {
        if (node != null)
        {
            PostOrderTraversalNode(node.Left, action);
            PostOrderTraversalNode(node.Right, action);
            action(node.Value);
        }
    }
}

class Program
{
    static void Main(string[] args)
    {
        BinaryTree binaryTree = new BinaryTree();

        binaryTree.Insert(8);
        binaryTree.Insert(3);
        binaryTree.Insert(10);
        binaryTree.Insert(1);
        binaryTree.Insert(6);
        binaryTree.Insert(14);
        binaryTree.Insert(4);
        binaryTree.Insert(7);
        binaryTree.Insert(13);

        // 1 3 4 6 7 8 10 13 14
        Console.WriteLine("In order traversal");
        binaryTree.InOrderTraversal(value => Console.Write(value + " "));
        Console.WriteLine("\n------");

        // 8 3 1 6 4 7 10 14 13 
        Console.WriteLine("Pre order traversal");
        binaryTree.PreOrderTraversal(value => Console.Write(value + " "));
        Console.WriteLine("\n------");

        // 1 4 7 6 3 13 14 10 8 
        Console.WriteLine("Post order traversal");
        binaryTree.PostOrderTraversal(value => Console.Write(value + " "));
        Console.WriteLine("\n------");

        binaryTree.Delete(6);

        // 1 3 4 7 8 10 13 14 
        Console.WriteLine("In order traversal after deleting 6");
        binaryTree.InOrderTraversal(value => Console.Write(value + " "));
        Console.WriteLine("\n------");
    }
}
