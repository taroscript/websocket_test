"use strict";   // 厳格モードとする

const express = require( "express" );
const http = require( "http" );

const app = express();
const server = http.Server( app );

const PORT = process.env.PORT || 1337;


server.listen(
    PORT,
    () =>
    {
        console.log( "Server on port %d", PORT );
    } );
