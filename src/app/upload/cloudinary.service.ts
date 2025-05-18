import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {
    constructor() {}

    async uploadImage(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new HttpException('Imagem não encontrada', HttpStatus.BAD_REQUEST);
    }

    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: 'queezy-images',
          resource_type: 'image',
          
        },
        (error, result) => {
          if (error) {
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