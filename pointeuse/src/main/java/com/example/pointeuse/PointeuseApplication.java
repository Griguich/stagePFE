package com.example.pointeuse;

import com.example.pointeuse.models.Pointeuse;
import com.example.pointeuse.repositories.PointeuseRepository;
import jakarta.persistence.Access;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.List;

@SpringBootApplication
@EnableScheduling
public class PointeuseApplication implements CommandLineRunner {
    @Autowired
    private PointeuseRepository pointeuseRepository;

    public static void main(String[] args) {
        SpringApplication.run(PointeuseApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
     //List<Pointeuse> pointeuses = pointeuseRepository.findAll();
    // pointeuses.forEach(System.out :: println);
    }
}
