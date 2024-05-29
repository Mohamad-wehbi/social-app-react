import { validator } from "../utils/validator";
import Joi from "joi"

export const validateCreateComment = (obj) => {
    const schema = Joi.object({
        desc: Joi.string().trim().min(2).max(30).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
  }
  
export const validateUpdateComment = (obj) => {
    const schema = Joi.object({
        desc: Joi.string().trim().min(2).max(30),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
  }