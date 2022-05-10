const { Router } = require("express");
const router = Router();

const { addUser } = require("../controllers/userController");

router.post("/register", addUser);

module.exports = router;
