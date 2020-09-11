const userModel = require('./models/user');

require("./config/db");
let admins = [
    {
        full_name: "Sarah Hisham",
        email: "sarah.hisham.safey@gmail.com",
        password: "22233",
        isAdmin: true
    },
    {
        full_name: "Mariam Moner",
        email: "monermariam9@gmail.com",
        password: "33322",
        isAdmin: true
    },
    {
        full_name: "Omnia AboEleil",
        email: "omniaaboeliel@gmail.com",
        password: "65665",
        isAdmin: true
    },

];
admins.map(async admin=>{
    let newUser = new userModel();
    newUser.email = admin.email;
    newUser.full_name = admin.full_name;
    newUser.full_name = admin.isAdmin;
    newUser.password = newUser.encryptPasswprd(admin.passowrd);
   let ad = await newUser.save();
   console.log(ad);
});
