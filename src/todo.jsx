import React from "react";
import ReactDOM from "react-dom";

class ToDo extends React.Component{
    constructor(){
        super();
        //stateの初期状態を設定
        this.state ={
            list:[],
            task: ''
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // テキストボックスの変更をハンドル
    handleTextChange(e){
        this.setState({
            //state:taskをテキストボックスの内容で書き換え
            task : e.target.value
        });
    }

    //ボタンのクリックをハンドル
    handleClick(){
        //state:list[]のコピーを作成
        var listCopy = this.state.list;

        //コピー配列にstate:taskを追加
        listCopy.push(this.state.task);
        this.setState({
            list : listCopy　 //state:list[]に、listCopyの中身を追加
        })
    }

    render(){
        const items = [];
        for(let i = 0;i < this.state.list.length;i++){
            items.push(<li>{this.state.list[i]}</li>);
        }
        
        return(
            <div>
               <input type="text" onChange={this.handleTextChange} placeholder="ここにタスクを入力"/>
               <button onClick={this.handleClick}>タスク追加</button>
                <ul>
                    {items}    
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <ToDo />,
    document.getElementById('root')
)

    
