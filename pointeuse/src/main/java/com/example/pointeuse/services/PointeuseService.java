package com.example.pointeuse.services;

import com.example.pointeuse.models.Pointeuse;
import com.example.pointeuse.repositories.PointeuseRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class PointeuseService implements IServicePointeuse{
    @Autowired
    private PointeuseRepository pointeuseRepo ;

    public Pointeuse AddPointeuse (Pointeuse pointeuse) {
        return pointeuseRepo.save(pointeuse);
    }
    public Pointeuse UpdatePointeuse (Pointeuse pointeuse) {
        return pointeuseRepo.save(pointeuse);
    }
    public void  DeletePointeuse (Long idPointeuse) {
        pointeuseRepo.deleteById(idPointeuse);
    }
    public List<Pointeuse> GetAllPointeuse () {
        return pointeuseRepo.findAll();
    }
    public Pointeuse GetByIdPointeuse (Long IdPointeuse) {
        return pointeuseRepo.findById(IdPointeuse).orElse(null);
    }

    @Override
    public Pointeuse getByNamePointeuse(String nomPointeuse) {
        return null;
    }

    @Override
    public Pointeuse GetByNamePointeuse(String nomP) {
        return null;
    }

    /*public Pointeuse getByNamePointeuse (String nomPointeuse) { return (Pointeuse) pointeuseRepo.findByNameP(nomPointeuse);}
    /*public Pointeuse GetByNamePointeuse(String nomP) {return pointeuseRepo.findByNameP(nomP);
    }*/
    public List<Pointeuse> filterPointeuses(String nameP) {
       return pointeuseRepo.findByNameContaining(nameP);
    }
    public String extractPointeuseId(URI uri) {
        String query = uri.getQuery();
        String[] queryParams = query.split("&");

        for (String param : queryParams) {
            String[] keyValue = param.split("=");
            if (keyValue.length == 2 && "pointeuseId".equals(keyValue[0])) {
                return keyValue[1];
            }
        }

        // Default to some value or throw an exception if pointeuseId is not found
        return "defaultPointeuseId";
    }

    public void incrementAttribute(Long id) throws InterruptedException  {
        // Retrieve the Pointeuse entity by id
        Pointeuse pointeuse = pointeuseRepo.findById(id).orElse(null);

        // Check if Pointeuse entity exists and then increment synchro attribute
        if (pointeuse != null) {
            for ( int i=0;i<5 ;i++) {
            pointeuse.setSynchro(pointeuse.getSynchro() + 1);
            pointeuseRepo.save(pointeuse);
                Thread.sleep(2000);
                }
        } else {
            // Handle case where Pointeuse entity with given id doesn't exist
            throw new EntityNotFoundException("Pointeuse with id " + id + " not found");
        }
    }






}