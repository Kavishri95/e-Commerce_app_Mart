import React from "react";
import "../Styles/Home.css";
import Footer from "../Components/Footer//Footer";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { SliderData } from "../Assets/data/products.js";
//import { serviceData } from "../Assets/data/products.js";
import { discoutProducts } from "../Assets/data/products.js";
import { products } from "../Assets/data/products.js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/Slice/CartSlice.jsx";
import { ToastContainer, toast } from "react-toastify";
import { FaTruck } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { RiRefund2Fill } from "react-icons/ri";

const Home = () => {
  // for carousel function
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // Filtering the data for the new arraivals :
  const newArraivals = products.filter(
    (item) => item.category == "mobile" || item.category == "wireless"
  );

  // Filtering the data for the best Sales
  const bestSales = products.filter((item) => item.category == "sofa");

  // to dispatch the data while clicking the add to cart button
  const dispatch = useDispatch(); // to dispatch the product data to the slice
  const handelAdd = (item) => {
    dispatch(addItem(item));
    toast.success("Product added to cart");
  };

  return (
    <>
      <div>
        {/* For the carousel part  */}

        <Carousel
          className="carousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {SliderData.map((item) => (
            <Carousel.Item>
              <img className="carosalimg" src={item.cover} alt="carosalimage" />
              <Carousel.Caption>
                <div className="cmtofcarousel">
                  <h3>{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                  <button className="buttonofcarousel">Visit collection</button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* For the sevices*/}

        <div className='service_item'>
               
                    <div className="item1"> 
                    <span><FaTruck /></span>
                    <h1>Free Shipping</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                
                    <div  className="item2">
                    <span><MdPayment /></span>
                    <h1>Safe Payment</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                   
                    <div  className="item3">
                    <span><RiSecurePaymentLine /></span>
                    <h1>Secure payment</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    
                    <div  className="item4">
                    <span><RiRefund2Fill /></span>
                    <h1>Back Guarantee</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
        {/* <div className="cardsundercar">
          {serviceData.map((item) => (
            <div className="card" style={{ backgroundColor: item.bg }}>
              <center>
                <img src={item.icon} alt="img" />
                <h5>{item.title} </h5>
                <p>{item.subtitle}</p>
              </center>
            </div>
          ))}
        </div> */}

        {/* Big Discount */}
        <div className="bigdiscount">
          <h1>Big Discount</h1>
          <div className="bgproducts">
            {discoutProducts.map((item) => (
              <div className="bgitems">
                <p>{item.discount}% Off</p>
                <Link to={`/productpage/${item.id}`}>
                  <img src={item.imgUrl} className="bgproductsimg" />
                </Link>
                <h5>{item.productName}</h5>
                <div className="mt-3">
                <h5>$ {item.price}</h5>
                
                  <button className="mt-4"
                    onClick={() => {
                      handelAdd(item);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* New Arrivals  */}
        <div className="newarrcontainer">
          <div className="newarraivals">
            <h1>New Arrivals </h1>
            <div className="bgproducts">
              {newArraivals.map((item) => (
                <div className="bgitems">
                  <Link to={`/productpage/${item.id}`}>
                    <img src={item.imgUrl} className="bgproductsimg" />
                  </Link>
                  <h5>{item.productName}</h5>
                  {/* <div className="bgstarscontainer">
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                    <img src={item.star} className="bgproductsstar" />
                  </div> */}
                  <h5>INR: {item.price}</h5>

                  <button
                    onClick={() => {
                      handelAdd(item);
                    }}
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Best sales */}
        <div className="bigdiscount">
          <h1>Best Sales</h1>
          <div className="bgproducts">
            {bestSales.map((item) => (
              <div className="bgitems">
                <Link to={`/productpage/${item.id}`}>
                  <img src={item.imgUrl} className="bgproductsimg" />
                </Link>
                <h5>{item.productName}</h5>
                {/* <div className="bgstarscontainer">
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                  <img src={item.star} className="bgproductsstar" />
                </div>*/}
                <h5>INR: {item.price}</h5> 

                <button
                  onClick={() => {
                    handelAdd(item);
                  }}
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Added footer component to the home page */}
       
        {/* toast container to show the msg while adding the product to the cart  */}
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
