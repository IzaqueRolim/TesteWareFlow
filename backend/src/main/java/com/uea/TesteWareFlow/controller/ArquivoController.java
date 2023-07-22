package com.uea.TesteWareFlow.controller;

import com.uea.TesteWareFlow.model.Arquivo;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.repository.ArquivoRepository;
import com.uea.TesteWareFlow.repository.PastaRepository;
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


    @PostMapping(value = "/upload/{id}")
    private ResponseEntity<?> uploadFiles(@RequestParam("file") MultipartFile file,@PathVariable UUID id){
        String nomePasta = "MeusArquivos";
        String caminhoDocumentos = System.getProperty("user.home") + "\\Documents";
        Path pastaDocumentos = Paths.get(caminhoDocumentos, nomePasta);

        Pasta pastaFound = pastaRepository.findById(id).get();
        System.out.println("Pasta encontrada"+pastaFound);

        try{
            if(!file.isEmpty()){
                System.out.println(pastaDocumentos);
                Files.createDirectories(pastaDocumentos);

                Path arquivoPath = pastaDocumentos.resolve(file.getOriginalFilename());
                file.transferTo(arquivoPath.toFile());
                LocalDate dataAtual= LocalDate.now();
//---CASO-DER-ALGUM-PROBLEMA-AO-SALVAR-DADOS,-DESCOMENTE-AQUI-E-FAÇA-O-DEBUG=-===
                System.out.println(file.getName());                         //  |||
                System.out.println(dataAtual);                              //  |||
               System.out.println(pastaFound);             //  |||
                System.out.println(arquivoPath.toString());                 //|||
//===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===-===

                //ANALISANDO OS DADOS ANTES DE INSTANCIAR A CLASSE

                Arquivo arquivo = new Arquivo();

                arquivo.setId_arquivo(UUID.randomUUID());
                arquivo.setName(file.getName());
                arquivo.setTipo(identificarTipoArquivo(file.getOriginalFilename()));
                arquivo.setData_upload(dataAtual);
                arquivo.setCaminhoArquivo(arquivoPath.toString());
                arquivo.setPasta(pastaFound);

                //pastaFound.getArquivos().add(arquivo);
                System.out.println(arquivo);                                       //|||
               // pastaRepository.save(pastaFound);
              return ResponseEntity.ok(arquivoRepository.save(arquivo));
            }
              return ResponseEntity.notFound().build();
        }catch (IOException e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping(value = "/download/{file}")
    private ResponseEntity<Resource> downloadFile(@PathVariable String file){
        String caminhoDocumentos = System.getProperty("user.home") + "/Documents/MeusArquivos/" ;
        Path arquivoPath = Paths.get(caminhoDocumentos, file);

        boolean arquivoExiste = Files.exists(arquivoPath);

        if (arquivoExiste) {
            Resource resource = new FileSystemResource(arquivoPath.toFile());

            String contentType = null;
            try {
                contentType = Files.probeContentType(resource.getFile().toPath());
                System.out.println(resource.getFile().toPath());
            } catch (IOException e) {
                e.printStackTrace();
            }

            System.out.println(contentType);
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(contentType))
                    .body(resource);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping()
    private List<Arquivo> listarTodosOsArquivos(){
        return arquivoRepository.findAll();
    }

    @GetMapping(value ="/{id}")
    private Arquivo procurarPeloId(@PathVariable Long id){
         Optional<Arquivo> arquivoEncontrado = arquivoRepository.findById(id);

         return arquivoEncontrado.get();
    }

    public String identificarTipoArquivo(String nomeArquivo) {
        String extensaoArquivo = nomeArquivo.substring(nomeArquivo.lastIndexOf(".") + 1).toLowerCase();

        switch (extensaoArquivo) {
            //TROCAR ESSE RETORNO PELO LINK DO ICONE DO TIPO DE ARQUIVO
            case "pdf":
                return "PDF";
            case "png":
                return "PNG";
            case "jpg":
            case "jpeg":
                return "JPEG";
            case "zip":
                return"zip";
            case "docx":
                return"docx";
            case "pptx":
                return"pptx";
            default:
                return "Tipo de arquivo desconhecido";
        }
    }

}
