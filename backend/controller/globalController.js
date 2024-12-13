const Global = require('../models/Global')

const globalData = async(req,res)=>{
    try{
        const data = req.body;
        if(!Array.isArray(data)){
            return res.status(400).send('The input must be a string');
        }

        const existingData = await Global.find({ slug: { $in: data.map(item => item.slug) }});
        if (existingData.length > 0) {
            const duplicates = existingData.map(item => item.slug);
            console.log('duplicates found')
            return res.status(400).send('Already exists')
        }

        const global = data.map(item => new Global(item));
        const InsertData = await Global.insertMany(global);
        res.status(201).json({
            message: "Data saved successfully",
            global: InsertData
        })

    }catch(error){
        console.error('Error while saving data',error);
        res.status(500).send('Error saving data');
    }
}

const getGlobalData = async(req,res)=>{
    try{
        const globalData = await Global.find({});
        res.json(globalData)
    }catch(error){
        console.error(error)
        res.status(500).json({message:'Internal server error'})
    }
}

module.exports = {globalData,getGlobalData}