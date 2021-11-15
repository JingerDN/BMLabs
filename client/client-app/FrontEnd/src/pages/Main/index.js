import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import "./main.scss";

import cleanDesign from "../../../src/assets/images/main/13.png"
import secureData from "../../../src/assets/images/main/15.png";
import retinaReady from "../../../src/assets/images/main/14.png";
import mobile from "../../../src/assets/images/main/mobile.png";
import {getAllUsersThunkCreator,getAllStatisticsThunkCreator} from "../../store/actions/users";



function Main(){

    const users=useSelector((state)=>state.users.usersAll);
    const currentPage=useSelector((state)=>state.users.currentPage);
    const limit=useSelector((state)=>state.users.limit);
    const dispatch=useDispatch();

    const setAllUsersThunk=(pageNumber,limit)=>{
        console.log(currentPage,limit);
        dispatch(getAllUsersThunkCreator(pageNumber,limit));
    };
    const setAllStatisticsThunk=()=>{
        dispatch(getAllStatisticsThunkCreator())
    }

    return(
        <div className="container">
            <div className="content">
            <div className="header" >
                <div className="header__text">
                    <div className="header__logo">AppCo</div>
                    <div className="header__title title"><span>Brainstorming</span> for<br/> desired perfect Usability</div>
                    <div className="header__subtitle subtitle">Our design projects are fresh and simple and will benefit<br/>your business greatly. Learn more about our work!</div>
                    <div className="header__button button">
                       <Link to="/users/list"> <button onClick={()=>{
                           setAllUsersThunk(currentPage,limit);
                           setAllStatisticsThunk();
                            }}>
                           <span>Views Stats</span>
                           </button>
                        </Link>
                    </div>
                </div>
                <div className="header__image">
                    <img src={mobile} alt="mobile"/>
                </div>
                </div>
            <div className="body">
                <div className="body_text">
                    <div className="body__title">Why <b>small business owners
                    <br/> love </b>AppCo?</div>
                </div>


                <div className="body_text">
                    <div className="body__subtitle">Our design projects are fresh and simple and
                     will benefit your business greatly. Learn more about our work!</div>
                </div>
               
                <div className="body_row">
                    <div className="body__column">
                        <div className="item-body">
                            <div className="item-body__icon">
                            <img src={cleanDesign} alt="clean design"/>
                            </div>
                            <div className="item-body__title">Clean Design</div>
                            <div className="item-body__text">Increase sales by showing true dynamics of your website.</div>
                        </div>
                    </div>
                    <div className="body__column">
                        <div className="item-body">
                            <div className="item-body__icon">
                            <img src={secureData} alt="secure data"/>
                            </div>
                            <div className="item-body__title">Secure Data</div>
                            <div className="item-body__text">Build your online store’s trust using Social Proof & Urgency.</div>
                        </div>
                    </div>
                    <div className="body__column">
                        <div className="item-body">
                            <div className="item-body__icon">
                                <img src={retinaReady} alt="retina ready"/>
                            </div>
                            <div className="item-body__title">Retina Ready</div>
                            <div className="item-body__text">Realize importance of social proof in customer’s purchase decision.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer_subscibe">
                    <div className="footer-input">
                        <input className="footer-input__field" placeholder="Enter your email"></input>
                        <button className="footer-input__button">Subscribe</button>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="footer-logo">AppCo</div>
                    <div className="footer-rights">All rights reserved by ThemeTags</div>
                    <div className="footer-copyrights">Copyrights © 2019. </div>
                </div>

            </div>
            </div>

            
        </div>
    )
}
export default Main;