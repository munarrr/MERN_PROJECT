const Router= require('express')
const rot = Router()


rot.get('/a',(req,res) => {
     res.send('helo')
})

module.exports = rot
