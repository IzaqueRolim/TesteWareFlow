package com.uea.TesteWareFlow.service;

import com.uea.TesteWareFlow.model.Arquivo;
import com.uea.TesteWareFlow.model.Pasta;
import com.uea.TesteWareFlow.repository.ArquivoRepository;
import com.uea.TesteWareFlow.repository.PastaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.UUID;

@Service
public class ArquivoService {
    @Autowired
    private PastaRepository pastaRepository;

    @Autowired
    private ArquivoRepository arquivoRepository;

    public ResponseEntity<?> salvarArquivos(MultipartFile file, Pasta pasta){
        String nomePasta = "WareFlowArquivos";
        String caminhoDocumentos = System.getProperty("user.home") + "\\Documents";
        Path pastaDocumentos = Paths.get(caminhoDocumentos, nomePasta);

        try{
            if(!file.isEmpty()){
                // Cria o diretorio e salva o arquivo na pasta especificada.
                Files.createDirectories(pastaDocumentos);
                Path arquivoPath = pastaDocumentos.resolve(file.getOriginalFilename());
                file.transferTo(arquivoPath.toFile());

                // Pega a data atual
                LocalDate dataAtual= LocalDate.now();

                // Instancia a classe arquivo e seta os dados.
                Arquivo arquivo = new Arquivo();

                arquivo.setId_arquivo(UUID.randomUUID());
                arquivo.setName(file.getName());
                arquivo.setTipo(identificarTipoArquivo(file.getOriginalFilename()));
                arquivo.setData_upload(dataAtual);
                arquivo.setCaminhoArquivo(arquivoPath.toString());
                arquivo.setPasta(pasta);

                return ResponseEntity.ok(arquivoRepository.save(arquivo));
//                pasta.getArquivos().add(arquivo);
//                pastaRepository.save(pasta);
            }
            return ResponseEntity.status(500).body("Insira o arquivo");
        }catch (IOException e){
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    public ResponseEntity<Resource> baixarArquivos(@PathVariable String file){
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
