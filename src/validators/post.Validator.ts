import Joi from "joi";

export const postValidator = Joi
    .object({
        userId: Joi
            .number()
            .min(1)
            .max(10)
            .required()
            .messages({
                "number.min": "min value is 1",
                "number max": "max value is 10",
                "number.required": "userId is required"
            }),
        title: Joi
            .string()
            .pattern(/[A-Za-zА-Яа-яЁё]/)
            .required()
            .messages({
                "string.pattern.base": "use only letters",
                "string.required.base": "title is required"
            }),
        body: Joi
            .string()
            .pattern(/\D/)
            .required()
            .messages({
                "string.pattern.base": "numbers aren`t allowed",
                "string.required.base": "title is required"
            })

    })