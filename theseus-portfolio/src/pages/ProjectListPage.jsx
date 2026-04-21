import ProjectList from "../components/ProjectList"
import { projects } from "../data/ProjectsData"

export default function ProjectListPage() {
    return (
        <>
            <h1>Projects</h1>
            <ProjectList projects={projects}/>
        </>
    )
}