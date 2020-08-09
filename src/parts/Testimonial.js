import React from 'react'
import Star from '../components/Star'
import Button from '../components/Button'
import TestimonyAccent from '../assets/images/testimonial-frame.png'
import Fade from 'react-reveal/Fade';

export default function Testimonial(data) {
    console.log(data.data.imageUrl)
    return (
        <Fade bottom>
        <section className="container">
            <div className="row align-items-center">
                <div className="col-auto" style={{marginRight: 60}}>
                    <div className="testimonial-hero" style={{margin: '30px 0 0 30px'}}>
                        <img className="position-absolute" src={data.data.imageUrl} alt="Testimonial" style={{zIndex: 1}} />
                        <img className="position-absolute" src={TestimonyAccent} alt="Testimonial frame" style={{margin: '-30px 0 0 -30px'}} />
                    </div>
                </div>
                <div className="col">
                    <h4 style={{marginBottom: 40}}>
                        {data.data.name}
                    </h4>
                    <Star value={data.data.rate} height={35} width={35} spacing={4}/>
                    <h5 className="h2 font-weight-light line-height-2 my-3">
                        {data.data.content}
                    </h5>
                    <span className="text-gray-500">
                        {data.data.familyName},{data.data.familyOccupation}
                    </span>
                    <div>
                        <Button className="btn px-5" style={{marginTop: 40}} hasShadow isPrimary type="link" href={`/testimonial/${data.data._id}`}>
                            Read their story
                        </Button>
                    </div>
                </div>
            </div>             
        </section>
        </Fade>
    )
}
