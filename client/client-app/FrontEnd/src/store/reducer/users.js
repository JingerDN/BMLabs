const initialState = {
   usersAll:null,
   currentUserId:1,
   selectedUserData:null,
   selectedUserStatictics:null,
   usersAllStatistics:null,
   usersIsReady:false,
   usersAllStatisticsIsReady:null,
   totalUsersCount:null,
   limit:50,
   currentPage:1,
   totalClicks:null,
   totalPageViews:null

  };

  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "SET_ALL_USERS":
        return {
          ...state,
          usersAll: action.payload,
          usersIsReady: true,
        };
      case "SET_ALL_USERS_STATISTICS":
        return {
          ...state,
          usersAllStatistics: action.payload,
          usersAllStatisticsIsReady:true,
        };
      case "SET_CURRENT_PAGE":
        return{
          ...state,
          currentPage:action.payload
        };

      case "SET_LIMIT":
        return{
          ...state,
          limit:action.payload
        };
      case "SET_TOTAL_USERS":
        return{
          ...state,
          totalUsersCount:action.payload
        };
      case "SET_CURRENT_USER_ID":
        return{
          ...state,
          currentUserId:action.payload
        };
      case "SET_STATISTICS_BY_ID":
        return{
          ...state,
          selectedUserStatictics:action.payload
        }
      case "SET_USER_BY_ID":
        return{
          ...state,
          selectedUserData:action.payload
        }

      default:
        return state;
    }
  };