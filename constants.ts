import { Language, TranslationStructure } from './types';

// --- RUSSIAN TEXTS ---
const RU_RINKL_TEXT = `
Rinkl AI - это платформа, созданная с одной целью: дать вам максимально естественный, быстрый и безопасный способ взаимодействия с искусственным интеллектом.
Без компромиссов. Без лишнего шума. Только вы и ваш интеллектуальный помощник, который работает на вашем устройстве и только для вас.

Полная приватность. Настоящая.
Сегодня данные - это ваш самый ценный ресурс. Поэтому Rinkl AI создан по принципу, который должен был стать стандартом индустрии.
Всё хранится локально: история чатов, файлы, изображения, документы - полностью на вашем устройстве.
Нет облачных архивов.
Нет серверных логов.
Нет скрытого отслеживания.
Это не просто приватность. Это ваш полный контроль над своей цифровой жизнью.

Искусственный интеллект, который понимает вас
В Rinkl AI встроена модель Google Gemini 2.5 Flash - быстрая, точная и невероятно контекстуальная.
Она отвечает в реальном времени, анализирует длинные диалоги, предугадывает ваши намерения и помогает вам работать быстрее.
Будь то создание текста, обучение, помощь в работе или сложные задачи — он делает всё плавно и естественно.

Работа с фото и файлами
Rinkl AI — это не только текстовый помощник. Он видит, понимает и анализирует ваши материалы.
Загружайте: фотографии, PDF, таблицы, текстовые документы, презентации, архивы, сложные технические файлы.
Rinkl AI: распознаёт содержание, анализирует изображения, переводит документы в структурированные ответы, находит ключевую информацию, объясняет сложные файлы простым языком.
Вы получаете новую степень ясности и эффективности.

Профессиональная работа с кодом
Rinkl AI — ваш персональный инженер.
Он может: писать код на множестве языков, объяснять алгоритмы, улучшать и оптимизировать ваши решения, помогать в отладке, создавать архитектуры и модули, давать советы по лучшим практикам, обучать программированию на любом уровне.
От первых строчек до сложных систем — он справляется с любыми задачами разработки.

Опыт, который подстраивается под вас
Поддержка языков: русский, английский, испанский, китайский, немецкий.
Темы интерфейса: тёмная, светлая, авто.
Всё ощущается естественно, чисто и продуманно — как будто создано именно под ваш стиль работы.

Инфраструктура, созданная для стабильности
Внутри Rinkl AI работает надёжная система, которая обеспечивает стабильный доступ всегда и везде.
Она включает: автоматическую ротацию API-ключей, умную обработку сетевых ошибок, восстановление запросов, системные механизмы устойчивости, адаптивное распределение нагрузки.
Даже если интернет нестабилен — Rinkl AI продолжает работать, сохраняя ваш поток задач.

Обратная связь, которая меняет продукт
Прямо в приложении вы можете отправить отзыв, предложение или сообщение об ошибке.
Вы общаетесь напрямую с командой — и ваши идеи влияют на развитие платформы.

Ваш личный, приватный и невероятно мощный ИИ-помощник.
Создан для работы. Для творчества. Для жизни.
`;

const RU_TG_TEXT = `
Телеграмм канал Rinkl - это официальный источник, где появляются все значимые новости о платформе.
Если вы хотите быть в курсе развития Rinkl - именно здесь выходит всё самое важное.

В канале вы найдёте:
официальные анонсы Rinkl AI
новости о релизах и обновлениях
информацию о будущих продуктах Rinkl
ранние тизеры функций
закрытые объявления для подписчиков
новости о разработке и улучшениях

Мы публикуем только самое важное - без лишних сообщений и шума.
Каждый пост несёт ценность и помогает вам следить за эволюцией Rinkl.

Подписавшись, вы будете первыми узнавать:
какие функции выходят в ближайшее время
какие продукты находятся в разработке
что мы планируем после релиза 7 декабря 2025
какие улучшения готовятся за кулисами
какие технологии станут частью экосистемы Rinkl

Телеграмм канал Rinkl - это место, где анонсы и новости появляются раньше, чем где-либо ещё.
Если Rinkl меняется - вы узнаете об этом первыми.
`;

