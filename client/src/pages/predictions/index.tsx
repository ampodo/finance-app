import DashBoardBox from "@/components/DashBoardBox";
import FlexBetween from "@/components/FlexBetween";
import { useGetKpisQuery } from "@/state/api";
import { Box, Typography, useTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import regression, { DataPoint } from "regression";


const Predictions = () => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetKpisQuery();

  const formattedData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, i: number) => {
        return [i, revenue];
      }
    );
    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        "Previous revenue": revenue,
        "Regression line": regressionLine.points[i][1],
        "Predicted Revenue": regressionLine.predict(i + 12)[1],
      };
    });
  }, [kpiData]);
  
  return (
    <DashBoardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography
            variant="h5"
            style={{ marginTop: "0.5rem", color: "#fff",  marginBottom: "0.8rem"}}
          >
            Previous revenue based on a simple linear regression model
          </Typography>
          <div>
            <button
              onClick={() => setIsPredictions(!isPredictions)}
              style={{
                backgroundColor: "#0f92ed",
                border: "none",
                color: "white",
                padding: "8px 14px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "13px",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s ease-in-out",
              }}
            >
           {isPredictions ? "Remove Predictions" : "Generate Predictions"}
            </button>
          </div>
        </Box>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{ fontSize: "10px" }}
          ></XAxis>
          <YAxis
            domain={[12000, 26000]}
            axisLine={{ strokeWidth: "0" }}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `€${v}`}
          >
            <Label
              value="Revenue in EUR"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend
            wrapperStyle={{
              margin: "-10px 0 0 0",
              padding: "0 0 5px 0",
            }}
            verticalAlign="top"
          />
          <Line
            type="monotone"
            dataKey="Previous revenue"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regression line"
            stroke="#ffc799"
            dot={false}
          />
          {isPredictions && (
            <Line
              strokeDasharray="5 5"
              dataKey="Predicted Revenue"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashBoardBox>
  );
};

export default Predictions;
