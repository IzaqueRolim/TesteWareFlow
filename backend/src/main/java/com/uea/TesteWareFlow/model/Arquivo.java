package com.uea.TesteWareFlow.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "tb_arquivo")
public class Arquivo {
    @Id
    private Long id;

    private String name;
    private String tipo;

    private LocalDate data_upload;

    @ManyToOne
    @JoinColumn(name = "pasta_id")
    private Pasta pasta;

    private String caminhoArquivo;

//    public Arquivo(String name, String tipo, LocalDate data_upload, Pasta pasta, String caminhoArquivo) {
//        this.name = name;
//        this.tipo = tipo;
//        this.data_upload = data_upload;
//        this.pasta = pasta;
//        this.caminhoArquivo = caminhoArquivo;
//    }
}