const RU_ABOUT_TEXT = `
Мы - Rinkl, перспективный технологический стартап, создающий инновационные IT-продукты.
Наша миссия - делать сложное простым и доступным, предлагая умные и элегантные решения для реальных задач.

Мы используем самые современные технологии и передовые подходы в разработке, чтобы создавать продукты, которые помогают людям работать эффективнее, мыслить креативнее и достигать большего.

Каждый наш проект строится на принципах:
 • Приватность и безопасность - мы заботимся о ваших данных.
 • Инновации и точность - технологии, которые реально решают задачи.
 • Эстетика и удобство - интерфейсы и опыт, которые приятно использовать.
 • Доступность и адаптивность - продукты подстраиваются под ваши потребности.

В Rinkl мы верим, что технологии должны быть умными, понятными и полезными, и создаем продукты, которые открывают новые возможности для пользователей по всему миру.
`;

// --- ENGLISH TEXTS ---
const EN_RINKL_TEXT = `
Rinkl AI is a platform built with one goal: to give you the most natural, fast, and secure way to interact with artificial intelligence.
No compromises. No noise. Only you and your intelligent assistant, working on your device and only for you.

Full Privacy. Real.
Today data is your most valuable resource. Rinkl AI is built on a principle that should have been the industry standard.
Everything is stored locally: chat history, files, images, documents - completely on your device.
No cloud archives.
No server logs.
No hidden tracking.
This isn't just privacy. It's your complete control over your digital life.

AI that understands you
Rinkl AI features the Google Gemini 2.5 Flash model - fast, accurate, and incredibly contextual.
It responds in real-time, analyzes long conversations, predicts your intent, and helps you work faster.
Whether it's writing text, learning, work assistance, or complex tasks — it does everything smoothly and naturally.

Work with photos and files
Rinkl AI is not just a text assistant. It sees, understands, and analyzes your materials.
Upload: photos, PDFs, spreadsheets, text documents, presentations, archives, complex technical files.
Rinkl AI: recognizes content, analyzes images, converts documents into structured answers, finds key information, explains complex files in simple language.
You get a new level of clarity and efficiency.

Professional coding
Rinkl AI is your personal engineer.
It can: write code in multiple languages, explain algorithms, improve and optimize your solutions, help with debugging, create architectures and modules, give advice on best practices, teach programming at any level.
From the first lines to complex systems — it handles any development task.

Experience that adapts to you
Language support: Russian, English, Spanish, Chinese, German.
Interface themes: Dark, Light, Auto.
Everything feels natural, clean, and thoughtful — as if created specifically for your workflow.

Infrastructure built for stability
Inside Rinkl AI runs a reliable system that ensures stable access anytime, anywhere.
It includes: automatic API key rotation, smart network error handling, request recovery, system resilience mechanisms, adaptive load distribution.
Even if the internet is unstable — Rinkl AI continues to work, preserving your task flow.

Feedback that changes the product
Directly in the app, you can send feedback, suggestions, or bug reports.
You communicate directly with the team — and your ideas influence the platform's development.

Your personal, private, and incredibly powerful AI assistant.
Created for work. For creativity. For life.
`;

const EN_TG_TEXT = `
Rinkl Telegram Channel - the official source where all significant news about the platform appears.
If you want to stay updated on Rinkl's development - this is where everything important is published.

In the channel you will find:
official Rinkl AI announcements
news about releases and updates
information about future Rinkl products
early feature teasers
closed announcements for subscribers
news about development and improvements

We publish only what matters - without unnecessary messages and noise.
Every post carries value and helps you follow Rinkl's evolution.

By subscribing, you'll be the first to know:
which features are coming soon
which products are in development
what we plan after the December 7, 2025 release
what improvements are being prepared behind the scenes
what technologies will become part of the Rinkl ecosystem

The Rinkl Telegram Channel is the place where announcements and news appear before anywhere else.
If Rinkl changes - you will know about it first.
`;

