# Cumplimiento de Estándares De Ciberseguridad

### CONTENIDO
1. OBJETIVO
2. ALCANCE 
3. RESPONSABILIDADES
4. REFERENCIAS 
5. GLOSARIO
6. ANÁLISIS DE AMENAZAS
7. ZONAS DE SEGURIDAD 
8. AUDITORIA DE CIBERSEGURIDAD
9. CONSIDERACIONES FINALES

#### 1. OBJETIVO
Establecer los criterios, requisitos operacionales y documentales para el desarrollo de análisis de ciberseguridad, definición de zonas y conductos, y equipos usados para estar en cumplimiento con los requisitos mínimos establecidos por las normas y estándares para protección de datos, personal y activos digitales para IACS con IEC-62443 en los diferentes sistemas de gestión establecidos por la empresa.

#### 2. ALCANCE
Este procedimiento aplica al proceso de Gestión de Operaciones en cumplimiento a las normas legales y a las necesidades de la empresa, es aplicable a todas las actividades que comprenden los centros de trabajo donde se ejecuten operaciones de digitalización, IIoT, manejo de redes y sistemas de comunicación industrial, telemetría, computación en la nube, automatización y control, monitoreo y reporte en tiempo real.

#### 3. RESPONSABILIDADES
3.1. Es responsabilidad del Director de Operaciones, implementar, ejecutar y controlar que el procedimiento se esté llevando a cabo como se indica.
3.2. Los Trabajadores serán responsables de seguir las indicaciones dispuestas en el presente procedimiento para así dar celeridad y manejo a los procesos establecidos en la empresa.

#### 4. REFERENCIAS
Guía técnica sobre cumplimiento y ejecución de análisis de riesgos, definición de zonas y defensa en profundidad, IEC-62443.

#### 5. GLOSARIO
5.1. PROOVEDOR DE PRODUCTO
Se encarga de el desarrollo y las pruebas del sistema de control, comprendido por la aplicación (antivirus, lista blanca), dispositivos embebidos (PLCs, DCS, etc), dispositivos de red (firewalls, router, switches, etc) y dispositivos de host (estaciones de operador, estaciones de ingeniería), trabajando unidos como sistemas o subsistemas, como es definido en IEC-62443 3-3, 4-1, 4-2.
5.2. INTEGRADOR DE SISTEMAS
Realiza la integración y comisionamiento de productos en una solución de automatización usando un proceso de acuerdo con la norma IEC-62443 2-4, 3-2, 3-3.
5.3. PROPIETARIO DEL ACTIVO
Desempeña las labores operativas y de mantenimiento con la ayuda políticas y procedimientos descritos en IEC-62443 2-1, 2-3, 2-4.
5.4. ZONA DE SEGURIDAD
Las zonas de seguridad son agrupaciones de activos físicos o lógicos, que comparten requerimientos de seguridad y que aíslan los componentes críticos como sistemas de control en tiempo real. Las zonas desmilitarizadas (DMZ) son un tipo de zona de seguridad especial que segmenta la red externa (IT) y la interna (IACS) con la ayuda de componentes como firewall.
5.5. DEFENSA EN PROFUNDIDAD
Es un mecanismo de seguridad en capas, que tiene el beneficio para que, en el caso de estar siendo atacado, si alguna de las capas se ve afectada, las demás capas puedan seguir resistiendo, ayudando a proteger, detectar y reaccionar a diversos ataques. Entiéndase ataque como un intento por violar las políticas y estrategias definidas para bloquear el acceso no autorizado a sistemas digitales. Las capas se definen así:
- Datos: La capa mas interna, usada para ACL (Lista de control de acceso) y encriptación de datos.
- Aplicación: Usada para instalar software como antivirus y endurecimiento de aplicaciones.
- Huésped: Usada para implementación de parches sobre vulnerabilidades detectadas y autorización de usuarios.
- Red Interna: Usada para IPSec, autenticación y encriptación de paquetes, IDS (Sistema de Detección de Intrusión) para usuarios autorizados o no.
- Perímetro: Usado para implementar Firewalls y VPN (Red Privada Virtual).
- Física: Usada para interconexión física entre redes y equipos, aquí residen los switches, candados y accesos físicos al hardware de red.
- Políticas, procedimientos: Usada para definir e implementar las políticas y procedimientos de seguridad en redes IACS.

Dentro de estas capas se incorporan soluciones y usándolas en conjunto se logra la defensa-en profundidad, así como Antivirus software, Proxy server, Authentication and password security, Biometrics, Demilitarized zones (DMZ), Data-centric security, Encryption, Firewalls (hardware or software), Hashing passwords, Intrusion detection systems (IDS), Logging and auditing, Multi-factor authentication, Vulnerability scanners, Physical security (e.g. deadbolt locks), Timed access control, Internet Security Awareness Training, Virtual private network (VPN), Sandboxing, Intrusion Protection System (IPS).

