

import React from 'react'
import { Box, useMediaQuery } from '@mui/material';


const gridTemplateLargeScreens = `

     "a b c"
     "a b c"
     "a b c"
     "a b f"
     "d e f"
     "d e f"
     "d h i"
     "g h i"
     "g h j"
     "g h j"

`


const gridTemplateSmallScreens = `

"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
     `


type Props = {}

const Dashboard = (props: Props) => {


  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)")

  return  (
       <Box width="100%" height="100%" display="grid" gap="1.5rem"
       
           sx={
                isAboveMediumScreens ? {
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
                gridTemplateAreas: gridTemplateLargeScreens,
                } : {

                      gridAutoColumns: "1fr",
                      gridAutoRows: "80px",
                      gridTemplateAreas: gridTemplateSmallScreens,
                }   
        }
   
       >

         <Box bgcolor="#fff" gridArea="a"></Box>
         <Box bgcolor="#fff" gridArea="b"></Box>
         <Box bgcolor="#fff" gridArea="c"></Box>
         <Box bgcolor="#fff" gridArea="d"></Box>
         <Box bgcolor="#fff" gridArea="e"></Box>
         <Box bgcolor="#fff" gridArea="f"></Box>
         <Box bgcolor="#fff" gridArea="g"></Box>
         <Box bgcolor="#fff" gridArea="h"></Box>
         <Box bgcolor="#fff" gridArea="i"></Box>
         <Box bgcolor="#fff" gridArea="j"></Box>

       </Box>
  );
};

export default Dashboard;
