import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title: "Default title"}</h1>;
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);


    const names = ['Jamie Greatorex', 'James Lee', 'Joshua Serpis'];

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React!!"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}