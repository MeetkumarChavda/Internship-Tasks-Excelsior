import { Hero } from "../models/homeModel.js";
import { Marquee } from "../models/marqueeModel.js";

export const getHero = async (req, res) => {
    try {
        // Fetch all hero section data from the database
        const hero = await Hero.find({});
        
        // Check if data exists
        if (!hero || hero.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No hero data found."
            });
        }

        // Respond with the retrieved data
        res.status(200).json({
            success: true,
            message: "Hero data retrieved successfully.",
            data: hero
        });
    } catch (error) {
        console.error("Error retrieving hero data:", error);

        // Respond with an error message
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
};

export const createHero = async(req, res) => {

    const { heroTitle , heroPara, heroImage} = req.body;

    if(!heroTitle ||!heroPara ||!heroImage){
        return res.status(400).json({
            success:false,
            message:"Please enter all the fields!"
        })
    }

    const hero = new Hero({
        heroTitle,
        heroPara,
        heroImage
    });

    try {
        await hero.save();
        res.status(201).json({
            success:true,
            message: "Hero data created successfully.", 
            data: hero 
        });

    } catch (error) {
        console.error("Error creating hero data:", error);
        res.status(500).json({ error: "Internal Server Error." });
    }
}

export const deleteHero = async (req, res) => {
    try {
        const { id } = req.params; // Extract the ID from the route parameters

        // Attempt to delete the hero entry
        const result = await Hero.findByIdAndDelete(id);

        // If no document is found, return a 404 response
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Hero not found or already deleted.",
            });
        }

        // Respond with a success message
        res.status(200).json({
            success: true,
            message: "Hero deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting hero:", error);

        // Respond with an error message
        res.status(500).json({
            success: false,
            message: "Internal Server Error.",
        });
    }
};

export const updateHero = async (req, res) => {
    try {
        const { id } = req.params; // Extract the ID from the route parameters
        const updateData = req.body; // Get the update data from the request body

        // Update the hero entry by ID
        const updatedHero = await Hero.findByIdAndUpdate(
            id,
            { $set: updateData }, // Use `$set` to update only the fields provided
            { new: true } // Return the updated document
        );

        // If no document is found, return a 404 response
        if (!updatedHero) {
            return res.status(404).json({
                success: false,
                message: "Hero not found.",
            });
        }

        // Respond with the updated data
        res.status(200).json({
            success: true,
            message: "Hero updated successfully.",
            data: updatedHero,
        });
    } catch (error) {
        console.error("Error updating hero:", error);

        // Respond with an error message
        res.status(500).json({
            success: false,
            message: "Internal Server Error.",
        });
    }
};


// MARQUEE SECTION
export const getMarquee = async (req , res) =>{

    try {
        const Marqueedata = await Marquee.find({});

        if(!Marqueedata || Marqueedata.length === 0){
            return res.status(404).json({
                success:false,
                message:"No marquee data found."
            })
        }

        res.status(200).json({
            success:true,
            message:"Marquee data retrieved successfully.",
            data: Marqueedata
        });

    } catch (error) {

        console.error("Error retrieving marquee data:", error);
        return res.status(500).json({ 
            success: false,
            message: "Internal Server Error. Marquee retrieving" });

    }
}

export const createMarquee = async (req, res) => {

    try {
        const { marqueeText } = req.body;

        if(!marqueeText){
            return res.status(400).json({
                success:false,
                message:"Please enter marquee text!"
            })
        }

        const marquee = new Marquee({
            marqueeText
        });

        // Save the marquee text to the database
        await marquee.save();

        return res.status(201).json({
            success:true,
            message: "Marquee text created successfully.",
            data: marquee
        });
        
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error. Marquee adding" });
    }
}

export const deleteMarquee = async (req, res) => {
    try {
        const { id } = req.params;

        const result =  await Marquee.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({
                success: false,
                message: "Marquee text not found or already deleted."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Marquee text deleted successfully."
        });

        
    } catch (error) {
        
        res.status(500).json({ error: "Internal Server Error. Marquee deleting" });
    }

}

// Add this to adminController.js in the updateMarquee function
export const updateMarquee = async (req, res) => {
    try {
        const { id } = req.params;
        const { marqueeText, isActive } = req.body;

        // If this marquee is being set to active, first set all others to inactive
        if (isActive) {
            await Marquee.updateMany({}, { isActive: false });
        }

        // Update the specific marquee
        const updatedMarquee = await Marquee.findByIdAndUpdate(
            id,
            { 
                marqueeText,
                isActive
            },
            { new: true }
        );

        if (!updatedMarquee) {
            return res.status(404).json({
                success: false,
                message: "Marquee not found."
            });
        }

        // If no marquee is active after the update, set this one as active
        const activeCount = await Marquee.countDocuments({ isActive: true });
        if (activeCount === 0) {
            updatedMarquee.isActive = true;
            await updatedMarquee.save();
        }

        res.status(200).json({
            success: true,
            message: "Marquee updated successfully.",
            data: updatedMarquee
        });

    } catch (error) {
        console.error("Error updating marquee:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error."
        });
    }
};


// CATEGORIES
export const getCategories = async (req, res) => {

}
export const createCategory = async (req, res) => {

}
export const updateCategory = async (req, res) => {

}
export const deleteCategory = async (req, res) => {

}

