import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function GridCard({ cardItem, cardItemProps }) {
    const onAddToCart = () => {

    };

    return (
        // <Grid item xs={2} sm={4} md={4}>
        <Grid item sx={{ maxWidth: 345 }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={cardItem[cardItemProps.thumbnail]}
                    title={cardItem[cardItemProps.title]}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                            height: '65px',
                        }}
                    >
                        {cardItem[cardItemProps.title]}
                    </Typography>
                    <Typography variant="body2" sx={{ minHeight: '61px' }}>
                        {
                            cardItem[cardItemProps.description].substring(0, 100)
                        }
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ textAlign: 'right' }}>
                        {
                            `${cardItem[cardItemProps.price]} €`
                        }
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Button size="small">Detalji</Button>
                    <Button size="small">Dodaj u kosaricu</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
