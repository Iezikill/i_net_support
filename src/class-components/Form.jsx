import React from 'react'

export class Form extends React.Component {
  //в классах есть спец.зарезервированное имя state, в кот. можно записать
  //все состояние классового компонента
  state = {
    count: 1,
    name: 'geekbrains',
    arr: ['ivanov', 'petrov', 'sidorov']
  }
  //чтобы в классе обратиться к переменной, необходимо исп-ть ключ.слово this.state

  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault() //чтобы не перезагружалась страничка при клике на кнопку
    console.log(this.state.name) //так обращаемся к переменной
  }

  //в классовых компонентах всегда должен быть метод рендер
  render() {
    return <form onSubmit={this.handleSubmit}>
      {/* счетчик перенесли в отдельный компонент count */}
      {/* <p>Count: {this.state.count}</p>
      <button type="button" onClick={this.handleClick}>click</button> */}
      {/* здесь меняется переменная name при вводе текста в инпут в режиме реального времени */}
      {/* <p>Name: {this.state.name}</p>
      <input type="text" onChange={this.handleChangeName} /> */}

      {/* здесь name изменится только по нажатию на кнопку */}
      <input type="text" onChange={this.handleChangeName} />
      <button>send form</button>

      {/* чтобы обратиться к массиву и отрисовать его по списку */}
      {this.state.arr.map((item, idx) => {
        return <div key={idx}>{item}</div>
      })}

    </form>
  }
}