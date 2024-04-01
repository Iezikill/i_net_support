import { useState } from "react"


export const Count = () => {//({name}) - вызов значения из props
  //хуки исп-ся для написания динамических перменных, которые не будут перезаписываться
  //каждый раз при вызове данной функции, т.е. они запоминаются в другом месте
  //для того чтобы записать state в функции используется useState
  //в скобках передается значение по умолчанию
  //useState возвращает два аргумента в массиве: count и функция-сеттер, которая будет менять count
  const [count, setCount] = useState(1)

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1)
    //prevCount - предыдущее значение, которое лежит в state
  }

  return <>
    {/* props значение может быть передано еще как props.name
    тогда при вызове функции будет не export const Count = ({name}), а 
    export const Count = (props.name) */}
    {/* <p>Count props: {name}</p> */}
    <p>Count state: {count}</p>
    <button type="button" onClick={handleClick}>click</button>
  </>
}