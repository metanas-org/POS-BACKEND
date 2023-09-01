import {
  S3Client,
  CreateMultipartUploadCommand,
  UploadPartCommand,
  CompleteMultipartUploadCommand,
} from "@aws-sdk/client-s3";
import { env } from "@config";

const { REGION, BUCKET_NAME, OBJECT_KEY, ACCESS_KEY, SECRET_KEY }: any = env;

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
});

export const initiateMultipartUpload = async () => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: OBJECT_KEY,
  };

  const command = new CreateMultipartUploadCommand(params);
  const response = await s3Client.send(command);

  return response.UploadId;
};

export const uploadPart = async (
  uploadId: string,
  partNumber: number,
  body: Uint8Array
) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: OBJECT_KEY,
    PartNumber: partNumber,
    UploadId: uploadId,
    Body: body,
  };

  const command = new UploadPartCommand(params);
  const response = await s3Client.send(command);

  return {
    ETag: response.ETag,
    PartNumber: partNumber,
  };
};

export const completeMultipartUpload = async (
  uploadId: string,
  parts: any[]
) => {
  const params = {
    Bucket: BUCKET_NAME,
    Key: OBJECT_KEY,

    MultipartUpload: {
      Parts: parts,
    },
    UploadId: uploadId,
  };

  const command = new CompleteMultipartUploadCommand(params);
  const response = await s3Client.send(command);

  return response.Location;
};
