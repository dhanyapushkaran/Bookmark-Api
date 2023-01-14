const mongoose= require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/Bookmark',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

const Bookmark = mongoose.model('Bookmark',{
    title:String,
    url:String,
    date:String,
})

module.exports= {Bookmark}