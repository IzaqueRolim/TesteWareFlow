package com.uea.TesteWareFlow;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class TesteWareFlowApplication {

	public static void main(String[] args) {
		SpringApplication.run(TesteWareFlowApplication.class, args);
	}




}
