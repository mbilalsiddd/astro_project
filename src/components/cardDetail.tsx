// import axios from 'axios'
// import React, { useState } from 'react'

// const CardDetail = () => {
 
//     // const [name , setName] = useState("bilal");
//     // console.log("name ==>" , name);

//     // const [count , setCount] = useState(0)
//     // console.log("count ==>" , count)
//     // const [api , setApi] = useState(null)

// //   const handleSubmit = ()  => {
// //     // setName("khalid") 
// //     setCount(prev => prev+1) 
// //  }

//  const apiHandling = async () => {
//       try {
//       const api = await axios('https://fakestoreapi.com/products') 
//       console.log("Api Data ==>" , api);
//       } catch (error) {
//         console.log("Error ==> " , error)
//       }
//  }


//   return (
//     <div>
//       {/* <button onClick={handleSubmit}>click</button> */}
//       <button onClick={apiHandling}>click Api</button>
//     </div>
//   )
// }

// export default CardDetail

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardDetail(props) {
  console.log("props ==>" , props);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.imgsrc}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

