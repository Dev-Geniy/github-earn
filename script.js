// Data for the three tables
const rentRepos = [
    {
        name: "money4band",
        description: "Docker-стеки для приложений (Honeygain, EarnApp, IPRoyal Pawns), которые платят за неиспользуемый интернет-трафик. Поддерживает до 15 устройств.",
        link: "https://github.com/MRColorR/money4band",
        difficulty: "Низкая: скачать релиз, запустить .exe или скрипт, зарегистрироваться. Требуется Docker для полной настройки.",
        income: "Небольшой: несколько долларов в месяц, зависит от скорости интернета и региона.",
        notes: "Проверьте условия провайдера. Некоторые приложения требуют жилой IP.",
        instructions: `
            <h4>О сервисе</h4>
            <p>money4band — это проект, который объединяет приложения для монетизации интернет-трафика. Вы устанавливаете их на свои устройства, и они используют ваш интернет для задач, таких как тестирование сетей, принося вам доход.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Скачайте релиз</strong>: Перейдите на <a href="https://github.com/MRColorR/money4band/releases" target="_blank">страницу релизов</a> и скачайте последнюю версию для вашей ОС (Windows: .exe, Linux/macOS: скрипт).</li>
                <li><strong>Установите Docker</strong>: Если хотите кастомизировать, установите <a href="https://www.docker.com/get-started" target="_blank">Docker</a>. Для Windows включите WSL и виртуализацию (см. <a href="https://github.com/MRColorR/money4band/wiki" target="_blank">Wiki</a>).</li>
                <li><strong>Запустите приложение</strong>: Для Windows дважды кликните .exe. Для Linux/macOS: выполните <code>chmod +x money4band && ./money4band</code>.</li>
                <li><strong>Зарегистрируйтесь</strong>: Используйте реферальные ссылки из <a href="https://github.com/MRColorR/money4band#referral-links" target="_blank">репозитория</a> для бонусов (например, $1–5 от Honeygain).</li>
                <li><strong>Настройте устройства</strong>: Установите приложения на до 15 устройств (по 1 на IP). Проверьте ограничения в таблице на GitHub.</li>
                <li><strong>Мониторинг</strong>: Используйте веб-панель для отслеживания дохода. Выплаты через PayPal или криптовалюту.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Используйте стабильный интернет с высокой скоростью.</li>
                <li>Проверьте, разрешает ли провайдер такие сервисы.</li>
                <li>Для увеличения дохода добавьте больше устройств с разными IP.</li>
            </ul>`,
        incomeBase: 5, // Base income per device ($/month)
        speedFactor: 0.1, // Income increase per Mbps
        diskFactor: 0 // No disk dependency
    },
    {
        name: "DeNet Storage",
        description: "Децентрализованное облачное хранилище, где вы зарабатываете, сдавая дисковое пространство. Подходит для устройств с большим объемом памяти.",
        link: "https://github.com/DeNetPro",
        difficulty: "Средняя: установка узла, настройка криптокошелька. Требуются базовые знания блокчейна.",
        income: "Средний: $5–20 в месяц, зависит от размера диска и спроса.",
        notes: "Требуется стабильное соединение и свободное место на диске.",
        instructions: `
            <h4>О сервисе</h4>
            <p>DeNet Storage позволяет сдавать свободное дисковое пространство для децентрализованного хранения данных, получая оплату в криптовалюте.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Скачайте приложение</strong>: Перейдите на <a href="https://denet.pro/" target="_blank">официальный сайт</a> и скачайте DeNet Storage Node для вашей ОС.</li>
                <li><strong>Создайте криптокошелек</strong>: Установите кошелек, поддерживающий Ethereum (например, MetaMask), и сохраните seed-фразу.</li>
                <li><strong>Установите узел</strong>: Следуйте инструкциям в <a href="https://github.com/DeNetPro" target="_blank">репозитории</a>. Для Windows/Linux запустите установщик, для macOS проверьте совместимость.</li>
                <li><strong>Настройте хранилище</strong>: Укажите объем диска (минимум 100 ГБ) и подключите кошелек для выплат.</li>
                <li><strong>Запустите узел</strong>: Убедитесь, что устройство включено и подключено к интернету. Узел работает в фоновом режиме.</li>
                <li><strong>Получайте выплаты</strong>: Доход начисляется в токенах DeNet, которые можно обменять на биржах.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Используйте SSD для лучшей производительности.</li>
                <li>Следите за обновлениями в репозитории.</li>
                <li>Изучите основы криптовалют для вывода средств.</li>
            </ul>`,
        incomeBase: 5,
        speedFactor: 0,
        diskFactor: 0.05 // $0.05 per GB
    },
    {
        name: "Fluidstack",
        description: "Сервис для сдачи вычислительной мощности и трафика. Установка агента позволяет зарабатывать на простое оборудования.",
        link: "https://github.com/fluidstack",
        difficulty: "Низкая: установить агент, зарегистрироваться. Работает в фоновом режиме.",
        income: "Небольшой: до $50 в месяц при высокой пропускной способности.",
        notes: "Требуется мощное оборудование и постоянное соединение.",
        instructions: `
            <h4>О сервисе</h4>
            <p>Fluidstack использует ваш компьютер или сервер для сдачи интернет-трафика и вычислительной мощности, платя за это в USD.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Зарегистрируйтесь</strong>: Создайте аккаунт на <a href="https://provider.fluidstack.io/" target="_blank">сайте Fluidstack</a>.</li>
                <li><strong>Скачайте агент</strong>: После регистрации скачайте агент для Windows/Linux из личного кабинета.</li>
                <li><strong>Установите агент</strong>: Запустите установщик и войдите в аккаунт. Агент работает в фоновом режиме.</li>
                <li><strong>Проверьте оборудование</strong>: Убедитесь, что у вас минимум 8 ГБ ОЗУ, 2 ядра CPU и стабильный интернет (10 Мбит/с+).</li>
                <li><strong>Мониторинг</strong>: В личном кабинете отслеживайте доход. Выплаты через PayPal или банковский перевод.</li>
                <li><strong>Оптимизация</strong>: Для большего дохода используйте серверы с высоким аптаймом.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Чем мощнее оборудование, тем выше доход.</li>
                <li>Проверьте, разрешено ли использование трафика провайдером.</li>
                <li>Следите за обновлениями агента для стабильной работы.</li>
            </ul>`,
        incomeBase: 10,
        speedFactor: 0.2,
        diskFactor: 0
    }
];

