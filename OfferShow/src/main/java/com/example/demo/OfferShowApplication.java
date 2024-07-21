package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(value = "com.example.demo.mapper")
@SpringBootApplication
public class OfferShowApplication {

	public static void main(String[] args) {
		SpringApplication.run(OfferShowApplication.class, args);
	}

}
