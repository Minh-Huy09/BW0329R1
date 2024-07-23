import {Component} from "react";

export default class Tinhtoan extends Component {
    constructor() {
        super();
        this.state = {
            num1: parseFloat(''),
            num2: parseFloat(''),
            tong: '',
            hieu: '',
            tich: '',
            thuong: ''
        }
    }
    render() {
        return (
            <>
                <p>Number one:</p>
                <input type={"number"} value={this.state.num1} onChange={(e) => {
                    this.setState({num1: parseFloat(e.target.value)})
                }}/>
                <p>Number two:</p>
                <input type={"number"} value={this.state.num2} onChange={(e) => {
                    this.setState({num2: parseFloat(e.target.value)})
                }}/>
                <br/>
                <button value={this.state.tong} onClick={() => {
                    this.setState({tong: this.state.num1 + this.state.num2})
                }}>Tổng
                </button>
                <button value={this.state.hieu} onClick={() => {
                    this.setState({hieu: this.state.num1 - this.state.num2})
                }}>Hiệu
                </button>
                <button value={this.state.tich} onClick={() => {
                    this.setState({tich: this.state.num1 * this.state.num2})
                }}>Tích
                </button>
                <button value={this.state.thuong} onClick={() => {
                    this.setState({thuong: this.state.num1 / this.state.num2})
                }}>Thương
                </button>
                <button onClick={() => {
                    this.setState({num1:'',num2:'',tong:'',hieu:'',tich:'',thuong:''})
                }}>Clear
                </button>
                <h1>Kết quả</h1>
                <h2>Tổng: {this.state.tong}</h2>
                <h2>Hiệu: {this.state.hieu}</h2>
                <h2>Tích: {this.state.tich}</h2>
                <h2>Thương: {this.state.thuong}</h2>
            </>
        )
    }

}