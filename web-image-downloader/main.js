const fs=require('fs')
const file="img"
// const urls=["https://i.pinimg.com/236x/bc/5d/f5/bc5df54b49b1611825dd554bac3e64d5.jpg","https://i.pinimg.com/564x/bc/5d/f5/bc5df54b49b1611825dd554bac3e64d5.jpg","https://i.pinimg.com/736x/bc/5d/f5/bc5df54b49b1611825dd554bac3e64d5.jpg"]

const url=process.argv[2]

// for(let i=0;i<urls.length;i++){
// }
fetch(url).then((res)=>{
    return res.blob()
}).then((blob)=>{
    blob.arrayBuffer().then((data)=>{
        const view=new Uint8Array(data)
        fs.writeFile(file+".jpg",view,(err)=>console.log(err))
    })
})