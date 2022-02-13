import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Image from './Image';

interface Item {
    id: number,
    title: string,
    image_url: string,
}

const List: React.FC = () => {
    useEffect(() => {
        api.get('items').then(response => {
            console.log(response.data);
            setItems(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const [items, setItems] = useState<Item[]>([]);

    return (
        <ul className='items-grid'>

            {items.map(item => (
                <li key={item.id}>
                    <Image logo={item.image_url} alternatedText={item.title} title={item.title} />
                </li>
            ))}

        </ul>
    );
}

export default List;