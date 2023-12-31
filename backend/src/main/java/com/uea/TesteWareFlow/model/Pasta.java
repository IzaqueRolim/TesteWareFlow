package com.uea.TesteWareFlow.model;

import com.fasterxml.jackson.annotation.*;
import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.UsuarioDto;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.rmi.server.UID;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@Table(name = "tb_pasta")
public class Pasta {
    @Id
    @GeneratedValue
    private UUID id_pasta;

    private String nomePasta;
    private LocalDate data_criacao;
    private String rota_compartilhamento;


    @ManyToMany(mappedBy = "pastas",cascade = {CascadeType.MERGE},fetch= FetchType.EAGER)
    @JsonBackReference
    List<Usuario> usuarios;

    @OneToMany(mappedBy = "pasta")
    private List<Arquivo>arquivos = new ArrayList<>();

}