const aiRepos = [
    {
        name: "CrewAI",
        description: "Фреймворк для создания ИИ-агентов, автоматизирующих маркетинг (генерация контента, анализ аудитории, планирование постов). Подходит для SMM.",
        link: "https://github.com/joaomdmoura/crewAI",
        difficulty: "Средняя: требуется Python, установка зависимостей, настройка API (например, OpenAI). Нужны базовые навыки программирования.",
        income: "Высокий: автоматизация SMM может приносить $100–1000+ в месяц при продаже услуг.",
        notes: "Идеально для фрилансеров, готовых изучить Python.",
        instructions: `
            <h4>О сервисе</h4>
            <p>CrewAI — это фреймворк для создания ИИ-агентов, которые могут выполнять задачи маркетинга, такие как создание постов, анализ данных и планирование кампаний.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Установите Python</strong>: Скачайте Python 3.8+ с <a href="https://www.python.org/" target="_blank">официального сайта</a> и установите.</li>
                <li><strong>Склонируйте репозиторий</strong>: Откройте терминал и выполните <code>git clone https://github.com/joaomdmoura/crewAI.git</code>, затем перейдите в папку: <code>cd crewAI</code>.</li>
                <li><strong>Установите зависимости</strong>: Выполните <code>pip install -r requirements.txt</code>.</li>
                <li><strong>Получите API-ключ</strong>: Зарегистрируйтесь на <a href="https://platform.openai.com/" target="_blank">OpenAI</a> или другом провайдере ИИ и получите ключ.</li>
                <li><strong>Настройте агента</strong>: Создайте скрипт на основе примеров в <a href="https://github.com/joaomdmoura/crewAI/tree/main/examples" target="_blank">папке examples</a>, указав задачи (например, генерация постов).</li>
                <li><strong>Запустите</strong>: Выполните скрипт: <code>python your_script.py</code>. Результаты сохраняются в файлы или выводятся в консоль.</li>
                <li><strong>Монетизация</strong>: Продавайте услуги SMM или контент на платформах вроде Upwork.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Изучите основы Python через бесплатные курсы.</li>
                <li>Используйте бесплатные API для тестов (например, Hugging Face).</li>
                <li>Создайте портфолио с примерами контента.</li>
            </ul>`,
        incomeBase: 100,
        speedFactor: 0,
        diskFactor: 0
    },
    {
        name: "Auto-GPT",
        description: "Автономный ИИ-агент для генерации текстов, идей постов, SEO-оптимизации и маркетинговых стратегий. Использует GPT-модели.",
        link: "https://github.com/Significant-Gravitas/Auto-GPT",
        difficulty: "Средняя: установка через Python, настройка API-ключа. Требуется понимание промптов.",
        income: "Средний: $50–500 в месяц при создании контента для клиентов.",
        notes: "Подходит для генерации постов, но требует платного API.",
        instructions: `
            <h4>О сервисе</h4>
            <p>Auto-GPT — это инструмент для автоматизации задач с помощью ИИ, таких как создание текстов, идей для постов и SEO-оптимизация.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Установите Python</strong>: Скачайте Python 3.8+ с <a href="https://www.python.org/" target="_blank">официального сайта</a>.</li>
                <li><strong>Склонируйте репозиторий</strong>: Выполните <code>git clone https://github.com/Significant-Gravitas/Auto-GPT.git</code>, затем <code>cd Auto-GPT</code>.</li>
                <li><strong>Установите зависимости</strong>: Выполните <code>pip install -r requirements.txt</code>.</li>
                <li><strong>Настройте API</strong>: Зарегистрируйтесь на <a href="https://platform.openai.com/" target="_blank">OpenAI</a>, получите API-ключ и добавьте его в файл <code>.env</code> (см. инструкции в репозитории).</li>
                <li><strong>Запустите Auto-GPT</strong>: Выполните <code>python -m autogpt</code> и следуйте подсказкам, указав задачу (например, "создать пост для Instagram").</li>
                <li><strong>Монетизация</strong>: Используйте результаты для создания контента и продавайте услуги на Fiverr или Upwork.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Экспериментируйте с промптами для лучших результатов.</li>
                <li>Начните с небольших задач, чтобы понять возможности.</li>
                <li>Ищите клиентов в нише контент-маркетинга.</li>
            </ul>`,
        incomeBase: 50,
        speedFactor: 0,
        diskFactor: 0
    },
    {
        name: "ContentBot",
        description: "ИИ-инструмент для генерации текстов (посты, статьи, описания продуктов). Поддерживает маркетинговые задачи и интеграцию с соцсетями.",
        link: "https://github.com/contentbot-ai",
        difficulty: "Низкая: установка через npm или использование веб-интерфейса. Минимальные навыки.",
        income: "Средний: $20–200 в месяц при продаже контента.",
        notes: "Ограниченная бесплатная версия, полный функционал платный.",
        instructions: `
            <h4>О сервисе</h4>
            <p>ContentBot — это ИИ-инструмент для создания текстов, включая посты для соцсетей, статьи и описания продуктов, с упором на маркетинг.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Зарегистрируйтесь</strong>: Создайте аккаунт на <a href="https://contentbot.ai/" target="_blank">официальном сайте</a> для доступа к веб-интерфейсу.</li>
                <li><strong>Скачайте код (опционально)</strong>: Для кастомизации клонируйте <a href="https://github.com/contentbot-ai" target="_blank">репозиторий</a>: <code>git clone https://github.com/contentbot-ai.git</code>.</li>
                <li><strong>Установите зависимости</strong>: Перейдите в папку (<code>cd contentbot-ai</code>) и выполните <code>npm install</code> (требуется Node.js).</li>
                <li><strong>Запустите локально</strong>: Выполните <code>npm start</code> и откройте <code>http://localhost:3000</code> в браузере.</li>
                <li><strong>Создайте контент</strong>: В веб-интерфейсе выберите тип контента (например, "Пост для Instagram") и настройте параметры.</li>
                <li><strong>Монетизация</strong>: Продавайте созданные тексты клиентам через платформы вроде Kwork.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Используйте веб-интерфейс для простоты.</li>
                <li>Тестируйте разные шаблоны контента.</li>
                <li>Изучите основы SEO для повышения ценности услуг.</li>
            </ul>`,
        incomeBase: 20,
        speedFactor: 0,
        diskFactor: 0
    }
];

