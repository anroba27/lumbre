# Dónde estás: la carpeta de la persona

Se mira **antes de ejecutar o escribir nada**, cada vez que se usa esta skill (entrevista, bajar el tablero o abrir un bloque), y sin contárselo a la persona salvo que haya que parar.

## 1 · Cuál es la carpeta (por la ruta de esta skill)

Al lanzar la skill, la app te dice en qué carpeta está («Base directory for this skill: …»). Esa ruta manda; no la busques listando archivos, porque `.claude` es una carpeta oculta y a veces no sale en un listado.

- Si la ruta acaba en `.claude/skills/lumbre` (en Windows, `.claude\skills\lumbre`) y lo que queda delante **no** es la carpeta de usuario (`/Users/<nombre>`, `/home/<nombre>`, `C:\Users\<nombre>` o `~`), la carpeta de la persona es lo que queda delante. Por ejemplo, con `/Users/ana/Documents/mi-lumbre/.claude/skills/lumbre`, la carpeta es `/Users/ana/Documents/mi-lumbre`. Se llame como se llame (`mi-lumbre`, `lumbre-inicio` u otra), es la buena.
- Si lo que queda delante **es** la carpeta de usuario (la skill está instalada para todo el portátil, en `~/.claude/skills/lumbre`), la carpeta de la persona es la carpeta abierta.

Casi siempre coincide con la carpeta abierta. Si no coincide, trabaja igualmente en la carpeta de la persona: las órdenes de descarga van con `cd "<carpeta>" && ` delante (en PowerShell, `Set-Location "<carpeta>"; `), y los archivos los lees y escribes con su ruta completa dentro de esa carpeta.

## 2 · Lo único que te hace parar: un `CLAUDE.md` que no es de Lumbre

Mira si en esa carpeta hay un `CLAUDE.md`.

- Si no lo hay, o su primera línea acaba en `· Lumbre` (lo escribe esta skill: `# <Nombre> · Lumbre`), sigue.
- Si lo hay y su primera línea **no** acaba en `· Lumbre`, esa carpeta es de otra cosa. No descargues, no escribas y no sigas con nada de esta skill. Di esto, tal cual y sin añadir nada (no propongas crear carpetas ni otros arreglos): «Esta carpeta ya tiene un archivo CLAUDE.md que no es de Lumbre y no quiero estropearlo. En la pestaña Code, abre tu carpeta mi-lumbre y vuelve a escribir /lumbre. Si no la encuentras, levanta la mano». Fin.

No pares por nada más: ni porque la carpeta se llame distinto, ni porque no veas `.claude`, ni porque aún no haya `tablero.html`.
