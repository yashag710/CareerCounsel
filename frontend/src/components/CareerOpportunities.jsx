import React from "react";
import CareerPathResults from "./CareerPathResults";
import CareerGrowthStatistics from "./CareerGrowthStatistics";
import CareerAssistantChat from "./CareerAssistantChat";

export function CareerOpportunities(){
    return(
        <>
        <div className="flex flex-row gap-2">
            <CareerPathResults />
            <div className="flex flex-col">
                <CareerGrowthStatistics />
                <CareerAssistantChat />
            </div> 
        </div>
        </>
    )
}