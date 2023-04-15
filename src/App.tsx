import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { UsersTable } from './components/UsersTable'
import { StrategyManager } from './components/strategy.manager'
import { ESortBy, ESortOrder } from './components/types'
import { type IUser } from './types'

function App () {
  const [userList, setUserList] = useState<IUser[]>([])
  const [stripedTable, setStripedTable] = useState(false)
  const [sortBy, setSortBy] = useState<ESortBy>(ESortBy.NONE)
  const [sortOrder, setSortOrder] = useState<ESortOrder>(ESortOrder.DESC)
  const [countryFilter, setCountryFilter] = useState<string | null>(null)

  const initialUserList = useRef<IUser[]>([])
  /*
   *  useRef() => Store a value between multiple re-renders.
   *  Even if its value changes, it won't re-render the component.
  */

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async (res) => {
        const { results } = await res.json()
        setUserList(results)
        initialUserList.current = results
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  const toggleStriped = () => {
    setStripedTable(!stripedTable)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sortBy === ESortBy.NONE ? ESortBy.COUNTRY : ESortBy.NONE
    setSortOrder(ESortOrder.ASC)
    setSortBy(newSortingValue)
  }

  const handleReset = () => {
    setSortOrder(ESortOrder.ASC)
    setSortBy(ESortBy.NONE)
    setUserList(initialUserList.current)
  }

  const handleDelete = (uuid: string) => {
    const filteredUsers = userList.filter(user =>
      user.login.uuid !== uuid
    )
    setUserList(filteredUsers)
  }

  const handleSortColumn = (newSortBy: ESortBy) => {
    // If the previous 'sortBy' value is not equal to the new 'sortBy' value
    // That means the user clicked in a new column, that's why we need to reset the
    // 'sortOrder' back to DESC.
    // If not, we'll just toggle between 'ASC' and 'DESC'

    const newSortOrder = sortBy !== newSortBy
      ? ESortOrder.ASC
      : sortOrder === ESortOrder.DESC
        ? ESortOrder.ASC
        : ESortOrder.DESC

    setSortOrder(newSortOrder)
    setSortBy(newSortBy)
  }

  const filteredUserList = useMemo(() => {
    return countryFilter !== null && countryFilter.length > 0
      ? userList.filter(user => {
        return user.location.country.toLowerCase().includes(countryFilter.toLowerCase())
      })
      : userList
  }, [userList, countryFilter])

  const sortedUserList = useMemo(() => {
    const strategyManager = new StrategyManager([...filteredUserList], sortBy, sortOrder)
    return strategyManager.sortUsers()
  }, [filteredUserList, sortBy, sortOrder])

  return (
    <div className='App'>
      <h1>React Technical Interview</h1>
      <header className='buttons-container'>
        <button className='btn' onClick={toggleStriped}>
          Toggle Striped Table
        </button>
        <button className='btn' onClick={toggleSortByCountry}>
          { sortBy === ESortBy.COUNTRY ? 'Disable sort by country' : 'Enable sort by country' }
        </button>
        <button className='btn' onClick={handleReset}>
          Reset User List
        </button>
        <input
          className='input'
          type="text"
          placeholder='Filter by Country'
          onChange={(e) => { setCountryFilter(e.target.value) }}
        />
      </header>
      <main>
        <UsersTable
          userList={sortedUserList}
          stripedTable={stripedTable}
          handleDelete={handleDelete}
          handleSortColumn={handleSortColumn}
          sortBy={sortBy}
          sortOrder={sortOrder}
        />
      </main>
    </div>
  )
}

export default App
