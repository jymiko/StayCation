import React from 'react'
import ImageHero from '../assets/images/img-hero.jpg';
import ImageHeroFrame from '../assets/images/img-hero-frame.jpg';
import IconCities from '../assets/images/icons/ic_cities.svg';
import IconTraveler from '../assets/images/icons/ic_traveler.svg';
import IconTreasure from '../assets/images/icons/ic_treasure.svg';
import Button from '../components/Button';
import NumberFormat from 'react-number-format';
export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

   

    return (
        <section className="container pt-4">
            <div className="row align align-items-center pt-5">
                <div className="col-auto pr-5" style={{width: 500, height: 410}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">Forget Busy Work,<br/> Start Next Vacation</h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>
                    <div className="row mt-5">
                        <div className="col-auto" style={{marginRight: 30}}>
                            <img src={IconTraveler} alt={`${props.data.travelers} Travelers`} width="36" height="36"/>
                            <h6 className="mt-3">
                                <NumberFormat value={props.data.travelers} displayType={'text'} thousandSeparator={true}/>
                                <span className="text-gray-500 font-weight-light"> travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight: 30}}>
                            <img src={IconTreasure} alt={`${props.data.treasures} Treasure`} width="36" height="36"/>
                            <h6 className="mt-3">
                                <NumberFormat value={props.data.treasures} displayType={'text'} thousandSeparator={true}/>
                                <span className="text-gray-500 font-weight-light"> treasure</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={IconCities} alt={`${props.data.cities} Cities`} width="36" height="36"/>
                            <h6 className="mt-3">
                                <NumberFormat value={props.data.cities} displayType={'text'} thousandSeparator={true}/>
                                <span className="text-gray-500 font-weight-light"> cities</span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-6 pl-5">
                    <div style={{width: 520, height: 410}}>
                        <img className="img-fluid position-absolute" src={ImageHero} alt="Rooms" style={{margin: "-30px 0 0 -30px", zIndex: 1}}/>
                        <img className="img-fluid position-absolute" src={ImageHeroFrame} alt="Rooms" style={{margin: "0 15px 15px 0", zIndex: 0}}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
