# ---------------------------------
# FIRST BLOCK AS A BUILDER PHASE
# ---------------------------------
FROM node:16-alpine as builder
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Default commando for the image, no es necesario
#CMD [ ]

# ---------------------------------
# SECOND BLOCK AS A RUN PHASE
# ---------------------------------
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html

# Default commando for the image, no es necesario ya que nginx inicia automaticamente
#CMD [ ]