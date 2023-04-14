import React, { useMemo } from "react";
import BoxHeader from "@/components/BoxHeader";
import DashBoardBox from "@/components/DashBoardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";
import { Box, useTheme, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  Pie,
  PieChart,
  Tooltip,
} from "recharts";

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  const { data: kpiData } = useGetKpisQuery();

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

  const expenses = [
    {
      name: "Page A",
      uv: 9500,
      pv: 1400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 9760,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 9540,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 9930,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 9950,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 9520,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 9630,
      pv: 4300,
      amt: 2100,
    },
  ];

  const transactions = [
    { name: "Mallory Handrek", value: 297.98 },
    { name: "Cullie Lampens", value: 10.17 },
  ];

  return (
    <>
      <DashBoardBox gridArea="g">
        <BoxHeader title="Highest product expense" sideText={`9.95€`} />

        <ResponsiveContainer width="100%" height="70%">
          <BarChart width={150} height={50} data={expenses}>
            <Bar dataKey="uv" fill="#6ac1f3" />
          </BarChart>
        </ResponsiveContainer>
      </DashBoardBox>

      <DashBoardBox gridArea="h">
        <BoxHeader
          title="Highest vs lowest amounts spent by client"
          sideText={``}
        />
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={transactions}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#97d8f7"
                label={({ value }) => `${value.toFixed(2)}€`}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
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
        <BoxHeader title="Prosperous future upfront" sideText="+25%" />
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
          Based on the data from 2022 the forthcoming year for our organization
          can become even more prosperous.
        </Typography>
      </DashBoardBox>
    </>
  );
};

export default Row3;
