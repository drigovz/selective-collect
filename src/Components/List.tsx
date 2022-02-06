import React, { useEffect, useState } from 'react';
import api from '../services/api';

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
                    <img src={item.image_url} alt={item.title} />
                </li>
            ))}

        </ul>
    );
}

export default List;