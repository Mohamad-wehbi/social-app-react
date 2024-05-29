import { validator } from "../utils/validator";
import Joi from "joi"

export const validateUpdateUsername = (obj) => {
    const schema = Joi.object({
        username: Joi.string().trim().min(2).max(20).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}

export const validateUpdateEmail = (obj) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}

export const validateUpdatePassword = (obj) => {
    const schema = Joi.object({
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        newPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        confirmNewPassword: Joi.ref('newPassword'),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}

export const validateUpdateProfile = (obj) => {
    const schema = Joi.object({
        status: Joi.string().optional(),
        worksAt: Joi.string().optional(),
        livesin: Joi.string().optional(),
        bio: Joi.string().min(2).max(50).optional(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}