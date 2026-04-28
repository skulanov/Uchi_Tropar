// База данных тропарей с советами по запоминанию
const troparData = {
    resurrection: [
        {
            id: 'v1',
            title: "Воскресный тропарь, глас 1",
            glass: "Глас 1",
            audio: "1VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv", // Placeholder для ID из Google Drive
            text: "Ка́мени запеча́тану от иуде́й, / и во́ином стрегу́щим Пречи́стое Те́ло Твое́, / воскре́сл еси́ тридне́вный, Спа́се, / да́руяй ми́рови жи́знь. / Сего́ ра́ди Си́лы небе́сныя вопия́ху Ти́, Жизнода́вче: / сла́ва воскресе́нию Твоему́, Христе́, / сла́ва ца́рствию Твоему́, / сла́ва смотре́нию Твоему́, еди́не Человеколю́бче.",
            tips: [
                "Запомните ключевые образы: камень запечатан, воины стрегущие, воскресение на третий день",
                "Обратите внимание на три повторения 'слава' в конце - это помогает структурировать текст",
                "Слова 'Камени запечатану' создают мощный визуальный образ начала тропаря"
            ]
        },
        {
            id: 'v2',
            title: "Воскресный тропарь, глас 2", 
            glass: "Глас 2",
            audio: "2VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Егда́ снисше́л еси́ к сме́рти, Животе́ Безсме́ртный, / тогда́ а́д умертви́л еси́ блиста́нием Божества́: / егда́ же и уме́ршия от преиспо́дних воскреси́л еси́, / вся́ Си́лы небе́сныя взыва́ху: / Живнода́вче, Христе́ Бо́же на́ш, сла́ва Тебе́.",
            tips: [
                "Противопоставление: Живот Безсмертный против смерти - ключевая идея этого тропаря",
                "Обратите внимание на временные связки 'егда...тогда' - они помогают запомнить структуру",
                "Финальное 'слава Тебе' - это концовка многих тропарей, запомните как рефрен"
            ]
        },
        {
            id: 'v3',
            title: "Воскресный тропарь, глас 3",
            glass: "Глас 3", 
            audio: "3VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Да веселя́тся небе́сная, / да ра́дуются земна́я, / я́ко сотвори́ держа́ву мы́шцею Свое́ю Госпо́дь, / попра́ сме́ртию сме́ртЬ, пе́рвенец ме́ртвых бы́сть; / из чре́ва а́дова изба́ви на́с, / и подаде́ ми́рови ве́лию ми́лость.",
            tips: [
                "Параллелизм: 'Да веселятся небесная, да радуются земная' - легко запомнить",
                "Ключевые глаголы: сотвори, попра, избави, подаде - действия Христа",
                "Запомните последовательность: создание радости → победа над смертью → избавление из ада"
            ]
        },
        {
            id: 'v4',
            title: "Воскресный тропарь, глас 4",
            glass: "Глас 4",
            audio: "4VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv", 
            text: "Све́тлую воскресе́ния про́поведь / от А́нгела уве́деша Госпо́дни учени́цы / и пра́деднее осужде́ние отве́ргша, / апо́столом хва́лящася глаго́лаху: / испрове́ржеся сме́рть, / воскре́се Христо́с Бо́г, / да́руяй ми́рови ве́лию ми́лость.",
            tips: [
                "Начинается с 'Светлую' - это отличительная особенность 4-го гласа",
                "Сюжет: ученицы узнают от ангела → отвергают страх → проповедуют воскресение",
                "Финальная формула 'даруяй мирови велию милость' - запомните как завершение"
            ]
        },
        {
            id: 'v5',
            title: "Воскресный тропарь, глас 5",
            glass: "Глас 5",
            audio: "5VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Собезнача́льное Сло́во Отцу́ и Ду́хови, / от Де́вы ро́ждшееся на спасе́ние на́ше, / пои́м, ве́рнии, и поклони́мся, / я́ко благоволи́ пло́тию взы́ти на кре́ст, / и сме́ртЬ претерпе́ти, / и воскреси́ти уме́ршия / сла́вным воскресе́нием Свои́м.",
            tips: [
                "Богословский акцент: 'Собезначальное Слово' - учение о Троице",
                "Структура: вечное происхождение → рождение от Девы → страдание → воскресение",
                "Запомните последовательность действий: рождение → крест → смерть → воскресение"
            ]
        },
        {
            id: 'v6',
            title: "Воскресный тропарь, глас 6",
            glass: "Глас 6",
            audio: "6VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Ангельския си́лы на гро́бе Твое́м, / и стрегу́щии омертве́ша, / и стоя́ше Мари́я во гро́бе, / и́щущи Пречи́стаго Те́ла Твоего́. / Плени́л еси́ а́д, не искуси́вся от него́; / сре́тил еси́ Де́ву, да́руяй живо́т. / Воскресы́й из ме́ртвых, Го́споди, сла́ва Тебе́.",
            tips: [
                "Драматургия: ангелы на гробе → стражи омертвели → Мария ищет → Христос побеждает ад",
                "Важная догматическая деталь: 'не искусився от него' - Христос не подвергся власти ада",
                "Запомните сцену: ангелы, оцепеневшие стражи, скорбящая Мария"
            ]
        },
        {
            id: 'v7',
            title: "Воскресный тропарь, глас 7",
            glass: "Глас 7",
            audio: "7VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Разруши́л еси́ Кресто́м Твои́м сме́ртЬ, / отве́рзл еси́ разбо́йнику ра́й, / мироно́сицам пла́ч преложи́л еси́, / и апо́столом пропове́дати повеле́л еси́, / я́ко воскре́сл еси́, Христе́ Бо́же, / да́руяй ми́рови ве́лию ми́лость.",
            tips: [
                "Три действия Христа: разрушил смерть → открыл рай → превратил плач в радость",
                "Персонажи: разбойник (прошлое) → мироносицы (настоящее) → апостолы (будущее)",
                "Каждое действие начинается с глагола: разрушил, отверзл, преложил"
            ]
        },
        {
            id: 'v8',
            title: "Воскресный тропарь, глас 8",
            glass: "Глас 8",
            audio: "8VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "С высоты́ снисше́л еси́, Благоутро́бне, / погребе́ние прия́л еси́ тридне́вное, / да на́с свободи́ши страсте́й, / Животе́ и воскресе́ние на́ше, Го́споди, сла́ва Тебе́.",
            tips: [
                "Краткость и емкость - отличительная особенность 8-го гласа",
                "Движение: с высоты → в погребение → для освобождения от страстей",
                "Титулы Христа: Благоутробне, Животе, воскрешение наше - запомните последовательность"
            ]
        }
    ],
    feasts: [
        {
            id: 'f1',
            title: "Рождество Богородицы",
            glass: "Глас 4", 
            audio: "f1VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Рождество́ Твое́ Богоро́дице Де́во, / ра́дость возвести́ все́й вселе́нней: / из Тебе́ бо возсия́ Со́лнце пра́вды Христо́с Бо́г на́ш, / и разруши́в кля́тву, даде́ благослове́ние, / и упраздни́в сме́ртЬ, дарова́ на́м живо́т ве́чный.",
            tips: [
                "Космический масштаб: 'всей вселенной' - радость охватывает весь мир",
                "Символика света: 'Солнце правды' - Христос как источник света и истины",
                "Три действия Христа: разрушил клятву → дал благословение → упразднил смерть"
            ]
        },
        {
            id: 'f2',
            title: "Воздвижение Креста Господня",
            glass: "Глас 1",
            audio: "f2VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Спаси́ Го́споди лю́ди Твоя́ / и благослови́ достоя́ние Твое́, / побе́ды на сопроти́вныя да́руя / и Твое́ сохраня́я Кресто́м Твои́м жи́тельство.",
            tips: [
                "Самый краткий тропарь - запомните как молитва о защите",
                "Структура: спасение → благословение → победа → сохранение",
                "Связь с Крестом: 'Крестом Твоим жительство' - защита дома и страны"
            ]
        },
        {
            id: 'f3',
            title: "Введение во храм Пресвятой Богородицы",
            glass: "Глас 4",
            audio: "f3VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Дне́сь благоволе́ния Бо́жия предображе́ние, / и челове́ков спасе́ния пропове́дание, / в хра́ме Бо́жии я́сно Де́ва явля́ется, / и Христа́ все́м предвозвеща́ет. / То́мже и мы́ велегла́сно возопии́м: / ра́дуйся смотре́ния Зижди́телева исполне́ние.",
            tips: [
                "Событие сегодняшнего дня: 'Днеси' - торжественное начало",
                "Три аспекта события: благоволение Божие → спасение человеков → предвозвещение Христа",
                "Финальное обращение к Богородице как 'исполнению смотрения Зиждителева'"
            ]
        },
        {
            id: 'f4',
            title: "Рождество Христово",
            glass: "Глас 4",
            audio: "f4VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Рождество́ Твое́ Христе́ Бо́же на́ш, / возсия́ ми́рови све́т разу́ма: / в не́м бо звезда́м служа́щии, / звездо́ю уча́хуся, / Тебе́ кла́нятися Со́лнцу пра́вды, / и Тебе́ ве́дети с высоты́ Восто́ка: / Го́споди сла́ва Тебе́.",
            tips: [
                "Антитеза: звездослужители становятся учениками звезды (вифлеемской)",
                "Символика света: рождество → свет разума → Солнце правды",
                "География: с высоты Востока - восточные мудрецы приходят к Христу"
            ]
        },
        {
            id: 'f5',
            title: "Крещение Господне (Богоявление)",
            glass: "Глас 1",
            audio: "f5VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv", 
            text: "Во Иорда́не креща́ющуся Тебе́ Го́споди, / Тро́ическое яви́ся поклоне́ние: / Роди́телев бо гла́с свиде́тельствоваше Тебе́, / возлю́бленнаго Тя́ Сы́на имену́я, / и Ду́х в ви́де голуби́не, / изве́ствоваше словесе́ утвержде́ние. / Явле́йся Христе́ Бо́же, / и ми́р просвеще́й сла́ва Тебе́.",
            tips: [
                "Троическое явление: Бог-Отец говорит → Бог-Сын крестится → Бог-Дух в виде голубя",
                "Ключевое слово 'явлеяйся' - Богоявление, Бог является миру",
                "Запомните последовательность: глас Отца → голубь Духа → слово об Христе"
            ]
        },
        {
            id: 'f6',
            title: "Сретение Господне",
            glass: "Глас 1",
            audio: "f6VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Ра́дуйся Благода́тная Богоро́дице Де́во, / из Тебе́ бо возсия́ Со́лнце пра́вды, Христо́с Бо́г на́ш, / просвеща́яй су́щия во тме́. / Весели́ся и ты́, ста́рче пра́ведный, / прие́мый во объя́тия Свободи́теля ду́ш на́ших, / да́рующаго на́м воскресе́ние.",
            tips: [
                "Двойное обращение: к Богородице ('Радуйся') и к праведному Симеону ('Веселиса')",
                "Световая символика: 'возсия Солнце правды' и 'просвещаяй во тьме'",
                "Симеон как 'старча праведный' принимает воскресение для всех нас"
            ]
        },
        {
            id: 'f7',
            title: "Благовещение Пресвятой Богородицы",
            glass: "Глас 4",
            audio: "f7VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Дне́сь спасе́ния на́шего глави́зна, / и е́же от ве́ка та́инства явле́ние: / Сы́н Бо́жий, Сы́н Де́вы быва́ет, / и Гаврии́л благода́ть благовеству́ет. / Те́мже и мы́ с ни́м Богоро́дице возопии́м: / ра́дуйся, Благода́тная, Госпо́дь с Тобо́ю.",
            tips: [
                "Торжественное 'Днеси' - начало праздника сегодня",
                "Таинство века - Богочеловечество, скрытое от века",
                "Финальное возглас с архангглом: 'Радуйся, Благодатная' - слова Гавриила"
            ]
        },
        {
            id: 'f8',
            title: "Вход Господень в Иерусалим (Вербное Воскресенье)",
            glass: "Глас 1",
            audio: "f8VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "О́бщее воскресе́ние, / пре́жде Твоея́ стра́сти уверя́я, / из ме́ртвых воздви́гл еси́ Ла́заря, Христе́ Бо́же. / Те́мже и мы́ я́ко о́троцы побе́ды зна́мения нося́ще, / Тебе́ победи́телю сме́рти вопие́м: / оса́нна в вы́шних, благослове́н Гряды́й во и́мя Госпо́дне.",
            tips: [
                "Связь событий: воскрешение Лазаря → предвосхищение страстей → вход в Иерусалим",
                "Мы как 'отроцы' с 'победы знамениями' - дети с пальмовыми ветвями",
                "Завершение праздничным 'осанна' - еврейское приветствие Мессии"
            ]
        },
        {
            id: 'f9',
            title: "Вознесение Господне",
            glass: "Глас 4",
            audio: "f9VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Возне́слся еси́ во сла́ве, Христе́ Бо́же на́ш, / ра́дость сотвори́вый ученико́м, / обеща́нием Свята́го Ду́ха, / извеще́нным и́м бы́вшим благослове́нием, / я́ко Ты́ еси́ Сы́н Бо́жий, Изба́витель ми́ра.",
            tips: [
                "Движение вверх: 'Вознеслся во славе' - завершение земного пути",
                "Обещание Духа Святого - утешение учеников после ухода Учителя",
                "Исповедание веры: 'Ты есиь Сын Божий' - исповедание учеников"
            ]
        },
        {
            id: 'f10',
            title: "День Святой Троицы. Пятидесятница",
            glass: "Глас 8",
            audio: "f10VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Благослове́н еси́ Христе́ Бо́же на́ш, / Иже прему́дры ловцы́ явле́й, / низпосла́в и́м Ду́ха Свята́го, / и те́ми уловле́й вселе́нную: / Человеколю́бче сла́ва Тебе́.",
            tips: [
                "Апостолы как 'премудры ловцы' - образ рыбаков, ставших ловцами людей",
                "Уловление вселенной - вселенский характер христианства",
                "Краткость и емкость - отличительная особенность этого праздничного тропаря"
            ]
        },
        {
            id: 'f11',
            title: "Преображение Господне",
            glass: "Глас 7", 
            audio: "f11VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "Преобрази́лся еси́ на горе́, Христе́ Бо́же, / показа́вый ученико́м Твои́м сла́ву Твою́, / я́коже можа́ху: / да возсия́ет и на́м гре́шным све́т Тво́й присносу́щный, / моли́твами Богоро́дицы, Светода́вче сла́ва Тебе́.",
            tips: [
                "Ключевое слово 'преобразился' - суть праздника",
                "Ограниченность человеческого восприятия: 'явоже можаху' - сколько смогли вынести",
                "Свет 'присносущный' - вечный, незаходимый свет божества"
            ]
        },
        {
            id: 'f12',
            title: "Успение Пресвятой Богородицы",
            glass: "Глас 1",
            audio: "f12VtY0yQKqM8fN8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8VvZ8Vv",
            text: "В рождестве́ де́вство сохрани́ла еси́, / во успе́нии ми́ра не оста́вила еси́ Богоро́дице, / преста́вилася еси́ к животу́, Ма́ти су́щи Живота́: / и моли́твами Твои́ми избавля́еши от сме́рти ду́ши на́ша.",
            tips: [
                "Противопоставление: сохранила девство в рождении → не оставила мир в успении",
                "Переход к жизни: 'преставилася еси к животу' - смерть как переход к истинной жизни",
                "Роль заступницы: 'молитвами Твоими избавляеши' - продолжающееся действие"
            ]
        }
    ]
};

