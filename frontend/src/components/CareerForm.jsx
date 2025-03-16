import React from "react";
import CareerPathForm from "./CareerPathForm";
import CareerAssistantChat from "./CareerAssistantChat";

export function CareerForm(){
    return(
        <>
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Career Path Opportunities</h1>
            <p className="text-gray-600">
            Explore personalized career paths based on your skills, experience, and interests
            </p>
        </div>
        <div className="flex flex-row">
            <div className="w-3/4"> 
            <CareerPathForm />
            </div>
            <div>
            <CareerAssistantChat />
            </div>
        </div>
        </>
    )
}