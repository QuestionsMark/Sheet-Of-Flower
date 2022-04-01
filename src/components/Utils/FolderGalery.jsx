import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const FolderGalery = ({ folders }) => {

    const folderGaleryList = folders.map(f => (
        <li className="galery__item" key={f.id}>
            <Link to={`/cards/${f.title.toLowerCase()}`}>
                <Image alt={f.title} src={f.img} />
                <div className="galery__curtain" />
                <h2 className="galery__title">{f.title}</h2>
            </Link>
        </li>
    ));

    return ( 
        <section className="galery">
            <ul className="galery__list">
                {folderGaleryList}
            </ul>
        </section>
     );
}
 
export default FolderGalery;