import {usersAPI} from "../../api/api";

function handleErrors(err) {
  if (err.response) {
    console.log("Error with response", err.response.status);
  } else if (err.request) {
    console.log("Error with request");
  } else {
    console.log("Error", err.message);
  }
}


export const setAllUsersAc = (users) => ({
    type: "SET_ALL_USERS",
    payload: users,
  });

export const setAllStatisticsAc=(usersAllStatistics)=>({
  type:"SET_ALL_USERS_STATISTICS",
  payload:usersAllStatistics,
});

export const setCurrentPageAc = (currentPage) => ({
  type: "SET_CURRENT_PAGE",
  payload: currentPage,
});
export const setLimitAc=(limit)=>({
  type:"SET_LIMIT",
  payload:limit,
});
export const setTotalUsersCountAc=(totalUsersCount)=>({
  type:"SET_TOTAL_USERS",
  payload:totalUsersCount,
});
export const setCurrentUserIdAc=(currentUserId)=>({
  type:"SET_CURRENT_USER_ID",
  payload:currentUserId,
});
export const setStatisticsByIdAc=(selectedUserStatictics)=>({
  type: "SET_STATISTICS_BY_ID",
  payload:selectedUserStatictics,
});

export const setUserByIdAc=(selectedUserData)=>({
type: "SET_USER_BY_ID",
payload:selectedUserData,
})

export const getAllUsersThunkCreator=(currentPage,limit)=>{
    return (dispatch)=>{
        usersAPI.getAllUsers(currentPage,limit)
        .then((data) => {
          console.log(data);
          dispatch(setCurrentPageAc(currentPage));
          dispatch(setLimitAc(limit));
          dispatch(setAllUsersAc(data.result));
          dispatch(setTotalUsersCountAc(data.total));
        })
        .catch(handleErrors);
    }
  }  

export const getAllStatisticsThunkCreator=()=>{
  return (dispatch)=>{
    usersAPI.getAllStatistics()
    .then((data)=>{
      console.log(data);
      dispatch(setAllStatisticsAc(data));
    })
    .catch(handleErrors);
  }
}

export const getStatisticsByIdThunkCreator=(currentUserId)=>{
  return(dispatch)=>{
    usersAPI.getStatisticsById(currentUserId)
    .then((data)=>{
      console.log(data);
      dispatch(setStatisticsByIdAc(data));
    })
    .catch(handleErrors);
  }
}

export const getUserByIdThunkCreator=(currentUserId)=>{
  return(dispatch)=>{
    usersAPI.getUserById(currentUserId)
    .then((data)=>{
      console.log(data);
      dispatch(setUserByIdAc(data));
    })
    .catch(handleErrors);
  }
}