const express = require("express")
const { registerController, loginController, forgotPassword } = require("../controller/authController")
const authRoute = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - email
 *         - password
 *       properties:
 *         firstName:
 *           type: string
 *           description: The first name of the user.
 *         lastName:
 *           type: string
 *           description: The last name of the user.
 *         email:
 *           type: string
 *           description: The email address of the user (must be unique).
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the user.
 *         foodId:
 *           type: array
 *           items:
 *             type: string
 *           description: An array of food IDs associated with the user.
 */

/**
 * @swagger
 * paths:
 *   /auth/register:
 *     post:
 *       summary: Register a new user
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         200:
 *           description: User registered successfully.
 *         400:
 *           description: Bad request. Invalid input data.
 *         500:
 *           description: Internal server error.
 *
 *   /auth/login:
 *     post:
 *       summary: Log in user
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the user.
 *                 password:
 *                   type: string
 *                   format: password
 *                   description: The password of the user.
 *       responses:
 *         200:
 *           description: User logged in successfully.
 *         401:
 *           description: Unauthorized. Invalid credentials.
 *         500:
 *           description: Internal server error.
 */

/**
 * @swagger
 * paths:
 *   /auth/forgot-password:
 *     post:
 *       summary: Forgot password
 *       tags: [Authentication]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the user.
 *       responses:
 *         200:
 *           description: Password reset link sent successfully.
 *         400:
 *           description: Bad request. Invalid input data.
 *         404:
 *           description: Not found. User with provided email not found.
 *         500:
 *           description: Internal server error.
 */


authRoute.post("/auth/register", registerController)

authRoute.post("/auth/login", loginController)
authRoute.post("/auth/forgot-password", forgotPassword)
module.exports = { authRoute }