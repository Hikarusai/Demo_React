import React,{Component} from 'react';
import './TodoItem.css';


class TodoItem extends Component{
    constructor(){
        super();
        this.state={ tongsonguoi:10};
    }
    clickBtn=()=> {
        alert(this.props.item.title);
    }
    
    addState=()=>{
        this.setState({tongsonguoi :this.state.tongsonguoi +1});
    }
    render(){
        const item=this.props.item;
        let className="todoItem";
        if(item.isComplete){
            className+=' todoItem-complete';
        }
        return(
            <div className={className}>
                <p>{this.props.item.title}</p>
                <p>Tổng số người : {this.state.tongsonguoi}</p>
                <button onClick={this.clickBtn}>Click</button>
                <button onClick={this.addState}>Themsonguoi</button>
            </div>
        );
    }
}
export default TodoItem;
