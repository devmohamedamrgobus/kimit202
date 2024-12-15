import React from 'react'
import blog1 from '../assets/img/blog-1.jpg'
import blog2 from '../assets/img/blog-2.jpg'
import blog3 from '../assets/img/blog-3.jpg'

export default function Blogs() {
  return (
    <>
    
    <div className="sec_5">
        <div className="content_sec_5">
            <h2>latest posts from blog</h2>
            <p>The French Revolution constituted for the conscience of the dominant aristocratic className a fall from </p>
        </div>
        <div className="sec-5-content">
            <div className="itemsec5"><img src={blog1} alt="" /></div>
            <div className="itemsec5"><img src={blog2} alt="" /></div>
            <div className="itemsec5"><img src={blog3} alt="" /></div>
        </div>
        <div className="content-blog">
            <button className="btn11">Travel</button>
            <button className="btn12">Life Style</button>
            <button className="btn21">Travel</button>
            <button className="btn22">Life Style</button>
            <button className="btn31">Travel</button>
            <button className="btn32">Life Style</button>

            <div className="h4-sec5">
                <h4 className="h41-sec5">Low Cost Advertising</h4>
                <h4 className="h42-sec5">Creative Outdoor Ads</h4>
                <h4 className="h43-sec5">It S classNameified How To Utilize Free</h4>
            </div>

            <div className="p-sec5">
                <p className="sec5-p1">Acres of Diamonds… you’ve read the famous story,<br/> or at least had it related to
                    you. A farmer.</p>
                <p className="sec5-p2">Self-doubt and fear interfere with our ability to<br/> achieve or set goals.
                    Self-doubt and fear are</p>
                <p className="sec5-p3">Why do you want to motivate yourself? Actually, just<br/> answering that question
                    fully can </p>
            </div>
            <div className="h6-sec5">
                <h6 className="h61">31st January,2018</h6>
                <h6 className="h62">31st January,2018</h6>
                <h6 className="h63">31st January,2018</h6>
            </div>
        </div>
    </div>
    </>
  )
}