const bonusRepos = [
    {
        name: "money4band",
        description: "Docker-стеки для приложений (Honeygain, EarnApp, IPRoyal Pawns), платящих за трафик. Реферальные бонусы за регистрацию.",
        link: "https://github.com/MRColorR/money4band",
        difficulty: "Низкая: скачать релиз, запустить, зарегистрироваться по реферальным ссылкам. Требуется Docker для кастомизации.",
        income: "Небольшой: $5–20 в месяц + бонусы ($1–5 за регистрацию).",
        notes: "Бонусы через ссылки, например, Honeygain. Проверьте условия провайдера.",
        instructions: `
            <h4>О сервисе</h4>
            <p>money4band объединяет приложения, которые платят за интернет-трафик, и предлагает реферальные бонусы за регистрацию.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Скачайте релиз</strong>: Перейдите на <a href="https://github.com/MRColorR/money4band/releases" target="_blank">страницу релизов</a> и скачайте .exe (Windows) или скрипт (Linux/macOS).</li>
                <li><strong>Установите Docker (опционально)</strong>: Для кастомизации установите <a href="https://www.docker.com/get-started" target="_blank">Docker</a>.</li>
                <li><strong>Запустите</strong>: Для Windows: дважды кликните .exe. Для Linux: <code>chmod +x money4band && ./money4band</code>.</li>
                <li><strong>Зарегистрируйтесь с бонусами</strong>: Используйте ссылки из репозитория, например, <a href="https://r.honeygain.me/MINDL15721" target="_blank">Honeygain</a> ($5 бонус).</li>
                <li><strong>Настройте устройства</strong>: Установите на до 15 устройств с разными IP.</li>
                <li><strong>Получайте доход</strong>: Отслеживайте через веб-панель, выводите через PayPal или криптовалюту.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Используйте реферальные ссылки для максимального бонуса.</li>
                <li>Проверьте, поддерживает ли провайдер такие сервисы.</li>
                <li>Добавьте больше устройств для увеличения дохода.</li>
            </ul>`,
        incomeBase: 5,
        speedFactor: 0.1,
        diskFactor: 0
    },
    {
        name: "Passivewebmoney",
        description: "Аналог money4band, объединяет приложения для монетизации трафика с реферальными бонусами (Peer2Profit, Repocket).",
        link: "https://github.com/passivewebmoney",
        difficulty: "Низкая: установка через скрипт или .exe, регистрация по реферальным ссылкам.",
        income: "Небольшой: $3–15 в месяц + бонусы ($0.5–3).",
        notes: "Меньше приложений, чем в money4band, но проще интерфейс.",
        instructions: `
            <h4>О сервисе</h4>
            <p>Passivewebmoney — это упрощенный аналог money4band, который запускает приложения для монетизации трафика с реферальными бонусами.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Скачайте релиз</strong>: Перейдите на <a href="https://github.com/passivewebmoney/releases" target="_blank">страницу релизов</a> и скачайте .exe или скрипт.</li>
                <li><strong>Запустите</strong>: Для Windows: дважды кликните .exe. Для Linux: <code>chmod +x passivewebmoney && ./passivewebmoney</code>.</li>
                <li><strong>Зарегистрируйтесь</strong>: Используйте реферальные ссылки из репозитория для бонусов (например, $0.5–3 от Peer2Profit).</li>
                <li><strong>Настройте</strong>: Установите приложения на устройства (до 2 на IP для Repocket).</li>
                <li><strong>Мониторинг</strong>: Проверяйте доход в интерфейсе приложений.</li>
                <li><strong>Вывод средств</strong>: Используйте PayPal или криптовалюту для выплат.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Интерфейс проще, чем у money4band, но меньше приложений.</li>
                <li>Проверьте совместимость с вашим интернетом.</li>
                <li>Используйте рефералов для дополнительного дохода.</li>
            </ul>`,
        incomeBase: 3,
        speedFactor: 0.05,
        diskFactor: 0
    },
    {
        name: "ReferralBot",
        description: "Бот для автоматизации реферальных программ, включая сбор бонусов за приглашение пользователей в проекты, такие как Honeygain.",
        link: "https://github.com/referralbot",
        difficulty: "Средняя: требуется настройка Python-скрипта и API соцсетей. Нужны базовые навыки программирования.",
        income: "Средний: $10–100 в месяц при активном привлечении рефералов.",
        notes: "Подходит для автоматизации, но требует времени на настройку.",
        instructions: `
            <h4>О сервисе</h4>
            <p>ReferralBot автоматизирует участие в реферальных программах, отправляя приглашения через соцсети или мессенджеры для получения бонусов.</p>
            <h4>Пошаговый план для новичков</h4>
            <ul>
                <li><strong>Установите Python</strong>: Скачайте Python 3.8+ с <a href="https://www.python.org/" target="_blank">официального сайта</a>.</li>
                <li><strong>Склонируйте репозиторий</strong>: Выполните <code>git clone https://github.com/referralbot.git</code>, затем <code>cd referralbot</code>.</li>
                <li><strong>Установите зависимости</strong>: Выполните <code>pip install -r requirements.txt</code>.</li>
                <li><strong>Настройте API</strong>: Получите API-ключи для соцсетей (например, Telegram) и добавьте их в конфигурационный файл (см. README).</li>
                <li><strong>Настройте бота</strong>: Укажите реферальные ссылки (например, Honeygain) в скрипте.</li>
                <li><strong>Запустите</strong>: Выполните <code>python bot.py</code>. Бот начнет отправлять приглашения.</li>
                <li><strong>Монетизация</strong>: Получайте бонусы за каждого приглашенного пользователя.</li>
            </ul>
            <h4>Советы</h4>
            <ul>
                <li>Изучите основы Python для настройки.</li>
                <li>Используйте бота в разрешенных каналах.</li>
                <li>Отслеживайте эффективность приглашений.</li>
            </ul>`,
        incomeBase: 10,
        speedFactor: 0,
        diskFactor: 0
    }
];

