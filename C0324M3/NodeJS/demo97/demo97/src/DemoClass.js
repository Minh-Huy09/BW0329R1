import {Component} from "react";
import {clear} from "@testing-library/user-event/dist/clear";

export default class DemoClass extends Component {
    constructor() {
        super();
        this.state = {
            element: '',
            arr: [3, 4, 5]
        }
    }

    render() {
        return (
            <>
                {/*B1:{hiện mảng}*/}
                {this.state.arr.map((item) => (
                    <h3>{item}</h3>
                ))}
                {/*{B2:Nhap input cap nhat state}*/}
                Demo Class Component {this.state.element}!
                <input value={this.state.element} onChange={(e) => {
                    this.setState({element: e.target.value})
                }}/>
                {/*{B3:Bấm nút để hiện state đã được cập nhật}*/}
                <button onClick={() => {
                    this.setState({arr: [...this.state.arr, this.state.element], element: ''})
                }}>Add Element
                </button>
            </>
        )
    }
}