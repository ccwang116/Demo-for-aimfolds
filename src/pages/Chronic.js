import React from "react";
import History from '../components/analysis/History'
import XrayArea from '../components/analysis/XrayArea'
import AnalysisInfo from '../components/analysis/AnalysisInfo'


function Chronic() {
    return(
        <>
        <div className="d-flex">
        <History />
        <XrayArea />
        <AnalysisInfo />
        </div>
        </>
    )
}
export default Chronic;
