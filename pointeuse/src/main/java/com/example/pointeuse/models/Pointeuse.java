package com.example.pointeuse.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pointeuses")
public class Pointeuse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long idP;

    private String nameP;

    private String etatP;

    private  Integer synchro;


}