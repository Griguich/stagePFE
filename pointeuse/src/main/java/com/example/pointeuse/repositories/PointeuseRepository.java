package com.example.pointeuse.repositories;

import com.example.pointeuse.models.Pointeuse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointeuseRepository extends JpaRepository<Pointeuse, Long> {

    @Query("SELECT p from Pointeuse p WHERE p.idP = :id")
    public Pointeuse findByIdP(Long id);

    @Query("SELECT p FROM Pointeuse p WHERE p.nameP LIKE %:nameP%")
    public  List<Pointeuse> findByNameContaining(String nameP);

   /* @Query(" UPDATE Pointeuse p SET p.synchcro = :#{#p.synchcro++} where p.idP= :id")
    public  Pointeuse incrementAttribute(@Param("id") Long id);*/


}