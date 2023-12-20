import React from 'react';
import './Header.css';
import FristComponent from './FristComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from './ImageSlider';
const Header = (props) => {
    function handleclick(a){
        props.onData(a);
      }
    return (
        <div>
               <div>
      <div className="header">
        <div class="head">
          <div class="mx-w-d  df ">
            <div class="img">
              <img src="./image/flipkart-logo.png"/>
              <p>
                Explore <span>Plus</span>
              </p>
            </div>

            <div className="input a-tag ">
              <input type="text" placeholder="Search for products,brands" />
             <FontAwesomeIcon
                icon={ faMagnifyingGlass }
                className="doller"
              /> 
            </div>

            <div className="a-tag btns">
              <button type="button">Login</button>
            </div>

            <div className="df side">
              <div className="pd-lft ">
              <FontAwesomeIcon
                  icon={faStore}
                  style={{ color: "#fff", paddingRight: "6px" }}
                />  
                <a href="" className='dn'>Become a Seller</a>
              </div>
              <div class="dropdown-2 pd-lft">
                <a href="" className='dn'>products</a>

                <div class="dropdown-content-2">
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('all')}}
                  >
                    All
                  </a>
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('fruit')}}
                  >
                   Fruits
                  </a>
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('veg')}}
                  >
                   Vegtables
                  </a>
                  <a
                    href="#"
                    role="button"
                    onClick={()=>{handleclick('chilli')}}
                  >
                   Chilli Powder
                  </a>
                </div>
              </div>
                <FontAwesomeIcon
                icon={faAngleDown}
                style={{
                  color: "#ebeef4",
                  paddingLeft: "3px",
                  paddingTop: "3px",
                }}
              />  
              <div className="pd-lft">
                 <FontAwesomeIcon
                  icon={faCartShopping}
                  onClick = {props.onTriggerpopup}
                  style={{
                    color: "#e6efec",
                    paddingRight: "5px",
                    fontSize: "15px",
                    cursor: "pointer",
                   
                  }}
                />  

                 <button
                  href=""
                  class="cart-btn dn"
                  role="button"
              
                > 
                  Cart {props.headerCount}
                </button>

                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#fff" }} className=""></div>
      </div>
      <div>
       <FristComponent/>
      </div>
      <div>
       <ImageSlider/>
      </div>
    </div>
        </div>
    );
}

export default Header;
