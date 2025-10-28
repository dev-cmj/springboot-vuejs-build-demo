package project.integration.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.integration.dto.LoginRequest;
import project.integration.dto.LoginResponse;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest req) {
        // 간단한 하드코딩 검증 (예제용)
        if ("user".equals(req.getUsername()) && "pass".equals(req.getPassword())) {
            return ResponseEntity.ok(new LoginResponse("dummy-token", "ok"));
        }
        return ResponseEntity.status(401).body(new LoginResponse(null, "Invalid credentials"));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest httpReq) {
        HttpSession session = httpReq.getSession(false);
        if (session != null) session.invalidate();
        return ResponseEntity.ok().body("logout success");
    }

}
