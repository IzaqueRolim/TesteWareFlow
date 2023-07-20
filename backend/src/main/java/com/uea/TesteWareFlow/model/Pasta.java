package com.uea.TesteWareFlow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "tb_pasta")
public class Pasta {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;
    private LocalDate data_criacao;
    private String rota_compartilhamento;

    @ManyToMany
    @JsonIgnoreProperties("{pastas}")
    private List<Usuario> usuarios;
}
