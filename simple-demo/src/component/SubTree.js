import React from 'react';
import NodeComponent from './Node';

class SubTreeComponent extends React.Component{
    render() {
        return (
            <ul id={this.props.subTreeId} className="line">
                {
                    this.props.nodeList.map((node, i) => {
                        return <NodeComponent key={node.id + "_child_" + i} node={node} treeId={this.props.treeId} onClickFunc={this.props.onClickFunc} />
                    })
                }
            </ul>
        );
    }
}

export default SubTreeComponent;
