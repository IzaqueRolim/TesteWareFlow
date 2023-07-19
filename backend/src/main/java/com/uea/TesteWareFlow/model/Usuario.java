package com.uea.TesteWareFlow.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "tb_usuario")
public class Usuario {
    @Id
    private Long id;

    private String nome;

    private String email;

    private String senha;
}
