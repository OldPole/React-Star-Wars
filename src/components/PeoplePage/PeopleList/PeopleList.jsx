import style from './PeopleList.module.css';

const PeopleList = ({ people }) => {
    return (
        <ul className={style.list__container}>
            {people.map(({ id, name, image }) => 
                <li key={id}>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </li>
            )}
        </ul>
    )
}

export default PeopleList;