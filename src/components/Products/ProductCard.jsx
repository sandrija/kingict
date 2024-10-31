import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function ProductCard({ product }) {
    console.log('productItem: ', product);
    const onAddToCart = () => {

    };
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={product.thumbnail}
                    title={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {
                            product.description
                        }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Dodaj u kosaricu</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
