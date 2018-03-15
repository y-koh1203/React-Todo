import React from "react";
import ReactDOM from "react-dom";

//タスク一覧の表示
export class TaskList extends React.Component{
    render(){
        const items = [];
        if(0 < this.props.list.length){
            for(let i = 0;i < this.props.list.length;i++){
                items.push(
                    <li>
                        {this.props.list[i].task}
                        <input type="checkbox" name="checkboxes" value={i} onChange={this.props.onChangeCheckBox.bind(this)} />
                    </li>
                );
            }
        }
             
        return(
            <ul>
                {items}
            </ul>         
        )
    }
}