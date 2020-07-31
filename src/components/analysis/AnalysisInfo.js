import React from "react";

function AnalysisInfo() {
    return(
        <>
        <div className=" " style={{width:"100vw - 1090px"}}>
            <div className="chart d-flex ">
                <div className="d-flex flex-column">
                <center className="mt-2">
                <a href="/#"className="">
                <img alt="icon_img_zoom" src="./images/icon_img_zoom.svg"></img>
                </a></center>

                    <button type="button" className="btn btn-secondary chart-btn">JSW/JSA</button>
                    <button type="button" className="btn btn-secondary chart-btn">Lesion</button>
                    <button type="button" className="btn btn-secondary chart-btn">Alignment</button>
                    <button type="button" className="btn btn-secondary chart-btn">Texture</button>
                    <button type="button" className="btn btn-secondary chart-btn topbtn-active">KL score</button>
                    <div className="chart-tag">
                        <center className="mt-4">
                            <img alt="" src="./images/circle.svg"></img>
                            Left</center>
                        <center>
                        <img alt="" src="./images/triangle.svg"></img>

                            Right</center>
                    </div>
                </div>
                <div className="chart-line">
                    <img alt="" src="./images/demo-chart-01.png"></img>
                </div>
            </div>
            <div className="chart d-flex ">
                <div className="d-flex flex-column">
                <center className="mt-2">
                <a href="/#"className="">
                <img alt="" src="./images/icon_img_zoom_white.svg"></img>
                </a></center>

                    <button type="button" className="btn btn-secondary chart-btn">JSW/JSA</button>
                    <button type="button" className="btn btn-secondary chart-btn">Lesion</button>
                    <button type="button" className="btn btn-secondary chart-btn">Alignment</button>
                    <button type="button" className="btn btn-secondary chart-btn">Texture</button>
                    <button type="button" className="btn btn-secondary chart-btn topbtn-active">KL score</button>
                    <div className="chart-tag">
                        <center className="mt-4">
                            <img alt="" src="./images/circle.svg"></img>
                            Left</center>
                        <center>
                        <img alt="" src="./images/triangle.svg"></img>

                            Right</center>
                    </div>
                </div>
                <div className="chart-line">
                    <img alt="" src="./images/demo-chart-01.png"></img>
                </div>
            </div>
        </div>
        </>
    )
}
export default AnalysisInfo;
