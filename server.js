const { Console } = require("console");
const express = require ("express");
const fs= require ('fs');
const path = require ("path");
const app = express();
var dir_info = "";

// API router to get data of folders and files present in G drive

app.get('/',(req,res)=>
{
    fs.readdir('G:/',(err,files)=>
    {
        if (err)
        console.log(err);
        else{
            console.log("Current directory info");
            files.forEach((file)=>
            {
                switch(path.extname(file))
                {
                    case '.txt' :
                        dir_info+='<h3><img width=5% height=10% src="https://www.seekpng.com/png/full/132-1324192_document-file-text-done-select-finish-checkmark-comments.png">'+ file + '</h3>';
                        break;
                    case '.pdf' :
                        dir_info+='<h3><img width=5% height=10% src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png">'+ file + '</p>';
                        break;
                    case '.docx' :
                        dir_info+='<h3><img width=5% height=10% src="https://cdn.iconscout.com/icon/free/png-256/docx-file-14-504256.png">'+ file + '</h3>';
                        break;
                    case '' :
                        dir_info+='<h2><img width=5% height=10% src="https://i.pinimg.com/564x/a6/f0/89/a6f089c3ad682858d8d9626d12d6c9a6.jpg">'+ file + '</h2>';
                        break;

                }
               
                    
                
            }
            )
        }
    })
    res.send(dir_info);

});
app.listen('4000',()=>{console.log("server is running on port 4000 successfully")});

