import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { cloudinary, cloudinaryClient } from '../../config/cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {

    async uploadImage(file: Express.Multer.File): Promise<string> {
      if (!file) {
        throw new HttpException('Imagem não encontrada', HttpStatus.BAD_REQUEST);
      }

      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'image',
          },
          (error, result) => {
            if (error) {
              console.error('Cloudinary upload error:', error);
              return reject(
                new HttpException(error.message, HttpStatus.BAD_REQUEST),
              );
            }
            resolve(result.secure_url);
          },
        );

        Readable.from(file.buffer).pipe(stream);
      });
    }
}
