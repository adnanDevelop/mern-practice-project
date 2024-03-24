/*
What is controller?
In express.js controller are the part of our code that is responsible for handling application logic. Controllers are typically used to process incomming request, interact with  models and sent responses back to the client. They help to organize our application by separating concerns and following the mvc (Model-View_controller) design system
*/

const home = async (req, res) => {
  try {
    res.status(200).json({message : "Home page"});
  } catch (error) {
    res.status(400).json("Page not found")
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({message : req.body});
  } catch (error) {
    res.status(400).json("Page not found")
  }
};



module.exports = {home , register}
