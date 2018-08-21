import React, { Component } from 'react';
import axios from 'axios';
import Album from './album';
import _ from 'lodash';
export default class Albums extends Component {
    albums = [];
    groups = [];
    componentDidMount() {
        var myArray = [
            {group: "one", groupname:"sunitha", color: "red"},
            {group: "two", groupname:"sushmitha", color: "blue"},
            {group: "one", groupname:"sunitha", color: "green"},
            {group: "one", groupname:"sunitha", color: "black"}
        ];

        var group_to_values = myArray.reduce(function (obj, item) {
            obj[item.group] = {group:obj[item.group], color:obj[item.group].push(item.color)} || [];
            // obj[item.group] = obj[item.groupname] || [];
            // obj[item.group].push(item.color);
            return obj;
        }, {});

        var groups = Object.keys(group_to_values).map(function (value, key) {
            return {group: key, groupname:value, color: group_to_values[key]};
        });

        console.log(group_to_values);
        axios.get('https://jsonplaceholder.typicode.com/albums').then(response => {
            response.data.forEach((album) => {
                axios.get('https://jsonplaceholder.typicode.com/users?id=' + album.userId).then(response => {
                    // this.albums=this.albums.push({ username: response.data[0].username, userId: response.data[0].id, album:album });
                   
                });
            });
            var group = [
                {userId:1, username:'sunitha', album: {id:1, title:'picture1'}},
                {userId:1, username:'sunitha', album: {id:2, title:'picture2'}},
                {userId:2, username:'sushmitha', album: {id:3, title:'picture3'}}
            ]
            this.groups = group.reduce(function (obj, item) {
                obj[item.userId] = {userId:item.userId, username:item.username, album:item.album.push({id:item.id, title:item.title})};
                // obj[item.userId].push({id:item.id,title:item.title});
                return obj;
            }, {});
            
            // var groups = Object.keys(group_to_values).map(function (key) {
            //     return {userId: key, username:, title: group_to_values[key]};
            // });
            console.log(this.groups);
        });
    }

    render() {
        const albums = this.albums;
        return (
            <React.Fragment>
                {/* {albums.map((album, index) => <Album key={index} {...album} />)} */}
            </React.Fragment>
        );
    }
}