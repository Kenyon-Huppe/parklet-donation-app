// the title for each section before the content
import React from 'react'
import classes from '../../CSS/landing.module.css'


const SectionTitle = ({ titleName }) => {
    return (
        <div>
            <h3>
                {titleName}
            </h3>
        </div>
    )
}

export default SectionTitle

// todo include divider under title