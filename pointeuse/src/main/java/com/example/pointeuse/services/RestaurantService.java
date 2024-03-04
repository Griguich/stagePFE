package com.example.pointeuse.services;

import com.example.pointeuse.models.Restaurant;
import com.example.pointeuse.repositories.RestaurantRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class RestaurantService implements IServiceRestauraunt{

    private RestaurantRepository restaurantRepo;
    public Restaurant AddRestaurant (Restaurant restaurant) {
        return restaurantRepo.save(restaurant);
    }
    public Restaurant UpdateRestaurant (Restaurant restaurant) {
        return restaurantRepo.save(restaurant);
    }
    public void  DeleteRestaurant (Long idRestaurant) {
        restaurantRepo.deleteById(idRestaurant);
    }
    public List<Restaurant> GetAllRestaurant () {
        return restaurantRepo.findAll();
    }
    public Restaurant GetByIdRestaurant (Long IdRestaurant) {
        return restaurantRepo.findById(IdRestaurant).orElse(null);
    }
}