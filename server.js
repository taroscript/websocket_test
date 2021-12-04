'use strict';

const express = require( 'express' );
const http = require( 'http' );
const socketIO = require( 'socket.io' );

const app = express();
const server = http.Server( app );
const io = socketIO( server );

const PORT = process.env.PORT || 3000;

io.on(
    'connection',
    ( socket ) =>
    {
        console.log( 'connection' );


        socket.on(
            'disconnect',
            () =>
            {
                console.log( 'disconnect' );
            } );

        socket.on(
            'new message',
            ( strMessage ) =>
            {
                console.log( 'new message', strMessage );

                io.emit( 'spread message', strMessage );
            } );
    } );

app.use( express.static( __dirname + '/public' ) );

// サーバー起動
server.listen(
    PORT, "0.0.0.0",
    () =>
    {
        console.log( 'Server on port %d', PORT );
    } );
