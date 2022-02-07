import { useState } from 'react';
import ReactJson from 'react-json-view';
import { Nodes } from '../../interfaces/transformerInterface';
import '../../styles/Transformer.css';
import { DEFAULT_NODES } from './constants/transformerConstants.ts';
import { generateTreeForParentId } from './utils/transformerUtil.ts';

const Transformer = () => {
    const [inputValue, setInputValue] = useState<string>(JSON.stringify(DEFAULT_NODES));
    const [submittedValue, setSubmittedValue] = useState<Nodes>([]);

    const onNodesChange = event => {
        setInputValue(event.target.value);
    };

    const onNodesSubmit = () => {
        setSubmittedValue(JSON.parse(inputValue));
    };

    const tree = generateTreeForParentId(submittedValue, null);
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
        </div>
    );
};

export default Transformer;
