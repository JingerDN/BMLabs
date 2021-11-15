const {DataFilter}=require("../models/DataFiltered");
const { Users } = require("../models/Users");
const {Stat}=require("../models/Stats");
const fs=require("fs");

//------------------------Не-удалось-сделать-роут--------------------------------------------

exports.get_DataFiltered=async function(req,res){
  await DataFilter.find({},function(err,doc){
    if(err) return console.log(err);
    if({}.length === 0){//не работает проверка пустой коллекции
        fs.readFile('./dataUsers.json', 'utf8',function(err,data){
            if(err){
              throw error; 
            }
            console.log("why we are here!");
            const usersList= JSON.parse(data);
        
            for(i=1;i<=3;i++){
            const person= usersList.filter(function(item) {
            return( item.id ==i ); 
            });  
            let id=person.map((item)=>item.id)
            let first_name=person.map((item)=>item.first_name);
            let last_name=person.map((item)=>item.last_name);
            let email=person.map((item)=>item.email);
            let gender=person.map((item)=>item.gender);
            let ip_address=person.map((item)=>item.ip_address);
            id=id.join();
            first_name=first_name.join();
            last_name=last_name.join();
            email=email.join();
            gender=gender.join();
            ip_address=ip_address.join();
        
            const data_filtered =  new DataFilter({id:id,first_name:first_name,last_name:last_name,email:email,gender:gender,ip_address:ip_address});
            data_filtered.save( function(err){
              if(err) return console.log(err);
              console.log("ok")
            });
          }
        });
    };
    console.log("was found",doc)
    res.send(doc);
  })
}
//-----------------------По-Гет-запросу----получить--все-данные-из--категории--Users--------------
exports.get_AllUsers = async function (req, res) {
   await Users.find({}, function (err, doc) {
      if (err) return console.log(err);
      console.log("We found list of Users", doc);
      res.send(doc);
    });
  };


//-----------------------По-Гет-запросу----получить--все-данные-из--file-dataUsers.json-----------
exports.get_UsersFs=async function(req,res){
    fs.readFile('./dataUsers.json', 'utf8',function(err,data){
        if(err){
          throw error; 
        }
        const usersList= JSON.parse(data);
        res.send(usersList);
    });
}
//-----------------------По-Гет-запросу----получить--все-данные-из--категории--Stats--------------

exports.get_AllStats=async function(req,res){
    await Stat.find({},function(err,doc){
        if(err) return console.log(err);
        console.log("We found statistics data",doc);
        res.send(doc);
    })
}

//-----------------------Statstics-info-By-Id----------------------------------------------------

exports.get_OneStats=async function(req,res){
  const id = parseInt(req.query.id);
   await Stat.find({user_id:id},function(err,doc){
      if(err) return console.log(err);
      console.log(doc);
      res.send(doc);
  });
}

//-----------------------Users-Data------By-Id----------------------------------------------------

exports.get_OneUser=async function(req,res){
  const id = parseInt(req.query.id);
   await Users.find({id:id},function(err,doc){
      if(err) return console.log(err);
      console.log(doc);
      res.send(doc);
  });
}

//-----------------------По-Гет-запросу----получить--все-данные-из--file-statisticsUsers.json-----
exports.get_StatsFs=async function(req,res){
    fs.readFile('./statisticsUsers.json', 'utf8',function(err,data){
        if(err){
          throw error; 
        }
        const statList= JSON.parse(data);
        res.send(statList);
    });
}
//-----------------------По--запросу-GET---добавление-данных--users-в- БД-------------------------
exports.create_Users=async function(req,res){
    fs.readFile('./dataUsers.json', 'utf8',function(err,data){
        if(err){
          throw error; 
        }
        const usersList= JSON.parse(data);
    
        for(i=1;i<=usersList.length;i++){
      const person= usersList.filter(function(item) {
        return( item.id ==i ); 
        });  
        let id=person.map((item)=>item.id)
        let first_name=person.map((item)=>item.first_name);
        let last_name=person.map((item)=>item.last_name);
        let email=person.map((item)=>item.email);
        let gender=person.map((item)=>item.gender);
        let ip_address=person.map((item)=>item.ip_address);
        id=id.join();
        first_name=first_name.join();
        last_name=last_name.join();
        email=email.join();
        gender=gender.join();
        ip_address=ip_address.join();
    
        const user =  new Users({id:id,first_name:first_name,last_name:last_name,email:email,gender:gender,ip_address:ip_address});
          user.save( function(err){
          if(err) return console.log(err);
          console.log("ok")
        });
      }
      res.send(usersList);
      });
}
//-----------------------По--запросу-POST---добавление-данных--userStatistics-в--БД------
exports.create_Stats=async function(req,res){
    fs.readFile('./statisticsUsers.json', 'utf8', async function(err,data){
        if(err){
          throw error; 
        }
        const statList= JSON.parse(data);
    
        for(i=0;i<19253;i++){
          statList.filter(function(item) {
            return( item[i] ); 
          });
          const statItem=statList[i];
          let user_id=statItem.user_id;
          let date=statItem.date;
          let page_views=statItem.page_views;
          let clicks=statItem.clicks;
          console.log(statList.length);
      
         const stat = await  new Stat({user_id:user_id,date:date,page_views:page_views,clicks:clicks});
         await stat.save(function(err){
          if(err) return console.log(err);
          console.log("ok")
          console.log(statList.length);
          });
        }
      res.send(statList);
      });
}
//---------------------------Users--paginated-data------------------------------------------
exports.getPagination = paginatedData(Users),
  (req, res) => {
    res.json(res.paginatedData);
  };

function paginatedData(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    results.total = await model.countDocuments().exec(); 
      try {
        results.result = await model
          .find()
          .limit(limit)
          .skip(startIndex)
          .exec();
        res.paginatedData = results;
        console.log("Endpoint Allproducts, paginated");
        res.json(results);

        next();
      } catch (e) {
        res.status(500).json({ message: e.message });
      }
    }
  };
