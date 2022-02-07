import { useState } from 'react';
import ReactJson from 'react-json-view';
import { toast, ToastContainer } from 'react-toastify';
import { Nodes } from '../../interfaces/transformerInterface';
import '../../styles/Transformer.css';
import { DEFAULT_NODES } from './constants/transformerConstants.ts';
import { generateTreeForParentId } from './utils/transformerUtil.ts';
import 'react-toastify/dist/ReactToastify.css';

const Transformer = () => {
    const [inputValue, setInputValue] = useState<string>(JSON.stringify(DEFAULT_NODES));
    const [submittedValue, setSubmittedValue] = useState<Nodes>(DEFAULT_NODES);
    const [tree, setTree] = useState<Nodes>([]);

    const onNodesChange = event => {
        setInputValue(event.target.value);
    };

    const onNodesSubmit = () => {
        try {
            const jsonInput = JSON.parse(inputValue);
            setSubmittedValue(jsonInput);
            setTree(generateTree(submittedValue));
            if (jsonInput.length > 0) {
                toast("Wow so easy! Now, expand the output tree by clicking green icon!");
            }
        } catch (error) {
            toast("Something went wrong. Possibly JSON was not entered correctly! Please check and try again");
        }
    };

    const generateTree = (nodes: Nodes) => {
        return generateTreeForParentId(nodes, null);
    };

    const treeString = JSON.stringify(tree);

    return (
        <div>
            <h2>Input:</h2>
            <div><ReactJson src={submittedValue} collapsed /></div>
            <div><textarea className='Nodes-input' defaultValue={inputValue} onChange={onNodesChange} /></div>
            <div><input className='Generate-button' type='button' value='Convert &raquo;' onClick={onNodesSubmit} /></div>
            <hr />
            <h2>Output:</h2>
            <div><ReactJson src={tree} collapsed /></div>
            <div><textarea className='Nodes-input' value={treeString} readOnly /></div>
            <ToastContainer />
        </div>
    );
};

export default Transformer;
