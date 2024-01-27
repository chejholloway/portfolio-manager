// components/NodeDisplay.js

import React, { useEffect, useState } from 'react';

function displayAllNodes(element, indent = 0, result = []) {
  result.push(`${' '.repeat(indent)}${element.nodeName} (${element.nodeType === 1 ? 'Element' : 'Node'})`);

  if (element.nodeType === 1) {
    Array.from(element.attributes).forEach(attribute => {
      result.push(`${' '.repeat(indent + 2)}Attribute: ${attribute.name}="${attribute.value}"`);
    });
  }

  Array.from(element.childNodes).forEach(child => {
    displayAllNodes(child, indent + 2, result);
  });

  if (element instanceof NodeList) {
    Array.from(element).forEach((node, index) => {
      result.push(`${' '.repeat(indent)}NodeList Item ${index}: ${node.nodeName}`);
    });
  }
}

const NodeDisplay = () => {
  const [nodeInfo, setNodeInfo] = useState([]);

  useEffect(() => {
    const handleLoad = () => {
      const result = [];
      displayAllNodes(document, 0, result);
      setNodeInfo(result);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div>
      <h2>Node Information:</h2>
      <pre>{nodeInfo.join('\n')}</pre>
    </div>
  );
};

export default NodeDisplay;
