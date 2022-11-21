import React from 'react';
import {Box, Grid, Typography, Link, List, Stack, Button} from '@mui/material';

import Helmet from './img/helmet.png';
import Helm4 from './img/helm4.jpg';
import Helmet5 from './img/helmet5.png';
import Helmet6 from './img/helmet6.png';
import Helmet7 from './img/helmet7.png'

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 3,
    width: '10rem',
    height: '10rem',
  };

const Index = () => {
    return (
        <Box >
            <Grid container bgcolor="#252525">
                <Grid item md={4} xs={12} sx={{height: '100vh'}} bgcolor="#f6f6f6">
                    <Box sx={{m: 2}}>
                        <Typography sx={{p:2, fontWeight: 'bold'}} variant="h5" color="#a4846b" >motards.</Typography>
                        <Typography sx={{pl:2}}>components</Typography>
                    </Box>
                    <Box sx={{mt:4, ml:4}}>
                        <Typography variant="h2" sx={{ fontWeight: '700' }}>99,00 €</Typography>
                        <Typography  color="#a4846b">☆★★★★</Typography>
                    </Box>
                    <Box sx={{mt: 4, ml: {xs:0, md:4}}}>
                     <Grid container component={Stack} spacing={2} direction='column' >
                         <Grid item component={Stack} sx={{ flexDirection: { xs: "row", md: "column"}, justifyContent:'center' }} spacing={2}>
                            <img src={Helmet5} className="helm3" />
                            <img src={Helmet6} className="helm3" />
                            <img src={Helmet7} className="helm3" />
                         </Grid>
                         <Grid item sx={{ml: {xs:10, md:0}}} >
                            <img src={Helm4} className="helm4" />
                            <Box sx={{ ...commonStyles, borderColor: '#a4846b', ml:3 }} />
                         </Grid>
                     </Grid>
                    </Box>

                </Grid>
                <img src={Helmet} className="helm1" />
                <Grid item md={8} xs={12} sx={{height:'100%'}} className="grid">
                    <Box>
                        <Stack direction="row" sx={{p:4}} spacing={4}>   
                            
                            <Link href="#" underline="none">
                                <Typography color="#f6f6f6">Home</Typography>
                            </Link>
                            
                            <Link href="#" underline="none">
                                <Typography color="#a4846b">About</Typography>
                            </Link>
                            <Link href="#" underline="none"> 
                                <Typography color="#a4846b"> Collection</Typography>
                            </Link>
                            <Link href="#" underline="none"> 
                                <Typography color="#a4846b">Select</Typography>
                            </Link>
                            <Link href="#" underline="none"> 
                                <Typography color="#a4846b">Contact</Typography>
                            </Link>
                            
                                
                           
                        </Stack>
                        <Grid container sx={{mt:4}} >
                                <Grid item md={4} sm={12} sx={{ml: {xs:4, md:0}}}>
                                    <img src={Helmet} className="helm2" />
                                </Grid>
                                <Grid item md={8} sm={12}>
                                    <Typography sx={{fontweight:'medium'}} variant="h4" color="#f6f6f6">
                                    Lorem Ipsum is simply dummy text of the printing.
                                    </Typography>
                                    <Typography sx={{mt:2,pr:8, fontWeight:'regular'}} color="#f6f6f6" >
                                    is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                                    </Typography>
                                    <Typography sx={{mt:2, pr:8, fontWeight:'light', fontSize:'8'}} color="#f6f6f6" >
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </Typography>
                                    <Typography  sx={{mt:2, fontweight:'medium'}} color="#f6f6f6">
                                        Options
                                    </Typography>
                                    <Stack spacing={1} direction="row" sx={{mt:2}}>
                                        <Button variant="contained" size="small" sx={{bgcolor:"#a4846b", borderRadius: '25px'}}>XS</Button>
                                        <Button variant="outlined" sx={{color:"#a4846b", borderColor:"#a4846b", borderRadius: '25px'}}>S</Button>
                                        <Button variant="outlined" sx={{color:"#a4846b", borderColor:"#a4846b", borderRadius: '25px'}}>M</Button>
                                        <Button variant="outlined" sx={{color:"#a4846b", borderColor:"#a4846b", borderRadius: '25px'}}>L</Button>
                                        <Button variant="outlined" sx={{color:"#a4846b", borderColor:"#a4846b", borderRadius: '25px'}}>XL</Button>
                                    </Stack>
                                    <Stack spacing={2} direction="row" sx={{mt:2}}>
                                        <Button variant="contained" sx={{color:"#a4846b", bgcolor:"#f6f6f6", borderRadius: '25px', width:100}}>S</Button>
                                        <Button variant="contained" size="small" sx={{bgcolor:"#a4846b", borderRadius: '25px', width:200}}>purchase another</Button>                                 
                                    </Stack>
                                </Grid>
                            </Grid>

                    </Box>
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default Index
