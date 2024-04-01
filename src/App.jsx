import { Form } from './components/Form/Form';
import { Form as ClassForm } from './class-components/Form'; //классовый компонент 
//форма, переименованный для более удобной идентификации
import { Count as ClassCount } from './class-components/Count';
import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';

import './index.css'

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)
  const arr = ['ivanov', 'petrov', 'sidorov']

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="App">
      <h2 style={{ backgroundColor: 'green' }}>Class components</h2>
      <ClassCount count={10} />
      {/* в этом случае 10 попадет в атрибут props */}
      <hr />
      <ClassForm />
      <hr />
      <h2>Func components</h2>
      <Form />
      {/* <Count name='geekbrains' /> */}
      {/* в этом случае geekbrains попадет в атрибут props */}
      <Count />
      <hr />
      <h3>Parent component</h3>
      <p>{count}</p>
      <input type="text" onChange={handleChangeName} />
      <h3>Child component</h3>
      <Child name={name} handleChangeCount={setCount} />
      {/* можно отрисовать только массив. объект и остальное не можем */}
      {arr.map((item, idx) => <div key={idx}>{item}</div>)}

    </div>
  );
}

