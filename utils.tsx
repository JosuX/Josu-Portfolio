// utils/photoUtils.js

import fs from 'fs'
import path from 'path'

const getPhotoFilePaths = () => {
  const photoDirectory = path.join(process.cwd(), 'public', 'photos');
  const photoFileNames = fs.readdirSync(photoDirectory);
  const photoFilePaths = photoFileNames.map((fileName) =>
    path.join('/photos', fileName)
  );
  return photoFilePaths;
};

module.exports = { getPhotoFilePaths };
