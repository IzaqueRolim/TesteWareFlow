package com.uea.TesteWareFlow.service;

import com.uea.TesteWareFlow.dto.PastaDto;
import com.uea.TesteWareFlow.dto.PastaDtoInput;
import com.uea.TesteWareFlow.model.Arquivo;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class PastaService {
    @Autowired
    PastaRepository pastaRepository;
    @Autowired
    UsuarioRepository usuarioRepository;

    public ResponseEntity<PastaDto> criarNovaPasta(PastaDtoInput pastaDto, Usuario usuario){
            Pasta pasta = new Pasta();
            pasta.setId_pasta(UUID.randomUUID());                   // Seta um id aleatorio vindo do UUID.
            pasta.setNomePasta(pastaDto.getNomePasta());   // Seta o nome vindo do json de entrada.
            pasta.setData_criacao(LocalDate.now());                  // Seta a data atual.
            pasta.setRota_compartilhamento("rota123");

            List<Usuario> listUsuario = new ArrayList<>();      // Adiciona o usuario em uma lista vazia.
            listUsuario.add(usuario);
            pasta.setUsuarios(listUsuario);                                 // Seta essa lista de usuarios na pasta.
            pasta.setArquivos(new ArrayList<Arquivo>());    // Seta um array vazio de arquivos na pasta.

//            usuario.getPastas().add(pasta);
//            usuarioRepository.save(usuario);

            return ResponseEntity.ok(PastaDto.transformaEmDTO(pastaRepository.save(pasta)));
    }

    public ResponseEntity<PastaDto> adicionarUsuarioAPasta(Pasta pasta, Usuario usuario){
        List<Usuario> listUsuario = pasta.getUsuarios();
        System.out.println("Primeiro Usuario"+listUsuario);
        listUsuario.add(usuario);
        System.out.println("Segundo Usuario"+listUsuario);

        pasta.setUsuarios(listUsuario);

        Pasta _pasta = pastaRepository.save(pasta);
        System.out.println("Pasta depois de ser salva"+_pasta);

        return ResponseEntity.ok(PastaDto.transformaEmDTO(_pasta));
     }
}
