import { faker } from '@faker-js/faker';
import { useState } from 'react';

const Card = ({ employee, onDelete }) => {
    const [image, setImage] =useState(() => {
        return faker.image.avatar();
    });

    return (
        <div class="ui card">
            <div class="image">
                <img src={image} alt="Image not found" />
            </div>
            <div class="content">
                <span class="header">{ employee.name }</span>  
                <div class="description">
                    {employee.details}
                </div>
            </div>
            <div>
                <button onClick={() => onDelete(employee.name)} className='danger'>Delete</button>
            </div>
        </div>
    );
};

export default Card;