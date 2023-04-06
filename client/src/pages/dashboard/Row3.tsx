import React from 'react'
import DashBoardBox from "@/components/DashBoardBox";

type Props = {}

const Row3 = (props: Props) => {
  
    return (
      
       <>
         
         <DashBoardBox gridArea="g"></DashBoardBox>
         <DashBoardBox gridArea="h"></DashBoardBox>
         <DashBoardBox gridArea="i"></DashBoardBox>
         <DashBoardBox gridArea="j"></DashBoardBox>
       </>
  )
}

export default Row3