import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialState) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem(key))
    if (tasks) setState(tasks)
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}
