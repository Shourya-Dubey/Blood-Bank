exports.test = (req, res)=>{
    res.status(200).json({
        message:"Welcom to test routere",
        success: true
    });
}