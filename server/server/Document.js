const {Schema, model}= require('mongoose')
// import { Document } from './node_modules/bson/src/bson';

const Document=new  Schema({
    _id: String,
    data: Object
})

module.exports=model("Document",Document)
