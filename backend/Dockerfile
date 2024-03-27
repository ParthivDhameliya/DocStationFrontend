FROM python:3.11-slim

RUN apt-get update && apt-get install -y python3-pip

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 465

ENV EMAIL parthivdhameliya20@gmail.com

ENV PASS wsmcspvbwawuqrpz

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]