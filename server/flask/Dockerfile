FROM python:3.7.2-stretch

WORKDIR /app

# copy current dir to container app
COPY . /app

# Install dependencies
RUN pip install -r requirements.txt

# RUN command to start uWSGI
CMD ["uwsgi", "app.ini"]