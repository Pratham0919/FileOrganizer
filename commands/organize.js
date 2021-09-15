function organizefn(dirPath)
{
    //console.log("organize implemented", dirPath);
    //1}input->directory path given
    let destPath;
    if(dirPath==undefined)
    {
        destPath=process.cwd();
        return;
    }
    else
    {
        let doesexist=fs.existsSync(dirPath);//to check if file exist or not
        if(doesexist){
            //2)create->organized file->directory
         destPath=path.join(dirPath,"organised_files");//path made
        if(fs.existsSync(destPath)==false)
        {
            fs.mkdirSync(destPath);//directory made
        }
        
        }
        else{
            console.log("enter the path");
            return;
        }
    }
    organizeHelper(dirPath,destPath);
    

}
function organizeHelper(src,dest)
{
     //3)identify category of all the file present in that directory
     let childNames=fs.readdirSync(src);
     //console.log(chiildNames);
     for(let i=0;i<childNames.length;i++)//we need only file 
     {
         let childAddress=path.join(src,childNames[i]);//joinnig directory with file
         let isFile=fs.lstatSync(childAddress).isFile();//to check if it is a file or not
         if(isFile)
         {
            // console.log(childNames[i]);
            let category=getCategory(childNames[i]);
            console.log(childNames[i],"belongs to --> ",category);
            //4)copy/cut files to that organized directory inside of any category folder
            sentFiles(childAddress,dest,category);

         }
     }
}
function sentFiles(srcFilePath,dest,category)
{
    let categoryPath=path.join(dest,category);
    if(fs.existsSync(categoryPath)==false)
    {
        fs.mkdirSync(categoryPath);
    }
    let fileName=path.basename(srcFilePath);
    let destFilePath=path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName,"copied to", category);


}
function getCategory(name)
{
    let ext=path.extname(name);
    ext=ext.slice(1);
    //console.log(ext);
    for(let type in types)
    {
        let cTypeArray=types[type];
        for( let i=0;i<cTypeArray.length;i++)
        {
            if(ext==cTypeArray[i])
            {
                return type;
            }
             
        }
         
    }
    return"others";
}
module.exports={
    organizeKey:organizefn
}