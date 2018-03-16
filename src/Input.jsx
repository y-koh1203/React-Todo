import React from "react";
import ReactDOM from "react-dom";

// 入力フォーム
export class InputForm extends React.Component{
    render(){
        return(
            <div>
               <input type="text" refs="input_text" onChange={this.props.onHandleTextChange} placeholder="ここにタスクを入力" refs="taskName"/>
               <button onClick={this.props.onHandleClick}>タスク追加</button>
            </div>
        )
    }
}