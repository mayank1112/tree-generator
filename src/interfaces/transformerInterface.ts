export type NodeId = string;

export type ParentNodeId = NodeId | null;

export type PreviousSiblingId = NodeId | null;

export interface Node {
    nodeId: NodeId;
    name: string;
    parentId: ParentNodeId;
    previousSiblingId: PreviousSiblingId;
    children?: Node;
};

export type Nodes = Node[];
