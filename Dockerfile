FROM node:12.2.0 as build-step

# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY onione-courses .

# COPY package.json .

RUN npm install

RUN npm install -g @angular/cli

RUN npm run build

#CMD ng serve --host 13.127.80.165 --disable-host-check --port 4200

CMD ng serve --host 0.0.0.0 --disable-host-check

# FROM nginx:1.16.0-alpine as prod-stage
# COPY --from=build-step . /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]