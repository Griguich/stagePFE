package com.example.pointeuse.config;

import com.example.pointeuse.models.Pointeuse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.logging.Logger;



public class ScheduledTask {



    /*private static Date lastExecutionTime;

    @Scheduled(fixedRate = 6000)
    public static void updateSynchronizedAttribute() {

        log.info("Task performed at {}", LocalDateTime.now());
        Pointeuse.incrementSynchronizedAttribute();

        // Broadcast the updated value to connected clients using WebSocket
    }

    public static Date getLastExecutionTime() {
        return lastExecutionTime;
    }

*/
}
