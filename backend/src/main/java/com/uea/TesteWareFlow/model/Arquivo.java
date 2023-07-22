package com.uea.TesteWareFlow.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_arquivo")
public class Arquivo {
    @Id
    private UUID id_arquivo;

    private String name;
    private String tipo;

    private LocalDate data_upload;


    @ManyToOne
    @JoinColumn(name = "pasta_id")
    @JsonIgnoreProperties("arquivos")
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
