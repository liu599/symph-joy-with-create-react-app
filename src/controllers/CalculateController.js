import React, {Component} from 'react'
import {controller, requireModel} from '@symph/tempo/controller'
import CalculateModel from "../models/CalculateModel";
import './CalculateController.css'

@requireModel(CalculateModel)
@controller((state) => {
  // 绑定calculateModel中的状态到当前组件
  return {
    counter: state.calculate.counter,  // bind model's state to props
    counterx: state.calculate.a.b.c.count,
  }
})

export default class CalculateController extends Component {

  add = async () => {
    let {dispatch} = this.props;
    // call model's method
    await dispatch({
      type: 'calculate/add',
      number: 1
    });
  };

  addDeep = async () => {
    console.log("addDeep");
    let {dispatch} = this.props;
    await dispatch({
      type: 'calculate/addDeep'
    });
  };


  render() {
    let {counter, counterx} = this.props;
    return (
      <div className='counter'>
        <div>counter: {counter}</div>
        <button onClick={this.add}>add 1</button>
        <div>counter: {counterx}</div>
        <button onClick={this.addDeep}>add 1</button>
      </div>
    )
  }
}