import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
const SliderWisata = ({data}) => {
 
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
<Carousel responsive={responsive}>
{data.map((item, i) => ( 
  <Link key={i} to={`/wisata/${item.id}`}>
<div class="card m-2">
  <img className="rounded card-img-top" src={item.foto1} style={{width:'100%'}}/>
  <div className="bottom-left fw-bold text-capitalize display-7"
  style={{color:'white'}}>{item.namaWisata}</div>
</div>
</Link>
))}
</Carousel>
        </>
    )
}

export default SliderWisata