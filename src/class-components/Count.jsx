import { Component } from "react";

export class Count extends Component {
  state = {
    count: 1,
  }

  //создадим функцию, которая будет менять count на +1 при каждом клике на кнопку
  handleClick = () => {
    //у стрелочной функции нет своего контекста, this принадлежит той функции, где была
    //проинициализирована стрелочная функция

    //setState() - встроенная функция для изменения состояния или его части
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return <>
      {/* сюда прилетит переменная от родителя из props */}
      <p>Count props: {this.props.count}</p>
      {/* эта переменная внутри класса */}
      <p>Count state: {this.state.count}</p>
      <button type="button" onClick={this.handleClick}>click</button>
    </>
  }
}