import React from 'react'; 
import mainImg from '../../img/lightbringer-trans_copy_4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './app-main.css';

function AppMain() {

    let changeChoosed = true
    
    const changeChoosedFunc = () => {
		changeChoosed = !changeChoosed
        if (!changeChoosed) {
            return ''
        } else {
            return 'choosed'
        }
    }
 
    return (
        <main>
    		<article className="grid">
                <h1 className='grid-top'>FOR GAMERS BY GAMERS TEE FOR GAMERS BY GAMERS TEE</h1>

    			<img className="image-product-main" src={mainImg} alt=""/>

    			<div className="info">
    				<div className="item-number">Item #: 701642853695</div>
    				<div className="price">
    					<div className="old">29.50</div>
    					<div className="current">19.99</div>
    				</div>
    				<div className="rating-stars red" data-rating="4">
    					<FontAwesomeIcon className='star' icon={faStar}/>
                        <FontAwesomeIcon className='star' icon={faStar}/>
                        <FontAwesomeIcon className='star' icon={faStar}/>
                        <FontAwesomeIcon className='star' icon={faStar}/>
                        <FontAwesomeIcon className='star last' icon={faStar}/>
    				</div>
    				<div className="social-media">
    					<div className="header" >Share it!<div className="v"></div></div>
    					<div className="items">
    						<button className="item facebook" type="button"></button>
    						<button className="item twitter" type="button"></button>
    						<button className="item pinterest" type="button"></button>
    						<button className="item youtube" type="button"></button>
    						<button className="item close" type="button"></button>
    					</div>
    				</div>
    				<div className="details">
    					<div className="header"><span className="tablet">DETAILS:</span></div>
    					<div className="text">
    						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    					</div>
    				</div>
    				<div className="available-sizes">
    					<div className="header-size"><span className="tablet-header">SIzE:</span></div>
    					<div className="sizes">
    						<div className="size">XS</div>
    						<div className="size">S</div>
    						<div className="size choosed">M</div>
    					</div>
    				</div>
    				<div className="available-colours">
    					<div className="header-size"><span className="tablet-header">color:</span></div>
    					<div className="colours">
    						<div className={`bc-77d8e7 colour ${changeChoosedFunc()}`} onClick={() => (changeChoosedFunc())}></div>
    						<div className={`bc-96c795 colour ${changeChoosedFunc()}`} onClick={() => (changeChoosedFunc())}></div>
    						<div className={`bc-ce92a1 colour ${changeChoosedFunc()}`} onClick={() => (changeChoosedFunc())}></div>
    						<div className={`bc-aa93cf colour ${changeChoosedFunc()}`} onClick={() => (changeChoosedFunc())}></div>
    					</div>
    				</div>
    				<button className="add-to-cart" type="button">add to cart</button>
    			</div>
    		</article>
    	</main>
  );
}

export default AppMain;
