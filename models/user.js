import Joi from 'joi';

import bcrypt from 'bcrypt';
const saltRounds = 10;


// ספרית joi מאפשרת לנו להגדיר ולידציות על שדה קלט מהמשתמש
// אפשר לראות את הסוגים השונים 
export const userSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
});



export const bcryptPassword = async function (password, res) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
}