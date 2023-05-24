#For Build - Image
FROM node:14.17.3-buster as build

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json


COPY . .

RUN npm install --save-dev snowpack
RUN npm install --save canvas-confetti
RUN npm install --save-dev @snowpack/plugin-react-refresh

RUN npx snowpack build

#For Web - Docker Image
FROM nginx:stable-alpine as prod

COPY --from=build /code/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]