import React, {useState, useEffect} from 'react'
import ProjectNav from './ProjectNav'
import {projects} from './data'
import {FiExternalLink} from 'react-icons/fi'

const Projects = () => {
    // remove duplicates
    const newCategories = [...new Set(projects.map((item) => item.category))]

    const [projectsList, setProjectsList] = useState(projects);
    const [categories, setCategories] = useState(newCategories);
    const [value, setValue] = useState(0);

    
    const filterCategories = (category) => {
        const newCategory = projects.filter((item) => item.category === category);
        setProjectsList(newCategory);
    }

    // on load, only display highlighted tab's projects
    useEffect(() => {
        const javascript = projects.filter((item) => item.category === 'javascript')
        setProjectsList(javascript)
    }, [])

    return (
        <section id='projects'>
            <div className="container">
                <h2>Projects</h2>
                <ProjectNav value={value} setValue={setValue} categories={categories} filterCategories={filterCategories}/>
                <div className="projects-grid">
                    {projectsList.map((item) => {
                    const {id, image, description, category, url} = item;
                    return <div key={id} className="card" style={{backgroundImage: `url(${image})`}}>
                        <div className="card-overlay">
                            <div className="card-icon">
                                <a href={url} target='_blank'><FiExternalLink className='icon'/></a>
                            </div>
                            <div className="card-text">
                                <h2><a href={url} target='_blank'>{description}</a></h2>
                                <p>{category}</p>    
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects
