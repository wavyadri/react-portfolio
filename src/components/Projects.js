import React from 'react'
import {data} from './data'
import {FiExternalLink} from 'react-icons/fi'

const Projects = () => {

    return (
        <section id='projects'>
            <div className="container">
                <h2>Projects</h2>
                    {/* nav bar */}
                <div className="projects-grid">
                    {data.map((item) => {
                    const {id, image, title, description, category, url} = item;
                    return <a href={url} key={id} className="card" style={{backgroundImage: `url(${image})`}}>
                        <div className="card-overlay">
                            <div className="card-icon">
                                <a href={url}><FiExternalLink className='icon'/></a>
                            </div>
                            <div className="card-text">
                                <h2>{description}</h2>
                                <p>{category}</p>    
                            </div>
                        </div>
                    </a>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
