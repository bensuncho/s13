const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
});

const Customer = mongoose.model("customer",customerSchema);

const validator = (data)=> {
    const schema = Joi.object({
        name:Joi.string().required(),
        email: Joi.string().email().required(),
        mobile:Joi.string()
        .length(10)
        .regex(/^\d+$/)
        .message({"string.pattern.base":"Por favor digite un numero valido"})
        .required()


    })
    return schema.validate(data)
};

module.exports = { Customer, validator};

