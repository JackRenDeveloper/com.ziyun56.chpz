package com.ziyun56.com.web.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ImportResource;

@EnableAutoConfiguration
@ServletComponentScan("com.devinsor.web.mvc")
@ImportResource("classpath:spring.xml")
public class ChpzWebAdminApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChpzWebAdminApplication.class, args);
    }

}