const EN_ABOUT_TEXT = `
We are Rinkl, a promising tech startup creating innovative IT products.
Our mission is to make the complex simple and accessible, offering smart and elegant solutions for real-world problems.

We use the most modern technologies and advanced development approaches to create products that help people work more efficiently, think more creatively, and achieve more.

Every project of ours is built on these principles:
 • Privacy and Security - we care about your data.
 • Innovation and Precision - technologies that really solve problems.
 • Aesthetics and Usability - interfaces and experiences that are pleasant to use.
 • Accessibility and Adaptability - products adapt to your needs.

At Rinkl, we believe technology should be smart, clear, and useful, and we create products that open new possibilities for users around the world.
`;

// --- SPANISH TEXTS ---
const ES_RINKL_TEXT = `
Rinkl AI es una plataforma creada con un único objetivo: brindarte la forma más natural, rápida y segura de interactuar con la inteligencia artificial.
Sin compromisos. Sin ruido innecesario. Solo tú y tu asistente inteligente, trabajando en tu dispositivo y solo para ti.

Privacidad total. Real.
Hoy en día, los datos son tu recurso más valioso. Por eso, Rinkl AI fue creado bajo un principio que debería ser el estándar de la industria.
Todo se almacena localmente: historial de chats, archivos, imágenes, documentos... completamente en tu dispositivo.
Sin archivos en la nube.
Sin registros en servidores.
Sin rastreo oculto.
No es solo privacidad. Es tu control total sobre tu vida digital.

Inteligencia artificial que te entiende
Rinkl AI integra el modelo Google Gemini 2.5 Flash: rápido, preciso e increíblemente contextual.
Responde en tiempo real, analiza diálogos largos, anticipa tus intenciones y te ayuda a trabajar más rápido.
Ya sea redacción de textos, aprendizaje, ayuda laboral o tareas complejas, lo hace todo de forma fluida y natural.

Trabajo con fotos y archivos
Rinkl AI no es solo un asistente de texto. Ve, entiende y analiza tus materiales.
Sube: fotos, PDF, tablas, documentos de texto, presentaciones, archivos comprimidos, archivos técnicos complejos.
Rinkl AI: reconoce el contenido, analiza imágenes, convierte documentos en respuestas estructuradas, encuentra información clave, explica archivos complejos en lenguaje sencillo.
Obtienes un nuevo nivel de claridad y eficiencia.

Programación profesional
Rinkl AI es tu ingeniero personal.
Puede: escribir código en múltiples lenguajes, explicar algoritmos, mejorar y optimizar tus soluciones, ayudar en la depuración, crear arquitecturas y módulos, dar consejos sobre mejores prácticas, enseñar programación a cualquier nivel.
Desde las primeras líneas hasta sistemas complejos, maneja cualquier tarea de desarrollo.

Experiencia que se adapta a ti
Soporte de idiomas: ruso, inglés, español, chino, alemán.
Temas de interfaz: Oscuro, Claro, Automático.
Todo se siente natural, limpio y pensado, como si hubiera sido creado específicamente para tu estilo de trabajo.

Infraestructura creada para la estabilidad
Dentro de Rinkl AI funciona un sistema confiable que garantiza un acceso estable siempre y en todas partes.
Incluye: rotación automática de claves API, manejo inteligente de errores de red, recuperación de solicitudes, mecanismos de resiliencia del sistema, distribución de carga adaptativa.
Incluso si Internet es inestable, Rinkl AI sigue funcionando, preservando tu flujo de trabajo.

Comentarios que cambian el producto
Directamente en la aplicación puedes enviar comentarios, sugerencias o informes de errores.
Te comunicas directamente con el equipo, y tus ideas influyen en el desarrollo de la plataforma.

Tu asistente de IA personal, privado e increíblemente poderoso.
Creado para el trabajo. Para la creatividad. Para la vida.
`;

const ES_TG_TEXT = `
El canal de Telegram de Rinkl es la fuente oficial donde aparecen todas las noticias importantes sobre la plataforma.
Si deseas estar al tanto del desarrollo de Rinkl, aquí es donde se publica todo lo importante.

En el canal encontrarás:
anuncios oficiales de Rinkl AI
noticias sobre lanzamientos y actualizaciones
información sobre futuros productos de Rinkl
avances tempranos de funciones
anuncios cerrados para suscriptores
noticias sobre desarrollo y mejoras

Publicamos solo lo más importante, sin mensajes innecesarios ni ruido.
Cada publicación tiene valor y te ayuda a seguir la evolución de Rinkl.

Al suscribirte, serás el primero en saber:
qué funciones saldrán próximamente
qué productos están en desarrollo
qué planeamos después del lanzamiento del 7 de diciembre de 2025
qué mejoras se están preparando tras bastidores
qué tecnologías formarán parte del ecosistema Rinkl

El canal de Telegram de Rinkl es el lugar donde los anuncios y noticias aparecen antes que en cualquier otro lugar.
Si Rinkl cambia, lo sabrás primero.
`;

