const Admin = require('../models/adminModel')
const bcrypt = require('bcrypt');
const {generateToken} = require('../helpers/generateJWT')

//*GET all Admin
const getAdmin =async (req,res) => {
    try {
        const admins = await Admin.find();
        return res.status(200).json({
            ok:true,
            msg: 'Getting ALL ADMINs correctly',
            data: admins
    })     
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'FAILED to get all ADMINs'
        })
    }
}

//*REGISTER NEW ADMIN
const registerAdmin = async (req,res) => {

        const {name, email, password} = req.body;
        const newAdmin = new Admin(req.body);

    try {
        const validate = await Admin.findOne({email})
        console.log('esto es validate', validate)

        if(validate) {

            return res.status(401).json({
                ok:false,
                msg: 'The email you inserted is already in use'
            })

        }else {
            const salt = bcrypt.genSaltSync(10);
            newAdmin.password = bcrypt.hashSync(password, salt);

            const newAdminData = await newAdmin.save();
            const token = await generateToken(newAdmin.id, name);

            return res.status(201).json({
                ok:true,
                msg: 'New Admin CREATED successfully',
                data: newAdminData,
                token
            })
        }
    } catch (error) {

        return res.status(500).json({
            ok:false,
            msg: 'FAILED to create new admin'
        })
    }
}

//*LOGIN ADMIN
const loginAdmin = async (req,res) => {
        
            const {email, password} =req.body; 

        try {
            const emailOK = await Admin.findOne({email});

            const passCheck = bcrypt.compareSync(password, emailOK.password);  

            if(!emailOK || passCheck == false) {
                return res.status(400).json({
                    ok:false,
                    msg: 'Email-Password incorrect'
                })
                
            }else {
                const token = await generateToken(emailOK._id, emailOK.name);
                return res.status(200).json({
                    ok:true,
                    msg: 'Successfully LOGGED IN',
                    token
                })
            }   
        } catch (error) {
            return res.status(500).json({
                ok:false,
                msg: 'FAILED to log in'
            })
        }
}

//*RENEW ADMIN TOKEN
const renewToken =async (req,res) => {

    const {uid, name} = req;

    const token = await generateToken(uid, name);

    res.status(200).json({
        ok:true,
        msg: 'Token renewed correctly',
        user: {
            uid,
            name
        },
        token
    })
}

module.exports = {
    getAdmin,
    registerAdmin,
    loginAdmin,
    renewToken,
}


