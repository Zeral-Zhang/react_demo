import React from 'react';
import SubTreeComponent from "./SubTree";

class NodeComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {open: props.node.open === true};
    }

    openOrClose = () => {
        this.setState({open: !this.state.open});
    };

    onNodeClick = (event) => {
        let treeId = this.props.treeId,
            treeNode = this.props.node;
        this.props.onClickFunc(event, treeId, treeNode);
    };

    render() {
        let openClass = "center_close", icoClass = "ico_close";
        if(!this.props.node.nodeList || this.props.node.nodeList.length === 0) {
            openClass = "center_docu";
            icoClass = "ico_docu";
        } else if (this.state.open) {
          openClass = "center_open";
          icoClass = "ico_open";
        }
        let idPrefix = this.props.treeId + "_" + this.props.node.id;

        return (
            <li id={idPrefix}>
                <span id={idPrefix + "_switch"} className={"button switch " + openClass} onClick={this.openOrClose} />
                    <a id={idPrefix + "_a"} onDoubleClick={this.openOrClose} onClick={this.onNodeClick}>
                        <span id={idPrefix + "_ico"} className={"button " + icoClass} />
                        <span id={idPrefix + "_span"}>{this.props.node.name}</span>
                    </a>
                    {
                        (openClass === "center_open") ? <SubTreeComponent subTreeId={idPrefix + "_ul"} treeId={this.props.treeId} nodeList={this.props.node.nodeList} onClickFunc={this.props.onClickFunc}/> : ""
                    }
            </li>
        );
    }

}

export default NodeComponent;