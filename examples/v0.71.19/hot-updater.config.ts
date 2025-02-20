import {metro} from '@hot-updater/metro';
import {s3Storage, s3Database} from '@hot-updater/aws';
import {defineConfig} from 'hot-updater';
import 'dotenv/config';

const options = {
  bucketName: process.env.HOT_UPDATER_AWS_S3_BUCKET_NAME!,
  region: process.env.HOT_UPDATER_AWS_REGION!,
  credentials: {
    accessKeyId: process.env.HOT_UPDATER_AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.HOT_UPDATER_AWS_SECRET_ACCESS_KEY!,
  },
};

export default defineConfig({
  build: metro({
    enableHermes: true,
  }),
  storage: s3Storage(options, {
    transformFileUrl: key =>
      `https://${process.env.HOT_UPDATER_CLOUDFRONT_URL}/${key}`,
  }),
  database: s3Database(options),
});
