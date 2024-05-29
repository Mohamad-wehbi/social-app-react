import { validator } from "../utils/validator";
import Joi from "joi"

export const validateCreatePost = (obj) => {
    const schema = Joi.object({
        desc: Joi.string().trim().min(2).max(30).required(),
        file: Joi.object().required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
  }
  
  // Validate Update Post
export const validateUpdatePost = (obj) => {
    const schema = Joi.object({
        file: Joi.object().required(),
        desc: Joi.string().trim().min(2).max(30),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
  }