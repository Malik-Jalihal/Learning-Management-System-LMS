import { clerkClient } from "@clerk/express"

// Middleware for API authentication (checks if user is authenticated)
export const protectRoute = async (req, res, next) => {
    try {
        const userId = req.auth?.userId
        
        if (!userId) {
            return res.status(401).json({success: false, message: 'Unauthorized - Please log in'})
        }
        
        next()
    } catch (error) {
        res.status(401).json({success: false, message: error.message})
    }
}

// Middleware ( Protect Educator Routes )
export const protectEducator = async (req,res,next) => {

    try {

        const userId = req.auth.userId
        
        const response = await clerkClient.users.getUser(userId)

        if (response.publicMetadata.role !== 'educator') {
            return res.json({success:false, message: 'Unauthorized Access'})
        }
        
        next ()

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}