import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
    constructor(props) {
      // 当子类中有构造函数时必须调用super方法，super是父类的构造函数，用来新建父类的this对象，因为子类自己的this对象必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法。
      // 仅当想在constructor内使用props才将props传入super，将props传入super的作用是可以使你在constructor内访问它。
      super(props);
      this.state = {
        value: null,
      };
    }
    render() {
      return (
        <button 
          className="square" 
          onClick={() => this.setState({value: 'X'})}
        >
          {/* 这里用了this但没有调用super，仅当存在constructor的时候必须调用super，如果没有，则不用 */}
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    // 仅当存在constructor的时候必须调用super，如果没有，则不用，参考https://segmentfault.com/a/1190000008165717
    renderSquare(i) {
      return <Square value={i} />;
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
  