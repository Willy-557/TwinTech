import { NavLink } from 'react-router'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';


export default function CheckoutPage() {
    return (<>
        <h4>Lanjut Belanja</h4>
        <Grid container spacing={2}>
            <Grid size={8} sx={{backgroundColor:'yellow', p: 2}}>
                <Box component="section" sx={{ backgroundColor:'yellow', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <b>Barang di keranjang</b>
                    <div style={{backgroundColor:'yellow'}}>
                        <p>Kosongkan keranjang</p>
                    </div>
                </Box>
                <hr />
            </Grid>
            <Grid size={4} style={{backgroundColor:'yellow'}}>
                <div>size=4</div>
            </Grid>
        </Grid>
        <div>
            
        </div>
    </>)
}