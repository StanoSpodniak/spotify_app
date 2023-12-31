const express = require('express');
const spotifyWebApi = require('spotify-web-api-node')

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '5faccc1556f24593b3ae6bbfc7a34933',
        clientSecret: '21627a8506814cf39a7d0d9c99361d69'
    })

    spotifyApi.authorizationCodeGrant(code).tehn(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        }).catch(() => {
            res.sendStatus(400)
        })
    })
})