import { z, ZodError } from "zod";
import { TUser } from "./user.interface";

// Define Zod schema for the address
const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

// Define Zod schema for the user
export const userValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  age: z.number(),
  email: z.string(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressValidationSchema,
});

// Validate function to validate user data against the schema
export const validateUser = (data: unknown): TUser => {
  try {
    return userValidationSchema.parse(data) as TUser;
  } catch (error) {
    if (error instanceof ZodError) {
      throw new Error(`Validation error: ${error.errors}`);
    } else {
      throw error;
    }
  }
};
