import style from './Form.module.css'

export const Form = () => {
  const count = 1
  const name = 'geekbrains'
  return <form className={style.form}>
    {/* {style.form} обращение к модульным стилям */}
    <p>Count: {count}</p>
    <p>Name: {name}</p>
    <button type="button">click</button>
  </form >
}