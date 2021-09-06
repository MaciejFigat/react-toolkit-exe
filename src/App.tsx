import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded } from './features/counter/counterSlice'
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice'
import logo from './logo.svg'
import './App.css'

function App() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const { data = [], isFetching } = useFetchBreedsQuery()

  const onClickHandler = () => {
    dispatch(incremented())
  }
  const secondHandler = () => {
    dispatch(amountAdded(10))
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button type='button' onClick={onClickHandler}>
            count is: {count}
          </button>
        </p>
        <p>
          <button type='button' onClick={secondHandler}>
            count is: {count}
          </button>
        </p>
        <div className='ddd'>number of dogs fetched: {data.length}</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
                <th>Picture</th>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
