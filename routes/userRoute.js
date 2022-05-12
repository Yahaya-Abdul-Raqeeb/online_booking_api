const { Router } = require("express");
const router = Router();

const { addUser, loginUser } = require("../controllers/userController");

router.post("/register", addUser)
.post("/login", loginUser);

module.exports = router;