// Combine all repos for calculator
const allRepos = [...rentRepos, ...aiRepos, ...bonusRepos];

// Populate tables
function populateTable(tableId, repos) {
    const tbody = document.querySelector(`#${tableId} tbody`);
    repos.forEach(repo => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${repo.name}</td>
            <td>${repo.description}</td>
            <td><a href="${repo.link}" target="_blank">GitHub</a></td>
            <td>${repo.difficulty}</td>
            <td>${repo.income}</td>
            <td>${repo.notes}</td>
            <td><i class="fas fa-question-circle help-icon" data-name="${repo.name}" data-instructions="${encodeURIComponent(repo.instructions)}"></i></td>
        `;
        tbody.appendChild(row);
    });
}

// Modal functionality
function openModal(title, instructions) {
    const modal = document.getElementById("help-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalInstructions = document.getElementById("modal-instructions");

    modalTitle.textContent = `Инструкция для ${title}`;
    modalInstructions.innerHTML = decodeURIComponent(instructions);
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("help-modal");
    modal.style.display = "none";
}

// Theme toggle
function toggleTheme() {
    const body = document.body;
    const toggle = document.getElementById("theme-toggle");
    const label = document.querySelector(".theme-label");
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        label.textContent = "Светлая тема";
        toggle.checked = true;
    } else {
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        label.textContent = "Темная тема";
        toggle.checked = false;
    }
}

// Income Calculator
function calculateIncome() {
    const project = document.getElementById("project-select").value;
    const devices = parseInt(document.getElementById("devices").value) || 1;
    const speed = parseInt(document.getElementById("speed").value) || 10;
    const disk = parseInt(document.getElementById("disk").value) || 100;

    const repo = allRepos.find(r => r.name.toLowerCase() === project);
    if (!repo) return;

    let income = repo.incomeBase * devices;
    income += repo.speedFactor * speed * devices;
    income += repo.diskFactor * disk;
    income = Math.round(income * 100) / 100; // Round to 2 decimals

    document.getElementById("income-estimate").textContent = income;
}

// Floating Dollars
function createDollars() {
    const container = document.querySelector(".floating-dollars");
    const maxDollars = window.innerWidth < 768 ? 10 : 20;

    for (let i = 0; i < maxDollars; i++) {
        const dollar = document.createElement("div");
        dollar.classList.add("dollar");
        dollar.style.left = `${Math.random() * 100}vw`;
        dollar.style.top = `${Math.random() * 100}vh`;
        dollar.style.animationDelay = `${Math.random() * 5}s`;
        dollar.style.animationDuration = `${8 + Math.random() * 4}s`;
        dollar.style.transform = `translateZ(${Math.random() * 500 - 250}px)`;
        container.appendChild(dollar);
    }
}

// Chatbot Functionality
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotClose = document.getElementById("chatbot-close");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotHeader = document.querySelector(".chatbot-header");

chatbotBtn.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
    chatbotBtn.style.display = "none";
});

chatbotClose.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
    chatbotBtn.style.display = "block";
});

function addMessage(content, isBot = false) {
    const message = document.createElement("div");
    message.classList.add("message", isBot ? "bot-message" : "user-message");
    message.innerHTML = content;
    chatbotMessages.appendChild(message);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

async function sendMessage() {
    const userInput = chatbotInput.value.trim();
    if (!userInput) return;

    addMessage(userInput);
    chatbotInput.value = "";

    try {
        const response = await getBotResponse(userInput);
        setTimeout(() => {
            addMessage(formatBotResponse(response), true);
        }, 500);
    } catch (error) {
        console.error("Ошибка в sendMessage:", error);
        setTimeout(() => {
            addMessage("Извините, произошла ошибка. Попробуйте позже.", true);
        }, 500);
    }
}

async function getBotResponse(input) {
    const prompt = `Вы - ИИ-помощник на русском языке для сайта о пассивном доходе через GitHub-репозитории. Ответьте на вопрос: "${input}" в контексте проектов для аренды интернета, ИИ-агентов для маркетинга или реферальных программ. Если вопрос о доходе, укажите, что точная сумма зависит от настроек и региона. В конце добавьте: "Для подробностей пишите в Telegram: @AnonymousSupport."`;
    
    const trimmedPrompt = prompt.length > 1500 ? prompt.substring(0, 1500) + "..." : prompt;
    const seed = Math.floor(Math.random() * 1000);
    const url = `https://text.pollinations.ai/${encodeURIComponent(trimmedPrompt)}?model=mistral&seed=${seed}`;

    const response = await fetch(url, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });

    if (!response.ok) {
        throw new Error(`Ошибка API: ${response.status}`);
    }

    const text = await response.text();
    return text.trim() || "Извините, я не смог ответить. Для подробностей пишите в Telegram: @AnonymousSupport.";
}

