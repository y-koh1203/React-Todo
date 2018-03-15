import React from "react";
import ReactDOM from "react-dom";

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

    //ボタンのクリックをハンドル
    handleClick(e){
        e.preventDefault();
        //list[]のコピーを作成
        var copyList = this.state.list;
        
        //listに追加する連想配列
        var hashList = [];
        hashList['task'] = this.state.task;
        hashList['finish'] = this.state.finish;
        
        //作成した連想配列をlistに追加
        copyList.push(hashList);

        this.setState({
            list : copyList　 //list[]に、listの中身を追加
        })
    }

    //タスクの状態を変更する関数
    onChangeCheckBox(e){
        var key = e.target.value;
        var copyList = this.state.list;

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

        for(var i = 0; i < len; i++){
            cb[i].checked = false;
        }
    
        this.setState({
            list: copyList
        })
    }

    render(){        
        return(
            <div className="Form">
                <InputForm onHandleTextChange={this.handleTextChange.bind(this)} onHandleClick={this.handleClick.bind(this)} />
                <TaskList list={this.state.list} onChangeCheckBox={this.onChangeCheckBox.bind(this)}/>
                <button onClick={this.deleteTask}>選択したタスクを完了</button>
            </div> 
        )
    }
}

// 入力フォーム
export class InputForm extends React.Component{
    render(){
        return(
            <div>
               <input type="text" onChange={this.props.onHandleTextChange} placeholder="ここにタスクを入力" refs="taskName"/>
               <button onClick={this.props.onHandleClick}>タスク追加</button>
            </div>
        )
    }
}

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

ReactDOM.render(
    <ToDo />,
    document.getElementById('root')
)

    
