import { useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

export default function RepositoryList() {
    const [repository, setRepository] = useState({
        name: 'nome do repo',
        description: 'descrição do repo',
        link: 'http://github.com/unform/unform'
    });

    const handleClick = function(){
        setRepository({...repository, name: repository.name + ' -- '})
    }
    return (
        <section className="repository-list">
            <h1>Lista de repositórios Github</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
            <button onClick={
                handleClick
            }>teste</button>
        </section >
    );
}