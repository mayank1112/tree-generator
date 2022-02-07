# KPMG Software Engineering Technical Assessment

## Overview

This is a KPMG technical assessment for potential JavaScript and Python Software Engineers.

The purpose of this exercise is to assess your:
- Algorithmic skills
- Optimisation skills
- Code quality
- Thinking process

## Programming Languages

Please implement your solution in your preferred language from the below:
- JavaScript
- Python

## Problem Statement

In this exercise you are presented with a flat array of unsorted nodes. Each node has the following properties 
- `nodeId` The ID of the node
- `name` A sample property associated with the node
- `parentId` The ID of the parent node
- `previousSiblingId` The ID of the node that appears as direct previous sibling

The input file of nodes can be found [here](/input/nodes.json).

The nodes require rearranging, so you are expected to implement a solution that can rearrange this flat array of nodes into a sorted tree structure, where every node is placed under its parent and along with its siblings.

If a `null` value is given for either `parentId` or `previousSiblingId`, that is because it either has no parent (root-level of the tree) or is the first child of its parent, respectively.

If a node is a parent of other node(s), these "children" should appear in an array property called `children` on the parent node. If a node has no child nodes, this `children` array will be empty.

You can find the expected output [here](/output/expected-tree.json) for clarity.

### Examples

#### Example 1

```json
{
    "nodeId": "8",
    "name" : "eight",
    "parentId": "7",
    "previousSiblingId": null
}
```

The above node has a `nodeId` of "8".
The `parentId` property of `"7"` instructs that this node should be in the `children` array of the node with ID "7".
The `previousSiblingId` property of `null` instructs that this node does not have a preceding sibling node, so will appear as the first child of node "7".

#### Example 2

```json
{
    "nodeId": "4",
    "name": "four",
    "previousSiblingId": "6",
    "parentId": "2"
}
```

The above node has a `nodeId` of "4".
The `parentId` property of `"6"` instructs that this node should be in the `children` array of the node with ID "6".
The `previousSiblingId` property of `"2"` instructs that this node should be preceded by the node with ID "2" in the `children` array.

## Important Information

- You are not expected to mutate any input whilst deriving the output.
- There can be many root-level nodes.
- Expect that a node can have an arbitrary quantity of siblings.
- Expect an arbitrary depth of nodes (children of children).

## Deliverables

1. Your solution (that takes in the provided input and creates the expected output). 
2. Instructions to run the code.
3. Comments throughout the code that highlights your thinking process.

Your solution will be tested against varying valid inputs.

JSON schemas for both the input and output have been provided if required.

## Good Luck! :)


# The Solution

This project was bootstrapped with Javascript [React App](https://github.com/facebook/create-react-app) using recursion. The logic is present in [transformerUtil.ts](https://github.com/kpmg-software-engineering-recruitment/mm-220203-1700-uk/pull/1/files#diff-e844153fa73954cfab72e0f783a6e3d6c93f8c182772fc872b85d494c275d4e4)

## Live Demo

This project was deployed to my website [http://demo.mayank.uk](http://demo.mayank.uk). You can watch the demo by visiting the link

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
