import React from 'react';

import Titles from '../../Utils/Titles';

import { smLorem } from '../../../utils/lorem';
import previewImg from '../../../media/images/4.png';
import FolderGalery from '../../Utils/FolderGalery';
import Text from '../../Utils/Text';

//
const folders = [
    {
        id: 0,
        img: previewImg,
        title: 'Wiosna',
        description: smLorem,
    },
    {
        id: 1,
        img: previewImg,
        title: 'Lato',
        description: smLorem,
    },
    {
        id: 2,
        img: previewImg,
        title: 'Jesień',
        description: smLorem,
    },
];

const Cards = () => {
    return ( 
        <main className="main cards">
            {/* <Titles title="Kolekcje" subtitle="Pięknie na papierze"/> */}
            <section className="pictures__description">
                <Text />
            </section>
            <FolderGalery folders={folders}/>
        </main>
     );
}
 
export default Cards;