const ES_ABOUT_TEXT = `
Somos Rinkl, una startup tecnológica prometedora que crea productos de TI innovadores.
Nuestra misión es hacer lo complejo simple y accesible, ofreciendo soluciones inteligentes y elegantes para problemas reales.

Utilizamos las tecnologías más modernas y enfoques avanzados de desarrollo para crear productos que ayuden a las personas a trabajar de manera más eficiente, pensar de forma más creativa y lograr más.

Cada uno de nuestros proyectos se basa en estos principios:
 • Privacidad y seguridad: cuidamos tus datos.
 • Innovación y precisión: tecnologías que realmente resuelven problemas.
 • Estética y usabilidad: interfaces y experiencias agradables de usar.
 • Accesibilidad y adaptabilidad: los productos se adaptan a tus necesidades.

En Rinkl creemos que la tecnología debe ser inteligente, clara y útil, y creamos productos que abren nuevas posibilidades para usuarios de todo el mundo.
`;

// --- GERMAN TEXTS ---
const DE_RINKL_TEXT = `
Rinkl AI ist eine Plattform, die mit einem einzigen Ziel entwickelt wurde: Ihnen die natürlichste, schnellste und sicherste Art der Interaktion mit künstlicher Intelligenz zu bieten.
Keine Kompromisse. Kein unnötiger Lärm. Nur Sie und Ihr intelligenter Assistent, der auf Ihrem Gerät und nur für Sie arbeitet.

Volle Privatsphäre. Echt.
Heute sind Daten Ihre wertvollste Ressource. Deshalb wurde Rinkl AI nach einem Prinzip entwickelt, das Industriestandard sein sollte.
Alles wird lokal gespeichert: Chatverlauf, Dateien, Bilder, Dokumente – komplett auf Ihrem Gerät.
Keine Cloud-Archive.
Keine Server-Logs.
Kein verstecktes Tracking.
Das ist nicht nur Privatsphäre. Das ist Ihre volle Kontrolle über Ihr digitales Leben.

KI, die Sie versteht
Rinkl AI integriert das Google Gemini 2.5 Flash-Modell – schnell, präzise und unglaublich kontextbezogen.
Es antwortet in Echtzeit, analysiert lange Dialoge, sieht Ihre Absichten voraus und hilft Ihnen, schneller zu arbeiten.
Ob Texterstellung, Lernen, Arbeitshilfe oder komplexe Aufgaben – es erledigt alles reibungslos und natürlich.

Arbeiten mit Fotos und Dateien
Rinkl AI ist nicht nur ein Textassistent. Es sieht, versteht und analysiert Ihre Materialien.
Laden Sie hoch: Fotos, PDFs, Tabellen, Textdokumente, Präsentationen, Archive, komplexe technische Dateien.
Rinkl AI: erkennt Inhalte, analysiert Bilder, wandelt Dokumente in strukturierte Antworten um, findet Schlüsselinformationen, erklärt komplexe Dateien in einfacher Sprache.
Sie erhalten ein neues Maß an Klarheit und Effizienz.

Professionelle Programmierung
Rinkl AI ist Ihr persönlicher Ingenieur.
Es kann: Code in vielen Sprachen schreiben, Algorithmen erklären, Ihre Lösungen verbessern und optimieren, beim Debuggen helfen, Architekturen und Module erstellen, Tipps zu Best Practices geben, Programmieren auf jedem Niveau unterrichten.
Von den ersten Zeilen bis zu komplexen Systemen – es bewältigt jede Entwicklungsaufgabe.

Erfahrung, die sich an Sie anpasst
Sprachunterstützung: Russisch, Englisch, Spanisch, Chinesisch, Deutsch.
Interface-Themen: Dunkel, Hell, Auto.
Alles fühlt sich natürlich, sauber und durchdacht an – als wäre es speziell für Ihren Arbeitsstil geschaffen.

Infrastruktur für Stabilität
Im Inneren von Rinkl AI läuft ein zuverlässiges System, das jederzeit und überall stabilen Zugang gewährleistet.
Es umfasst: automatische API-Schlüssel-Rotation, intelligente Behandlung von Netzwerkfehlern, Wiederherstellung von Anfragen, Mechanismen zur Systemstabilität, adaptive Lastverteilung.
Selbst wenn das Internet instabil ist, arbeitet Rinkl AI weiter und bewahrt Ihren Arbeitsfluss.

Feedback, das das Produkt verändert
Direkt in der App können Sie Feedback, Vorschläge oder Fehlerberichte senden.
Sie kommunizieren direkt mit dem Team – und Ihre Ideen beeinflussen die Entwicklung der Plattform.

Ihr persönlicher, privater und unglaublich leistungsstarker KI-Assistent.
Geschaffen für die Arbeit. Für die Kreativität. Für das Leben.
`;

