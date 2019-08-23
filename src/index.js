import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
  // square组件不再持有state，从board组件中接收值，目前的square组件是受控组件
    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.props.onClick()}
        >
          {/* 这里用了this但没有调用super，仅当存在constructor的时候必须调用super，如果没有，则不用 */}
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    // 仅当存在constructor的时候必须调用super，如果没有，则不用，参考https://segmentfault.com/a/1190000008165717
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
    handleClick(i) {
      // slice无参数可实现浅复制，浅复制拷贝的是引用，两个变量指向同一个数组
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({squares: squares});
    }
    renderSquare(i) {
      return (
        // board调用了square，是square的父组件
        <Square 
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)} 
        />);
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  