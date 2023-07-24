package com.uea.TesteWareFlow.model;

import com.fasterxml.jackson.annotation.*;
import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.UsuarioDto;
import jakarta.persistence.*;
import lombok.Data;

import java.rmi.server.UID;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Entity
@Data
@Table(name = "tb_pasta")
public class Pasta {
    @Id
    @GeneratedValue
    private UUID id_pasta;

    private String nomePasta;
    private LocalDate data_criacao;
    private String rota_compartilhamento;

    
    @ManyToMany(mappedBy = "pastas")
    private List<Usuario> usuarios;

    @OneToMany(mappedBy = "pasta")
    private List<Arquivo>arquivos = new ArrayList<>();

}
