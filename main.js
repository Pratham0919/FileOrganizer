#!/usr/bin/env node
let inputArr= process.argv.slice(2);//make an array of given sentences by slicing first 2
let fs=require("fs");
let path=require("path");
let helpObj=require("./commands/help");
let organizeObj=require("./commands/organize");
let treeObj=require("./commands/tree");
//console.log(inputArr);
//node main.js tree "directoryPath"
//node main.js organize "directoryPath"
//node main.js tree "directoryPath"
//node main.js help
let command=inputArr[0];
let types={
    media:["mp4", "mkv"],
    archives:['zip', '7s', 'rar'],
    documents:['docs', 'doc','pdf', 'xlsx', 'xls', 'txt'],
    app:['exe', 'pkg'] 
}
switch(command){
    case "tree":
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpObj.helpkey();
        break;
    default:
        console.log("pls give input😊")
}
