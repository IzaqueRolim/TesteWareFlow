package com.uea.TesteWareFlow.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "tb_pasta")
public class Pasta {
    @Id
    private Long id;

    private String nome;
    private LocalDate data_criacao;
    private String rota_compartilhamento;

}