// Конвертация ID в URL Google Drive
function getDriveUrl(fileId) {
    if (!fileId || fileId.length < 10) return '';
    return `https://docs.google.com/uc?export=download&id=${fileId}`;
}

// Текущее состояние приложения
let currentState = {
    category: 'resurrection',
    currentTropar: null,
    currentLevel: 0,
    isPlaying: false,
    audioPlayer: null,
    hiddenWords: new Set(),
    randomMode: false
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadTroparList();
});

function initializeApp() {
    // Инициализация аудио плеера
    currentState.audioPlayer = document.getElementById('audio-player');
    
    // Инициализация слайдера сложности
    const slider = document.getElementById('custom-slider');
    const sliderValue = document.getElementById('slider-value');
    
    slider.addEventListener('input', function() {
        const value = this.value;
        sliderValue.textContent = value + '%';
        setDifficultyLevel(parseInt(value));
    });

    // Обработчики событий аудио
    currentState.audioPlayer.addEventListener('timeupdate', updateAudioProgress);
    currentState.audioPlayer.addEventListener('ended', onAudioEnded);
    currentState.audioPlayer.addEventListener('loadedmetadata', updateAudioDuration);
}

function setupEventListeners() {
    // Навигационные вкладки
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.dataset.category;
            switchCategory(category);
        });
    });

    // Кнопки сложности
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const level = parseInt(this.dataset.level);
            setDifficultyLevel(level);
            
            // Обновление активной кнопки
            document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Обновление слайдера
            document.getElementById('custom-slider').value = level;
            document.getElementById('slider-value').textContent = level + '%';
        });
    });
}

