import * as axios from "axios";


const instance=axios.create({
    baseURL:"http://localhost:4000/api/"
})

export const usersAPI={

  getAllUsers(currentPage,limit){
    return  instance.get(`users/list?page=${currentPage}&limit=${limit}`)
      .then((res) => {
        return res.data;
      })   
  },
  getUserById(currentUserId){
    return instance.get(`users/getUser?id=${currentUserId}`)
    .then((res)=>{
      return res.data;
    })
  },
  getAllStatistics(){
    return instance.get(`users/getAllStat`)
    .then((res)=>{
      return res.data;
    })
  },
  getStatisticsById(currentUserId){
    return instance.get(`users/getOne?id=${currentUserId}`)
    .then((res)=>{
      return res.data;
    })
  },

  getTableData(){
   
  }
   
}



//http://localhost:4000/api/users/list