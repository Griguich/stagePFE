package com.example.pointeuse.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idR;

    private String nameR;
    private int nbEmployees;
    @OneToOne
    @JoinColumn(name = "pointeuse_fk")
    private  Pointeuse pointeuse ;

}
