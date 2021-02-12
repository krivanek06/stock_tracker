FROM python:3.7.2-stretch
# FROM python:3.7.2-alpine

# Allow statements and log messages to immediately appear in the Knative logs
ENV PYTHONUNBUFFERED True

WORKDIR /app

# copy current dir to container app
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# CLOUD RUN CONFIG
# CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 --timeout 0 app:app

# Local - docker compose - uWSGI - uncomment uWSGI in requirements txt
CMD ["uwsgi", "app.ini"]