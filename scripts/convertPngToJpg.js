import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_IMG_DIR = join(__dirname, '..', 'public', 'project_img');

async function convertPngToJpg() {
  try {
    // Get all PNG files in the directory
    const files = await fs.readdir(PROJECT_IMG_DIR);
    const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

    console.log(`Found ${pngFiles.length} PNG files to convert`);

    // Convert each PNG file to JPG
    for (const pngFile of pngFiles) {
      const pngPath = join(PROJECT_IMG_DIR, pngFile);
      const jpgPath = join(PROJECT_IMG_DIR, pngFile.replace('.png', '.jpg'));

      console.log(`Converting ${pngFile} to JPG...`);

      await sharp(pngPath)
        .jpeg({
          quality: 90,
          mozjpeg: true, // Use mozjpeg for better compression
        })
        .toFile(jpgPath);

      // Verify the JPG was created successfully before deleting PNG
      const jpgStats = await fs.stat(jpgPath);
      if (jpgStats.size > 0) {
        await fs.unlink(pngPath);
        console.log(`Successfully converted and deleted ${pngFile}`);
      } else {
        console.error(`Failed to convert ${pngFile} - JPG file is empty`);
      }
    }

    console.log('All PNG files have been converted to JPG');
  } catch (error) {
    console.error('Error converting files:', error);
  }
}

convertPngToJpg();
