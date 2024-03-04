package com.example.pointeuse.services;

import com.example.pointeuse.models.Pointeuse;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

public class pointeuseSpecification implements Specification {

    private Pointeuse filter;
    public pointeuseSpecification(Pointeuse filter) {
        super();
        this.filter = filter;
    }


    @Override
    public Predicate toPredicate(Root root, CriteriaQuery query, CriteriaBuilder criteriaBuilder) {
        Predicate p = criteriaBuilder.disjunction();
        if (filter.getNameP() != null) {
            p.getExpressions().add(criteriaBuilder.equal(root.get("nameP"), filter.getNameP()));
        }

        return p;
    }
}