function formatBotResponse(response) {
    let paragraphs = response.split(/(\n|\.\s*\n)/).filter(line => line.trim() && !line.match(/^\.\s*$/));
    let formattedText = "";
    let inList = false;
    let listItems = [];

    paragraphs.forEach((line, index) => {
        let cleanedLine = line.replace(/\*\*/g, "").trim();
        if (cleanedLine.match(/^\d+\.\s+/) || cleanedLine.match(/^-\s+/)) {
            if (!inList) {
                inList = true;
                if (formattedText) formattedText += "</p>";
                formattedText += "<ul>";
            }
            const listItem = cleanedLine.replace(/^\d+\.\s+|-\s+/, "").trim();
            listItems.push(`<li>${listItem}</li>`);
        } else {
            if (inList) {
                inList = false;
                formattedText += listItems.join("") + "</ul><p>";
                listItems = [];
            } else if (index > 0) {
                formattedText += "</p><p>";
            }
            formattedText += cleanedLine;
        }
    });

    if (inList) {
        formattedText += listItems.join("") + "</ul>";
    } else if (formattedText) {
        formattedText = "<p>" + formattedText + "</p>";
    }

    formattedText += `<div class="contacts-block"><p>Для подробностей пишите в Telegram: <a href="https://t.me/AnonymousSupport" target="_blank">@AnonymousSupport</a>.</p></div>`;
    return formattedText;
}

