import { Nodes } from "../../../interfaces/transformerInterface";

export const DEFAULT_NODES: Nodes = [
    {
        "nodeId": "4",
        "name": "Four",
        "parentId": "2",
        "previousSiblingId": "6"
    },
    {
        "nodeId": "8",
        "name": "Eight",
        "parentId": "7",
        "previousSiblingId": null
    },
    {
        "nodeId": "2",
        "name": "Two",
        "parentId": "1",
        "previousSiblingId": null
    },
    {
        "nodeId": "6",
        "name": "Six",
        "parentId": "2",
        "previousSiblingId": null
    },
    {
        "nodeId": "3",
        "name": "Three",
        "parentId": null,
        "previousSiblingId": null
    },
    {
        "nodeId": "5",
        "name": "Five",
        "parentId": "4",
        "previousSiblingId": null
    },
    {
        "nodeId": "1",
        "name": "One",
        "parentId": null,
        "previousSiblingId": "3"
    },
    {
        "nodeId": "7",
        "name": "Seven",
        "parentId": null,
        "previousSiblingId": "1"
    }
];
