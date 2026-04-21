import { Link } from "react-router-dom"

export default function ProjectList({projects}) {
    return (
        <>
            {projects.map(a => (
                <Link to={'/project/' + a.name}>
                    <h2>{a.title}</h2>
                    <p>{a.description[0]}</p>
                </Link>
            ))}
        </>
    )
}