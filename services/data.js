const db = require('./db')

const createBookmark = async (args) => {
    return new Promise((resolve,reject)=>{
    console.log("args", args)
    const newEntry = new db.Bookmark({
        title : args.title,
        url : args.url,
        date : args.date,
    })
    newEntry.save((error, data) => {
        if (error) {
            console.log( error);
        } else {
            console.log('save success');
         return resolve ({
        statusCode: 200,
        status: true,
        message: "successfully Added"
       })
        }
    });
})
}

const listBookmark = () => {
    return new Promise((resolve,reject)=>{
     db.Bookmark.find().then((data, error)=>{ 
        console.log("data",data)
        if(data){
        return resolve ({
            statusCode: 200,
            status: true,
            data: data
        })
    }
    else{
        console.log("err",error)
        return {
            statusCode: 422,
            status: false,
            message: "invalid operations"
        }
    }
    })
})
}

module.exports = { createBookmark , listBookmark}