"use strict";

/*
 * This is meant to be invocative of how we use to
 * walk APIs.  Nowadays we can use better mechanisms
 * to manage async communications.  Instead of
 * promises we could use callbacks but that still
 * intertwines the coded that is getting the data
 * and dealing with the async nature of talking to an
 * API with the code that uses the data.
 */

var Promise = require('bluebird');
var request = require('request');

var apiWalker = function() {
    this.nextPage = 0;
}

apiWalker.prototype.next = function() {
    var self = this;
    return new Promise(function(resolve, reject) {
        request('http://127.0.0.1:8000/numbers?start=' + self.nextPage,
            { json: true },
            function(err, res, body) {
                if (err) {
                    reject(err);
                } else {
                    self.nextPage = body.More;
                    resolve(body);
                }
            }
        );
    });
}

var walker = new apiWalker()
var numPages = 0;

function getData() {
    walker.next().then(function(data) {
        console.log(data.Data[0], data.Data[data.Data.length -1]);
        if (++numPages < 10) {
            getData()
        }
    });
}

getData();
