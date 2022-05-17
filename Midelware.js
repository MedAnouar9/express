const AddDate =(req,res,next)=>{
    const newDate=new Date();
    req.newDate=newDate;
    const days = newDate.getDay;
    const hours = newDate.getHours;

    if(hours <  9 || hours >17 && days <5  ){
        res.send('<h1>come back tomorrow </h1>')
    }else{
        next();
    }
}
module.exports={AddDate}