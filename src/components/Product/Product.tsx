import React, {FC, ReactNode} from 'react';

import styles from './Product.module.css'



export interface IProductProps{
    id: number,
    title: string,
    description: string,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    price: number,
    category: string,
    thumbnail: string,
    images: string[]
}

export type IProductTypeProps = IProductProps & {children?: ReactNode}

const Product: FC<IProductTypeProps> = ({title, category,description, images, price}) => {
    return (
        <div className={styles.main}>
            <h2>{title}</h2>
            <h4>Price: {price}$</h4>
            <p>Category: {category}</p>
            <p>{description}</p>
            <div className={styles.pictures}>
                {images.map((image, index) => <img className={styles.img} key={index} src={image} alt={title}/>)}
            </div>

        </div>
    );
};

export {Product};