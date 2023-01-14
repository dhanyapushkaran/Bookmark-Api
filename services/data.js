const db = require('./db')

const createBookmark = async (args) => {
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
         return {
        statusCode: 200,
        status: true,
        message: "successfully Added"
       }
        }
    });
}

const listBookmark = () => {
    return db.Bookmark.find().then((error, data)=>{ 
        if(data){
        return {
            statusCode: 200,
            status: true,
            data: data
        }
    }
    else{
        console.log(error)
        return {
            statusCode: 422,
            status: false,
            message: "invalid operations"
        }
    }
    })
   
}

module.exports = { createBookmark , listBookmark}