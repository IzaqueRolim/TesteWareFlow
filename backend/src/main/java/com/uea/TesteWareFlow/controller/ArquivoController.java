package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.model.Arquivo;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.model.Usuario;
import com.uea.TesteWareFlow.repository.ArquivoRepository;
import com.uea.TesteWareFlow.repository.PastaRepository;
import com.uea.TesteWareFlow.service.ArquivoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalTime;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(value = "/arquivos")
public class ArquivoController {

    @Autowired
    private final ResourceLoader resourceLoader;

    public ArquivoController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @Autowired
    private ArquivoRepository arquivoRepository;
    @Autowired
    private PastaRepository pastaRepository;
    @Autowired
    private ArquivoService arquivoService;


    @PostMapping(value = "/upload/{id}")
    private ResponseEntity<?> uploadFiles(@RequestParam("file") MultipartFile file,@PathVariable UUID id){
        Optional<Pasta> pastaFound = pastaRepository.findById(id);

        if(pastaFound.isEmpty()){
            ResponseEntity.notFound().build();
        }

        return arquivoService.salvarArquivos(file,pastaFound.get());
    }

    @GetMapping(value = "/download/{file}")
    private ResponseEntity<?> downloadFile(@PathVariable String file) throws IOException {
        return arquivoService.baixarArquivos(file);
    }

    @GetMapping()
    private List<Arquivo> listarTodosOsArquivos(){
        return arquivoRepository.findAll();
    }

    @GetMapping(value ="/{id}")
    private Arquivo procurarPeloId(@PathVariable UUID id){
         Optional<Arquivo> arquivoEncontrado = arquivoRepository.findById(id);

         return arquivoEncontrado.get();
    }
    @DeleteMapping("{id}")
    private ResponseEntity<?> deletarArquivo(@PathVariable UUID id){
        if(arquivoRepository.existsById(id)){
            arquivoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();

    }

}
