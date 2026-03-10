# Guia de Deploy - ASCS TB Landing Page

## ⚠️ IMPORTANTE: Antes de fazer deploy

### 1. Atualizar URL do formulário
No arquivo `package/components/Homepage/GetinTouch.vue`, linha ~37:

**Altere de:**
```html
<input type="hidden" name="_next" value="http://localhost:3000/success">
```

**Para (substitua SEU-DOMINIO.com pelo seu domínio real):**
```html
<input type="hidden" name="_next" value="https://SEU-DOMINIO.com/success">
```

Ou remova essa linha se quiser usar a página padrão do FormSubmit.co.

---

## 📦 Passo 1: Gerar arquivos estáticos

1. **Navegue até a pasta package:**
   ```powershell
   cd "C:\Users\kiko_\Desktop\Universidade\Mestrado\2o Ano\Estagio\Estagio Trabalhos\Case Study I\LandingPage\package"
   ```

2. **Execute o comando de geração:**
   ```powershell
   npm run generate
   ```

   Isso irá criar uma pasta `.output/public` com todos os arquivos HTML, CSS, JS necessários.

3. **Aguarde o build completar.** Pode demorar 1-3 minutos.

---

## 📂 Passo 2: Localizar arquivos gerados

Após o build bem-sucedido, os arquivos estarão em:
```
C:\Users\kiko_\Desktop\Universidade\Mestrado\2o Ano\Estagio\Estagio Trabalhos\Case Study I\LandingPage\package\.output\public
```

Esta pasta contém:
- `index.html` (página principal)
- `success.html` (página de confirmação)
- `form-test.html` (página de teste - pode deletar)
- `_nuxt/` (pasta com CSS e JavaScript)
- `images/` (pasta com todas as imagens)
- Outros arquivos estáticos

---

## 🌐 Passo 3: Upload via FTP

### Opção A: Usar um cliente FTP (recomendado)

**Clientes FTP gratuitos:**
- **FileZilla** - https://filezilla-project.org/
- **WinSCP** - https://winscp.net/

**Passos:**
1. Abra o FileZilla (ou outro cliente FTP)
2. Conecte ao seu servidor:
   - Host: `ftp.seu-servidor.com`
   - User: seu usuário
   - Password: sua senha
   - Port: 21 (FTP) ou 22 (SFTP)

3. **No lado esquerdo:** Navegue até a pasta `.output/public`
4. **No lado direito:** Navegue até a pasta raiz do seu site (geralmente `public_html` ou `www`)
5. **Selecione TODOS os arquivos e pastas** dentro de `.output/public`
6. **Arraste para o lado direito** (ou clique direito → Upload)

⚠️ **IMPORTANTE:** Faça upload do **CONTEÚDO** da pasta `public`, não da pasta `public` em si.

### Opção B: PowerShell (se tiver acesso FTP)

```powershell
# Navegar até a pasta de output
cd "C:\Users\kiko_\Desktop\Universidade\Mestrado\2o Ano\Estagio\Estagio Trabalhos\Case Study I\LandingPage\package\.output\public"

# Criar sessão FTP (substitua com suas credenciais)
$ftp = "ftp://ftp.seu-servidor.com/"
$user = "seu-usuario"
$pass = "sua-senha"

# Fazer upload (este é um exemplo básico - melhor usar FileZilla)
```

---

## ✅ Passo 4: Verificar o site

1. Acesse `https://seu-dominio.com`
2. Teste a navegação entre seções
3. **Teste o formulário de contato:**
   - Preencha todos os campos
   - Clique em "Enviar Mensagem"
   - Deve redirecionar para `/success`
   - Verifique o email em joaoajorge@ua.pt

---

## 🔄 Como fazer atualizações

Sempre que fizer alterações no código:

1. **Execute novamente o build:**
   ```powershell
   npm run generate
   ```

2. **Faça upload dos arquivos atualizados via FTP**

---

## 🐛 Problemas comuns

### "npm run generate" dá erro
- Certifique-se de que está na pasta `package`
- Execute `npm install` primeiro
- Verifique se há erros de compilação no código

### Site não carrega CSS/JS
- Verifique se fez upload da pasta `_nuxt/` completa
- Verifique se as permissões dos arquivos estão corretas (644 para arquivos, 755 para pastas)

### Formulário não funciona
- Verifique se atualizou a URL `_next` no GetinTouch.vue
- Certifique-se de que verificou o email do FormSubmit.co

### Imagens não aparecem
- Verifique se fez upload da pasta `images/` completa
- Verifique caminhos relativos

---

## 📊 Estrutura final no servidor

```
seu-dominio.com/
├── index.html          (página principal)
├── success.html        (confirmação)
├── about/
│   └── index.html
├── contact/
│   └── index.html
├── _nuxt/              (CSS e JavaScript)
│   ├── entry.js
│   ├── *.css
│   └── ...
├── images/             (todas as imagens)
│   ├── background/
│   ├── logos/
│   └── ...
└── outros arquivos...
```

---

## 🚀 Otimizações adicionais (opcional)

### Comprimir arquivos antes do upload:
- Use ferramentas como Gzip para comprimir CSS/JS
- Muitos servidores fazem isso automaticamente

### Cache:
- Configure headers de cache no servidor (.htaccess se for Apache)

### CDN:
- Considere usar Cloudflare (gratuito) para melhor performance

---

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs de erro no navegador (F12 → Console)
2. Verifique se todos os arquivos foram enviados corretamente
3. Teste localmente primeiro com `npm run preview` após o `generate`

---

**Última atualização:** Março 2026
