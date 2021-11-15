import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import UserChart from "../UserStatistics/chart";
import DataPickerComponent from "../UserStatistics/date-picker";
import "./statistics.scss";

import arrow from "../../../src/assets/images/statistics/5.png";
import {getStatisticsByIdThunkCreator,getUserByIdThunkCreator} from "../../store/actions/users";


function UserStatistics(){
    
    const currentUserId=useSelector((state)=>state.users.currentUserId);
    const selectedUserData=useSelector((state)=>state.users.selectedUserData);
    const dispatch=useDispatch();

    const setStatisticsByIdThunk=(currentUserId)=>{
        console.log(currentUserId);
        dispatch(getStatisticsByIdThunkCreator(currentUserId));
    };

    const setUserByIdThunk=(currentUserId)=>{
        dispatch(getUserByIdThunkCreator(currentUserId));
    };

    useEffect(()=>{
        setUserByIdThunk(currentUserId),
        setStatisticsByIdThunk(currentUserId);
        
      },[]);

    return(
        <div className="container">
        <div className="content">
        <div className="header-stat">
            <div className="header-stat__text">
                <div className="header-stat__logo">AppCo</div>
            </div>
            <div className="header-stat__breadcrumbs">
                <div className="bcmp-item"><a href="/main" active={true} >Main page</a></div>
                <span><img src={arrow} alt="pointer"/></span>
                <div className="bcmp-item"><span>User statistics</span></div>
                <span><img src={arrow} alt="pointer"/></span>
                {selectedUserData?(<div className="bcmp-item"><span>{selectedUserData[0].first_name}&nbsp;{selectedUserData[0].last_name}</span></div>):null}
            </div>
        </div>
 
        
        <div className="body">
            <div className="body_info">
                <div>{selectedUserData?(<div className="body__user-name">{selectedUserData[0].first_name}&nbsp;{selectedUserData[0].last_name}</div>):null}</div>
                <div className="body__date-picker"><DataPickerComponent/></div>
            </div>
           
            <div className="charts">
                <div className="chart__item"><UserChart/></div>
                <div className="chart__item"></div>
            </div>
        </div>
      
        <div className="footer-users">
                    <div className="footer-users_logo">AppCo</div>
                    <div className="footer-users_rights">All rights reserved by ThemeTags</div>
                    <div className="footer-users_copyrights">Copyrights © 2019. </div>
            </div>
        </div>            
    </div>

    )
}
export default UserStatistics;