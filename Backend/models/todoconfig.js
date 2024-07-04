const mongoose = require("mongoose");
const schema_todo = new mongoose.Schema({
    task : String,
    done : {
        type : Boolean,
        default : false
    },

});

const model = mongoose.model("todos" , schema_todo); 

module.exports = model;