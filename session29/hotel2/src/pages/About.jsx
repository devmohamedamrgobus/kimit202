import React from 'react'
import Aboutus from '../assets/img/about_bg.jpg'
import testtimonial1 from '../assets/img/testtimonial-1.jpg'

export default function About() {
  return (
    <>
        {/*  sec-4 History */}
        <div className="sec-4">
        <div className="image_4">
            <img src={Aboutus} alt="" />
        </div>
        <div className="contant_4">
            <h2 className="title title_color">About Us <br />Our History<br />Mission &amp; Vision</h2>
            <p>inappropriate behavior is often laughed off as “boys will be boys,”<br /> women face higher conduct
                standards especially in the workplace.<br /> That’s why it’s crucial that, as women, our behavior on the
                job is<br /> beyond reproach. inappropriate behavior is often laughed.</p>
            <button>Request Custom Price</button>
        </div>
    </div>
    {/* missed */}
    <div className="miss">
        <div className="content_sec_miss">
            <h2>Testimonial from our Clients </h2>
            <p>The French Revolution constituted for the conscience of the dominant aristocratic className a fall from </p>
        </div>
        <div className="Fanny">
            <div className="itemm">
                <div className="img-miss">
                    <img src={testtimonial1} alt="" />
                </div>
                <div className="content-miss">
                    <p>As conscious traveling Paupers we must always be<br /> concerned about our dear Mother Earth. If
                        you think<br /> about it, you travel across her face, and She is the </p>
                    <h4>Fanny Spencer</h4>
                    <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i
                        className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i
                        className="fa-regular fa-star"></i>
                </div>
            </div>
            <div className="itemm">
                <div className="img-miss">
                <img src={testtimonial1} alt="" />
                </div>
                <div className="content-miss">
                    <p>As conscious traveling Paupers we must always be<br/> concerned about our dear Mother Earth. If
                        you think<br/> about it, you travel across her face, and She is the </p>
                    <h4>Fanny Spencer</h4>
                    <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i
                        className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i
                        className="fa-regular fa-star"></i>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
