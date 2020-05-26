import React, { useState } from 'react'

export default () => {
  const [answer, setAnswer] = useState('')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operator, setOperator] = useState('*')
  const [alert, setAlert] = useState('')

  const updateNum1 = (event) => {
    setNum1(event.target.value)
  }

  const updateNum2 = (event) => {
    setNum2(event.target.value)
  }

  const updateOperator = (event) => {
    setOperator(event.target.value)
  }


  const updateAnswer = () => {
    if (
      (Number(num1) || Number(num1) === 0) &&
      (Number(num2) || Number(num2) === 0)) {
      if (alert) setAlert('')

      switch (operator) {
        case '*':
          setAnswer(Number(num1) * Number(num2))
          break
        case '/':
          setAnswer(Number(num1) / Number(num2))
          break
        case '+':
          setAnswer(Number(num1) + Number(num2))
          break
        default:
          setAnswer(Number(num1) - Number(num2))
      }
    } else {
      setAlert('Please provide a number for both operands.')
      setAnswer('')
    }
  }

  return (
    <div>
      <h1>The React Calculator: The Calculator That Reacts</h1>
      <input type="text" onChange={updateNum1} />
      <select name="operations" className="operations" onChange={updateOperator}>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="+">+</option>
        <option value="-">-</option>
      </select>
      <input type="text" onChange={updateNum2} />
      <button type="button" className="equals" onClick={updateAnswer}>=</button>
      <input type="answer" defaultValue={answer} disabled />
      <div className="alert">{alert ? `${alert}` : null}</div>
    </div>
  )
}
