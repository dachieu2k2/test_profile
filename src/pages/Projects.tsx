import { Grid, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { Post } from '../Components';
import { useMemo } from 'react';

function Projects() {
    const dataObjects = useMemo(() => {
        return [
            {
                image: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
                title: 'Post 1',
                description:
                    'Description for Post 1 loremest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                linkSource: 'https://example.com/post1',
                demo: 'https://demo.example.com/post1',
            },
            {
                image: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
                title: 'Post 2',
                description:
                    'Description for Post 2 loremest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                linkSource: 'https://example.com/post2',
                demo: 'https://demo.example.com/post2',
            },
            {
                image: 'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
                title: 'Post 3',
                description:
                    'Description for Post 3 loremest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                linkSource: 'https://example.com/post3',
            },
            {
                image: 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
                title: 'Post 4',
                description:
                    'Description for Post 4 loremest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                demo: 'https://demo.example.com/post4',
            },
            {
                image: 'https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY',
                title: 'Post 5',
                description:
                    'Description for Post 5 loremest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                linkSource: 'https://example.com/post5',
                demo: 'https://demo.example.com/post5',
            },
            {
                image: 'https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8',
                title: 'Post 6',
                description:
                    'Description for Post 6 loremest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                linkSource: 'https://example.com/post6',
            },
            {
                image: 'https://fastly.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g',
                title: 'Post 7',
                description:
                    'Description for Post 7 loremest rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                demo: 'https://demo.example.com/post7',
            },
        ];
    }, []);

    return (
        <>
            <Helmet>
                <title> PĐH - Projects </title>
            </Helmet>
            <Box pt={10} />
            <Grid container display="flex" alignItems={'center'} justifyContent={'center'}>
                {dataObjects.map(({ title, description, demo, linkSource, image }, index) => (
                    <Post
                        key={index}
                        title={title}
                        description={description}
                        image={image}
                        linkSource={linkSource}
                        demo={demo}
                    />
                ))}
            </Grid>
        </>
    );
}

export default Projects;