5.6. STRIDE
Es un modelo de riesgos que identifica seis categorías de amenazas digitales, cada amenaza es una violación a las propiedades deseables de un sistema, a saber, autenticidad, integridad, no-repudio, confidencialidad, disponibilidad y autorización:
- Spoofing - Suplantación
- Tampering - Saboteo
- Repudiation - Repudio
- Information disclosure – Filtrado de información o brechas de seguridad
- Denial of Service – Bloqueo de servicio
- Elevation of privilege – Elevación de privilegios

#### 6. ANÁLISIS DE AMENAZAS
Constituido para cumplir los requerimientos expuestos en IEC-62443 3-4. Se usa como una medida para determinar la ruta critica para estructurar prioridades y el despliegue de contramedidas que permitan tener una arquitectura de redes segura, basado en la información de amenazas que se pueda encontrar con herramientas y análisis de las topologías e interconexiones. Se sigue una estructura así:
- Definir la arquitectura del sistema y su contexto de ciberseguridad. La arquitectura se especifica como un diagrama de flujo de datos conteniendo los componentes y sus interacciones con el entorno del sistema, los activos, las rutas de interacción y las tecnologías de comunicación usadas. Se definen perímetros de confianza para determinar zonas de seguridad/confianza. El contexto de ciberseguridad especifica apropiaciones respecto a medidas de seguridad digital. El uso de herramientas como Microsoft Threat Modeling Tool o Amazon Inspector facilita el entendimiento y análisis que se puede hacer sobre la topología de redes.
- Las amenazas se identifican mediante el método STRIDE y son analizadas. Para cada amenaza, se determina el riesgo de aprovechamiento si no se toman contramedidas. El resultado de esto es una lista a amenazas asociadas a riesgo sin mitigar.
- Son definidas las contramedidas que mitigan las amenazas identificadas en el paso anterior.
- Determinar el riesgo de cada amenaza que permanece después de aplicar las contramedidas (riesgo residual), usando el mismo acercamiento del paso. El resultado de esto es una lista de amenazas asociadas con su riesgo residual.
- Se diseñan las contramedidas finales y se implementan.

Bajo esta metodología se conduce un análisis de la estructura general del sistema a intervenir o diseñar. Las estrategias para el análisis que realizamos se pueden sintetizar en un diagrama así:

#### 7. ZONAS DE SEGURIDAD
Cada zona tiene un conjunto de características y requerimientos de seguridad:
- Políticas de seguridad y niveles de seguridad
- Inventario de activos
- Requerimientos de acceso y control
- Amenazas y vulnerabilidades
- Consecuencias de una brecha de seguridad
- Tecnologías autorizadas
- Proceso de cambio de administración

Se define claramente el “Sistema bajo Consideración” (SuC, de sus siglas en ingles), esta compuesto por toda la infraestructura que es sujeta a análisis y puede incluir redes de control, tele-supervisión, infraestructura de comunicación y seguridad (routers/firewall), computadores dentro de la red entre otros; es importante también definir claramente los limites y puntos de acceso al sistema bajo consideración. Una vez se ha descrito detalladamente el SuC, incluyendo todos los sub-sistemas que lo componen, basado en documentación existente y status quo para industrias existentes y el diseño de modulo adicionales, identificado en documentación certificada de arquitecturas y referencias de tecnología. Con esto se procede a fase de evaluación en la cual se realiza la asignación de activos a zonas y conductos. En breve, cada activo presente bajo el SuC debe agruparse dentro de una zona de seguridad y se genera una documentación pertinente para cada zona en un reporte que incluye lo siguiente:
1. Nombre e identificador único
2. Limites lógicos
3. Limites físicos
4. Lista de todos los puntos de acceso al sistema asociado con los limites y los dispositivos
5. Lista de flujos de datos en los puntos de acceso
6. Zonas y conductos conectados
7. Lista de activos asociados y consecuencias determinadas por el análisis de amenazas/riesgos
8. Nivel de seguridad objetivo
9. Políticas de seguridad aplicables
10. Hipótesis de dependencias externas

Bajo estas consideraciones el criterio de separación de zonas y conductos esta dado así:
1. Los activos de los sistemas de información de negocio (IT) y sistemas de control industrial (OT) deberían ser agrupados en diferentes zonas.
2. Los activos identificados como Sistemas Seguros (Safety) deben ser agrupados en zonas separadas.
3. Los activos o dispositivos que se conectan temporalmente con el SuC deben agrupados en zonas separadas.
4. Comunicaciones inalámbricas deben ubicarse en una o mas zonas, separada de las comunicaciones cableadas.

