import React from 'react'
import ClientBox from './ClientBox'
import starImg from '../../../assets/images/Star.png'
import cassandraImg from '../../../assets/images/client-image-1.png'
import amandaImg from '../../../assets/images/client-image-2.png'
import jackImg from '../../../assets/images/client-image-3.png'
import Button from '../../PartsForAllPages/Button'

const ClientComments = () => {

    const clientList = [
        { imgSrc: starImg, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", picSrc: cassandraImg, title:"Cassandra Warren", secondtitle:"Business Manager, Dorfus" },
        { imgSrc: starImg, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", picSrc: amandaImg, title:"Amanda Tulling", secondtitle:"Senior Developer, Square" },
        { imgSrc: starImg, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate", picSrc: jackImg, title:"Jack Mcdogglas", secondtitle:"Key Account Manager, Gobora" }
    ];

  return (
    <section className="client-comments">
        <div className="box-box"></div>
        <div className="container">
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="comments-from-clients">
            {clientList.map(( myItem, index ) => (
                        <ClientBox key={index} imgSrc={myItem.imgSrc} description={myItem.description} picSrc={myItem.picSrc} title={myItem.title} secondtitle={myItem.secondtitle} />
                    ))}
            </div>
            <div className="center-content">
                <Button type="dark" title="All Reviews" url="/reviews" /> 
            </div>
        </div>
    </section>
  )
}

export default ClientComments