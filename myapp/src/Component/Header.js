import React from 'react';
import './Header.css';
import FristComponent from './FristComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";

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
            <div className="dfs jcsb ">
            <div class="img">
              <img src="./image/flipkart-logo.png"/>
              <p>
                Explore <span>Plus</span>
              </p>
            </div>
            <div className="dns">
              <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
            </div>
            <div className="input a-tag ">
              <input type="text" placeholder="Search for products,brands" />
           
            </div>

            <div className="a-tag btns dn">
              <button type="button">Login</button>
            </div>

            <div className="df side">
              <div className="pd-lft dn">
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
                className="dn"
                style={{
                  color: "#ebeef4",
                  paddingLeft: "3px",
                  paddingTop: "3px",
                }}
              />  
              <div className="pd-lft dn">
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
      <div style={{ padding: "50px" }}>
            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header blcks">
              <div class="img ">
              <img src="./image/flipkart-logo.png" style={{ width: "70px" }} />
              <p>
                Explore <span>Plus</span>
              </p>
            </div>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body ">
                <div>
                <FontAwesomeIcon
                icon={faSignIn}
                style={{ paddingRight: "6px" }}
              />
              <a href="" className="blck" >
              Login
              </a> 
              </div>
                
                <div>
                <FontAwesomeIcon
                icon={faStore}
                style={{ paddingRight: "6px" }}
              />
              <a href="" className="blck " >
                Become a Seller
              </a> 
              </div>
              <div>
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{
                 
                  paddingRight: "5px",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              />
              <a href="" className="blck"  onClick={props.onTriggerpopup}>
                Card
              </a> 
              </div>
              <div class="dropdown mt-3">
                  <a
                    class="btn blck dropdown-toggle"
                  
                    data-bs-toggle="dropdown"
                  >
                   products
                  </a>
                  <ul class="dropdown-menu blck">
                    <li>
                      <a class="dropdown-item blck" href="#"   onClick={() => {
                    handleclick("all");
                  }}>
                        All
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item blck" href="#"   onClick={() => {
                    handleclick("fruit");
                  }}>
                      Fruits
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item blck" href="#"   onClick={() => {
                    handleclick("veg");
                  }}>
                      Vegtables
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item blck" href="#"   onClick={() => {
                    handleclick("chilli");
                  }}>
                      Chilli Powder
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
