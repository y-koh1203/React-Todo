import React from "react";
import ReactDOM from "react-dom";

export class EditTask extends React.Component{
    selectTask(e){
        var val = e.target.value;
        if(val == null || val == ""){
            document.getElementById('text_box').value = "";
            document.getElementById('button').value = "";
            return false;
        }

        document.getElementById('text_box').value = this.props.list[val].task;
        document.getElementById('button').value = val;
    }

    render(){
        var options = [];
        for(let i = 0; i< this.props.list.length;i++){
            options.push(
                <option value={i}>{i+1}番</option>
            )
        }
        return(
            <div>
                <p>タスクの編集</p>
                <select name="" id="" onChange={this.selectTask.bind(this)}>タスクを選択
                    <option value="" selected>選択なし</option>
                    {options}
                </select><br />
                <input type="text" name="text_box" ref="change_text" id="text_box" />
                <button id="button" onClick={this.props.onEditTask.bind(this)} value="">変更を確定する</button>
            </div>         
        )
    }
}