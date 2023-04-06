import React from 'react'
import DashBoardBox from "@/components/DashBoardBox";
import { useGetKpisQuery } from '@/state/api';

type Props = {}

const Row1 = (props: Props) => {


   const { data } = useGetKpisQuery();
   console.log('data:', data)
  
    return (
      
       <>
         
         <DashBoardBox gridArea="a"></DashBoardBox>
         <DashBoardBox gridArea="b"></DashBoardBox>
         <DashBoardBox gridArea="c"></DashBoardBox>

       </>
  )
}

export default Row1
