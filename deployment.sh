pkill gunicorn
git pull
npm run build
sudo cp -r build/*  /var/www/rj_app/
cd backend_app
source env/bin/activate
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 127.0.0.1:8000 --daemon