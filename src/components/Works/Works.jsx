import WorkItem from "./WorkItem/WorkItem";



//remove to new folder



const Works = (props) => {
    
    let paintings = props.data.map(el => <WorkItem src={el.image} title={el.title} />)
    
    return (
        <div>
            {paintings}
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