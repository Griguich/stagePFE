package com.example.pointeuse.config;

import com.example.pointeuse.services.PointeuseService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class TradeWebSocketHandler extends TextWebSocketHandler {
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Autowired
    private PointeuseService pointeuseService;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // Assuming the message contains the id of the Pointeuse entity
        Long idP = Long.parseLong(message.getPayload());

        // Call PointeuseService method to increment synchro attribute
        pointeuseService.incrementAttribute(idP);
    }



    private Long getPointeuseIdFromSession(WebSocketSession session) {
        // Logic to retrieve the id of the Pointeuse entity associated with the session
        // This could be based on session attributes or other criteria
        // For example:
        return (Long) session.getAttributes().get("idP");
    }


}
