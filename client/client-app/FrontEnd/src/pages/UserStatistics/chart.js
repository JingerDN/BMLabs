import React from "react";
import {useSelector} from "react-redux";
import {Line,defaults} from "react-chartjs-2";

defaults.plugins.legend.position="top";
defaults.plugins.legend.align="start";
defaults.plugins.legend.labels.boxWidth=0;
defaults.color="#CCCCCC";

const UserChart=()=>{
    const usersAllStatistics=useSelector((state)=>state.users.usersAllStatistics);
    const currentUserId=useSelector((state)=>state.users.currentUserId);
       
        let userClicks=[];
        let userViews=[];
        let userDate=[];

        let userStat=usersAllStatistics.filter((i)=>i.user_id==currentUserId);
       
        for(const dataObj of userStat){
            userClicks.push(parseInt(dataObj.clicks));
            userViews.push(parseInt(dataObj.page_views));
        }
        console.log(userViews,userClicks);
        
        const chartDataClicks={
            labels:["Nov", "Dec","Jan","Feb","Mar","Apr","May","Jun"],
            datasets:[{
                label: "Clicks",
                data:userClicks,
                backgroundColor: [
                    'rgba(0, 0, 0, 1)'
                ],
                borderColor: [
                    'rgba(58, 128, 186, 1)'
                ],
                borderWidth: 4
            }],
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 24
                            }
                        }
                    }
                }

            }
        }

        const chartDataViews={
            labels:["Nov", "Dec","Jan","Feb","Mar","Apr","May","Jun"],
            datasets:[{
                label: "Views",
                data:userViews,
                backgroundColor: [
                    'rgba(0, 0, 0, 1)'
                ],
                borderColor: [
                    'rgba(58, 128, 186, 1)'
                ],
                borderWidth: 4
            }],
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    return(
        <div className="user-chart">
            <Line data={chartDataClicks} 
            options={{responsive:true,
            title: {
                text:"Clicks",
                display:true
                }
            }} />

            <Line data={chartDataViews} 
            options={{responsive:true,
            title: {
                text:"Views",
                display:true
                }
            }} />
        
        </div>
    )
}

export default UserChart;