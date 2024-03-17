import { Button, Card, CardActions, CardContent, CardMedia, Grid, Grow, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

export interface PostProps {
    image: string;
    title: string;
    description: string;
    linkSource?: string;
    demo?: string;
}

export default function Post({ image, title, description, linkSource, demo }: PostProps) {
    return (
        <Grid item xs={4} p={1} justifyContent={'center'} display={'flex'}>
            <Grow in>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button startIcon={<GitHubIcon fontSize="inherit" />} size="small" disabled={!linkSource}>
                            Source code
                        </Button>
                        <Button size="small" startIcon={<LanguageOutlinedIcon />} disabled={!demo}>
                            Demo
                        </Button>
                    </CardActions>
                </Card>
            </Grow>
        </Grid>
    );
}
