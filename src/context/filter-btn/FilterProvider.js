import React, { useState } from 'react'
import { FilterContext } from './FilterContext'





export const FilterProvider = ({ children }) => {
    const [openFilter, setOpenFilter] = useState(null)
    const [toggleFilterBtn, setToggleFilterBtn] = useState(false)
    const [filter, setFilter] = useState('Pending')
    const filterStatus = {
        All: () => true,
        Pending: (item) => !item.status,
        Paid: (item) => item.status
    }

    const handleFilterToggle = (e) => {
        setOpenFilter(e.currentTarget)
    }

    const closeFilter = () => {
        setOpenFilter(null)
    }

    const newStatusList = Object.keys(filterStatus);
    // const statusList = newStatusList.map((status) => (
    //     <FilterButton  />
    // ))



    return (
        <FilterContext.Provider value={{ toggleFilterBtn, setToggleFilterBtn, filter,  filterStatus}} >
            { children}
        </FilterContext.Provider>
    )
}