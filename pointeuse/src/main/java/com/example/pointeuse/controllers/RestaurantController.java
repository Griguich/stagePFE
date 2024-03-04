package com.example.pointeuse.controllers;

import com.example.pointeuse.models.Restaurant;
import com.example.pointeuse.services.RestaurantService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class RestaurantController {
    private RestaurantService restaurantService ;
    @PostMapping("/AddRestaurant")
    public Restaurant AddRestaurant (@RequestBody Restaurant restaurant) {
        return restaurantService.AddRestaurant(restaurant) ;
    }

    @PutMapping("/UpdateRestaurant")
    public Restaurant UpdateRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.UpdateRestaurant(restaurant);
    }

    @GetMapping("/GetByIdRestaurant/{id}")
    public Restaurant GetByIdRestaurant (@PathVariable("id") Long id) {
        return restaurantService.GetByIdRestaurant(id);
    }

    @GetMapping("/GetAllRestaurant")

    public List<Restaurant> GetAllRestaurant()  { return restaurantService.GetAllRestaurant(); }

    @DeleteMapping("/DeleteRestaurant/{id}")
    public void DeleteRestaurant(@PathVariable("id") long id) {
        restaurantService.DeleteRestaurant(id);
    }
}
