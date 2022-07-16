import { resolve } from 'path';
import multer from 'multer';
import crypto from 'crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, callback) => {
      const hashName = crypto.randomBytes(16).toString('hex');
      const fileName = `${hashName}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
