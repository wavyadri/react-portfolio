import React, { useState } from 'react'

const ProjectNav = ({categories, filterCategories, value, setValue}) => {
    return (
        <ul>
            {categories.map((category, index) => {
                return <li key={index}><p className={`${index === value && 'active'}`} onClick={() => 
                    {filterCategories(category);
                    setValue(index);
                }}>{category}</p></li>
            })}
        </ul>
    )
}

export default ProjectNav
