import { Nodes, Node, ParentNodeId } from "../../../interfaces/transformerInterface";

const getSiblingForNode: (originalList: Nodes, previousNode: Node) => Node = (originalList, previousNode) => 
    originalList.find(node => node.previousSiblingId === previousNode.nodeId);

export const generateTreeForParentId = (originalList: Nodes, parentId: ParentNodeId) => {

    // Create a map containing indices of nodes as key so that searching is more efficient
    const mapOfNodes: Nodes = [];
    originalList.forEach(node => { mapOfNodes[node.nodeId] = node });

    const tree: Nodes = [];
    mapOfNodes.forEach(node => {
        if (node.parentId === parentId) {
            if (node.previousSiblingId === null) {
                // Add first child (node with no previousSiblingId value)
                tree.push({...node, children: generateTreeForParentId(originalList, node.nodeId)});
                mapOfNodes.splice(parseInt(node.nodeId), 1);

                // Add all other children (nodes with previousSiblingId values)
                let sibling: Node;
                let nextNode = node;
                while(sibling = getSiblingForNode(originalList, nextNode)) {
                    tree.push({...sibling, children: generateTreeForParentId(originalList, sibling.nodeId)});
                    mapOfNodes.splice(parseInt(sibling.nodeId), 1);
                    nextNode = sibling;
                }
            }
        }
    });
    return tree;
};
