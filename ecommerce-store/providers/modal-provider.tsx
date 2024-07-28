"use client"

import Previewmodal from "@/components/preview-modal"
import { useEffect, useState } from "react"

const ModalProvider = () => {

   const [isMounted , setIsMounted] = useState(false);

   useEffect(() => {
     setIsMounted(true)
   }, [])

   if(!isMounted){
    return null;
   }

    return (
        <>
        <Previewmodal />
        </>
    )
}

export default ModalProvider