const DE_TG_TEXT = `
Der Rinkl Telegram-Kanal ist die offizielle Quelle, wo alle wichtigen Neuigkeiten über die Plattform erscheinen.
Wenn Sie über die Entwicklung von Rinkl auf dem Laufenden bleiben möchten – hier wird alles Wichtige veröffentlicht.

Im Kanal finden Sie:
offizielle Ankündigungen von Rinkl AI
Neuigkeiten über Releases und Updates
Informationen über zukünftige Rinkl-Produkte
frühe Teaser von Funktionen
geschlossene Ankündigungen für Abonnenten
Neuigkeiten über Entwicklung und Verbesserungen

Wir veröffentlichen nur das Wichtigste – ohne unnötige Nachrichten und Lärm.
Jeder Beitrag hat einen Wert und hilft Ihnen, die Entwicklung von Rinkl zu verfolgen.

Wenn Sie abonnieren, erfahren Sie als Erste:
welche Funktionen bald erscheinen
welche Produkte in Entwicklung sind
was wir nach dem Release am 7. Dezember 2025 planen
welche Verbesserungen hinter den Kulissen vorbereitet werden
welche Technologien Teil des Rinkl-Ökosystems werden

Der Rinkl Telegram-Kanal ist der Ort, an dem Ankündigungen und Nachrichten früher als anderswo erscheinen.
Wenn sich Rinkl ändert, erfahren Sie es zuerst.
`;

const DE_ABOUT_TEXT = `
Wir sind Rinkl, ein vielversprechendes Tech-Startup, das innovative IT-Produkte entwickelt.
Unsere Mission ist es, das Komplexe einfach und zugänglich zu machen und intelligente und elegante Lösungen für reale Probleme anzubieten.

Wir nutzen die modernsten Technologien und fortschrittliche Entwicklungsansätze, um Produkte zu schaffen, die Menschen helfen, effizienter zu arbeiten, kreativer zu denken und mehr zu erreichen.

Jedes unserer Projekte basiert auf diesen Prinzipien:
 • Privatsphäre und Sicherheit – wir kümmern uns um Ihre Daten.
 • Innovation und Präzision – Technologien, die wirklich Probleme lösen.
 • Ästhetik und Benutzerfreundlichkeit – Schnittstellen und Erlebnisse, die angenehm zu nutzen sind.
 • Zugänglichkeit und Anpassungsfähigkeit – Produkte passen sich Ihren Bedürfnissen an.

Bei Rinkl glauben wir, dass Technologie intelligent, klar und nützlich sein sollte, und wir schaffen Produkte, die Benutzern auf der ganzen Welt neue Möglichkeiten eröffnen.
`;