function switchCategory(category) {
    // Обновление активной вкладки
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');

    currentState.category = category;
    
    if (category === 'random') {
        startRandomTropar();
    } else {
        loadTroparList();
    }
}

function loadTroparList() {
    const listContainer = document.getElementById('tropar-list');
    const tropheys = troparData[currentState.category];
    
    listContainer.innerHTML = '';
    
    tropheys.forEach(tropar => {
        const card = createTroparCard(tropar);
        listContainer.appendChild(card);
    });
}

function createTroparCard(tropar) {
    const card = document.createElement('div');
    card.className = 'tropar-card fade-in';
    
    card.innerHTML = `
        <div class="tropar-title">${tropar.title}</div>
        <div class="tropar-glass">
            <i class="fas fa-music"></i>
            <span>${tropar.glass}</span>
        </div>
        <div class="tropar-preview">${getTextPreview(tropar.text)}</div>
        <button class="play-button" onclick="playAudioPreview('${tropar.id}')" title="Прослушать">
            <i class="fas fa-play"></i>
        </button>
    `;
    
    card.addEventListener('click', function(e) {
        if (!e.target.closest('.play-button')) {
            startTraining(tropar);
        }
    });
    
    return card;
}

function getTextPreview(text) {
    // Убираем слэши и возвращаем первые 150 символов
    const cleanText = text.replace(/\//g, ' ').replace(/\s+/g, ' ').trim();
    return cleanText.substring(0, 150) + (cleanText.length > 150 ? '...' : '');
}

function startTraining(tropar) {
    currentState.currentTropar = tropar;
    currentState.currentLevel = 0;
    
    // Переключение экранов
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('training-screen').classList.remove('hidden');
    
    // Обновление информации о тропаре
    document.getElementById('current-tropar-title').textContent = tropar.title;
    document.getElementById('current-tropar-glass').innerHTML = `
        <i class="fas fa-music"></i>
        <span>${tropar.glass}</span>
    `;
    
    // Загрузка аудио
    const audioUrl = getDriveUrl(tropar.audio);
    if (audioUrl) {
        currentState.audioPlayer.src = audioUrl;
    }
    
    // Загрузка советов по запоминанию
    loadMemoryTips(tropar.tips);
    
    // Отображение текста
    displayTroparText(0);
    
    // Сброс кнопки воспроизведения
    updatePlayButton();
}

function loadMemoryTips(tips) {
    const tipsList = document.getElementById('memory-tips-list');
    tipsList.innerHTML = '';
    
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

function displayTroparText(level) {
    const display = document.getElementById('tropar-text-display');
    const text = currentState.currentTropar.text;
    
    display.classList.remove('loading');
    
    if (level === 0) {
        // Показать полный текст без переносов
        const cleanText = text.replace(/\//g, ' ').replace(/\s+/g, ' ').trim();
        display.innerHTML = cleanText;
        return;
    }
    
    if (level === 100) {
        // Показать только первые буквы
        const words = text.split(/\s+/);
        const processed = words.map(word => {
            const cleanWord = word.replace(/[.,!?;:]/g, '');
            if (cleanWord.length === 0) return word;
            
            return `<span class="first-letter">${word[0]}</span><span class="hidden-word">${word.substring(1)}</span>`;
        });
        
        display.innerHTML = processed.join(' ');
        return;
    }
    
    // Случайное скрытие слов
    const words = text.split(/\s+/);
    const processed = words.map(word => {
        const cleanWord = word.replace(/[.,!?;:]/g, '');
        if (cleanWord.length === 0) return word;
        
        if (Math.random() * 100 < level) {
            return `<span class="hidden-word">${word}</span>`;
        }
        return word;
    });
    
    display.innerHTML = processed.join(' ');
}

function setDifficultyLevel(level) {
    currentState.currentLevel = level;
    displayTroparText(level);
}

function regenerateText() {
    // Перемешать слова и показать с текущим уровнем сложности
    displayTroparText(currentState.currentLevel);
}

function showFullText() {
    setDifficultyLevel(0);
    
    // Сбросить активные кнопки сложности
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('[data-level="0"]').classList.add('active');
    
    // Обновить слайдер
    document.getElementById('custom-slider').value = 0;
    document.getElementById('slider-value').textContent = '0%';
}

function resetTraining() {
    // Остановить аудио
    if (currentState.audioPlayer) {
        currentState.audioPlayer.pause();
        currentState.audioPlayer.currentTime = 0;
    }
    
    // Переключиться на главный экран
    document.getElementById('training-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');
    
    // Сбросить состояние
    currentState.currentTropar = null;
    currentState.currentLevel = 0;
    currentState.isPlaying = false;
}

function backToList() {
    resetTraining();
}

// Аудио функции
function toggleAudio() {
    if (!currentState.audioPlayer.src) return;
    
    if (currentState.isPlaying) {
        currentState.audioPlayer.pause();
        currentState.isPlaying = false;
    } else {
        currentState.audioPlayer.play().catch(error => {
            console.error('Ошибка воспроизведения аудио:', error);
            alert('Не удалось загрузить аудио файл. Проверьте соединение с интернетом.');
        });
        currentState.isPlaying = true;
    }
    
    updatePlayButton();
}

function updatePlayButton() {
    const playBtn = document.getElementById('play-btn');
    const icon = playBtn.querySelector('i');
    
    if (currentState.isPlaying) {
        icon.className = 'fas fa-pause';
    } else {
        icon.className = 'fas fa-play';
    }
}

function onAudioEnded() {
    currentState.isPlaying = false;
    updatePlayButton();
}

function updateAudioProgress() {
    const progressBar = document.getElementById('audio-progress-bar');
    const timeDisplay = document.getElementById('audio-time');
    
    if (currentState.audioPlayer.duration) {
        const progress = (currentState.audioPlayer.currentTime / currentState.audioPlayer.duration) * 100;
        progressBar.style.width = progress + '%';
        
        const currentTime = formatTime(currentState.audioPlayer.currentTime);
        const duration = formatTime(currentState.audioPlayer.duration);
        timeDisplay.textContent = `${currentTime} / ${duration}`;
    }
}

function updateAudioDuration() {
    updateAudioProgress();
}

function seekAudio(event) {
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    
    if (currentState.audioPlayer.duration) {
        currentState.audioPlayer.currentTime = percentage * currentState.audioPlayer.duration;
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function playAudioPreview(troparId) {
    // Найти тропарь по ID
    let tropar = null;
    for (const category in troparData) {
        tropar = troparData[category].find(t => t.id === troparId);
        if (tropar) break;
    }
    
    if (tropar && tropar.audio) {
        const audioUrl = getDriveUrl(tropar.audio);
        if (audioUrl) {
            // Создать временный аудио элемент для предпрослушивания
            const tempAudio = new Audio(audioUrl);
            tempAudio.volume = 0.3; // Уменьшить громкость для предпрослушивания
            tempAudio.play().catch(error => {
                console.error('Ошибка предпрослушивания:', error);
            });
            
            // Остановить через 3 секунды
            setTimeout(() => {
                tempAudio.pause();
                tempAudio.currentTime = 0;
            }, 3000);
        }
    }
}

function startRandomTropar() {
    const allTropheys = [...troparData.resurrection, ...troparData.feasts];
    const randomTropar = allTropheys[Math.floor(Math.random() * allTropheys.length)];
    startTraining(randomTropar);
}

// Экспорт функций для глобального использования
window.startTraining = startTraining;
window.backToList = backToList;
window.setDifficultyLevel = setDifficultyLevel;
window.regenerateText = regenerateText;
window.showFullText = showFullText;
window.resetTraining = resetTraining;
window.toggleAudio = toggleAudio;
window.seekAudio = seekAudio;
window.playAudioPreview = playAudioPreview;
window.startRandomTropar = startRandomTropar;