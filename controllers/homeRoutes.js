const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

//write routes for home page display regardless of login status
