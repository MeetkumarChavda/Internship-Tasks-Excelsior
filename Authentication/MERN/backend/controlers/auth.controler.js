import { User } from "../models/User.js"
import axios from 'axios';
import bcryptjs from 'bcryptjs';
import svgCaptcha from 'svg-captcha';

// 6LeOKJoqAAAAAGwkB64fCuPa5AnKz3fFxBYLQPig  site key use in front end
// 6LeOKJoqAAAAAHush0vdaiQoXPn_6-clz-BfVrpa secrate key use in back end 

const SECRATE_KEY = '6LeOKJoqAAAAAHush0vdaiQoXPn_6-clz-BfVrpa'

export const signup = async(req,res)=>{
    // const { name , email, phone, city, state , recaptchaValue } = req.body
    // const { name , email, phone, city, state } = req.body
    // const { name , email, phone, city, state, password } = req.body
    const { name , email, phone, city, state, password, captchaInput } = req.body

    if(!name || !email || !phone ||!city || !state){
        return res.status(400).json({
            success:false,
            message:"Please enter all the fields !"
        })
    }
        // Check if user Already exists
    try {
        const isAlreadyUser = await User.findOne({ email:email })
        if(isAlreadyUser){
            return res.status(400).json({
                success:false,
                message:"User Already Exist"
            });
        }
        /////////////////////////
        // not working 

        // const response = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, {
        //     secret: SECRATE_KEY,
        //     response: recaptchaValue
        // });
        // console.log(response);

        // if(response.success){

        //     const newUser = new User({name, email, phone, city, state})
        //     await newUser.save();

        //     return res.status(201).json({
        //         success:true,
        //         message:"User created !",
        //         user:newUser
        //     });

        // }else{
        //     return res.status(400).json({
        //         success:false,
        //         message:"Recaptcha verification failed"
        //     });
        // }
        //////////////////////////
        ////////////////////////////////////////////////////////////////////////////
        //     axios({
        //         url: `https://www.google.com/recaptcha/api/siteverify?secret=${SECRATE_KEY}&response=${recaptchaValue}`,
        //         method:'POST'
        //     }).then(async ({data})=>{
        //         console.log(data);

        //         // this is data 
        //         // {
        //         //     success: true,
        //         //     challenge_ts: '2024-12-13T00:34:12Z',
        //         //     hostname: 'localhost'
        //         // }
    
        //     if(data.success){
        //         const newUser = new User({name, email, phone, city, state})
        //         await newUser.save();

        //         return res.status(201).json({
        //             success:true,
        //             message:"User created !",
        //             user:newUser
        //         });                
        //     }else{
        //         return res.status(400).json({
        //             success:false,
        //             message:"Recaptcha verification failed"
        //         });
        //     }
        // }).catch(error =>{
        //     res.status(400).json({
        //         success:false,
        //         message:'Invalid Recaptcha'
        //     })
        // })
        ///////////////////////////////////////////////////////
        // if user doesnot exists
        ///Shifted in res.sucess 
        const hashedPassowrd = await bcryptjs.hash(password, 10)
        // const newUser = new User({name, email, phone, city, state})
        const newUser = new User({name, email, phone, city, state, password:hashedPassowrd})
        await newUser.save();

        return res.status(201).json({
            success:true,
            message:"User created !",
            user:{
                ...newUser._doc,
                password:undefined
            }
        });

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        });
    }
}

export const getAllUser = async(req,res)=>{
    try {
        const users = await User.find();
        return res.status(201).json({
            success:true,
            message:"All users data collected !",
            users:users
        });

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        });        
    }
}
// import svgCaptcha from 'svg-captcha';

export const captcha = async (req, res) => {
    try {
        const captcha = svgCaptcha.create({
            size: 5,
            noise: 2,
            color: true,
            ignoreChars: '0o1i',
            background: "#f2f2f2"
        });

        req.session.captcha = captcha.text; // Store captcha in session
        console.log("Generated CAPTCHA:", captcha.text);
        console.log("Session after CAPTCHA:", req.session);

        res.type("svg").send(captcha.data); // Send captcha SVG
    } catch (error) {
        console.error('Error generating captcha:', error);
        return res.status(500).json({ error: 'Failed to generate captcha' });
    }
};

export const verifyCaptcha = (req, res, next) => {
    console.log("Stored CAPTCHA:", req.session.captcha);
    console.log("Input CAPTCHA:", req.body.captchaInput);

    const { captchaInput } = req.body;

    if (captchaInput && captchaInput === req.session.captcha) {
        console.log("CAPTCHA verified successfully.");
        next();
    } else {
        console.log("CAPTCHA verification failed.");
        res.status(400).json({ success: false, message: "Invalid CAPTCHA." });
    }
};

// export const login = async(req, res)=>{
//     const { email, password } = req.body;
//     if(!email ||!password){
//         res.status(400).json({
//             success:false,
//             message:"Enter the data "
//         })
//     }
//     const isValidUser = bcryptjs.compare()
// }