const User = require("../models/user-model");
/*
What is controller?
In express.js controller are the part of our code that is responsible for handling application logic. Controllers are typically used to process incomming request, interact with  models and sent responses back to the client. They help to organize our application by separating concerns and following the mvc (Model-View_controller) design system
*/

// HOME ROUTE
const home = async (req, res) => {
  try {
    res.status(200).json({ message: "Home page" });
  } catch (error) {
    res.status(400).json("Page not found");
  }
};

// REGISTER ROUTE
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });

    // IF EMAIL ALREADY EXIST THEN IT RETURN AN ERROR
    if (userExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    // HASH THE PASSWORD    THIS IS FIRST METHOD FOR HASING THE PASSWORD AND THE SECOND METHOD IS IN THE MODAL FILE
    // const saltRound = 10;
    // const hash_password = await bcrypt.hash(password, saltRound);

    const userCreated = await User.create({
      username,
      email,
      phone,
      // password: hash_password,
      password,
    });

    res
      .status(201)
      .json({ message: userCreated, token: await userCreated.generateToken() });
  } catch (error) {
    res.status(400).json("Page not found");
  }
};

module.exports = { home, register };

/*
 What is JWT?

-> JWT is an open standard that define a compact and self contained way for securely transmitting the information between parties as json object.
-> JWT are used for authentication and authorization in web application.
-> Authentication: Verifing the identity of a user.
-> Authorization: Determining what actions a user is allowed to perform.

    COMPONENTS OF JWT:
=> Header : It contains the metadata about the token such as the type of token and signing algorithm.
=> Payload : Contains the claims, which are statements about an entity (typically the user) and additional data.
=> Signature : Used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

  IMPORTANT NOTE
  Tokens are typically not stored in the database with user details. Instead they are issued by the server during authentication and then stored in the client side such as (local storage or cookies).
 */
