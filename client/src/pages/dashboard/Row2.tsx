
import React, { useMemo } from "react";
import BoxHeader from "@/components/BoxHeader";
import DashBoardBox from "@/components/DashBoardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";

import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";





const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 } ];



const Row2 = () => {


  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data } = useGetProductsQuery();
  


  const operationalExpenses = useMemo(() => {
    return (
      operationalData &&
      operationalData[0].monthlyData.map(
        ({ month, operationalExpenses, nonOperationalExpenses }) => {
          return {
            name: month.substring(0, 3),
            "Operational Expenses": operationalExpenses,
            "Non Operational Expenses": nonOperationalExpenses,
          };
        }
      )
    );
  }, [operationalData]);


  const productExpenseData = useMemo(() => {
    return (
      productData &&
      productData.map(({ _id, price, expense }) => {
        return {
          id: _id,
          price: price,
          expense: expense,
        };
      })
    );
  }, [productData]);  
    
  
    return (
      
       <>
         
         <DashBoardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-operational Expenses"
          sideText=""
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
          
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 80,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "12px", fill: "white" }}
              
            />

            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "12px", fill: "white" }}
            />

            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "12px", fill: "white" }}
            />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.secondary[700]}
            />

            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashBoardBox>



         <DashBoardBox gridArea="e">

         <BoxHeader title="Campaigns and Targets" sideText="" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h4" color={palette.primary[200]}>
              250.000€
            </Typography>
            <Typography variant="h6">
               Desired profit for the next financial year 
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6" color={palette.primary[200]} >Losses are down 25%</Typography>
            <Typography mt="0.4rem"  variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6" color={palette.primary[200]}>
              Margins are up by 30% from last month
            </Typography>
          </Box>
        </FlexBetween>


         </DashBoardBox>

         <DashBoardBox gridArea="f">

        <BoxHeader title="Product Prices vs Expenses" sideText="Highest: 198.54€"/>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 50,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px", fill: "white" }}
              tickFormatter={(v) => `€${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px", fill: "white" }}
              tickFormatter={(v) => `€${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `€${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
         
         </DashBoardBox>

       </>
  )
}

export default Row2;

