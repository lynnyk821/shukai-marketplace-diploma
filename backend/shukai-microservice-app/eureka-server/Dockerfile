# Використовуємо останній офіційний образ OpenJDK
FROM openjdk:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо зібраний JAR-файл у контейнер
COPY target/eureka-server-0.0.1-SNAPSHOT.jar eureka-server.jar

# Відкриваємо порт 8761 для Eureka Server
EXPOSE 8761

# Встановлюємо команду для запуску додатку
ENTRYPOINT ["java", "-jar", "eureka-server.jar"]
