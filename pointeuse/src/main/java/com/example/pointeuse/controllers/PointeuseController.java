package com.example.pointeuse.controllers;

import com.example.pointeuse.config.ScheduledTask;
import com.example.pointeuse.models.Pointeuse;
import com.example.pointeuse.services.PointeuseService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class PointeuseController {

    private PointeuseService pointeuseRepo ;
    private PointeuseService pointeuseService;

    @PostMapping("/AddPointeuse")
    public Pointeuse AddPointeuse (@RequestBody Pointeuse pointeuse) {
        return pointeuseRepo.AddPointeuse(pointeuse) ;
    }

    @PutMapping("/UpdatePointeuse/{id}")
    public Pointeuse UpdatePointeuse(@RequestBody Pointeuse A, @PathVariable("id") Long id) {
        return pointeuseRepo.UpdatePointeuse(A);
    }

    @GetMapping("/GetByIdPointeuse/{id}")
    public Pointeuse GetByIdPointeuse (@PathVariable("id") Long id) {
        return pointeuseRepo.GetByIdPointeuse(id);
    }

    @GetMapping("/GetByNamePointeuse/{nomP}")
    public Pointeuse GetByNamePointeuse (@PathVariable("nomP") String nomP) {
        return pointeuseRepo.GetByNamePointeuse(nomP);
    }

    @GetMapping("/GetAllPointeuse")

    public List<Pointeuse> GetAllPointeuse()  { return pointeuseRepo.GetAllPointeuse(); }

    @DeleteMapping("/DeletePointeuse/{id}")
    public void DeletePointeuse(@PathVariable("id") long id) {
        pointeuseRepo.DeletePointeuse(id);
    }


    /*@GetMapping("/filterPointeuse/{nameP}")
        public List<Pointeuse> getFilteredList(@PathVariable("nameP") String nameP){
        List<Pointeuse> filteredData = pointeuseService.filterPointeuses(nameP);
        return filteredData;
        }*/

    @GetMapping("/filterPointeuse/{nameP}")
        public List<Pointeuse> getFilteredList(@PathVariable("nameP") String nameP){
        if (nameP != null) {
            // Implement filtering logic based on the 'filter' parameter
            return pointeuseService.filterPointeuses(nameP);
        } else {
            return pointeuseService.GetAllPointeuse();
        }
        }

    /*@PutMapping("/UpdatePointeuse/{id}")
    Pointeuse updatePointeuse(@RequestBody Pointeuse newPointeuse, @PathVariable Long id) {return
            pointeuseRepo.findByIdP(id)
                    .map(pointeuse ->{
                        pointeuse.setIdP(newPointeuse.getIdP());
                        pointeuse.setNameP(newPointeuse.getNameP());
                        pointeuse.setEtatP(newPointeuse.getEtatP());
                        pointeuse.setSynchro(newPointeuse.getSynchcro());
                        return pointeuseRepo.save(pointeuse); });
    }

    @PostMapping("/increment")
    public ResponseEntity<String> incrementSynchronizedAttribute() {
        pointeuseService.incrementSynchronizedAttribute();
        return ResponseEntity.ok("Synchronized attribute incremented successfully");
    }*/

   /* @PutMapping("/incrementAttribute/{id}")
    public Pointeuse incrementAttribute (@PathVariable("id") Long id) {
        return pointeuseRepo.incrementAttribute(id);
    }*/



}