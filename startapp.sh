#! /bin/bash
set -m

sudo fuser -k 8000/tcp

cd backend
python manage.py runserver &

cd ../frontend
yarn serve
fg
