package com.uea.TesteWareFlow.repository;

import com.uea.TesteWareFlow.model.Arquivo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ArquivoRepository extends JpaRepository<Arquivo,Long> {
    Optional<Arquivo> findByName(String file);

}