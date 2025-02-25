#!/bin/bash

# Variables
BUCKET_NAME=""


# Read the Run ID from the file
RUN_ID=$1

# Set the local and S3 folder paths using the Run ID
LOCAL_FOLDER="./playwright-report/$RUN_ID"  # Local folder to upload
S3_FOLDER="$RUN_ID" # Destination folder in the S3 bucket

# Check if the AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI not found. Please install it and try again."
    exit 1
fi

# Check if the local folder exists
if [ ! -d "$LOCAL_FOLDER" ]; then
    echo "Local folder $LOCAL_FOLDER does not exist. Please check the path."
    exit 1
fi

# Sync the local folder to the S3 bucket
echo "Uploading $LOCAL_FOLDER to s3://$BUCKET_NAME/$S3_FOLDER..."
aws s3 sync "$LOCAL_FOLDER" "s3://$BUCKET_NAME/$S3_FOLDER" --acl private

# Check the exit status
if [ $? -eq 0 ]; then
    echo "Upload completed successfully!"
else
    echo "Error occurred during upload. Check the AWS CLI output above."
    exit 1
fi