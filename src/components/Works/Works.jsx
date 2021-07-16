import s from './Works.module.css'

let paintings = [
    {
        "_id": "woman",
        "image": "https://media.artsper.com/artwork/939240_1_m.jpg",
        "title": "woman in room",
        "description": "this girl in the room",
        "category": [
            "2020"
        ]
    },
    {
        "_id": "head",
        "image": "https://media.artsper.com/artwork/943362_1_m.jpg",
        "title": "head in the room",
        "description": "this head in the room",
        "category": [
            "2020"
        ]
    }
]

const Work = (props) => {
    return (
        <div className={s.block}>
            <img src={props.src} alt="pictures"/>
            <p>{props.title}</p>
        </div>  //компонента с картиной и описанием
    );
}



const Works = () => {
    return (
        <div>
            <Work src={paintings[0].image}  title={paintings[0].title}/>
            <Work src={paintings[1].image}  title={paintings[1].title}/>
        </div>
    )
}

export default Works;

// eslint-disable-next-line no-lone-blocks
{/*(from Costco) <ul className="products">
{props.products.map(product => (
    <Fade cascade>
        <li key="product._id">
            <div className="product">
                <a href={"#" + product._id} onClick={() => openModal(product)}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p> 
                </a >
    <div className="product-price" >
        <div>{formatCurrency(product.price)}</div>
        <button className="button primary" onClick={() => props.addToCart(product)}>В кошик</button>
    </div>
            </div >
        </li >
    </Fade >
))}
</ul > */}