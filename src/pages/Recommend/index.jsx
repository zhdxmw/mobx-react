import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import './style.scss'
import {inject, observer} from "mobx-react";

// @inject(store => ({
//     amount: store.singer.amount
// }))
@inject('singer')
@observer
class Recommend extends Component{
    constructor(props){
        super(props);
        this.state = {
            recommends: [],
            count: 0
        }
    }
    render() {
        const { singer } = this.props
        return (
            <div>
                recommend page
                <h2>{singer.amount}</h2>
            </div>
        );
    }
}

export default Recommend