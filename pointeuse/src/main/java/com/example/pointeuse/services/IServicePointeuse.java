package com.example.pointeuse.services;

import com.example.pointeuse.models.Pointeuse;

import java.util.List;

public interface IServicePointeuse {
    public Pointeuse AddPointeuse (Pointeuse pointeuse) ;
    public Pointeuse UpdatePointeuse (Pointeuse pointeuse) ;
    public void  DeletePointeuse (Long idPointeuse) ;
    public List<Pointeuse> GetAllPointeuse () ;
    public Pointeuse GetByIdPointeuse (Long IdPointeuse) ;

    public Pointeuse getByNamePointeuse (String nomPointeuse);
    public Pointeuse GetByNamePointeuse(String nomP);
    public List<Pointeuse> filterPointeuses(String nameP);
   /* public  void incrementSynchronizedAttribute();*/
}
