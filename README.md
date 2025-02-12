
### Accessories_Gaming_Store

---
- Reinstall Dependencies from Scratch

        rm -rf node_modules package-lock.json
        npm cache clean --force
        npm install


  
### Config vite router in vercel

---
- <vite.config.ts>
          export default defineConfig({
          plugins: [react()],
          server:{
            port:3003
          },
          base:"/"
        })

- create file <vercel.json>
          {
          "rewrites": [
            {
              "source": "/(.*)",
              "destination": "/index.html"
            }
          ]
        }

          
