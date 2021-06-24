import React from 'react'
import data from './data'

const Projects = () => {

    return (
        <section id='projects'>
            <div className="container">
                <h2>Projects</h2>
                {data.map((item) => {
                    const {id, image, title} = item;
                    return <div key={id}>
                        <img src={image} alt={id} />
                        <h1>{title}</h1>
                    </div>
                })} 
            </div>
        </section>
    )
}

export default Projects
