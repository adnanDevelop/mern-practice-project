const { z } = require("zod");

const signupValidation = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(5, { message: "Name must be atleast 5 charactors." })
    .max(15, { message: "Name must not be more than 15 charactors." }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  phone: z
    .string({ required_error: "Number is requirex" })
    .trim()
    .min(11, { message: "Number must be atleast 11 charactors" })
    .max(11, { message: "Phone must not be more than 11 charactors" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be atleast 8 charactors" })
    .max(8, { message: "Password must not be more than 8 charactors" }),
});

// LOGIN VALIDATION
const loginValidation = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be atleast 8 charactors" })
    .max(8, { message: "Password must not be more than 8 charactors" }),
});

module.exports = { signupValidation, loginValidation };