chatbotSend.addEventListener("click", sendMessage);
chatbotInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

// Draggable Chatbot
let isDragging = false;
let currentX, currentY, initialX, initialY;

chatbotHeader.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);

function startDragging(e) {
    initialX = e.clientX - currentX;
    initialY = e.clientY - currentY;
    isDragging = true;
    chatbotWindow.style.transition = "none";
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        currentX = Math.max(0, Math.min(currentX, window.innerWidth - chatbotWindow.offsetWidth));
        currentY = Math.max(0, Math.min(currentY, window.innerHeight - chatbotWindow.offsetHeight));
        chatbotWindow.style.left = currentX + "px";
        chatbotWindow.style.top = currentY + "px";
        chatbotWindow.style.bottom = "auto";
        chatbotWindow.style.right = "auto";
    }
}

function stopDragging() {
    isDragging = false;
    chatbotWindow.style.transition = "all 0.4s ease";
}

function initializeChatbotPosition() {
    currentX = window.innerWidth - chatbotWindow.offsetWidth - 20;
    currentY = window.innerHeight - chatbotWindow.offsetHeight - 80;
    chatbotWindow.style.left = currentX + "px";
    chatbotWindow.style.top = currentY + "px";
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Populate tables
    populateTable("table-rent", rentRepos);
    populateTable("table-ai", aiRepos);
    populateTable("table-bonus", bonusRepos);

    // Theme toggle
    document.getElementById("theme-toggle").addEventListener("change", toggleTheme);

    // Help icons
    document.querySelectorAll(".help-icon").forEach(icon => {
        icon.addEventListener("click", () => {
            const name = icon.getAttribute("data-name");
            const instructions = icon.getAttribute("data-instructions");
            openModal(name, instructions);
        });
    });

    // Modal close
    document.querySelector(".modal-close").addEventListener("click", closeModal);
    document.getElementById("help-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    // Calculator
    document.getElementById("calculate-btn").addEventListener("click", calculateIncome);

    // Floating dollars
    createDollars();

    // Chatbot position
    initializeChatbotPosition();
});

window.addEventListener("resize", initializeChatbotPosition);
