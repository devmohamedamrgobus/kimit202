import { Link } from "react-router-dom"
export default function Card({id,image,title,description,price})
{
    return (<>
        <div className="card col-md-3">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to={'/singleproduct/'+id} className="btn btn-primary">{price}</Link>
        </div>
        </div>
    </>)
}