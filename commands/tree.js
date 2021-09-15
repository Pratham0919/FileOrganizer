function treefn(dirPath)
{
    //console.log("Tree implemented", dirPath);
    //let destPath;
    if(dirPath==undefined)
    { 
        treeHelper(process.cwd(),"")
        return;
    }
    else
    {
        let doesexist=fs.existsSync(dirPath);//to check if file exist or not
        if(doesexist)
            
        {
            treeHelper(dirPath,"");
        }
        
        else{
            console.log("enter the path");
            return;
        }
    }
}

function treeHelper(dirPath,indent){
    //is file or folder
    let isFile=fs.lstatSync(dirPath).isFile();
    if(isFile==true)
    {
        let fileName=path.basename(dirPath);
        console.log(indent + "├──" + fileName);
   }
   else{
       let dirName=path.basename(dirPath);
       console.log(indent+"└──"+dirName);
       let childrens=fs.readdirSync(dirPath);
       for(let i=0;i<childrens.length;i++)
       {
           let childPath=path.join(dirPath,childrens[i]);
           treeHelper(childPath, indent+"\t");
       }
   }
}
module.exports={
    treeKey:treefn
}