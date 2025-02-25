SENDER=""          
RECIPIENT=""    
SUBJECT="[Add Project Name] Playwright Test Results"
URL=""

BOUNDARY="NextPartBoundary12345"

generate_email_content() {

CONTENT_BASE64_ENCODED=$(printf "From: $SENDER\r\nTo: $RECIPIENT\r\nSubject: $SUBJECT\r\nMIME-Version: 1.0\r\nContent-Type: multipart/alternative; boundary=\"NextPart\"\r\n\r\n--NextPart\r\nContent-Type: text/plain; charset=\"UTF-8\"\r\n\r\nVisit the link below to find the automation run test results: \n $URL`echo $1`/index.html\r\n\r\n--NextPart--" | base64 -w0)

  cat > email.json <<EOF
{$URL
  "RawMessage":{
    "Data": "$CONTENT_BASE64_ENCODED"
  }
}
EOF
}

# Send email using AWS SES
send_email() {
  aws ses send-raw-email --cli-input-json file://email.json --region=eu-west-1
}

# Generate JSON and send the email
generate_email_content $1
send_email

# Clean up
# rm -f "$EMAIL_JSON_FILE"

