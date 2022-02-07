import { Nodes } from "../../../interfaces/transformerInterface";
import { DEFAULT_NODES } from "../constants/transformerConstants";
import { generateTreeForParentId } from "./transformerUtil";

test('generates correct tree from empty array', () => {
  const enteredNodesList: Nodes = [];
  const generatedTree: Nodes = generateTreeForParentId(enteredNodesList, null);
  const expectedNodesList: Nodes = [];
  
  expect(generatedTree).toStrictEqual(expectedNodesList);
});

test('generates correct tree from array', () => {
  const enteredNodesList: Nodes = DEFAULT_NODES;
  const generatedTree: Nodes = generateTreeForParentId(enteredNodesList, null);
  const expectedNodesList: Nodes = [
    {
      "nodeId": "3",
      "name": "Three",
      "parentId": null,
      "previousSiblingId": null,
      "children": []
    },
    {
      "nodeId": "1",
      "name": "One",
      "parentId": null,
      "previousSiblingId": "3",
      "children": [
        {
          "nodeId": "2",
          "name": "Two",
          "parentId": "1",
          "previousSiblingId": null,
          "children": [
            {
              "nodeId": "6",
              "name": "Six",
              "parentId": "2",
              "previousSiblingId": null,
              "children": []
            },
            {
              "nodeId": "4",
              "name": "Four",
              "parentId": "2",
              "previousSiblingId": "6",
              "children": [
                {
                  "nodeId": "5",
                  "name": "Five",
                  "parentId": "4",
                  "previousSiblingId": null,
                  "children": []
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "nodeId": "7",
      "name": "Seven",
      "parentId": null,
      "previousSiblingId": "1",
      "children": [
        {
          "nodeId": "8",
          "name": "Eight",
          "parentId": "7",
          "previousSiblingId": null,
          "children": []
        }
      ]
    }
  ];
  
  expect(generatedTree).toStrictEqual(expectedNodesList);
});
