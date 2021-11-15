const { Router } = require("express");
const { Users } = require("../models/Users");
const {Stat}=require("../models/Stats");
const fs=require("fs");
const router = Router();


var UC=require("../controllers/usersControllers");
//-----------------------Statstics-info-By-Id-------------------------------------------
router.get("/getOne",UC.get_OneStats);

//--------------------------------------------------------------------------------------
router.get("/getDataFiltered",UC.get_DataFiltered);

//-----------------------Users-Data--By-Id----------------------------------------------
router.get("/getUser",UC.get_OneUser);

//--------------------------Получить-всех Users-из БД------------------------------------
router.get("/getAll", UC.get_AllUsers);

//--------------------------Получить-usersStatistics-из БД-------------------------------
router.get("/getAllStat",UC.get_AllStats);

//--------------------------Получить-dataUsers-из--dataUsers.json------------------------
router.get("/getUsersFs",UC.get_UsersFs);

//--------------------------Получить-statistics-из--statisticsUsers.json-----------------
router.get("/getStatsFs",UC.get_StatsFs);

//-----------------------По--запросу-GET---добавление-данных--users-в- БД----------------  
router.get("/createUser", UC.create_Users);

//-----------------------По--запросу-POST---добавление-данных--userStatistics-в--БД------ 
router.get("/createStatistic",UC.create_Stats);

//-----------------------По-Гет-запросу----пагинация-в-категории--Users------------------
router.get("/list",UC.getPagination);


module.exports = router;


