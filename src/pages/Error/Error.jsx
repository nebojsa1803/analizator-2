import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  // console.log(error.data.split(' ').at(-1))
  return (
    <div>
      <h2>Грешка 404</h2>
      <h3>Страница није пронађена</h3>
      <p>
        Не постоји страница чији се URL поклапа са:
        {error.data.split(' ').at(-1)}
      </p>
    </div>
  )
}

export default Error
