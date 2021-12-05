import React from 'react';
import PlainCard from './PlainCard';

const Missing = () => {
    return (
        <PlainCard
            title="Такой страницы не существует на этом сайте. Ошибка 404"
            text="Возможно она появится в будущем, но сейчас ее нет."    
        />
    )
}

export default Missing;