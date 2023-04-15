import { useEffect, useMemo, useState } from 'react'
import { type IUser } from '../types'
import { EPageDirection, ESortBy, type ESortOrder } from './types'
import { ArrowIcon } from './ArrowIcon'

interface IProps {
  userList: IUser[]
  stripedTable: boolean
  handleDelete: (uuid: string) => void
  handleSortColumn: (sort: ESortBy) => void
  sortBy: ESortBy
  sortOrder: ESortOrder
}

export function UsersTable (props: IProps) {
  const {
    userList,
    stripedTable,
    handleDelete,
    handleSortColumn,
    sortBy,
    sortOrder
  } = props

  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const totalPages = useMemo((): number => {
    return Math.ceil(userList.length / pageSize)
  }, [userList, pageSize])

  useEffect(() => {
    if (page > totalPages && totalPages !== 0) {
      setPage(totalPages)
    }
  }, [totalPages])

  const handlePageChange = (direction: EPageDirection): void => {
    if (direction === EPageDirection.NEXT) {
      setPage(page + 1)
    } else {
      setPage(page - 1)
    }
  }

  const paginatedUserList = (): IUser[] => {
    return userList.slice((page - 1) * pageSize, (page * pageSize))
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
  }

  return (
    <div>
      <label style={{ fontSize: '1.2em' }}>
        <select
          value={pageSize}
          style={{ fontSize: '1em', marginBottom: '1.5em' }}
          onChange={(e) => { handlePageSizeChange(parseInt(e.target.value)) }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
        &nbsp;Items per page:
      </label>
      <table width='100%' className={ `${stripedTable ? 'table-striped' : ''}` }>
        <thead>
          <tr>
            <td>
              Photo
            </td>
            <td
              className='cursor-pointer'
              onClick={() => { handleSortColumn(ESortBy.FIRST_NAME) }}
            >
              First Name
              {
                sortBy === ESortBy.FIRST_NAME && <ArrowIcon sortOrder={sortOrder} />
              }
            </td>
            <td
              className='cursor-pointer'
              onClick={() => { handleSortColumn(ESortBy.LAST_NAME) }}
            >
              Last Name
              {
                sortBy === ESortBy.LAST_NAME && <ArrowIcon sortOrder={sortOrder} />
              }
            </td>
            <td
              className='cursor-pointer'
              onClick={() => { handleSortColumn(ESortBy.COUNTRY) }}
            >
              Country
              {
                sortBy === ESortBy.COUNTRY && <ArrowIcon sortOrder={sortOrder} />
              }
            </td>
            <td>
              Actions
            </td>
          </tr>
        </thead>
        <tbody>
          {
            paginatedUserList().map((userData, idx) => {
              return (
                <tr key={userData.email}>
                  <td>
                    <img src={userData.picture.thumbnail} alt={`${userData.name.first} ${userData.name.last}`} />
                  </td>
                  <td>
                    { userData.name.first }
                  </td>
                  <td>
                    { userData.name.last }
                  </td>
                  <td>
                    { userData.location.country }
                  </td>
                  <td>
                    <button onClick={() => { handleDelete(userData.login.uuid) }}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className='pagination-container'>
        <button
          className={ `pagination-item ${page <= 1 ? 'btn-disabled' : ''}` }
          disabled={page <= 1}
          onClick={() => { handlePageChange(EPageDirection.PREV) }}
        >
          &lt;
        </button>
        <div className='pagination-item'>
          {`${page} - ${totalPages}`}
        </div>
        <button
          className={ `pagination-item ${page >= totalPages ? 'btn-disabled' : ''}` }
          disabled={page >= totalPages}
          onClick={() => { handlePageChange(EPageDirection.NEXT) }}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}
