package com.uea.TesteWareFlow.repository;

import com.uea.TesteWareFlow.model.Arquivo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ArquivoRepository extends JpaRepository<Arquivo, UUID> {
    Optional<Arquivo> findByName(String file);

}