// --- CHINESE TEXTS ---
const ZH_RINKL_TEXT = `
Rinkl AI 是一个致力于为您提供最自然、快速且安全的人工智能交互方式的平台。
没有妥协。没有多余的干扰。只有您和您的智能助手，完全在您的设备上为您工作。

完全隐私。真实可信。
如今，数据是您最宝贵的资源。因此，Rinkl AI 的构建原则本应成为行业标准。
一切都本地存储：聊天记录、文件、图片、文档——完全存储在您的设备上。
没有云端存档。
没有服务器日志。
没有隐形追踪。
这不仅仅是隐私。这是您对数字生活的完全掌控。

懂您的人工智能
Rinkl AI 内置 Google Gemini 2.5 Flash 模型——快速、精准且极具语境感知能力。
它实时响应，分析长对话，预测您的意图，并帮助您更快地工作。
无论是撰写文本、学习、工作辅助还是处理复杂任务——它都能流畅自然地完成。

处理照片和文件
Rinkl AI 不仅仅是一个文本助手。它能看见、理解并分析您的资料。
上传：照片、PDF、表格、文本文档、演示文稿、压缩包、复杂的技术文件。
Rinkl AI：识别内容、分析图像、将文档转化为结构化答案、查找关键信息、用简单的语言解释复杂文件。
您将获得全新的清晰度和效率。

专业代码处理
Rinkl AI 是您的个人工程师。
它可以：用多种语言编写代码、解释算法、改进和优化您的解决方案、协助调试、创建架构和模块、提供最佳实践建议、教授任何级别的编程。
从第一行代码到复杂系统——它能应对任何开发任务。

适应您的体验
语言支持：俄语、英语、西班牙语、中文、德语。
界面主题：深色、浅色、自动。
一切都感觉自然、干净且经过深思熟虑——仿佛专为您的工作方式而生。

为稳定性打造的基础设施
Rinkl AI 内部运行着一个可靠的系统，确保随时随地的稳定访问。
它包括：自动 API 密钥轮换、智能网络错误处理、请求恢复、系统弹性机制、自适应负载分配。
即使网络不稳定，Rinkl AI 也能继续工作，保持您的任务流顺畅。

改变产品的反馈
您可以直接在应用中发送反馈、建议或错误报告。
您直接与团队沟通——您的想法将影响平台的发展。

您的个人、私密且无比强大的人工智能助手。
为工作而生。为创造力而生。为生活而生。
`;

const ZH_TG_TEXT = `
Rinkl Telegram 频道是发布平台所有重要新闻的官方来源。
如果您想了解 Rinkl 的发展动态——这里发布一切重要信息。

在频道中您将找到：
Rinkl AI 的官方公告
关于发布和更新的新闻
关于未来 Rinkl 产品的信息
功能的早期预告
针对订阅者的内部公告
关于开发和改进的新闻

我们只发布最重要的内容——没有多余的信息和干扰。
每一篇文章都有价值，帮助您关注 Rinkl 的演变。

订阅后，您将第一时间知晓：
哪些功能即将推出
哪些产品正在开发中
2025年12月7日发布后的计划
幕后正在准备哪些改进
哪些技术将成为 Rinkl 生态系统的一部分

Rinkl Telegram 频道是公告和新闻最先出现的地方。
如果 Rinkl 发生变化，您将第一个知道。
`;

const ZH_ABOUT_TEXT = `
我们是 Rinkl，一家充满前景的科技初创公司，致力于创造创新的 IT 产品。
我们的使命是化繁为简，让技术触手可及，为现实问题提供智能且优雅的解决方案。

我们利用最现代的技术和先进的开发方法，创造能够帮助人们更高效工作、更具创造性思维并实现更多目标的产品。

我们的每一个项目都建立在以下原则之上：
 • 隐私与安全——我们关心您的数据。
 • 创新与精准——真正解决问题的技术。
 • 美学与易用性——令人愉悦的界面和体验。
 • 可访问性与适应性——产品适应您的需求。

在 Rinkl，我们相信技术应该是智能、清晰且有用的，我们创造的产品为全球用户开启新的可能性。
`;


