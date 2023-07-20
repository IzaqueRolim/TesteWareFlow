package com.uea.TesteWareFlow.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.uea.TesteWareFlow.dto.PastaDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@Entity
@Data
@Table(name = "tb_usuario")
@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String nome;
    private String email;
    private String senha;

    @ManyToMany

    private List<Pasta> pastas;

    public List<PastaDto> getPastasDTO() {
        return pastas.stream()
                .map(pasta -> new PastaDto(pasta.getId(), pasta.getNome(),pasta.getData_criacao(),pasta.getRota_compartilhamento()))
                .collect(Collectors.toList());
    }
}
