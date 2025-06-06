import { v2 as cloudinary} from 'cloudinary'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config()

if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET || !process.env.CLOUDINARY_CLOUD_NAME) {
  throw new Error('Missing required Cloudinary environment variables')
}

export const cloudinaryClient = cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export { cloudinary };