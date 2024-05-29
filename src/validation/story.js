import { validator } from "../utils/validator";
import Joi from "joi"

export const validateCreateStory = (obj) => {
    const schema = Joi.object({

        file: Joi.object().required(),
        desc: Joi.string().trim().min(2).max(30).required(),
    });
    const { error } = schema.validate(obj, {abortEarly:false});
    return validator(error);
}
