FROM adoptopenjdk/openjdk11
EXPOSE 9090
ARG JAR_FILE=target/CagataySar-1.0.0.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]