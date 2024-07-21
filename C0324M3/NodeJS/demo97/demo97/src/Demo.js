import {Component} from "react";


export default class Demo extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    name:'Huy',
                    age: 27
                },

                {
                    name: 'You',
                    age: 26
                }
            ],
            inpName:'',
            inpAge:'',
        }
    }

    add = ()=> {
        this.setState((state)=> {
            return {
                list: [state.list, {name: state.inpName, age: state.inpAge}],
                inpName:'',
                inpAge:'',
            }
        })
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        return (
            <>
                {this.state.list.map((item, ind) => (
                    <h2 key={ind}>{item.name}, {item.age}</h2>
                ))}

                <input type="text" name={'inpName'} value={this.state.inpName} onChange={this.change}/>
                <input type="text" name={'inpAge'} value={this.state.inpAge} onChange={this.change}/>
                <button onClick={this.add}>Add
                </button>
            </>
        )
    }
}