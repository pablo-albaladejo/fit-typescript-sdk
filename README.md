# fit-typescript-sdk

Este proyecto es un intento de portar el SDK de Garmin FIT a TypeScript. La implementación actual es incompleta y contiene únicamente algunos utilitarios básicos (por ejemplo `CRC16`, `FileEncoder`, definiciones de campos, etc.). Para convertirlo en una librería completamente funcional y publicable en **npm** se necesita un plan de trabajo detallado.

A continuación se describe un **roadmap** propuesto para completar la implementación.

## 1. Revisión del estado actual
- Analizar el código existente en `src/` para identificar los módulos ya implementados y los que faltan.
- Verificar la compatibilidad con TypeScript 5 y Jest para las pruebas.
- Confirmar que `tsconfig.json` esté configurado para generar código compatible con Node.js.

## 2. Definición de la arquitectura
1. **Estructura de mensajes y campos**
   - Implementar las clases faltantes (`FieldComponent`, `ProfileType`, `DeveloperDataIdMesg`, etc.).
   - Definir la jerarquía de clases que permita describir cada tipo de mensaje (por ejemplo, `ActivityMesg`, `RecordMesg`, `FileIdMesg`).
2. **Codificación y decodificación**
   - Crear un sistema de serialización que cumpla con el protocolo de archivos `.fit` (uso de `FileEncoder`/`FileDecoder`).
   - Soportar campos estándar y campos de desarrollador.
3. **Gestión de perfil y versiones**
   - Incluir las definiciones del perfil oficial (números de mensaje, campos, subcampos, etc.).
   - Manejar el control de versiones del protocolo para asegurar compatibilidad.

## 3. Implementación por fases
1. **Fase 1: Lectura y escritura básica**
   - Finalizar `FileEncoder` y crear `FileDecoder` para leer archivos `.fit`.
   - Implementar la generación del encabezado (`File Header`) y el cálculo de CRC.
   - Añadir pruebas unitarias para verificar la creación y cierre de archivos.
2. **Fase 2: Mensajes fundamentales**
   - Implementar mensajes esenciales (p. ej., `FileIdMesg`, `RecordMesg`, `DeviceInfoMesg`).
   - Añadir tests que creen mensajes, los serialicen y los vuelvan a leer comprobando integridad.
3. **Fase 3: Campos y subcampos**
   - Soportar distintos tipos base (`uint8`, `uint16`, `string`, etc.) siguiendo las constantes definidas en `Fit.ts`.
   - Implementar la lógica de subcampos y componentes (“Field Components”).
   - Proveer funciones de ayuda para la conversión de unidades y escalas.
4. **Fase 4: Datos de desarrollador**
   - Añadir soporte para campos definidos por el usuario y mensajes `DeveloperDataIdMesg`/`FieldDescriptionMesg`.
   - Probar la lectura y escritura de archivos que incluyan dichos campos.
5. **Fase 5: Perfil completo y utilidades**
   - Implementar el resto de mensajes definidos en la especificación FIT.
   - Documentar ejemplos de uso (creación de actividades, lectura de archivos existentes, etc.).

## 4. Pruebas y calidad de código
- Configurar Jest y `ts-jest` para ejecutar las pruebas en `src/__test__`.
- Crear casos de prueba para cada módulo nuevo.
- Medir cobertura de código y asegurar un mínimo aceptable (por ejemplo 80%).
- Añadir comprobaciones de linting y formateo (ESLint, Prettier) para mantener la consistencia del código.

## 5. Integración continua
- Configurar un flujo de CI (GitHub Actions) que ejecute las pruebas y verifique la compilación en cada PR.
- Incluir tareas de build y publicación automática a **npm** cuando se cree una nueva versión con etiqueta.

## 6. Publicación y documentación
- Generar la carpeta `dist/` con el código compilado y los tipos de TypeScript.
- Completar esta `README.md` con instrucciones de instalación y ejemplos de uso.
- Publicar la librería en npm siguiendo las buenas prácticas de versionado semántico.

## 7. Próximos pasos
Este roadmap es orientativo y puede ajustarse conforme avance el proyecto. Es recomendable revisar de forma periódica la [especificación oficial de Garmin](https://developer.garmin.com/fit/protocol/) para garantizar la compatibilidad.