export const TRANSLATIONS: Record<Language, TranslationStructure> = {
  ru: {
    menu: { home: 'Главная', support: 'Поддержка', about: 'О нас' },
    home: { sq1_title: 'Rinkl AI - очень и очень скоро', sq2_title: 'Следите за Rinkl в телеграмм' },
    details_rinkl: {
      title: 'Rinkl AI',
      release: 'Релиз — 7 декабря 2025',
      content: RU_RINKL_TEXT.split('\n').filter(line => line.trim() !== '')
    },
    details_telegram: {
      title: 'Телеграмм канал Rinkl',
      content: RU_TG_TEXT.split('\n').filter(line => line.trim() !== ''),
      button: 'Подписаться на Rinkl'
    },
    about: {
        title: 'О нас',
        content: RU_ABOUT_TEXT.split('\n').filter(line => line.trim() !== ''),
        timeline: {
            t1: '08.10.25\nОснование\nRinkl',
            t2: '07.12.25\nрелиз\nRinkl AI',
            t3: 'дальше\nещё\nинтереснее'
        }
    },
    support: {
      title: 'Обратная связь и поддержка',
      messageType: 'Тип сообщения',
      yourMessage: 'Ваше сообщение',
      sendMessage: 'Отправить',
      sending: 'Отправка...',
      myMessages: 'Мои сообщения',
      adminResponse: 'Ответ администратора',
      waitingResponse: 'Ожидание ответа...',
      selectTypePlaceholder: 'Выберите тип обращения...',
      types: {
        feedback: 'Отзыв',
        bug: 'Баг',
        question: 'Вопрос',
        suggestion: 'Предложение',
        other: 'Другое'
      },
      msgSent: 'Спасибо! Ваше сообщение отправлено.',
      fillFields: 'Пожалуйста, заполните все поля',
      noReviews: 'Пока нет сообщений. Отправьте первое!'
    }
  },
  en: {
    menu: { home: 'Home', support: 'Support', about: 'About Us' },
    home: { sq1_title: 'Rinkl AI - Coming Very Soon', sq2_title: 'Follow Rinkl on Telegram' },
    details_rinkl: {
      title: 'Rinkl AI',
      release: 'Release — December 7, 2025',
      content: EN_RINKL_TEXT.split('\n').filter(line => line.trim() !== '')
    },
    details_telegram: {
      title: 'Rinkl Telegram Channel',
      content: EN_TG_TEXT.split('\n').filter(line => line.trim() !== ''),
      button: 'Subscribe to Rinkl'
    },
    about: {
        title: 'About Us',
        content: EN_ABOUT_TEXT.split('\n').filter(line => line.trim() !== ''),
        timeline: {
            t1: '08.10.25\nFounding\nRinkl',
            t2: '07.12.25\nRelease\nRinkl AI',
            t3: 'more\ninteresting\nthings ahead'
        }
    },
    support: {
      title: 'Feedback & Support',
      messageType: 'Type of message',
      yourMessage: 'Your message',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      myMessages: 'My Messages',
      adminResponse: 'Admin Response',
      waitingResponse: 'Waiting for admin response...',
      selectTypePlaceholder: 'Select a type...',
      types: {
        feedback: 'Feedback',
        bug: 'Bug Report',
        question: 'Question',
        suggestion: 'Suggestion',
        other: 'Other'
      },
      msgSent: 'Thank you! Your message has been sent.',
      fillFields: 'Please fill all fields',
      noReviews: 'No messages yet. Send your first message!'
    }
  },
  es: {
    menu: { home: 'Inicio', support: 'Soporte', about: 'Sobre Nosotros' },
    home: { sq1_title: 'Rinkl AI - Muy pronto', sq2_title: 'Sigue a Rinkl en Telegram' },
    details_rinkl: { 
        title: 'Rinkl AI', 
        release: 'Lanzamiento — 7 de diciembre de 2025', 
        content: ES_RINKL_TEXT.split('\n').filter(line => line.trim() !== '') 
    },
    details_telegram: { 
        title: 'Canal de Telegram Rinkl', 
        content: ES_TG_TEXT.split('\n').filter(line => line.trim() !== ''), 
        button: 'Suscribirse a Rinkl' 
    },
    about: { 
        title: 'Sobre Nosotros', 
        content: ES_ABOUT_TEXT.split('\n').filter(line => line.trim() !== ''), 
        timeline: { 
            t1: '08.10.25\nFundación\nRinkl', 
            t2: '07.12.25\nLanzamiento\nRinkl AI', 
            t3: 'lo que viene\nes aún más\ninteresante' 
        } 
    },
    support: {
        title: 'Comentarios y Soporte',
        messageType: 'Tipo de mensaje',
        yourMessage: 'Tu mensaje',
        sendMessage: 'Enviar Mensaje',
        sending: 'Enviando...',
        myMessages: 'Mis Mensajes',
        adminResponse: 'Respuesta del administrador',
        waitingResponse: 'Esperando respuesta...',
        selectTypePlaceholder: 'Seleccione un tipo...',
        types: { feedback: 'Comentarios', bug: 'Error', question: 'Pregunta', suggestion: 'Sugerencia', other: 'Otro' },
        msgSent: '¡Gracias! Su mensaje ha sido enviado.',
        fillFields: 'Por favor complete todos los campos',
        noReviews: 'Aún no hay mensajes. ¡Envía el primero!'
    }
  },
  de: {
    menu: { home: 'Startseite', support: 'Unterstützung', about: 'Über Uns' },
    home: { sq1_title: 'Rinkl AI - Sehr bald', sq2_title: 'Folgen Sie Rinkl auf Telegram' },
    details_rinkl: { 
        title: 'Rinkl AI', 
        release: 'Veröffentlichung — 7. Dezember 2025', 
        content: DE_RINKL_TEXT.split('\n').filter(line => line.trim() !== '') 
    },
    details_telegram: { 
        title: 'Rinkl Telegram-Kanal', 
        content: DE_TG_TEXT.split('\n').filter(line => line.trim() !== ''), 
        button: 'Abonnieren Sie Rinkl' 
    },
    about: { 
        title: 'Über Uns', 
        content: DE_ABOUT_TEXT.split('\n').filter(line => line.trim() !== ''), 
        timeline: { 
            t1: '08.10.25\nGründung\nRinkl', 
            t2: '07.12.25\nRelease\nRinkl AI', 
            t3: 'es wird\nnoch\nspannender' 
        } 
    },
    support: {
        title: 'Feedback & Unterstützung',
        messageType: 'Nachrichtentyp',
        yourMessage: 'Ihre Nachricht',
        sendMessage: 'Nachricht senden',
        sending: 'Senden...',
        myMessages: 'Meine Nachrichten',
        adminResponse: 'Admin-Antwort',
        waitingResponse: 'Warte auf Antwort...',
        selectTypePlaceholder: 'Wählen Sie einen Typ...',
        types: { feedback: 'Feedback', bug: 'Fehler', question: 'Frage', suggestion: 'Vorschlag', other: 'Andere' },
        msgSent: 'Danke! Ihre Nachricht wurde gesendet.',
        fillFields: 'Bitte füllen Sie alle Felder aus',
        noReviews: 'Noch keine Nachrichten.'
    }
  },
  zh: {
    menu: { home: '首页', support: '支持', about: '关于我们' },
    home: { sq1_title: 'Rinkl AI - 即将推出', sq2_title: '在 Telegram 上关注 Rinkl' },
    details_rinkl: { 
        title: 'Rinkl AI', 
        release: '发布 — 2025年12月7日', 
        content: ZH_RINKL_TEXT.split('\n').filter(line => line.trim() !== '') 
    },
    details_telegram: { 
        title: 'Rinkl Telegram 频道', 
        content: ZH_TG_TEXT.split('\n').filter(line => line.trim() !== ''), 
        button: '订阅 Rinkl' 
    },
    about: { 
        title: '关于我们', 
        content: ZH_ABOUT_TEXT.split('\n').filter(line => line.trim() !== ''), 
        timeline: { 
            t1: '08.10.25\n成立\nRinkl', 
            t2: '07.12.25\n发布\nRinkl AI', 
            t3: '未来\n更加\n精彩' 
        } 
    },
    support: {
        title: '反馈与支持',
        messageType: '消息类型',
        yourMessage: '您的留言',
        sendMessage: '发送消息',
        sending: '发送中...',
        myMessages: '我的消息',
        adminResponse: '管理员回复',
        waitingResponse: '等待回复...',
        selectTypePlaceholder: '选择类型...',
        types: { feedback: '反馈', bug: '错误', question: '问题', suggestion: '建议', other: '其他' },
        msgSent: '谢谢！您的消息已发送。',
        fillFields: '请填写所有字段',
        noReviews: '暂无消息。'
    }
  }
};