import React from 'react'


export default function Home() {
  return (
    <>
    <div className="sec_1">
        <div className="overlay"></div>
        
          {/* content page 1 */}
        <div className="content">
            <h6>Away from monotonous life</h6>
            <h2>Relax Your Mind</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the<br/> difference in
                price. You may see some for as low as $.17 each.</p>
            <button>Get Started</button>
        </div>
        {/* booking details */}
        <div className="booking">
            <h2>Book<br /> Your Room</h2>
            <input type="date" id="arrival" placeholder="Arrival Date" />
            <input type="date" id="departure" placeholder="Departure Date" />
            <select className="wide1">
                <option data-display="Adult">Adult</option>
                <option value="1">Old</option>
                <option value="2">Younger</option>
                <option value="3">Potato</option>
            </select>
            <select className="wide2">
                <option data-display="Child">Child</option>
                <option value="1">Child</option>
                <option value="2">Baby</option>
                <option value="3">Child</option>
            </select>
            <select className="wide3">
                <option data-display="Child">Number of Rooms</option>
                <option value="1">Room 01</option>
                <option value="2">Room 02</option>
                <option value="3">Room 03</option>
            </select>
            <button className="book">BOOK NOW</button>
        </div>
    </div>
 
    {/* Royal Facilities */}
    <div className="sec_3">
        <div className="overlay2">
            <h2>Royal Facilities</h2>
            <p>Who are in extremely love with eco friendly system.</p>
            <div className="Facilities">
                <div className="item">
                    <h4> <i className="fa-solid fa-utensils"></i>Restaurant</h4>
                    <p className="p3">Usage of the Internet is becoming more<br/>common due to rapid advancement
                        of<br/>technology and
                        power.</p>
                </div>
                <div className="item">
                    <h4><i className="fa-solid fa-person-biking"></i> Sports CLub</h4>
                    <p className="p3">Usage of the Internet is becoming more<br/>common due to rapid advancement
                        of<br/>technology and
                        power.</p>
                </div>
                <div className="item">
                    <h4> <i className="fa-solid fa-shirt"></i>
                        Swimming Pool </h4>
                    <p className="p3">Usage of the Internet is becoming more<br/>common due to rapid advancement
                        of<br/>technology and
                        power.</p>
                </div>
                <div className="item">
                    <h4> <i className="fa-solid fa-car"></i>
                        Rent a Car
                    </h4>
                    <p className="p3">Usage of the Internet is becoming more<br/>common due to rapid advancement
                        of<br/>technology and
                        power.</p>
                </div>
                <div className="item">
                    <h4> <i className="fa-solid fa-dumpster"></i>
                        Gymnesium</h4>
                    <p className="p3">Usage of the Internet is becoming more<br/>common due to rapid advancement
                        of<br/>technology and
                        power.</p>
                </div>
                <div className="item">
                    <h4> <i className="fa-solid fa-mug-hot"></i>
                        Bar
                    </h4>
                    <p className="p3">Usage of the Internet is becoming more<br/>common due to rapid advancement
                        of<br/>technology and
                        power.</p>
                </div>
            </div>
        </div>
    </div>

    {/* sec_5 */}
 
    
   
    </>
  )
}
