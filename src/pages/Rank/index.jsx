import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import { autobind } from 'core-decorators'
import { autorun, reaction, observable,toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import './style.scss'
import $http from '../../https'

// @inject(stores => ({
//     amount: stores.singer.amount
// }))
@inject("singer")
@observer
class Rank extends Component{
    @observable list = [{title:'jaja'}]
    @observable cc = 'common'
    constructor(props){
        super(props);
        this.state = {
            recommends: [],
            count: 0
        }

    }
    componentWillMount(){
        // $http.get('/proxy/plist/index&json=true').then(res => {
        //     console.log(res.data)
        // })
    }
@autobind
    addNum(e) {
        e.preventDefault();
        this.props.singer.addAmount(5)
        this.props.singer.asyncAction()
        this.list.push({title:'李斯特'})
    }

    render() {
        const { singer } = this.props
        const List = toJS(this.list).map((item,index) => {
           return <li key={index} className={this.cc}>{item.title}</li>
        })
        return (
            <div>
                rank page
                <h2>{singer.amount}</h2>
                <p>{singer.all}</p>
                <p>count: {singer.count}</p>
                <ul>
                    {List}
                </ul>
                <button className="add" onClick={this.addNum}>add</button>
            </div>
        );
    }
}

export default Rank