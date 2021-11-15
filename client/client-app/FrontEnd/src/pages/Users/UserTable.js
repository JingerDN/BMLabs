import React,{useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {setCurrentUserIdAc,getUserByIdThunkCreator, setUserByIdAc} from "../../store/actions/users";
import loading from "../../assets/images/830.gif";
import "../Users/table-data.scss";

const UserTable = ({
  items,usersIsReady,usersStat,
  usersAllStatisticsIsReady
}) => {
  
  function getTotalClicksById(stat_id){
    if(usersAllStatisticsIsReady){
        let userStatById=usersStat.filter((i)=>i.user_id==stat_id);
        let clicks=userStatById.map((c)=>parseInt(c.clicks));
        let totalClicks=clicks.reduce((sum,elem)=>sum+elem)
        return totalClicks;
    }}

    function getTotalPageViewsId(stat_id){
      if(usersAllStatisticsIsReady){
          let userStatById=usersStat.filter((i)=>i.user_id==stat_id);
          let page_views=userStatById.map((c)=>parseInt(c.page_views));
          let totalViews=page_views.reduce((sum,elem)=>sum+elem)
          return totalViews;
      }}

      function getDate(){
        if(usersAllStatisticsIsReady){
        let userStatByDate=usersStat.filter((i)=>i.date);
       return userStatByDate;
      }}

      const dispatch=useDispatch();

      const setCurrentUserId=(currentUserId) => dispatch(setCurrentUserIdAc(currentUserId));
      const setUserByIdThunk=(currentUserId)=>{dispatch(getUserByIdThunkCreator(currentUserId))}
    
      const onSetUserId = (e) => {
        console.log(e.currentTarget.dataset.user);
        setCurrentUserId(e.currentTarget.dataset.user);
        setUserByIdThunk(e.currentTarget.dataset.user);
      }; 

    const renderRow = (item, idx) => {
    const { id } = item;//id of user in db
    const { _id,first_name,last_name,email,gender,ip_address} = item;

    let tc=getTotalClicksById(id);
    let tv=getTotalPageViewsId(id);
  
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td data-user={id} onClick={onSetUserId}><Link to={`/user-statistics/${id}`}>{first_name}</Link></td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>{gender.toLowerCase()}</td>
        <td>{ip_address}</td>
        <td>{!usersAllStatisticsIsReady?<img className="size-loader" src={loading}/>:tc}</td>
        <td>{!usersAllStatisticsIsReady?<img className="size-loader" src={loading}/>:tv}</td>
      </tr>
    );
  };



  return (
    
      <table className="resp-tab"> 
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP address</th>
            <th>Total clicks</th>
            <th>Total page views</th>
          </tr>
        </thead>

        <tbody >{(usersIsReady)?items.map(renderRow):null}</tbody>
      </table>
  );
};
export default UserTable;
