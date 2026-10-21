#!/usr/bin/env python3
"""Мандала Ваджрайогини для ребят: шифрует mandala.html паролем → index.html (вход по паролю в браузере).
Источник сцены — dharma wiki/site/dharma/vajrayogini-mandala-3d.html (на mini); перед сборкой скопировать его сюда как mandala.html.
  python3 build.py [пароль]   → index.html;  потом: ~/.claude/scripts/pages/publish.sh "<эта папка>" vajrayogini-mandala "…"
Шифр: PBKDF2-SHA256 (250k) → AES-256-GCM, расшифровка WebCrypto; без пароля в исходнике страницы только шифротекст."""
import base64, hashlib, os, re, sys
from cryptography.hazmat.primitives.ciphers.aead import AESGCM

HERE = os.path.dirname(os.path.abspath(__file__))
pw = sys.argv[1] if len(sys.argv) > 1 else 'club11'
html = open(os.path.join(HERE, 'mandala.html'), encoding='utf-8').read()
html = re.sub(r'<!--.*?-->', '', html, count=1, flags=re.S)          # служебный комментарий с путями — наружу не нужен
html = html.replace('<a href="./">← Дхарма</a>', '')                # ссылка на закрытый раздел Life
salt, iv = os.urandom(16), os.urandom(12)
key = hashlib.pbkdf2_hmac('sha256', pw.encode(), salt, 250000, 32)
ct = AESGCM(key).encrypt(iv, html.encode('utf-8'), None)
b = lambda x: base64.b64encode(x).decode()
page = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>Мандала Ваджрайогини · 3D</title>
<style>
html,body{{margin:0;height:100%;background:#05030a;color:#f1e8dc;font:16px/1.45 -apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif}}
main{{min-height:100%;display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box}}
form{{width:min(360px,100%);background:rgba(20,12,24,.82);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:22px 20px;text-align:center}}
h1{{font:600 19px/1.3 Georgia,serif;margin:0 0 14px;color:#ffd9b0}}
input{{width:100%;box-sizing:border-box;font:inherit;color:#f1e8dc;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:11px 12px;margin-bottom:10px}}
button{{width:100%;font:inherit;color:#fff;background:#b3263a;border:0;border-radius:10px;padding:11px;cursor:pointer}}
#err{{min-height:20px;font-size:14px;color:#ff8a8a;margin-top:8px}}
</style>
</head>
<body>
<main><form id="f"><h1>Мандала Ваджрайогини</h1>
<input id="p" type="password" placeholder="Пароль" autocomplete="current-password" autofocus>
<button>Войти</button><div id="err"></div></form></main>
<script>
const D={{s:"{b(salt)}",i:"{b(iv)}",c:"{b(ct)}"}};
const u=x=>Uint8Array.from(atob(x),c=>c.charCodeAt(0));
async function open_(pw){{
  const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey']);
  const k=await crypto.subtle.deriveKey({{name:'PBKDF2',salt:u(D.s),iterations:250000,hash:'SHA-256'}},km,{{name:'AES-GCM',length:256}},false,['decrypt']);
  const t=new TextDecoder().decode(await crypto.subtle.decrypt({{name:'AES-GCM',iv:u(D.i)}},k,u(D.c)));
  try{{localStorage.setItem('vy-pw',pw)}}catch(e){{}}
  document.open();document.write(t);document.close();
}}
document.getElementById('f').onsubmit=async e=>{{e.preventDefault();document.getElementById('err').textContent='';
  try{{await open_(document.getElementById('p').value)}}catch(x){{document.getElementById('err').textContent='Неверный пароль'}}}};
(async()=>{{let s=null;try{{s=localStorage.getItem('vy-pw')}}catch(e){{}} if(s) try{{await open_(s)}}catch(x){{}}}})();
</script>
</body>
</html>
'''
open(os.path.join(HERE, 'index.html'), 'w', encoding='utf-8').write(page)
print('index.html', len(page))
