package com.example.pointeuse.services;

import com.example.pointeuse.models.Restaurant;

import java.util.List;

public interface IServiceRestauraunt {
    public Restaurant AddRestaurant (Restaurant restaurant) ;
    public Restaurant UpdateRestaurant (Restaurant restaurant) ;
    public void  DeleteRestaurant (Long idRestaurante) ;
    public List<Restaurant> GetAllRestaurant () ;
    public Restaurant GetByIdRestaurant (Long IdRestaurant) ;
}
