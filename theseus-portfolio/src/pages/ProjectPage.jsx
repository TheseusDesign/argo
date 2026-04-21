import { useParams } from "react-router-dom"
import { projects } from '../data/ProjectsData'
export default function ProjectPage() {

    const { name } = useParams();
    const project = projects.find(a => a.name === name);

    return (
        <>
            <h1>Hey BITCH!!! I'm Theseus and this is the {project.title} Project page 😁</h1>
            {project.tags.map(tags => <h2 key={tags}>{tags}</h2>)}
            {project.description.map(info => <p key={info}>{info}</p>)}
        </>
    )
}