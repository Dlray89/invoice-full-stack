import React, { useState } from 'react'
import { FilterContext } from './FilterContext'





export const FilterProvider = ({ children }) => {
    const [toggleFilterBtn, setToggleFilterBtn] = useState(false)
    const [filter, ] = useState('Pending')
    const filterStatus = {
        All: () => true,
        Pending: (item) => !item.status,
        Paid: (item) => item.status
    }

    // const handleFilterToggle = (e) => {
    //     setOpenFilter(e.currentTarget)
    // }

    // const closeFilter = () => {
    //     setOpenFilter(null)
    // }

    // const newStatusList = Object.keys(filterStatus);
    // const statusList = newStatusList.map((status) => (
    //     <FilterButton  />
    // ))



    return (
        <FilterContext.Provider value={{ toggleFilterBtn, setToggleFilterBtn, filter,  filterStatus}} >
            { children}
        </FilterContext.Provider>
    )
}