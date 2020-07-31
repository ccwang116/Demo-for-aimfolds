import React, { useState } from "react";

function History() {
    const [open,setOpen]=useState(false)
    const displayIcon=(open?<i className="fas fa-chevron-up mr-2"></i>:<i className="fas fa-chevron-down mr-2"></i>)
    const historyCard=(
        <>
    <div className="history-title" onClick={()=>setOpen(!open)}>
            <p className="name">Name:Klay</p>
            <p className="date">Date:2019-06-18{displayIcon}</p>
        </div>
        {open?
        <div className="history-content d-flex flex-wrap">
            <div className="right-img"><span>R.PA</span><img alt="" src="./images/RPA.jpg"></img></div>
            <div className="right-img"><span>R.LAT</span><img alt="" src="./images/RLAT.jpg"></img></div>
            
            <div className="left-img"><span>L.PA</span><img alt="" src="./images/LPA.jpg"></img></div>
            <div className="left-img"><span>L.LAT</span><img alt="" src="./images/LLAT.jpg"></img></div>

        </div>
        :""}
        </>
    )
    const staticCard=(
        <>
        <div className="history-title" >
            <p className="name">Name:Klay</p>
            <p className="date">Date:2018-02-19{displayIcon}</p>
        </div>
        <div className="history-content d-flex flex-wrap">
            <div className="right-img"><span>R.PA</span><img alt="" src="./images/RPA.jpg"></img></div>
            <div className="right-img"><span>R.LAT</span><img alt="" src="./images/RLAT.jpg"></img></div>
            
            <div className="left-img"><span>L.PA</span><img alt=""src="./images/LPA.jpg"></img></div>
            <div className="left-img"><span>L.LAT</span><img alt="" src="./images/LLAT.jpg"></img></div>
        </div>

        </>
    )
    return(
        <>
        <div className=" " style={{width:"330px"}}>
        {historyCard}
        {staticCard}
        {staticCard}

        
        </div>
        </>
    )
}
export default History;
