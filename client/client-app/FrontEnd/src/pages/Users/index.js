import React,{useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";

import "./users.scss";

import arrow from "../../../src/assets/images/statistics/5.png";
import left from "../../../src/assets/images/leftTo.png";
import right from "../../../src/assets/images/rightTo.png";
import UsersTable from "../Users/UserTable";
import {setCurrentPageAc,getAllUsersThunkCreator, setLimitAc,getAllStatisticsThunkCreator} from "../../store/actions/users";

function Users(){

    const users=useSelector((state)=>state.users.usersAll);
    const usersIsReady=useSelector((state)=>state.users.usersIsReady);
    const totalUsersCount=useSelector((state)=>state.users.totalUsersCount);
    const limit=useSelector((state)=>state.users.limit);
    const currentPage=useSelector((state)=>state.users.currentPage);
    const usersAllStatistics=useSelector((state)=>state.users.usersAllStatistics);
    const usersAllStatisticsIsReady=useSelector((state)=>state.users.usersAllStatisticsIsReady);
    

    const dispatch=useDispatch();
    const setCurrentPage=(currentPage) => dispatch(setCurrentPageAc(currentPage));
    const setLimit=(limit)=>dispatch(setLimitAc(limit));
    const setAllUsersThunk=(pageNumber,limit)=>{
        dispatch(getAllUsersThunkCreator(pageNumber,limit));
    };
    const setAllStatisticsThunk=()=>{
        dispatch(getAllStatisticsThunkCreator())
    }
   
    const onPageChanged = (pageNumber,users) => {
        console.log(pageNumber,limit);
        setAllUsersThunk(pageNumber,limit);
    };

    let pagesCount = Math.ceil(totalUsersCount / limit);
    let pages = [];
 
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    useEffect(()=>{
        setAllStatisticsThunk();
      },[]);


    return(
        <div className="container">
            <div className="header-users" >
                <div className="header-users__text">
                    <div className="header-users__logo">AppCo</div>
                </div>
                <div className="header-users__breadcrumbs">
                    <div className="bcmp-item"><a href="/main" active={true} >Main page</a></div>
                    <span><img src={arrow} alt="pointer"/></span>
                    <div className="bcmp-item"><span>User statistics</span></div>
                    <span><img src={arrow} alt="pointer"/></span>
                </div>
            </div>
            <div className="body-user">
                <div className="body-user_text">
                    <div className="body-user__title">User statistics</div>
                </div>

            </div>
            <UsersTable items={users} usersIsReady={usersIsReady} usersStat={usersAllStatistics}
                    usersAllStatisticsIsReady={usersAllStatisticsIsReady}/>
            <div className="pagination">
                <div className="pagination_numbers">
                     <div><h><img src={left} alt="left"/></h>
                        {pages.map((p, i) => {
                            return (
                              <>
                                 <span
                                    className="not-selected"
                                    key={i}
                                    className={currentPage === p && "selected-Page"}
                                    onClick={() => { onPageChanged(p);}}
                                >
                                {p}
                                </span>
                            </>
                            );
                         })}
                         <h><img src={right} alt="right"/></h>
                    </div>
            </div> 
            </div>   

            <div className="footer-users">
                    <div className="footer-users_logo">AppCo</div>
                    <div className="footer-users_rights">All rights reserved by ThemeTags</div>
                    <div className="footer-users_copyrights">Copyrights © 2019. </div>
            </div>
        </div>
    )
}
export default Users;