import React from "react";
import ReactDOM from "react-dom";

import { InputForm } from './Input.jsx';
import { TaskList } from './TaskList.jsx';
import { EditTask } from "./EditTask.jsx";

class ToDo extends React.Component{
    constructor(){
        super();
        //stateの初期状態を設定
        this.state ={
            list:[],
            task: '',
            finish: false       
        }

        this.deleteTask = this.deleteTask.bind(this);
    }

    // テキストボックスの変更をハンドル
    handleTextChange(e){    
        this.setState({
            //state:taskをテキストボックスの内容で書き換え
            task : e.target.value
        });    
    }

    // ボタンのクリックをハンドル
    handleClick(e){
        e.preventDefault();

        //list[]のコピーを作成
        var copyList = this.state.list;
        
        //listに追加する連想配列
        var hashList = [];
        hashList['task'] = this.state.task;
        hashList['finish'] = this.state.finish;
        
        //作成した連想配列をcopyListに追加
        copyList.push(hashList);

        this.setState({
            list : copyList　 
        })
    }

    //タスクの状態を変更する関数
    onChangeCheckBox(e){
        //選択されたチェックボックスのvalueを取得
        var key = e.target.value;
        var copyList = this.state.list;

        //keyを元に該当するインデックスのfinishを変更
        if(copyList[key].finish === false){
            copyList[key].finish = true;
        }else{
            copyList[key].finish = false;
        }
    
        this.setState({
            list: copyList
        })
    }  

    //タスクの削除を行う関数
    deleteTask(e){
        e.preventDefault();
        var copyList = this.state.list;
        var len = copyList.length;

        //タスク完了の判定
        while(len--){
            if(copyList[len].finish == true){
                copyList.splice(len,1);
            }else{
                //タスクの状態をリセット
                copyList[len].finish = false;
            } 
        }

        //チェックボックスの初期化処理
        var cb = document.querySelectorAll('[name="checkboxes"]');
        var len = cb.length;

        for(let i = 0; i < len; i++){
            cb[i].checked = false;
        }
    
        this.setState({
            list: copyList
        })
    }

    //タスクの編集を行う関数
    editTask(e){

        //変更したテキストと、変更したいlistのインデックスを取得
        var val = document.getElementById('text_box').value;
        var index = e.target.value;

        if(index == null || index == ""){
            alert('タスクが未選択です');
            return false;
        }

        if(val == null || val == ""){
            alert('タスクが未入力です');
            return false;
        }

        var listCopy = this.state.list;

        // 該当するインデックスの値のみ書き換え
        listCopy[index].task = val;
        
        this.setState({
            list: listCopy
        })
    }

    render(){        
        return(
            <div className="Form">
                <InputForm onHandleTextChange={this.handleTextChange.bind(this)} onHandleClick={this.handleClick.bind(this)} />
                <TaskList list={this.state.list} onChangeCheckBox={this.onChangeCheckBox.bind(this)} 
                    onEditTask={this.editTask.bind(this)}/>
                <button onClick={this.deleteTask}>選択したタスクを完了</button>
                <EditTask list={this.state.list} onEditTask={this.editTask.bind(this)} />
            </div> 
        )
    }
}

ReactDOM.render(
    <ToDo />,
    document.getElementById('root')
)