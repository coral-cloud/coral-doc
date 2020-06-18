FROM 10.10.208.193:5000/ubuntu-npm:18.04
MAINTAINER wuhaocn<wuhaocn@126.com>

###添加资源文件
ADD ./ /home/doc-site
WORKDIR /home/doc-site
RUN npm install
#指定时区
#ENTRYPOINT ["npm", "run", "dev"]