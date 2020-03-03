import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoList=[
      {title:'Đi chợ',isComplete:true},
      {title:'Mua cá'},
      {title:'Mua rau'}
    ];
  }
    
  render(){
    return (
      <div className="App">
         {/* giải thích toán tử  && ,cú pháp : a && b ,kết quả trả về là b nếu a là falsy và kq trả
         về là a nếu a là truethy  */}
        {
         this.todoList.length > 0 && this.todoList.map((item,index)=><TodoItem key={index} item={item}> </TodoItem>)
        }
        {this.todoList.length===0 && 'Nothing here'}
        
      </div>
    );
  }
  
}

export default App; 
