import addImg1 from '../../img/1.png'
import addImg2 from '../../img/2.png'
import addImg3 from '../../img/3.png'
import addImg4 from '../../img/4.png'
import addImg5 from '../../img/5.png'
import addImg6 from '../../img/6.png'


import './app-add-products.scss';

function AppAddProducts() {
    const itemElement = [{
                            img:{backgroundImage: 'url(' +addImg1+ ')'},
                            oaction: 29.99,
                            caction: '19.99',
                            text: 'FOR GAMERS BY GAMERS TEE'
                        },
                        {
                            img:{backgroundImage: 'url(' +addImg2+ ')'},
                            oaction: 0,
                            caction: '22.00',
                            text: 'PRO GAMER SLASH HOODIE'
                        },
                        {
                            img:{backgroundImage: 'url(' +addImg3+ ')'},
                            oaction: 0,
                            caction: 24.99,
                            text: 'SPECTROOM GAMER TEE'
                        },
                        {
                            img:{backgroundImage: 'url(' +addImg4+ ')'},
                            oaction: 29.99,
                            caction: '19.99',
                            text: 'GAMING FOR GOOD TEE'
                        },
                        {
                            img:{backgroundImage: 'url(' +addImg5+ ')'},
                            oaction: 0,
                            caction: '60.00',
                            text: 'SPECTROOM WEB HOODIE'
                        },
                        {
                            img:{backgroundImage: 'url(' +addImg6+ ')'},
                            oaction: 0,
                            caction: '54.00',
                            text: 'SPECTROOM VARSITY HOODIE'
                        }]

    return (
        <section className="additional-products">
    		<h1 className='add-produ'>YOU MAY ALSO LIKE</h1>
    		<div className="gallery">
    			<div className="itemss">
                    {
                        itemElement.map((element, index) =>
                            <div className="item-container" key={index}>
            					<div className="item">
            						<div className="image-container">
            							<div className="image" style={element.img}>
                                            {/* <img className='img' src={element.img} alt=""/> */}
            								<div className="pricee">
            									<span className={element.oaction === 0 ? 'oldd' : 'oldi'}>{element.oaction}</span>
            									<span className={element.oaction === 0 ? 'currenti' : 'currenti action' }>{element.caction}</span>
            								</div>
            							</div>
            						</div>
            						<div className="texta">{element.text}</div>
            					</div>
        				    </div>
                        )
                    }
    				{/* <div className="item-container active">
    					<div className="item">
    						<div className="image-container">
    							<div className="image">
    								<div className="price">
    									<span className="old">29.99</span>
    									<span className="current action">19.99</span>
    								</div>
    							</div>
    						</div>
    						<div className="text">For gamers by gamers TEE</div>
    					</div>
    				</div>
    				<div className="item-container">
    					<div className="item">
    						<div className="image-container">
    							<div className="image">
    								<div className="price">
    									<span className="old"></span>
    									<span className="current">22.00</span>
    								</div>
    							</div>
    						</div>
    						<div className="text">PRO gamer SLASH HOODIE</div>
    					</div>
    				</div>
    				<div className="item-container">
    					<div className="item">
    						<div className="image-container">
    							<div className="image">
    								<div className="price">
    									<span className="old"></span>
    									<span className="current">24.99</span>
    								</div>
    							</div>
    						</div>
    						<div className="text">spectroom GAMER TEE</div>
    					</div>
    				</div>
    				<div className="item-container">
    					<div className="item">
    						<div className="image-container">
    							<div className="image">
    								<div className="price">
    									<span className="old">29.99</span>
    									<span className="current action">19.99</span>
    								</div>
    							</div>
    						</div>
    						<div className="text">GAMING FOR GOOD TEE</div>
    					</div>
    				</div>
    				<div className="item-container">
    					<div className="item">
    						<div className="image-container">
    							<div className="image">
    								<div className="price">
    									<span className="old"></span>
    									<span className="current">60.00</span>
    								</div>
    							</div>
    						</div>
    						<div className="text">spectroom web hoodie</div>
    					</div>
    				</div>
    				<div className="item-container">
    					<div className="item">
    						<div className="image-container">
    							<div className="image">
    								<div className="price">
    									<span className="old"></span>
    									<span className="current">54.00</span>
    								</div>
    							</div>
    						</div>
    						<div className="text">spectroom varsity hoodie</div>
    					</div>
    				</div> */}
    			</div>
    		</div>
    	</section>
  );
}

export default AppAddProducts;
