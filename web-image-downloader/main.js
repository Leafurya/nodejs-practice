const fs=require('fs')

const file=process.argv[2]
const url=process.argv[3]

fetch(url).then((res)=>{
    return res.blob()
}).then((blob)=>{
    blob.arrayBuffer().then((data)=>{
        const view=new Uint8Array(data)
        fs.writeFile(file,view,(err)=>console.log(err))
    })
})