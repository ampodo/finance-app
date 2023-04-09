
import React, { useMemo } from "react";
import BoxHeader from "@/components/BoxHeader";
import DashBoardBox from "@/components/DashBoardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Cell, Pie, PieChart } from "recharts";
import { Box, Typography, useTheme } from "@mui/material";



const Row3 = () => {

  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  


  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);

  
 
  
  

  return (
    <>


    <DashBoardBox gridArea="g">
     
    <BoxHeader
          title="List of Products"
          sideText=""
        />
       
    <Box 
    
    mt="0.5rem"
    height="100%"
    overflow="auto"
    
    
    
    >
    
         </Box>
  
        
      </DashBoardBox>




    <DashBoardBox gridArea="h"  >
       
    <BoxHeader
          title="Transactions records"
          sideText=""
        />
       
    <Box 
    
    mt="0.5rem"
    
   
    
    
    >
    
         </Box>

      
      </DashBoardBox>



      <DashBoardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={110} height={70}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={30}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashBoardBox>


      <DashBoardBox gridArea="j">
        <BoxHeader
          title="High hopes for the upcoming year"
          sideText="Expectations: +25%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[100]}
            borderRadius="1rem"
            width="75%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h5">
            Based on the data from 2022 the forthcoming year for our organization can become even more prosperous.
        </Typography>
      </DashBoardBox>
    </>
  );
};

export default Row3;

