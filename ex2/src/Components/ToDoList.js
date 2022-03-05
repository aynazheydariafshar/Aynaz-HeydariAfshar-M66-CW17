import React from "react";

class ToDoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list : [],
            value : "",
            currentUser: "1"
        }

        this.addingToDo = this.addingToDo.bind(this)
    }

    componentDidMount(){
        fetch('/json/todo.json')
            .then(response => response.json())
            .then(res => {
                const todos = res.map(item => item.todo)
                this.setState({
                    list : [...todos , ...this.state.list]
                })
            })
    }

    harryToDo(){
        fetch('/json/todo_farbod.json')
            .then(response => response.json())
            .then(res => {
                const todos = res.map(item => item.todo)
                this.setState({
                    list : [...todos]
                })
            })
    }

    farbodToDo(){
        fetch('/json/todo.json')
        .then(response => response.json())
        .then(res => {
            const todos = res.map(item => item.todo)
            this.setState({
                list : [...todos]
            })
        })
    }

    
   componentDidUpdate() {
    if (this.props.user == '1') {
       this.harryToDo()
    } else {
       this.farbodToDo()
    }
 }

    addingToDo(){
        this.setState({
            list : [...this.state.list , this.state.value],
            value : ""
        })
    }

    render() { 
        return (
            <div>
                <input value={this.state.value} onChange={e => {this.setState({
                    value : e.target.value
                })}}/>
                <button onClick={this.addingToDo}>add</button>
                <ul>
                    {this.state.list.map(item => <li>{item}</li>)}
                </ul>
            </div>
        );
    }
}
 
export default ToDoList;