import { validator } from "../utils/validator";
import Joi from "joi"

export const validateSignup = (obj) => {
    const schema = Joi.object({
        username: Joi.string().trim().min(2).max(20).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}

export const validateSignin = (obj) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}

export const validateForgotPassword = (obj) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}

export const validateVerifyCode = (obj) => {
    const schema = Joi.object({
        resetCode: Joi.string().trim().length(6).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}

export const validateResetPassword = (obj) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        newPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        confirmNewPassword: Joi.ref('newPassword'),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}