//implemented
function helpfn(dirPath)///by template literals we can make multiple strings
{
     console.log(
         `list of all the commands:
         node main.js tree"directory"
         node main.js organize"directory"
         node main.js help`);
}
module.exports={
    helpkey:helpfn
}