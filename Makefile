RUN_ID := $(shell uuidgen)

test: 
	- RUN_ID=$(RUN_ID) npx playwright test 

report:
	./helpers/upload_to_s3.sh $(RUN_ID)
	./helpers/send_email_ses.sh $(RUN_ID)