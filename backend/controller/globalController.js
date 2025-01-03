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

const updateGlobalData = async (req, res) => {
    try {
        let updatedData = await Global.findOneAndUpdate(
            { slug: req.params.slug },
            { $set: req.body },
            { new: true, runValidators: true }
        );

        if (!updatedData) {
            updatedData = new Global({ slug: req.params.slug, ...req.body });
            await updatedData.save();

            return res.status(201).json({
                message: "Country not found, so a new Country was created.",
                updatedData
            });
        }
        
        res.status(200).json({
            message: "Data updated successfully",
            updatedData
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteData = async(req,res) =>{
    try{
        const deletedData = await Global.findOneAndDelete({slug:req.params.slug})

        if(!deletedData){
            return res.status(404).json({message:"Data not found"})
        }
        res.status(200).json({
        message:"Data deleted successfully"
    })
    }catch(err){
       console.error(err)
       res.status(500).json({message:"Internal server error"}) 
    }
}

module.exports = {globalData,getGlobalData,updateGlobalData,deleteData}