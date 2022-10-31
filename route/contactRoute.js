const router = require('express').Router()
const nodemailer = require('nodemailer')


/* Implementing nodemailer */
router.post('/contact', (req,res)=>{
    let data = req.body
    if(data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg: "please fill all the fields"})
    }

        /* Create transporter object */
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth:{
                user: 'zipcoderei@gmail.com',
                pass: 'test'
            }
        })
        //Layout design for how email will appear in inbox
        let mailOptions ={
            from:data,email,
            to:'zipcoderei@gmail.com',
            subject: `message from $(data.name)`,
            html: `
            
            <h3>Information<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Name: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `
        }

        smtpTransporter.sendMail(mailOptions, ()=>{
            try {
                if(error) return res.status(400).json({msg: "Please fill all the fields"})
                res.status(200).json({msg: "Thank you for contacting Randy!"})
            } catch (error){
                if(error)return res.status(500).json({msg: "There is a server error"})
            }
        })
})
module.exports=router
