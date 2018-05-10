import React, { Component } from 'react';
import TreeComponent from './component/Tree';
import axios from 'axios';
import { Row, Col, Image } from 'react-bootstrap';
import './css/App.css';

class App extends Component {
    // onClickFunc = (event, treeId, treeNode) => {
    //     console.log(treeId, treeNode)
    // };
    constructor() {
        super();
        this.state = {
            username: 'zeral-zhang',
            lastGistUrl: ''
        };
    }

    getUserInfo = async id => {
        const requestUrl = `https://api.github.com/users/${id}`;
        const requestUrl2 = `https://api.github.com/users/${id}/repos`;
        try {
            // 并行请求，两个请求同时触发
            // 也可以使用 axios 的并行请求，这里只是对 es6 的 async/await 学习
            let [res] = await Promise.all([axios.get(requestUrl), axios.get(requestUrl2)]);
            const data = await res.data;
            return this.setState(data);
        } catch (e) {
            console.log("请求出错");
        }
    };

    componentDidMount() {
        this.getUserInfo(this.state.username);
    }

    render() {
        let treeNodes = [
            {id: 0, pId: -1, name: '全部分类', open: true},
            {id: 1, pId: 0, name: '桌子'},
            {id: 2, pId: 0, name: '椅子'},
            {id: 3, pId: 0, name: '柜子'},
            {id: 4, pId: 1, name: '办公桌'},
            {id: 5, pId: 1, name: '电脑桌'},
            {id: 6, pId: 1, name: '餐桌'},
            {id: 7, pId: 2, name: '皮椅'},
            {id: 8, pId: 2, name: '电脑椅'},
            {id: 0, pId: -1, name: '全部分类', open: true},
        ];
        return (
            <div className="container">
                <div className="container theme-showcase" style={ {padding: '20px'} } role="main">
                    <div className="jumbotron">
                        <Row>
                            <Col xs={ 6 } md={ 10 }>
                                <h1>Zeral's first react demo!</h1>
                                <p>学习更多...</p>
                                <p><a className="btn btn-primary btn-lg"
                                      href={ `https://${this.state.username}.github.io` } role="button">Learn more</a>
                                </p>
                            </Col>
                            <Col xs={ 6 } md={ 2 }>
                                <Image src={ this.state.avatar_url } thumbnail/>
                            </Col>
                        </Row>
                    </div>
                    <TreeComponent treeId={ "myTree" } nodeList={ treeNodes } onClickFunc={ this.onClickFunc }/>
                </div>
            </div>
        );
    }
}

export default App;