Además de esto, la segmentación de zonas y el agrupamiento de activos se refleja en un diagrama que permita entender la arquitectura y los flujos de comunicación entre zonas basado en IEC 62443-1-1.

#### 8. AUDITORIA DE CIBERSEGURIDAD
Para desarrollar las actividades de digitalización y IACS, la infraestructura de se comunicación debe estar verificada y optimizada. La auditoria es el proceso inicial con el que se realiza un análisis a fondo del requerimiento para ciberseguridad, e incluye el trazado de una ruta para implementar redes seguras, redundancias, filtros y segmentación. Se requiere entonces análisis de documentación y examinación en sitio con el objetivo de abarcar todas las capas de la defensa en profundidad requeridas para implementar un sistema competente con IEC 62443. Los resultados cualitativos se representan en segmentaciones de zonas y definiciones de niveles de seguridad así:

La definición de niveles de seguridad sirve como punto de comparación y manejo de diferentes zonas dentro de una organización. De acuerdo al estándar hay tres tipos de niveles de seguridad, a saber, nivel de seguridad objetivo (SL-T), que describe el nivel de seguridad deseado para una zona; nivel de seguridad alcanzado (SL-A), que describe el nivel de seguridad medido una vez se ha establecido el diseño o implementación del sistema; y nivel de seguridad de capacidad (SL-C), que describe el nivel de seguridad que puede alcanzarse con los componentes de un sistema bien sean configurados correctamente.

Basado en IEC-62443 3-3, 4-2:
- Nivel de Seguridad 1: Prevenir la divulgación no autorizada de información causada por espionaje o exposición casual.
- Nivel de Seguridad 2: Prevenir la divulgación no autorizada de información a entidades en búsqueda activa usando medios sencillos con pocos recursos, habilidad genérica y poca motivación.
- Nivel de Seguridad 3: Prevenir la divulgación no autorizada de información a entidades en búsqueda activa usando medios sofisticados con recursos moderados, habilidades de IACS específicas y motivación moderada.
- Nivel de Seguridad 4: Prevenir la divulgación no autorizada de información a entidades en búsqueda activa usando medios sofisticados con recursos extendidos, habilidades de IACS específicas y alta motivación.

Basado en estos niveles se estructura una métrica para acondicionar el desarrollo y acotar la solución al nivel de complejidad que se presente. Es importante determinar esta métrica, a nivel interno como ejecutante, y también respecto a la configuración de seguridad que un proyecto predeterminado pueda tener por defecto.

Conforme a la evaluación y a los análisis de caso para el sistema se entrega un reporte con las mejoras, cambios y alteraciones pertinentes para cumplir con el estándar y estar blindado para operaciones digitales e internet.

#### 9. CONSIDERACIONES FINALES
Bajo los lineamientos de la estructura estipulada, logrando un nivel de madurez suficiente se asegura que se cumplan requerimientos en la red como segregación, balance de carga, segmentación de IT/OT, definición de zonas de seguridad, conductos, proxy y zona desmilitarizada y mediante sistemas de filtrado y re direccionamiento como switch manejados, canales de flujo definidos y enrutamiento encriptado se asegura una conexión segura entre redes y canales privados, el sistema entregado es competente con IEC 62443 y asegura la confidencialidad, control de acceso y privacidad, así como también de disponibilidad para sistemas de control industrial. Los sistemas Ruggedcom aseguran comunicación con estándares de ciberseguridad y empleando aplicaciones en módulos de computo se logran soluciones para detección y protección de intrusiones. Basado en la defensa en profundidad, el control de acceso y las políticas se definen y reportan confidencialmente. Los dispositivos usados, las definiciones de zonas y conductos y software se incluyen en un reporte de inventario. Adicional, pruebas de calidad de conexión a servicios y pentest se pueden incluir adicionales al servicio. La configuración de puertos y permisos se desarrolla conforme al diseño previo y pruebas en sitio e incluye un reporte de los resultados y la validez de la configuración establecida en la oferta relacionada con servicios de ciberseguridad.

La mejora continua del servicio ofrecido se promueve de forma anual y semestral e incluye revisiones, parches, actualizaciones y propuestas de mejora. El acceso remoto por IPSEC y otras características propias de la red incluyendo defensas de red y software, sistemas de computo para servidores proxy, VPN, de malware y firewall, control de acceso, encriptación y filtro en el flujo de datos se incluyen dentro de la defensa con Ruggedcom y ROXII, además de software propietario como Secure NOK, y que se incluye en una oferta formal a partir de la revisión a profundidad con el segmento IT, la revisión física o de documentación completa para todos los sistemas de red, físicos y lógicos como software, ficheros y configuraciones. Los reportes de auditoria se ajuntan relacionando los entes regulatorios y las pruebas ejecutadas, hallazgos, planes de acción y mejora y ruta critica para evaluar procedimientos futuros.
