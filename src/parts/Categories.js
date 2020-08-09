import React from 'react'
import Button from '../components/Button'
import Fade from 'react-reveal/Fade';

export default function Categories({data}) {
    return data.map((category, index1) => {
        return (
            <section className="container" key={`category-${index1}`}>
                <Fade bottom>
                <h4 className="mb3 font-weight-medium">
                    {category.name}
                </h4>
                <div className="container-grid">
                    {
                        category.items.length === 0 ? <div className="row">
                            <div className="col-auto align-items-center">
                                There is no property on this category
                            </div>
                        </div>
                        :
                        category.items.map((item, index2) => {
                            return(
                                <div className="item column-3 row-1" key={`category-${index1}-items-${index2}`}>
                                    <Fade bottom delay={300*index2}>
                                    <div className="card">
                                        {item.isPopular &&
                                            <div className="tag">
                                                Popular{" "}
                                                <span className="font-weight-light">Choice</span>
                                            </div>
                                        }
                                        <figure className="img-wrapper" style={{height: "180px"}}>
                                            <img className="img-cover" src={item.imageUrl} alt={item.name}/>
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button className="stretched-link d-block text-gray-800" href={`/properties/${item.id}`} type="link">
                                                <h5 className="h4">{item.name}</h5>
                                            </Button>
                                            <span className="text-gray-500">
                                                {item.city},{item.country}
                                            </span>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            )
                        })
                    }
                </div>
                </Fade>
            </section>
        )
    })
}
