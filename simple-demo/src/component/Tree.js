import React from 'react';
import PropTypes from 'prop-types';
import NodeComponent from './Node';

class TreeComponent extends React.Component {

    // 默认处理事件
    static defaultProps = {
        onClickFunc: (event, treeId, treeNode) => {
            console.log("默认的处理事件:", treeId, treeNode);
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            nodeList: this.getInitialState(),
            windowWidth: window.innerWidth
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    };

    handleResize = (e) => {
        this.setState({windowWidth: window.innerWidth});
    };

    getInitialState = () => {
        let nodeList = [];
        for (let i = 0; i < this.props.nodeList.length; i++) {
            let found = false;

            for (let j = 0; j < this.props.nodeList.length; j++) {
                if(i === j) continue;

                // 找到每个节点的父节点，并将其放入父节点的节点列表中
                if(this.props.nodeList[i].pId === this.props.nodeList[j].id) {
                    found = true;
                    if(!this.props.nodeList[j]["nodeList"]) {
                        this.props.nodeList[j]["nodeList"] = [this.props.nodeList[i]];
                    } else {
                        this.props.nodeList[j]["nodeList"].push(this.props.nodeList[i])
                    }
                }
            }

            if(!found) {
                nodeList.push(this.props.nodeList[i]);
            }
        }
        return nodeList;
    };

    render() {
        return (
            <div>Current window width: {this.state.windowWidth}
                <ul id={this.props.treeId} className="react_tree">
                    {this.state.nodeList.map((node, i) => {
                        return <NodeComponent key={node.id + "_child_" + i} node={node} treeId={this.props.treeId} onClickFunc={this.props.onClickFunc} />
                    })}
                </ul>
            </div>
        );
    }
}

TreeComponent.protoTypes = {
    treeId: PropTypes.string.isRequired,
    onClickFunc: PropTypes.func,
    nodeList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string.isRequired,
                PropTypes.number.isRequired
            ]),
            pId: PropTypes.oneOfType([
                PropTypes.string.isRequired,
                PropTypes.number.isRequired
            ]),
            name: PropTypes.string.isRequired,
            open: PropTypes.bool
        })
    )
};

export default TreeComponent;