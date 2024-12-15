import React from 'react'
import room1 from '../assets/img/room1.jpg'
import room2 from '../assets/img/room2.jpg'
import room3 from '../assets/img/room3.jpg'
import room4 from '../assets/img/room4.jpg'
export default function Rooms() {
  return (
    <>
       {/* Hotel Accomodation */}
       <div className="sec_2">
        <div className="title_and_P">
            <h2>Hotel Accomodation</h2>
            <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast.</p>
        </div>
        <div className="rooms">
            <div className="i"><img src={room1} alt="" /><button className="book-now">BOOK NOW</button>
            </div>
            <div className="i"><img src={room2} alt="" /><button className="book-now">BOOK NOW</button> </div>
            <div className="i"><img src={room3} alt="" /><button className="book-now">BOOK NOW</button> </div>
            <div className="i"><img src={room4} alt="" /><button className="book-now">BOOK NOW</button> </div>
        </div>
        {/* Hotel Price */}
        <div className="price">
            <span className="s">
                <h4>Double Deluxe Room</h4>
                <h5>$250<small>/night</small></h5>
            </span>
            <span className="s">
                <h4>Double Deluxe Room</h4>
                <h5>$250<small>/night</small></h5>
            </span>
            <span className="s">
                <h4>Double Deluxe Room</h4>
                <h5>$250<small>/night</small></h5>
            </span>
            <span className="s">
                <h4>Double Deluxe Room</h4>
                <h5>$250<small>/night</small></h5>
            </span>
        </div>
    </div>
    </>
  )
}
