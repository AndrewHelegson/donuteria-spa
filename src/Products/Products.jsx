import './Products.css'
import productImage from '../assets/images/200x150.png'


export const Products = () => {
    return (
        <div>
            <main>
                <div className='wrapper'>
                    <div className='products' >
                        <h1 className='products__header' >Наша Продукция</h1>
                        <div className='products__container' >
                            <div className='products__item' >
                                <img src={productImage} alt='bakery example' />
                                <h2 className='products__itemName' >Синнабон</h2>
                                <p className='products__itemDescription' >Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный</p>
                            </div>
                            <div className='products__item' >
                                <img src={productImage} alt='bakery example' />
                                <h2 className='products__itemName' >Синнабон</h2>
                                <p className='products__itemDescription' >Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный</p>
                            </div>
                            <div className='products__item' >
                                <img src={productImage} alt='bakery example' />
                                <h2 className='products__itemName' >Синнабон</h2>
                                <p className='products__itemDescription' >Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный</p>
                            </div>
                            <div className='products__item' >
                                <img src={productImage} alt='bakery example' />
                                <h2 className='products__itemName' >Синнабон</h2>
                                <p className='products__itemDescription' >Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный</p>
                            </div>
                            <div className='products__item' >
                                <img src={productImage} alt='bakery example' />
                                <h2 className='products__itemName' >Синнабон</h2>
                                <p className='products__itemDescription' >Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный</p>
                            </div>
                            <div className='products__item' >
                                <img src={productImage} alt='bakery example' />
                                <h2 className='products__itemName' >Синнабон</h2>
                                <p className='products__itemDescription' >Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный.Сочный мощный</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}