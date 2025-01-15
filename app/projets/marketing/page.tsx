"use client"

import React from "react"

import { useAppStore } from "@/store"

export default function Marketing(){
    const {setIsLoading} = useAppStore()
    React.useEffect(() => {
    setIsLoading(false) 
    }, [])
    return <>Marketing Page</>
}