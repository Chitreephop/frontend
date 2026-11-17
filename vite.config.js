import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// ตอนพัฒนา: ส่งต่อค ําขอ /api ไปที่ Spring Boot (พอร์ต 8080) จึงไม่ติด CORS
export default defineConfig({
plugins: [vue()],
server: {
port: 5173,
proxy: {
'/api': 'http://localhost:8080'
}
}
})