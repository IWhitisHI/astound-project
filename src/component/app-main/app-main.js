import { React, useState } from 'react'; 
import mainImg from '../../img/lightbringer-trans_copy_4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './app-main.scss';

function AppMain() {
	const availableColours = [
		{numberKey: 1, wcolor :"bc-77d8e7"},
		{numberKey: 2, wcolor :"bc-96c795"},
		{numberKey: 3, wcolor :"bc-ce92a1"},
		{numberKey: 4, wcolor :"bc-aa93cf"}
	]
	const availableSizes = [
		{numberKey: 1, wsize :"XS"},
		{numberKey: 2, wsize :"S"},
		{numberKey: 3, wsize :"M"}
	]
	const [color, setColor] = useState(1);
	const [size, setSize] = useState(3);
	
	const changeColor = (colorKey) => {
		setColor(color => color = colorKey);
	}
	const changeSize = (sizeKey) => {
		setSize(size => size = sizeKey);
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
							{availableSizes.map(({numberKey, wsize}, item) => {
								const active = numberKey === size;
								const clazz = active ? 'choosed' : '';
								return(
								<div className={`size ${clazz}`} key={item} onClick={() => changeSize(numberKey)}>{wsize}</div>
							)})}
    					</div>
    				</div>
    				<div className="available-colours">
    					<div className="header-size"><span className="tablet-header">color:</span></div>
    					<div className="colours">
							{availableColours.map(({numberKey, wcolor}, item) => {
								const active = numberKey === color;
								const clazz = active ? 'choosed' : '';
								return(
								<div className={`${wcolor} colour ${clazz}`} key={item} onClick={() => changeColor(numberKey)}></div>
							)})}
    					</div>
    				</div>
    				<button className="add-to-cart" type="button">add to cart</button>
    			</div>
    		</article>
    	</main>
  );
}

export default AppMain;
