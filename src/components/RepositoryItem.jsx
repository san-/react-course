export function RepositoryItem(props){
    const {name, description, link} = props.repository; 
    return (
        <li>
            <strong>{name ?? 'default'}</strong>
            <p>{description ?? 'no description found'}</p>
            <a href={link}>Acessar repositório</a>
        </li> 
    )
}