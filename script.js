// ===== ДАНІ ФОРМУЛ (оригінал + вписане/описане коло) =====
const data = {
rectangle:[
{title:'Площа',formula:'S = a × b',svg:'<rect x="40" y="55" width="220" height="110" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="150" y="178" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">a</text><text x="22" y="115" text-anchor="middle" font-size="15" fill="#00a0c0" font-weight="bold">b</text><text x="150" y="115" text-anchor="middle" font-size="13" fill="#1a3e7c" opacity="0.4">S</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'}]},
{title:'Периметр',formula:'P = 2(a + b)',svg:'<rect x="40" y="55" width="220" height="110" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="150" y="178" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">a</text><text x="22" y="115" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">b</text><text x="260" y="115" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">b</text><text x="150" y="42" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'P',m:'Периметр'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'}]},
{title:'Діагональ',formula:'d = √(a² + b²)',svg:'<rect x="40" y="55" width="220" height="110" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="40" y1="165" x2="260" y2="55" stroke="#ff6b6b" stroke-width="2.5"/><text x="145" y="120" font-size="15" fill="#ff6b6b" font-weight="bold">d</text><text x="150" y="185" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="22" y="115" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">b</text>',symbols:[{s:'d',m:'Діагональ'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'}]}
],
rhombus:[
{title:'Площа (діагоналі)',formula:'S = ½ × d₁ × d₂',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="15" x2="150" y2="185" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><line x1="15" y1="100" x2="285" y2="100" stroke="#00a0c0" stroke-width="2" stroke-dasharray="6,4"/><circle cx="150" cy="100" r="4" fill="#1a3e7c"/><text x="162" y="65" font-size="14" fill="#ff6b6b" font-weight="bold">d₁</text><text x="200" y="95" font-size="14" fill="#00a0c0" font-weight="bold">d₂</text>',symbols:[{s:'S',m:'Площа'},{s:'d₁',m:'Вертикальна діагональ'},{s:'d₂',m:'Горизонтальна діагональ'}]},
{title:'Площа (через кут)',formula:'S = a² × sin(α)',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="80" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="80" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><path d="M35,100 Q50,80 65,100" fill="none" stroke="#00a0c0" stroke-width="2"/><text x="52" y="98" font-size="13" fill="#00a0c0" font-weight="bold">α</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Сторона'},{s:'α',m:'Гострий кут'}]},
{title:'Периметр',formula:'P = 4 × a',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="80" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="62" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="80" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="215" y="148" font-size="14" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'P',m:'Периметр'},{s:'a',m:'Сторона'}]},
{title:'Висота',formula:'h = a × sin(α)',svg:'<polygon points="150,15 285,100 150,185 15,100" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="15" x2="150" y2="185" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,4"/><text x="162" y="100" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="80" y="62" font-size="14" fill="#1a3e7c" font-weight="bold">a</text>',symbols:[{s:'h',m:'Висота'},{s:'a',m:'Сторона'},{s:'α',m:'Кут'}]}
],
parallelogram:[
{title:'Площа',formula:'S = a × h',svg:'<polygon points="60,160 230,160 270,50 100,50" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="230" y1="160" x2="230" y2="50" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,4"/><rect x="226" y="50" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="242" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="145" y="182" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="58" y="115" font-size="13" fill="#00a0c0" font-weight="bold">b</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Основа'},{s:'h',m:'Висота'}]},
{title:'Площа (через кут)',formula:'S = a × b × sin(α)',svg:'<polygon points="60,160 230,160 270,50 100,50" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="145" y="182" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="58" y="108" font-size="14" fill="#00a0c0" font-weight="bold">b</text><path d="M80,160 Q95,145 85,130" fill="none" stroke="#9c27b0" stroke-width="2"/><text x="95" y="152" font-size="13" fill="#9c27b0" font-weight="bold">α</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Основа'},{s:'b',m:'Бічна сторона'},{s:'α',m:'Кут між сторонами'}]},
{title:'Периметр',formula:'P = 2(a + b)',svg:'<polygon points="60,160 230,160 270,50 100,50" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="145" y="182" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="58" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">b</text><text x="185" y="38" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="258" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">b</text>',symbols:[{s:'P',m:'Периметр'},{s:'a',m:'Основа'},{s:'b',m:'Бічна сторона'}]}
],
trapezoid:[
{title:'Площа',formula:'S = ½ × (a + b) × h',svg:'<polygon points="40,160 260,160 210,50 90,50" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="50" x2="150" y2="160" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="6,4"/><rect x="146" y="152" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="162" y="112" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="150" y="182" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="150" y="40" text-anchor="middle" font-size="14" fill="#00a0c0" font-weight="bold">b</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Нижня основа'},{s:'b',m:'Верхня основа'},{s:'h',m:'Висота'}]},
{title:'Середня лінія',formula:'m = (a + b) / 2',svg:'<polygon points="40,160 260,160 210,60 90,60" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="110" x2="235" y2="110" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="7,4"/><text x="150" y="182" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text><text x="150" y="48" text-anchor="middle" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="245" y="114" font-size="14" fill="#ff6b6b" font-weight="bold">m</text>',symbols:[{s:'m',m:'Середня лінія'},{s:'a',m:'Нижня основа'},{s:'b',m:'Верхня основа'}]},
{title:'Периметр',formula:'P = a + b + c + d',svg:'<polygon points="40,160 260,160 210,60 90,60" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="150" y="182" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="150" y="48" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">b</text><text x="52" y="115" font-size="14" fill="#ff6b6b" font-weight="bold">c</text><text x="245" y="115" font-size="14" fill="#ff6b6b" font-weight="bold">d</text>',symbols:[{s:'P',m:'Периметр'},{s:'a,b',m:'Основи'},{s:'c,d',m:'Бічні сторони'}]}
],
circle:[
{title:'Площа',formula:'S = π × r²',svg:'<circle cx="150" cy="105" r="85" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="105" x2="235" y2="105" stroke="#ff6b6b" stroke-width="2.5"/><circle cx="150" cy="105" r="4" fill="#1a3e7c"/><text x="193" y="95" font-size="15" fill="#ff6b6b" font-weight="bold">r</text>',symbols:[{s:'S',m:'Площа'},{s:'π',m:'Число пі ≈ 3.14159'},{s:'r',m:'Радіус'}]},
{title:'Довжина кола',formula:'C = 2 × π × r',svg:'<circle cx="150" cy="105" r="85" fill="none" stroke="#ff6b6b" stroke-width="3.5"/><line x1="150" y1="105" x2="235" y2="105" stroke="#1a3e7c" stroke-width="2"/><circle cx="150" cy="105" r="4" fill="#1a3e7c"/><text x="193" y="95" font-size="15" fill="#1a3e7c" font-weight="bold">r</text>',symbols:[{s:'C',m:'Довжина кола'},{s:'π',m:'Число пі'},{s:'r',m:'Радіус'}]},
{title:'Діаметр',formula:'D = 2 × r',svg:'<circle cx="150" cy="105" r="85" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="105" x2="235" y2="105" stroke="#ff6b6b" stroke-width="2.5"/><circle cx="150" cy="105" r="4" fill="#1a3e7c"/><text x="150" y="132" text-anchor="middle" font-size="15" fill="#ff6b6b" font-weight="bold">D</text><text x="193" y="95" font-size="14" fill="#1a3e7c" font-weight="bold">r</text>',symbols:[{s:'D',m:'Діаметр'},{s:'r',m:'Радіус'}]},
{title:'Вписане коло',formula:'r = S / p',svg:'<polygon points="150,18 38,178 262,178" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><circle cx="150" cy="122" r="56" fill="rgba(255,152,0,0.12)" stroke="#ff9800" stroke-width="2.5"/><line x1="150" y1="122" x2="150" y2="178" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="5,4"/><circle cx="150" cy="122" r="4" fill="#ff6b6b"/><rect x="146" y="170" width="8" height="8" fill="none" stroke="#888" stroke-width="1.5"/><text x="162" y="155" font-size="14" fill="#ff6b6b" font-weight="bold">r</text><text x="32" y="196" font-size="14" fill="#1a3e7c" font-weight="bold">A</text><text x="258" y="196" font-size="14" fill="#1a3e7c" font-weight="bold">B</text><text x="143" y="12" font-size="14" fill="#1a3e7c" font-weight="bold">C</text>',symbols:[{s:'r',m:'Радіус вписаного кола'},{s:'S',m:'Площа трикутника'},{s:'p',m:'Півпериметр (a+b+c)/2'}]},
{title:'Описане коло',formula:'R = abc / (4S)',svg:'<circle cx="150" cy="100" r="88" fill="#eef4ff" stroke="#ff9800" stroke-width="2.5"/><polygon points="150,12 62,144 238,144" fill="rgba(255,255,255,0.8)" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="100" x2="238" y2="144" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="5,4"/><circle cx="150" cy="100" r="4" fill="#ff6b6b"/><text x="200" y="118" font-size="14" fill="#ff6b6b" font-weight="bold">R</text><text x="143" y="7" font-size="14" fill="#1a3e7c" font-weight="bold">C</text><text x="46" y="160" font-size="14" fill="#1a3e7c" font-weight="bold">A</text><text x="240" y="160" font-size="14" fill="#1a3e7c" font-weight="bold">B</text>',symbols:[{s:'R',m:'Радіус описаного кола'},{s:'a,b,c',m:'Сторони трикутника'},{s:'S',m:'Площа трикутника'}]}
],
triangle:[
{title:'Площа (основа × висота)',formula:'S = ½ × a × h',svg:'<polygon points="70,165 250,165 140,30" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="140" y1="30" x2="140" y2="165" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><rect x="136" y="157" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="152" y="105" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="160" y="185" text-anchor="middle" font-size="14" fill="#1a3e7c" font-weight="bold">a</text>',symbols:[{s:'S',m:'Площа'},{s:'a',m:'Основа'},{s:'h',m:'Висота'}]},
{title:'Площа (через синус)',formula:'S = ½ × a × b × sin(C)',svg:'<polygon points="50,170 250,170 170,35" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="150" y="190" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="112" y="100" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="218" y="105" font-size="14" fill="#9c27b0" font-weight="bold">c</text><path d="M170,35 Q185,55 175,70" fill="none" stroke="#ff9800" stroke-width="2"/><text x="183" y="60" font-size="13" fill="#ff9800" font-weight="bold">C</text>',symbols:[{s:'S',m:'Площа'},{s:'a,b',m:'Дві сторони що утворюють кут'},{s:'C',m:'Кут між цими сторонами'}]},
{title:'Площа Герона',formula:'S = √(p(p−a)(p−b)(p−c))',svg:'<polygon points="50,165 250,165 160,35" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="150" y="185" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="95" y="108" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="215" y="108" font-size="14" fill="#9c27b0" font-weight="bold">c</text><text x="150" y="140" text-anchor="middle" font-size="12" fill="#1a3e7c" opacity="0.5">p=(a+b+c)/2</text>',symbols:[{s:'S',m:'Площа'},{s:'p',m:'Півпериметр'},{s:'a,b,c',m:'Три сторони'}]},
{title:'Периметр',formula:'P = a + b + c',svg:'<polygon points="50,165 250,165 160,35" fill="none" stroke="#ff6b6b" stroke-width="3"/><text x="150" y="185" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="88" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">b</text><text x="215" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">c</text>',symbols:[{s:'P',m:'Периметр'},{s:'a,b,c',m:'Три сторони'}]},
{title:'Теорема синусів',formula:'a/sin(A) = b/sin(B) = c/sin(C)',svg:'<polygon points="50,175 255,175 155,30" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="152" y="195" text-anchor="middle" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="108" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="82" y="108" font-size="14" fill="#9c27b0" font-weight="bold">c</text><path d="M50,175 Q73,158 70,142" fill="none" stroke="#ff6b6b" stroke-width="2"/><text x="28" y="172" font-size="13" fill="#ff6b6b" font-weight="bold">A</text><path d="M255,175 Q234,158 230,142" fill="none" stroke="#9c27b0" stroke-width="2"/><text x="258" y="172" font-size="13" fill="#9c27b0" font-weight="bold">C</text><path d="M155,30 Q163,50 174,56" fill="none" stroke="#00a0c0" stroke-width="2"/><text x="148" y="20" font-size="13" fill="#00a0c0" font-weight="bold">B</text>',symbols:[{s:'a',m:'Сторона BC — навпроти кута A'},{s:'b',m:'Сторона AC — навпроти кута B'},{s:'c',m:'Сторона AB — навпроти кута C'},{s:'A,B,C',m:'Кути трикутника'}]},
{title:'Теорема косинусів',formula:'c² = a² + b² − 2ab·cos(C)',svg:'<polygon points="50,175 240,175 155,40" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><text x="145" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="88" y="115" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="208" y="115" font-size="14" fill="#9c27b0" font-weight="bold">c</text><path d="M155,40 Q168,62 163,75" fill="none" stroke="#ff9800" stroke-width="2"/><text x="170" y="68" font-size="13" fill="#ff9800" font-weight="bold">C</text><text x="30" y="195" font-size="13" fill="#ff6b6b" font-weight="bold">A</text><text x="242" y="195" font-size="13" fill="#9c27b0" font-weight="bold">B</text><text x="148" y="28" font-size="13" fill="#ff9800" font-weight="bold">C</text>',symbols:[{s:'a',m:'Основа (навпроти кута A)'},{s:'b',m:'Сторона AC'},{s:'c',m:'Сторона BC'},{s:'C',m:'Кут між сторонами b і c'}]}
],
cube:[
{title:'Обʼєм',formula:'V = a³',svg:'<line x1="50" y1="60" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="160" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="60" x2="160" y2="60" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="50,60 160,60 160,170 50,170" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="50,60 90,25 200,25 160,60" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="160,60 200,25 200,135 160,170" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="90" y1="25" x2="90" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="200" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="103" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="210" y="85" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="138" y="50" font-size="14" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'a',m:'Ребро куба'}]},
{title:'Площа поверхні',formula:'S = 6 × a²',svg:'<line x1="50" y1="60" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="160" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="60" x2="160" y2="60" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="50,60 160,60 160,170 50,170" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="50,60 90,25 200,25 160,60" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="160,60 200,25 200,135 160,170" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="90" y1="25" x2="90" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="200" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="103" y="195" text-anchor="middle" font-size="13" fill="#1a3e7c">6 граней</text><text x="210" y="85" font-size="14" fill="#ff6b6b" font-weight="bold">a</text>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'a',m:'Ребро куба'},{s:'6',m:'Кількість граней'}]},
{title:'Діагональ куба',formula:'d = a√3',svg:'<line x1="50" y1="60" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="160" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="60" x2="160" y2="60" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="50,60 160,60 160,170 50,170" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="50,60 90,25 200,25 160,60" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="160,60 200,25 200,135 160,170" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="90" y1="25" x2="90" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="200" y2="135" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="90" y1="135" x2="50" y2="170" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="50" y1="170" x2="200" y2="25" stroke="#ff6b6b" stroke-width="2.5"/><text x="115" y="120" font-size="14" fill="#ff6b6b" font-weight="bold">d</text><text x="210" y="85" font-size="14" fill="#1a3e7c" font-weight="bold">a</text>',symbols:[{s:'d',m:'Діагональ куба'},{s:'a',m:'Ребро куба'}]}
],
parallelepiped:[
{title:'Обʼєм',formula:'V = a × b × c',svg:'<line x1="25" y1="75" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="155" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="75" x2="155" y2="75" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="25,75 155,75 155,175 25,175" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="25,75 65,40 215,40 155,75" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="155,75 215,40 215,140 155,175" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="40" x2="65" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="215" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="90" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="15" y="130" text-anchor="end" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="95" font-size="14" fill="#9c27b0" font-weight="bold">c</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'},{s:'c',m:'Висота'}]},
{title:'Площа поверхні',formula:'S = 2(ab + bc + ac)',svg:'<line x1="25" y1="75" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="155" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="75" x2="155" y2="75" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="25,75 155,75 155,175 25,175" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="25,75 65,40 215,40 155,75" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="155,75 215,40 215,140 155,175" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="40" x2="65" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="215" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><text x="90" y="195" text-anchor="middle" font-size="14" fill="#ff6b6b" font-weight="bold">a</text><text x="15" y="130" text-anchor="end" font-size="14" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="95" font-size="14" fill="#9c27b0" font-weight="bold">c</text>',symbols:[{s:'S',m:'Площа поверхні'},{s:'a',m:'Довжина'},{s:'b',m:'Ширина'},{s:'c',m:'Висота'}]},
{title:'Діагональ',formula:'d = √(a² + b² + c²)',svg:'<line x1="25" y1="75" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="155" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="75" x2="155" y2="75" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><polygon points="25,75 155,75 155,175 25,175" fill="#ddeeff" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="25,75 65,40 215,40 155,75" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><polygon points="155,75 215,40 215,140 155,175" fill="#b8cce8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="65" y1="40" x2="65" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="215" y2="140" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="65" y1="140" x2="25" y2="175" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="25" y1="175" x2="215" y2="40" stroke="#ff6b6b" stroke-width="2.5"/><text x="108" y="125" font-size="14" fill="#ff6b6b" font-weight="bold">d</text><text x="90" y="195" text-anchor="middle" font-size="13" fill="#1a3e7c" font-weight="bold">a</text><text x="15" y="130" text-anchor="end" font-size="13" fill="#00a0c0" font-weight="bold">b</text><text x="222" y="95" font-size="13" fill="#9c27b0" font-weight="bold">c</text>',symbols:[{s:'d',m:'Просторова діагональ'},{s:'a,b,c',m:'Три виміри'}]}
],
cylinder:[
{title:'Обʼєм',formula:'V = π × r² × h',svg:'<ellipse cx="150" cy="55" rx="75" ry="22" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><rect x="75" y="55" width="150" height="120" fill="#ddeeff" stroke="none"/><ellipse cx="150" cy="175" rx="75" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="75" y1="55" x2="75" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="225" y1="55" x2="225" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="55" x2="225" y2="55" stroke="#ff6b6b" stroke-width="2.5"/><line x1="235" y1="55" x2="235" y2="175" stroke="#00a0c0" stroke-width="2" stroke-dasharray="6,4"/><text x="190" y="44" font-size="14" fill="#ff6b6b" font-weight="bold">r</text><text x="245" y="118" font-size="14" fill="#00a0c0" font-weight="bold">h</text><line x1="233" y1="55" x2="237" y2="55" stroke="#00a0c0" stroke-width="2"/><line x1="233" y1="175" x2="237" y2="175" stroke="#00a0c0" stroke-width="2"/>',symbols:[{s:'V',m:'Обʼєм'},{s:'r',m:'Радіус основи'},{s:'h',m:'Висота'}]},
{title:'Площа поверхні',formula:'S = 2π × r(h + r)',svg:'<ellipse cx="150" cy="55" rx="75" ry="22" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><rect x="75" y="55" width="150" height="120" fill="#ddeeff" stroke="none"/><ellipse cx="150" cy="175" rx="75" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="75" y1="55" x2="75" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="225" y1="55" x2="225" y2="175" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="55" x2="225" y2="55" stroke="#ff6b6b" stroke-width="2.5"/><text x="190" y="44" font-size="14" fill="#ff6b6b" font-weight="bold">r</text><text x="238" y="118" font-size="14" fill="#00a0c0" font-weight="bold">h</text><line x1="235" y1="55" x2="235" y2="175" stroke="#00a0c0" stroke-width="2" stroke-dasharray="6,4"/>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'r',m:'Радіус основи'},{s:'h',m:'Висота'}]}
],
cone:[
{title:'Обʼєм',formula:'V = ⅓ × π × r² × h',svg:'<ellipse cx="150" cy="168" rx="80" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="70" y2="168" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="230" y2="168" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="150" y2="168" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><line x1="150" y1="168" x2="230" y2="168" stroke="#00a0c0" stroke-width="2.5"/><rect x="146" y="164" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="162" y="105" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="192" y="162" font-size="14" fill="#00a0c0" font-weight="bold">r</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'r',m:'Радіус основи'},{s:'h',m:'Висота'}]},
{title:'Площа поверхні',formula:'S = π × r(l + r)',svg:'<ellipse cx="150" cy="168" rx="80" ry="22" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="70" y2="168" stroke="#1a3e7c" stroke-width="2.5"/><line x1="150" y1="25" x2="230" y2="168" stroke="#ff6b6b" stroke-width="2.5"/><line x1="150" y1="168" x2="230" y2="168" stroke="#00a0c0" stroke-width="2.5"/><text x="200" y="95" font-size="14" fill="#ff6b6b" font-weight="bold">l</text><text x="192" y="162" font-size="14" fill="#00a0c0" font-weight="bold">r</text>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'r',m:'Радіус основи'},{s:'l',m:'Твірна (бічна висота)'}]}
],
pyramid:[
{title:'Обʼєм',formula:'V = ⅓ × S_осн × h',svg:'<polygon points="80,185 220,185 260,155 120,155" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="120" y2="155" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="220" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="260" y1="155" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="120" y1="155" x2="150" y2="35" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="150" y1="35" x2="150" y2="170" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><rect x="146" y="162" width="8" height="8" fill="none" stroke="#ff6b6b" stroke-width="1.5"/><text x="162" y="110" font-size="14" fill="#ff6b6b" font-weight="bold">h</text><text x="148" y="200" text-anchor="middle" font-size="13" fill="#1a3e7c" font-weight="bold">a</text><text x="145" y="28" font-size="13" fill="#1a3e7c" font-weight="bold">S</text>',symbols:[{s:'V',m:'Обʼєм'},{s:'S_осн',m:'Площа основи'},{s:'h',m:'Висота піраміди'}]},
{title:'Площа бічної поверхні',formula:'S_бік = ½ × P × l',svg:'<polygon points="80,185 220,185 260,155 120,155" fill="#c8dcf8" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="120" y2="155" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="220" y1="185" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="260" y1="155" x2="150" y2="35" stroke="#1a3e7c" stroke-width="2.5"/><line x1="120" y1="155" x2="150" y2="35" stroke="#5577aa" stroke-width="1.8" stroke-dasharray="6,4"/><line x1="150" y1="35" x2="150" y2="185" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="6,4"/><text x="158" y="125" font-size="14" fill="#ff6b6b" font-weight="bold">l</text><text x="148" y="200" text-anchor="middle" font-size="13" fill="#1a3e7c" font-weight="bold">P</text>',symbols:[{s:'S_бік',m:'Площа бічної поверхні'},{s:'P',m:'Периметр основи'},{s:'l',m:'Апофема — висота бічної грані'}]},
{title:'Повна площа',formula:'S = S_осн + S_бік',svg:'<polygon points="80,185 220,185 260,155 120,155" fill="#eef4ff" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="120" y2="155" stroke="#1a3e7c" stroke-width="2.5"/><line x1="80" y1="185" x2="150" y2="35" stroke="#ff6b6b" stroke-width="2.5"/><line x1="220" y1="185" x2="150" y2="35" stroke="#ff6b6b" stroke-width="2.5"/><line x1="260" y1="155" x2="150" y2="35" stroke="#ff6b6b" stroke-width="2.5"/><line x1="120" y1="155" x2="150" y2="35" stroke="#ff6b6b" stroke-width="1.8" stroke-dasharray="6,4"/><text x="78" y="175" font-size="12" fill="#ff6b6b" font-weight="bold">S_бік</text><text x="155" y="178" font-size="12" fill="#00a0c0" font-weight="bold">S_осн</text>',symbols:[{s:'S',m:'Повна площа поверхні'},{s:'S_осн',m:'Площа основи'},{s:'S_бік',m:'Площа бічної поверхні'}]}
]
};

const categoryNames={rectangle:'Прямокутник',rhombus:'Ромб',parallelogram:'Паралелограм',trapezoid:'Трапеція',circle:'Коло',triangle:'Трикутник',cube:'Куб',parallelepiped:'Паралелепіпед',cylinder:'Циліндр',cone:'Конус',pyramid:'Піраміда'};

// ===== НАВ (оригінал) =====
function show(sec){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.getElementById(sec).classList.add('active');
  document.getElementById('category-row').style.display='none';
  if(sec==='tasks') loadRandomTask();
  if(sec==='trig') buildTrigTable();
  if(sec==='quiz' && document.getElementById('quiz-area').innerHTML==='') startQuiz();
  window.scrollTo({top:0,behavior:'smooth'});
}
function showFormulas(){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.getElementById('category-row').style.display='flex';
  window.scrollTo({top:0,behavior:'smooth'});
}
function showGraph(){
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.getElementById('graph').classList.add('active');
  document.getElementById('category-row').style.display='none';
  // Open notebook by default
  const nb=document.getElementById('ws-notebook');
  if(!nb.classList.contains('open')){nb.classList.add('open');const btn=document.getElementById('wt-notebook');if(btn)btn.classList.add('active');}
  requestAnimationFrame(()=>requestAnimationFrame(initOrResizeCanvas));
}
function wsToggleNotebook(){
  const nb=document.getElementById('ws-notebook');
  nb.classList.toggle('open');
  const btn=document.getElementById('wt-notebook');
  if(btn) btn.classList.toggle('active',nb.classList.contains('open'));
  // ResizeObserver handles canvas resize automatically
}

// ===== МОДАЛКИ ФОРМУЛ (оригінал) =====
function showCategory(cat){
  document.getElementById('category-title').textContent=categoryNames[cat];
  const cont=document.getElementById('modal-formulas');
  cont.innerHTML='';
  data[cat].forEach((f,i)=>{
    const d=document.createElement('div');
    d.className='formula-in-modal-item';
    d.innerHTML=`<div class="formula-in-modal-title">${f.title}</div><div class="formula-in-modal-expr">${f.formula}</div>`;
    d.onclick=()=>openFormula(cat,i);
    cont.appendChild(d);
  });
  document.getElementById('category-modal').classList.add('active');
}
function closeCategoryModal(){document.getElementById('category-modal').classList.remove('active');}
function openFormula(cat,idx){
  const f=data[cat][idx];
  document.getElementById('title').textContent=categoryNames[cat]+' — '+f.title;
  document.getElementById('display').textContent=f.formula;
  document.getElementById('svg').innerHTML=f.svg;
  document.getElementById('table').innerHTML=f.symbols.map(s=>`<tr><td><strong>${s.s}</strong></td><td>${s.m}</td></tr>`).join('');
  document.getElementById('modal').classList.add('active');
}
function closeModal(){document.getElementById('modal').classList.remove('active');}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeCategoryModal();wsCalcClose();}});

// ===== ГРАФ+РОБОЧИЙ СТІЛ ENGINE =====
let canvas, ctx, scale=50, offsetX=0, offsetY=0;
let graphInited=false;
let functions=[];
let panning=false, startDX, startDY;

// workspace objects
let wsObjs=[], wsSelId=null, wsNextId=1;
let wsDrag=false, wsDragOX=0, wsDragOY=0;
let wsCurrentShape=null;
const WS_PALETTE=['#1a3e7c','#ff4d6d','#00c896','#ff9800','#9c27b0','#00d4ff','#795548'];

function initOrResizeCanvas(){
  canvas=document.getElementById('graph-canvas');
  if(!canvas) return;
  const wrapper=document.getElementById('canvas-wrapper');
  canvas.width=wrapper.clientWidth;
  canvas.height=wrapper.clientHeight;
  ctx=canvas.getContext('2d');

  if(!graphInited){
    offsetX=canvas.width/2;
    offsetY=canvas.height/2;
    graphInited=true;
    functions=[{expr:'sin(x)',color:'#1a3e7c'}];
    renderFunctionList();
    wsLoadState();

    // Auto-resize canvas whenever the wrapper changes size (notebook open/close, window resize)
    new ResizeObserver(()=>{
      const w=wrapper.clientWidth, h=wrapper.clientHeight;
      if(w>0 && h>0 && (canvas.width!==w || canvas.height!==h)){
        canvas.width=w; canvas.height=h;
        draw();
      }
    }).observe(wrapper);

    // zoom
    canvas.addEventListener('wheel',e=>{
      e.preventDefault();
      const factor=e.deltaY<0?1.12:0.88;
      const mx=e.offsetX, my=e.offsetY;
      offsetX=mx+(offsetX-mx)*factor;
      offsetY=my+(offsetY-my)*factor;
      scale*=factor;
      draw();
    },{passive:false});

    // pan + select
    canvas.addEventListener('mousedown',e=>{
      const wx=(e.offsetX-offsetX)/scale, wy=(offsetY-e.offsetY)/scale;
      // hit test objects (back to front)
      let hit=null;
      for(let i=wsObjs.length-1;i>=0;i--){
        if(wsObjHit(wsObjs[i],wx,wy)){hit=wsObjs[i];break;}
      }
      if(hit){
        wsSelId=hit.id; wsDrag=true;
        wsDragOX=wx-hit.x; wsDragOY=wy-hit.y;
        wsShowProps(hit);
      } else {
        wsSelId=null; wsCloseProps();
        panning=true; startDX=e.clientX; startDY=e.clientY;
        canvas.style.cursor='grabbing';
      }
      draw();
    });
    window.addEventListener('mouseup',()=>{
      if(wsDrag) wsSave();
      wsDrag=false; panning=false;
      canvas.style.cursor='default';
    });
    canvas.addEventListener('mousemove',e=>{
      if(panning){
        offsetX+=e.clientX-startDX; offsetY+=e.clientY-startDY;
        startDX=e.clientX; startDY=e.clientY;
        draw(); return;
      }
      if(wsDrag&&wsSelId!==null){
        const wx=(e.offsetX-offsetX)/scale, wy=(offsetY-e.offsetY)/scale;
        const o=wsObjs.find(o=>o.id===wsSelId);
        if(o){o.x=wx-wsDragOX; o.y=wy-wsDragOY; draw();}
        return;
      }
      const x=(e.offsetX-offsetX)/scale;
      const y=(offsetY-e.offsetY)/scale;
      document.getElementById('canvas-info').textContent=`x: ${x.toFixed(3)} | y: ${y.toFixed(3)}`;
    });
    canvas.addEventListener('dblclick',e=>{
      const wx=(e.offsetX-offsetX)/scale, wy=(offsetY-e.offsetY)/scale;
      for(let i=wsObjs.length-1;i>=0;i--){
        if(wsObjs[i].type==='note'&&wsObjHit(wsObjs[i],wx,wy)){
          wsInlineEdit(wsObjs[i],e.clientX,e.clientY);return;
        }
      }
    });
    canvas.addEventListener('contextmenu',e=>e.preventDefault());
    window.addEventListener('resize',()=>{
      canvas.width=wrapper.clientWidth;
      canvas.height=wrapper.clientHeight;
      draw();
    });
  }
  draw();
}

// ─── DRAW ───
function draw(){
  if(!canvas||!ctx) return;
  drawGrid();
  wsObjs.forEach(o=>{ctx.save();wsDrawObj(o);ctx.restore();});
}

function drawGrid(){
  const w=canvas.width,h=canvas.height;
  ctx.clearRect(0,0,w,h);
  const dark=document.body.classList.contains('dark');
  const gridMinor = dark ? '#2a3a50' : '#e8eef5';
  const gridMajor = dark ? '#1e3a5a' : '#d4dfe9';
  const axisColor = dark ? '#7aa0c8' : '#334';
  const numColor  = dark ? '#aac4e0' : '#555';
  const bgColor   = dark ? '#1a1a2e' : '#fff';

  ctx.fillStyle=bgColor;
  ctx.fillRect(0,0,w,h);

  let step=scale;
  while(step<30) step*=2;
  while(step>120) step/=2;

  // minor grid
  ctx.strokeStyle=gridMinor;ctx.lineWidth=0.8;
  for(let x=offsetX%step;x<w;x+=step){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(let y=offsetY%step;y<h;y+=step){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}

  // secondary grid
  if(step!==scale){
    ctx.strokeStyle=gridMajor;ctx.lineWidth=0.5;
    for(let x=offsetX%scale;x<w;x+=scale){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(let y=offsetY%scale;y<h;y+=scale){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  }

  // axes
  ctx.strokeStyle=axisColor;ctx.lineWidth=2;
  ctx.beginPath();ctx.moveTo(0,offsetY);ctx.lineTo(w,offsetY);ctx.stroke();
  ctx.beginPath();ctx.moveTo(offsetX,0);ctx.lineTo(offsetX,h);ctx.stroke();

  // arrows
  ctx.fillStyle=axisColor;
  ctx.beginPath();ctx.moveTo(w-8,offsetY-5);ctx.lineTo(w,offsetY);ctx.lineTo(w-8,offsetY+5);ctx.fill();
  ctx.beginPath();ctx.moveTo(offsetX-5,8);ctx.lineTo(offsetX,0);ctx.lineTo(offsetX+5,8);ctx.fill();

  // numbers
  ctx.fillStyle=numColor;ctx.font='11px Fira Code,monospace';
  const unit=step/scale;
  ctx.textAlign='center';ctx.textBaseline='top';
  for(let x=offsetX%step-step;x<w+step;x+=step){
    const val=Math.round((x-offsetX)/scale/unit)*unit;
    if(Math.abs(val)<0.0001) continue;
    if(x>5&&x<w-15){
      ctx.beginPath();ctx.moveTo(x,offsetY-4);ctx.lineTo(x,offsetY+4);ctx.strokeStyle=axisColor;ctx.lineWidth=1.5;ctx.stroke();
      ctx.fillStyle=numColor;ctx.fillText(Number.isInteger(val)?val:val.toFixed(1),x,offsetY+6);
    }
  }
  ctx.textAlign='right';ctx.textBaseline='middle';
  for(let y=offsetY%step-step;y<h+step;y+=step){
    const val=Math.round((offsetY-y)/scale/unit)*unit;
    if(Math.abs(val)<0.0001) continue;
    if(y>5&&y<h-5){
      ctx.beginPath();ctx.moveTo(offsetX-4,y);ctx.lineTo(offsetX+4,y);ctx.strokeStyle=axisColor;ctx.lineWidth=1.5;ctx.stroke();
      ctx.fillStyle=numColor;ctx.fillText(Number.isInteger(val)?val:val.toFixed(1),offsetX-7,y);
    }
  }
  ctx.fillStyle='#888';ctx.textAlign='right';ctx.textBaseline='top';ctx.fillText('0',offsetX-4,offsetY+4);
  ctx.fillStyle='#334';ctx.font='bold 13px Fira Code,monospace';
  ctx.textAlign='center';ctx.textBaseline='bottom';ctx.fillText('x',w-4,offsetY-6);
  ctx.textAlign='left';ctx.textBaseline='top';ctx.fillText('y',offsetX+8,4);

  // draw functions
  functions.forEach(f=>{
    const expr=parseExpr(f.expr);
    let fn; try{fn=new Function('x',`"use strict"; const ctg=t=>1/Math.tan(t); return ${expr};`);}catch{return;}
    ctx.beginPath();ctx.strokeStyle=f.color;ctx.lineWidth=2.5;ctx.lineJoin='round';
    let prevY=null,prevValid=false;
    for(let px=0;px<=w;px++){
      const x=(px-offsetX)/scale;
      let y; try{y=fn(x);}catch{prevValid=false;continue;}
      if(!isFinite(y)||isNaN(y)){prevValid=false;ctx.stroke();ctx.beginPath();prevY=null;continue;}
      const py=offsetY-y*scale;
      if(prevValid&&Math.abs(py-(offsetY-prevY*scale))>h*1.5){ctx.stroke();ctx.beginPath();prevValid=false;}
      if(py<-h||py>2*h){prevValid=false;ctx.stroke();ctx.beginPath();prevY=null;continue;}
      if(!prevValid)ctx.moveTo(px,py); else ctx.lineTo(px,py);
      prevY=y;prevValid=true;
    }
    ctx.stroke();
  });
}

// ─── WORKSPACE OBJECTS ───
function wsScreenXY(wx,wy){return{sx:offsetX+wx*scale, sy:offsetY-wy*scale};}

function wsDrawObj(o){
  const sel=o.id===wsSelId;
  const {sx,sy}=wsScreenXY(o.x,o.y);
  const S=scale;
  ctx.strokeStyle=o.color||'#1a3e7c';
  ctx.fillStyle=(o.color||'#1a3e7c')+'33';
  ctx.lineWidth=sel?2.5:1.8;
  if(sel){ctx.shadowColor='#00d4ff';ctx.shadowBlur=10;}

  if(o.type==='circle'){
    ctx.beginPath();ctx.arc(sx,sy,o.r*S,0,Math.PI*2);ctx.fill();ctx.stroke();
    ctx.setLineDash([4,5]);ctx.strokeStyle=(o.color||'#1a3e7c')+'99';
    ctx.beginPath();ctx.moveTo(sx,sy);ctx.lineTo(sx+o.r*S,sy);ctx.stroke();
    ctx.setLineDash([]);
  } else if(o.type==='rectangle'){
    ctx.beginPath();ctx.rect(sx-o.a*S/2,sy-o.b*S/2,o.a*S,o.b*S);ctx.fill();ctx.stroke();
  } else if(o.type==='square'){
    ctx.beginPath();ctx.rect(sx-o.a*S/2,sy-o.a*S/2,o.a*S,o.a*S);ctx.fill();ctx.stroke();
  } else if(o.type==='triangle'){
    const a=o.a*S,b=o.b*S,c=o.c*S;
    const Ax=sx-a/2,Ay=sy+a*0.35;
    const Bx=sx+a/2,By=Ay;
    const cosA=(a*a+b*b-c*c)/(2*a*b);
    const sinA=Math.sqrt(Math.max(0,1-cosA*cosA));
    const Cx=Ax+b*cosA,Cy=Ay-b*sinA;
    ctx.beginPath();ctx.moveTo(Ax,Ay);ctx.lineTo(Bx,By);ctx.lineTo(Cx,Cy);ctx.closePath();ctx.fill();ctx.stroke();
  } else if(o.type==='rhombus'){
    const d1=o.d1*S/2,d2=o.d2*S/2;
    ctx.beginPath();ctx.moveTo(sx,sy-d2);ctx.lineTo(sx+d1,sy);ctx.lineTo(sx,sy+d2);ctx.lineTo(sx-d1,sy);ctx.closePath();ctx.fill();ctx.stroke();
  } else if(o.type==='trapezoid'){
    const a=o.a*S,b=o.b*S,hh=o.h*S,off=(a-b)/2;
    ctx.beginPath();ctx.moveTo(sx-a/2,sy+hh/2);ctx.lineTo(sx+a/2,sy+hh/2);ctx.lineTo(sx+a/2-off,sy-hh/2);ctx.lineTo(sx-a/2+off,sy-hh/2);ctx.closePath();ctx.fill();ctx.stroke();
  } else if(o.type==='note'){
    const nw=Math.max(120,(o.fontSize||13)*o.text.length*0.6+24);
    const nh=(o.fontSize||13)+20;
    ctx.shadowBlur=0;
    // прозорий фон або кольоровий якщо вибрано
    if(o.color&&o.color!=='transparent'){
      ctx.fillStyle=o.color;
      ctx.globalAlpha=0.75;
      ctx.beginPath();ctx.roundRect(sx-nw/2,sy-nh/2,nw,nh,6);ctx.fill();
      ctx.globalAlpha=1;
    }
    if(sel){
      ctx.strokeStyle='#00d4ff';ctx.lineWidth=2;
      ctx.beginPath();ctx.roundRect(sx-nw/2,sy-nh/2,nw,nh,6);ctx.stroke();
    }
    ctx.fillStyle=o.textColor||'#1a3e7c';
    ctx.font=`${o.bold?'bold ':''}${o.fontSize||13}px Roboto,sans-serif`;
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(o.text,sx,sy);
  }

  ctx.shadowBlur=0;
  if(sel) wsDrawHandles(o);
}

function wsGetBBoxScreen(o){
  const {sx,sy}=wsScreenXY(o.x,o.y);const S=scale;
  if(o.type==='circle') return{x:sx-o.r*S,y:sy-o.r*S,w:o.r*S*2,h:o.r*S*2};
  if(o.type==='rectangle') return{x:sx-o.a*S/2,y:sy-o.b*S/2,w:o.a*S,h:o.b*S};
  if(o.type==='square') return{x:sx-o.a*S/2,y:sy-o.a*S/2,w:o.a*S,h:o.a*S};
  if(o.type==='triangle'){const a=o.a*S;return{x:sx-a/2,y:sy-a*0.7,w:a,h:a};}
  if(o.type==='rhombus') return{x:sx-o.d1*S/2,y:sy-o.d2*S/2,w:o.d1*S,h:o.d2*S};
  if(o.type==='trapezoid') return{x:sx-o.a*S/2,y:sy-o.h*S/2,w:o.a*S,h:o.h*S};
  if(o.type==='note'){const nw=150,nh=50;return{x:sx-nw/2,y:sy-nh/2,w:nw,h:nh};}
  return null;
}
function wsObjHit(o,wx,wy){
  const {sx,sy}=wsScreenXY(wx,wy);
  const bb=wsGetBBoxScreen(o);if(!bb) return false;
  return sx>=bb.x-6&&sx<=bb.x+bb.w+6&&sy>=bb.y-6&&sy<=bb.y+bb.h+6;
}
function wsDrawHandles(o){
  const bb=wsGetBBoxScreen(o);if(!bb)return;
  [[bb.x,bb.y],[bb.x+bb.w,bb.y],[bb.x,bb.y+bb.h],[bb.x+bb.w,bb.y+bb.h]].forEach(([hx,hy])=>{
    ctx.fillStyle='#fff';ctx.strokeStyle='#00d4ff';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(hx,hy,5,0,Math.PI*2);ctx.fill();ctx.stroke();
  });
}

// ─── TOOLBAR ───
function wsTool(t){
  document.querySelectorAll('.ws-tbtn').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('wt-'+t);if(el) el.classList.add('active');
}
function wsToggleSide(panel){
  const side=document.getElementById('ws-side');
  const pf=document.getElementById('ws-panel-func');
  const ps=document.getElementById('ws-panel-shape');
  const isSame=(panel==='func'&&!pf.hidden&&side.classList.contains('open'))||
               (panel==='shape'&&!ps.hidden&&side.classList.contains('open'));
  if(isSame){side.classList.remove('open');wsTool('select');return;}
  side.classList.add('open');
  pf.style.display=panel==='func'?'block':'none';
  ps.style.display=panel==='shape'?'block':'none';
  document.querySelectorAll('.ws-tbtn').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('wt-'+panel);if(btn) btn.classList.add('active');
}

// ─── FUNCTIONS ───
function addFunction(){
  const colors=['#1a3e7c','#ff6b6b','#00a844','#ff9800','#9C27B0','#00d4ff'];
  functions.push({expr:'x^2',color:colors[functions.length%colors.length]});
  renderFunctionList();draw();
}
function removeFunction(i){functions.splice(i,1);renderFunctionList();draw();}
function clearAllFunctions(){functions=[];renderFunctionList();draw();wsSave();}
function renderFunctionList(){
  const list=document.getElementById('ws-func-list');
  list.innerHTML='';
  functions.forEach((f,i)=>{
    const div=document.createElement('div');
    div.className='function-item';div.style.borderLeftColor=f.color;
    div.draggable=true;
    div.title='Перетягни у зошит';
    div.addEventListener('dragstart',e=>{
      e.dataTransfer.setData('text/plain',`y = ${f.expr}`);
      e.dataTransfer.setData('application/nb-formula',`y = ${f.expr}`);
      e.dataTransfer.effectAllowed='copy';
      div.style.opacity='0.6';
      const W=160,H=90,mc=document.createElement('canvas');
      mc.width=W;mc.height=H;mc.style.cssText='position:fixed;left:-9999px;top:-9999px;';
      document.body.appendChild(mc);
      const mx=mc.getContext('2d');
      mx.fillStyle='#1a3e7c';mx.fillRect(0,0,W,H);
      mx.strokeStyle='#2a5090';mx.lineWidth=0.5;
      for(let x=0;x<=W;x+=20){mx.beginPath();mx.moveTo(x,0);mx.lineTo(x,H);mx.stroke();}
      for(let y=0;y<=H;y+=20){mx.beginPath();mx.moveTo(0,y);mx.lineTo(W,y);mx.stroke();}
      mx.strokeStyle='rgba(255,255,255,0.25)';mx.lineWidth=1.2;
      mx.beginPath();mx.moveTo(0,H/2);mx.lineTo(W,H/2);mx.stroke();
      mx.beginPath();mx.moveTo(W/2,0);mx.lineTo(W/2,H);mx.stroke();
      const sc=W/12,expr=parseExpr(f.expr);
      mx.strokeStyle=f.color;mx.lineWidth=2.5;mx.beginPath();
      let started=false;
      for(let px=0;px<W;px++){
        const wx=(px-W/2)/sc;
        try{const wy=Function('x','"use strict";return ('+expr+')')(wx);
          if(!isFinite(wy)){started=false;continue;}
          const py=H/2-wy*sc;
          if(!started){mx.moveTo(px,py);started=true;}else{mx.lineTo(px,py);}
        }catch(err){started=false;}
      }
      mx.stroke();
      mx.fillStyle='rgba(255,255,255,0.9)';mx.font='bold 11px monospace';
      mx.fillText('y = '+f.expr,6,H-8);
      e.dataTransfer.setDragImage(mc,W/2,H/2);
      setTimeout(()=>mc.remove(),0);
    });
    div.addEventListener('dragend',()=>{div.style.opacity='1';});
    div.innerHTML=`<div class="function-item-top">
      <span style="cursor:grab;color:#b3d9ff;font-size:14px;flex-shrink:0;" title="Перетягни у зошит">⠿</span>
      <input class="function-input" value="${f.expr}" oninput="updateFunc(${i},this.value)" title="Функція від x" placeholder="напр. sin(x)">
      <input type="color" value="${f.color}" onchange="updateColor(${i},this.value)" style="width:28px;height:28px;border:none;cursor:pointer;border-radius:4px;padding:2px;flex-shrink:0;">
      <button class="func-remove" onclick="removeFunction(${i})" title="Видалити">✕</button>
    </div>`;
    list.appendChild(div);
  });
}
function updateFunc(i,v){functions[i].expr=v;draw();}
function updateColor(i,v){functions[i].color=v;draw();}

// ─── SHAPE FORM ───
const wsShapeDefs={
  circle:[{k:'r',l:'Радіус r (одиниці)',def:2}],
  rectangle:[{k:'a',l:'Ширина a',def:4},{k:'b',l:'Висота b',def:3}],
  square:[{k:'a',l:'Сторона a',def:3}],
  triangle:[{k:'a',l:'Основа a',def:4},{k:'b',l:'Сторона b',def:3},{k:'c',l:'Сторона c',def:3}],
  rhombus:[{k:'d1',l:'Діагональ d₁',def:4},{k:'d2',l:'Діагональ d₂',def:3}],
  trapezoid:[{k:'a',l:'Нижня основа a',def:5},{k:'b',l:'Верхня основа b',def:3},{k:'h',l:'Висота h',def:2}]
};
const wsShapeNames={circle:'Коло',rectangle:'Прямокутник',square:'Квадрат',triangle:'Трикутник',rhombus:'Ромб',trapezoid:'Трапеція'};

function wsShapeForm(type){
  wsCurrentShape=type;
  document.getElementById('ws-shape-list').style.display='none';
  document.getElementById('ws-shape-form').style.display='block';
  document.getElementById('ws-form-fields').innerHTML=wsShapeDefs[type].map(f=>
    `<div class="ws-shape-field"><label>${f.l}</label><input type="number" id="wsp-${f.k}" value="${f.def}" min="0.1" step="0.5"></div>`
  ).join('');
}
function wsBackToList(){
  document.getElementById('ws-shape-list').style.display='block';
  document.getElementById('ws-shape-form').style.display='none';
}
function wspV(k){const el=document.getElementById('wsp-'+k);return el?parseFloat(el.value)||1:1;}
function wsPlaceShape(){
  const color=document.getElementById('ws-shape-color').value;
  const type=wsCurrentShape;
  // place at center of current view
  const cx=(canvas.width/2-offsetX)/scale;
  const cy=(offsetY-canvas.height/2)/scale;
  const o={id:wsNextId++,type,color,x:cx,y:cy};
  if(type==='circle') o.r=wspV('r');
  if(type==='rectangle'){o.a=wspV('a');o.b=wspV('b');}
  if(type==='square') o.a=wspV('a');
  if(type==='triangle'){o.a=wspV('a');o.b=wspV('b');o.c=wspV('c');}
  if(type==='rhombus'){o.d1=wspV('d1');o.d2=wspV('d2');}
  if(type==='trapezoid'){o.a=wspV('a');o.b=wspV('b');o.h=wspV('h');}
  wsObjs.push(o);wsSelId=o.id;
  draw();wsShowProps(o);wsSave();
  // закрити бічну панель
  wsBackToList();
  document.getElementById('ws-side').classList.remove('open');
  wsTool('select');
}

// ─── NOTES ───
function wsAddNote(){
  const cx=(canvas.width/2-offsetX)/scale;
  const cy=(offsetY-canvas.height/2)/scale;
  wsObjs.push({id:wsNextId++,type:'note',x:cx,y:cy,text:'Нотатка...',color:'#fffde7'});
  draw();wsSave();wsTool('select');
}

// ─── DELETE ───
function wsDelete(){
  if(wsSelId===null)return;
  wsObjs=wsObjs.filter(o=>o.id!==wsSelId);
  wsSelId=null;wsCloseProps();draw();wsSave();
}

function wsInlineEdit(o,cx,cy){
  const existing=document.getElementById('ws-inline-input');
  if(existing) existing.remove();
  const inp=document.createElement('input');
  inp.id='ws-inline-input';
  inp.value=o.text;
  inp.style.cssText=`position:fixed;left:${cx-80}px;top:${cy-16}px;width:200px;padding:6px 10px;font-size:${o.fontSize||13}px;font-family:Roboto,sans-serif;border:2px solid #00d4ff;border-radius:8px;background:#fff;color:#1a3e7c;box-shadow:0 4px 16px rgba(0,0,0,0.18);z-index:9999;outline:none;`;
  document.body.appendChild(inp);
  inp.focus();inp.select();
  const finish=()=>{o.text=inp.value||o.text;inp.remove();draw();wsSave();};
  inp.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='Escape')finish();});
  inp.addEventListener('blur',finish);
}

// ─── PROPS PANEL ───
function wsCloseProps(){
  document.getElementById('ws-props').classList.remove('open');
  wsSelId=null;draw();
}
function wsShowProps(o){
  document.getElementById('ws-props').classList.add('open');
  document.getElementById('ws-props-title').textContent=wsShapeNames[o.type]||'Нотатка';
  const body=document.getElementById('ws-props-body');
  if(o.type==='note'){
    body.innerHTML=`
      <div class="ws-prop-lbl">Текст</div>
      <input value="${o.text.replace(/"/g,'&quot;')}" oninput="wsPropNoteText(${o.id},this.value)" style="width:100%;padding:7px 9px;border-radius:7px;border:1.5px solid #b3d9ff;font-size:13px;margin-bottom:6px;box-sizing:border-box;">
      <div class="ws-prop-lbl">Розмір шрифту</div>
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <input type="range" min="10" max="36" value="${o.fontSize||13}" oninput="wsPropNote(${o.id},'fontSize',+this.value);document.getElementById('nfs${o.id}').textContent=this.value+'px'" style="flex:1;">
        <span id="nfs${o.id}" style="font-size:12px;color:#6a8ab0;min-width:32px;">${o.fontSize||13}px</span>
      </div>
      <div class="ws-prop-lbl">Колір тексту</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
        ${['#1a3e7c','#000','#fff','#ff4d6d','#ff9800','#00a0c0'].map(c=>`<div class="ws-cdot" style="background:${c};border:2px solid #b3d9ff;" onclick="wsPropNote(${o.id},'textColor','${c}')"></div>`).join('')}
        <input type="color" value="${o.textColor||'#1a3e7c'}" onchange="wsPropNote(${o.id},'textColor',this.value)" style="width:22px;height:22px;border-radius:50%;border:2px solid #b3d9ff;cursor:pointer;padding:0;">
      </div>
      <div class="ws-prop-lbl">Фон нотатки</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:6px;">
        <div class="ws-cdot" style="background:transparent;border:2px dashed #b3d9ff;" onclick="wsPropNote(${o.id},'color','transparent')" title="Прозорий"></div>
        ${['#fffde7','#e8f5e9','#e3f2fd','#fce4ec','#f3e5f5'].map(c=>`<div class="ws-cdot" style="background:${c};" onclick="wsPropNote(${o.id},'color','${c}')"></div>`).join('')}
      </div>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:#6a8ab0;margin-bottom:10px;">
        <input type="checkbox" ${o.bold?'checked':''} onchange="wsPropNote(${o.id},'bold',this.checked)"> Жирний текст
      </label>
      <button class="ws-prop-delbtn" onclick="wsDelete()">🗑 Видалити</button>`;
    return;
  }
  const info=wsCalcInfo(o);
  // size controls per shape type
  const sizeControls=wsGetSizeControls(o);
  body.innerHTML=`<div class="ws-prop-lbl">Колір</div>
    <div class="ws-color-row" style="margin-bottom:8px;">${WS_PALETTE.map(c=>`<div class="ws-cdot" style="background:${c};" onclick="wsPropColor(${o.id},'${c}')"></div>`).join('')}
      <input type="color" value="${o.color}" onchange="wsPropColor(${o.id},this.value)" style="width:22px;height:22px;border-radius:50%;border:2px solid #b3d9ff;cursor:pointer;padding:0;" title="Будь-який колір"></div>
    <div class="ws-prop-lbl" style="margin-top:4px;">Розмір</div>
    ${sizeControls}
    <div class="ws-prop-lbl" style="margin-top:8px;">Обчислення</div>
    <div class="ws-prop-calc">${info.calcs.join('<br>')}</div>
    <button class="ws-prop-delbtn" onclick="wsDelete()">🗑 Видалити</button>`;
}
function wsPropColor(id,c){const o=wsObjs.find(o=>o.id===id);if(o){o.color=c;draw();wsSave();wsShowProps(o);}}
function wsPropNote(id,key,val){const o=wsObjs.find(o=>o.id===id);if(o){o[key]=val;draw();wsSave();}}
function wsPropNoteText(id,val){const o=wsObjs.find(o=>o.id===id);if(o){o.text=val;draw();wsSave();}}

function wsGetSizeControls(o){
  const sl=(key,label,min,max,val)=>`<div style="display:flex;align-items:center;gap:8px;margin-bottom:5px;">
    <span style="font-size:11px;color:#6a8ab0;min-width:40px;">${label}</span>
    <input type="number" min="${min}" max="${max}" step="0.1" value="${Math.round(val*10)/10}" oninput="wsPropSize(${o.id},'${key}',+this.value)" style="flex:1;padding:5px 8px;border:1.5px solid #b3d9ff;border-radius:6px;font-family:'Fira Code',monospace;font-size:13px;outline:none;">
  </div>`;
  if(o.type==='circle') return sl('r','r',0.1,50,o.r);
  if(o.type==='rectangle') return sl('a','a',0.1,50,o.a)+sl('b','b',0.1,50,o.b);
  if(o.type==='square') return sl('a','a',0.1,50,o.a);
  if(o.type==='triangle') return sl('a','a',0.1,50,o.a)+sl('b','b',0.1,50,o.b)+sl('c','c',0.1,50,o.c);
  if(o.type==='rhombus') return sl('d1','d₁',0.1,50,o.d1)+sl('d2','d₂',0.1,50,o.d2);
  if(o.type==='trapezoid') return sl('a','a',0.1,50,o.a)+sl('b','b',0.1,50,o.b)+sl('h','h',0.1,50,o.h);
  return '';
}
function wsPropSize(id,key,val){
  const o=wsObjs.find(o=>o.id===id);
  if(!o)return;
  o[key]=val;
  // оновити обчислення в панелі
  const info=wsCalcInfo(o);
  const el=document.querySelector('.ws-prop-calc');
  if(el) el.innerHTML=info.calcs.join('<br>');
  draw();wsSave();
}

function wsCalcInfo(o){
  const R=v=>Math.round(v*100)/100;
  if(o.type==='circle'){const r=o.r;return{params:[{l:'Радіус r',v:r+' од.'}],calcs:['S = πr² = '+R(Math.PI*r*r)+' од²','C = 2πr = '+R(2*Math.PI*r)+' од','D = '+R(2*r)+' од']};}
  if(o.type==='rectangle'){const{a,b}=o;return{params:[{l:'Ширина a',v:a+' од.'},{l:'Висота b',v:b+' од.'}],calcs:['S = '+R(a*b)+' од²','P = '+R(2*(a+b))+' од','d = '+R(Math.sqrt(a*a+b*b))+' од']};}
  if(o.type==='square'){const{a}=o;return{params:[{l:'Сторона a',v:a+' од.'}],calcs:['S = '+R(a*a)+' од²','P = '+R(4*a)+' од','d = '+R(a*Math.SQRT2)+' од']};}
  if(o.type==='triangle'){const{a,b,c}=o;const p=(a+b+c)/2;const S=Math.sqrt(Math.max(0,p*(p-a)*(p-b)*(p-c)));return{params:[{l:'a',v:a+' од.'},{l:'b',v:b+' од.'},{l:'c',v:c+' од.'}],calcs:['P = '+R(a+b+c)+' од','S = '+R(S)+' од²']};}
  if(o.type==='rhombus'){const{d1,d2}=o;const a=Math.sqrt((d1/2)**2+(d2/2)**2);return{params:[{l:'d₁',v:d1+' од.'},{l:'d₂',v:d2+' од.'}],calcs:['S = '+R(d1*d2/2)+' од²','P = '+R(4*a)+' од']};}
  if(o.type==='trapezoid'){const{a,b,h}=o;return{params:[{l:'a',v:a+' од.'},{l:'b',v:b+' од.'},{l:'h',v:h+' од.'}],calcs:['S = '+R((a+b)*h/2)+' од²','m = '+R((a+b)/2)+' од']};}
  return{params:[],calcs:[]};
}

// ─── SAVE/LOAD ───
function wsSave(){try{localStorage.setItem('mhws_v3',JSON.stringify({wsObjs,wsNextId,functions}));}catch{}}
function wsLoadState(){
  try{
    const d=localStorage.getItem('mhws_v3');if(!d)return;
    const p=JSON.parse(d);
    wsObjs=p.wsObjs||[];wsNextId=p.wsNextId||1;
    if(p.functions&&p.functions.length) functions=p.functions;
  }catch{}
  renderFunctionList();
}

// ─── RESET / AUTO ───
function resetView(){scale=50;offsetX=canvas.width/2;offsetY=canvas.height/2;draw();}
function autoScale(){scale=canvas.width/20;offsetX=canvas.width/2;offsetY=canvas.height/2;draw();}

// ─── EXPRESSION PARSER ───
function parseExpr(expr){
  return expr.replace(/\^/g,'**').replace(/\bsin\b/g,'Math.sin').replace(/\bcos\b/g,'Math.cos')
    .replace(/\btg\b/g,'Math.tan').replace(/\btan\b/g,'Math.tan')
    .replace(/\blog\b/g,'Math.log10').replace(/\bln\b/g,'Math.log')
    .replace(/\bsqrt\b/g,'Math.sqrt').replace(/\babs\b/g,'Math.abs')
    .replace(/\bπ\b/g,'Math.PI').replace(/\bpi\b/g,'Math.PI').replace(/\be\b/g,'Math.E');
}

// ===== КАЛЬКУЛЯТОР =====
let ccExpr='';
let ccFreshResult=false; // after = next digit starts fresh

function wsCalcOpen(){document.getElementById('ws-calc').classList.toggle('open');}
function wsCalcClose(){document.getElementById('ws-calc').classList.remove('open');}

function ccUpdateDisplay(){
  document.getElementById('cc-res').textContent=ccExpr||'0';
}
function ccIn(v){
  // If fresh result and user pressed an operator — continue from result
  const isOperator = ['+','-','*','/','%'].includes(v);
  if(ccFreshResult){
    if(!isOperator) ccExpr=''; // digit/dot/paren → start fresh
    ccFreshResult=false;
    document.getElementById('cc-expr').textContent='';
  }
  ccExpr+=v;
  ccUpdateDisplay();
}
function ccFn(v){
  if(ccFreshResult) ccFreshResult=false;
  ccExpr+=v;
  ccUpdateDisplay();
}
function ccClear(){
  ccExpr='';ccFreshResult=false;
  document.getElementById('cc-expr').textContent='';
  document.getElementById('cc-res').textContent='0';
}
function ccBack(){
  if(ccFreshResult){ccClear();return;}
  ccExpr=ccExpr.slice(0,-1);
  ccUpdateDisplay();
}
function ccEval(){
  try{
    const raw=ccExpr.replace(/\^/g,'**');
    const res=Function('"use strict";return ('+raw+')')();
    document.getElementById('cc-expr').textContent=ccExpr+' =';
    document.getElementById('cc-res').textContent=isFinite(res)?Math.round(res*1e10)/1e10:'Помилка';
    ccExpr=isFinite(res)?String(Math.round(res*1e10)/1e10):'';
    ccFreshResult=true;
  }catch{
    document.getElementById('cc-expr').textContent='';
    document.getElementById('cc-res').textContent='Помилка';
    ccExpr='';ccFreshResult=true;
  }
}

// ===== ЗАДАЧІ (оригінал) =====
// Random integer between min and max inclusive
function ri(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function round2(x){return Math.round(x*100)/100;}

// Task generators — return {q, answer, steps} with random values
const taskGens=[
  ()=>{const a=ri(2,15),b=ri(2,15);return{q:`Знайдіть площу прямокутника зі сторонами a = ${a} см і b = ${b} см.`,answer:String(a*b),steps:[`Формула: S = a × b`,`S = ${a} × ${b} = ${a*b} см²`]};},
  ()=>{const a=ri(3,12),b=ri(3,12),p=2*(a+b);return{q:`Периметр прямокутника дорівнює ${p} см, одна сторона ${a} см. Знайдіть другу.`,answer:String(b),steps:[`Формула: P = 2(a + b)`,`${p} = 2(${a} + b) → ${p/2} = ${a} + b`,`b = ${b} см`]};},
  ()=>{const r=ri(2,10),s=round2(3.14*r*r);return{q:`Знайдіть площу кола з радіусом r = ${r} см. (π ≈ 3.14)`,answer:String(s),steps:[`Формула: S = π × r²`,`S = 3.14 × ${r}² = 3.14 × ${r*r} = ${s} см²`]};},
  ()=>{const r=ri(2,9),c=round2(2*3.14*r);return{q:`Знайдіть довжину кола з радіусом r = ${r} см. (π ≈ 3.14)`,answer:String(c),steps:[`Формула: C = 2 × π × r`,`C = 2 × 3.14 × ${r} = ${c} см`]};},
  ()=>{const a=ri(4,16),h=ri(2,10),s=round2(a*h/2);return{q:`Основа трикутника a = ${a} см, висота h = ${h} см. Знайдіть площу.`,answer:String(s),steps:[`Формула: S = ½ × a × h`,`S = ½ × ${a} × ${h} = ${s} см²`]};},
  ()=>{const a=ri(2,10),b=ri(2,10),c=ri(2,10),p=a+b+c;return{q:`Трикутник має сторони a = ${a} см, b = ${b} см, c = ${c} см. Знайдіть периметр.`,answer:String(p),steps:[`Формула: P = a + b + c`,`P = ${a} + ${b} + ${c} = ${p} см`]};},
  ()=>{const a=ri(2,8),v=a*a*a;return{q:`Знайдіть об'єм куба з ребром a = ${a} см.`,answer:String(v),steps:[`Формула: V = a³`,`V = ${a}³ = ${v} см³`]};},
  ()=>{const a=ri(2,8),s=6*a*a;return{q:`Знайдіть площу поверхні куба з ребром a = ${a} см.`,answer:String(s),steps:[`Формула: S = 6 × a²`,`S = 6 × ${a}² = 6 × ${a*a} = ${s} см²`]};},
  ()=>{const a=ri(2,10),sq=a*a,s=a*a;return{q:`Сторона квадрата дорівнює ${a} см. Знайдіть його площу.`,answer:String(s),steps:[`Формула: S = a²`,`S = ${a}² = ${s} см²`]};},
  ()=>{const a=ri(2,10),p=4*a;return{q:`Сторона квадрата дорівнює ${a} см. Знайдіть його периметр.`,answer:String(p),steps:[`Формула: P = 4 × a`,`P = 4 × ${a} = ${p} см`]};},
  ()=>{const r=ri(2,9),h=ri(3,12),v=round2(3.14*r*r*h);return{q:`Знайдіть об'єм циліндра з радіусом r = ${r} см і висотою h = ${h} см. (π ≈ 3.14)`,answer:String(v),steps:[`Формула: V = π × r² × h`,`V = 3.14 × ${r}² × ${h} = 3.14 × ${r*r} × ${h} = ${v} см³`]};},
  ()=>{const a=ri(3,12),b=ri(3,12),h=ri(2,8),s=round2((a+b)*h/2);return{q:`Знайдіть площу трапеції з основами a = ${a} см, b = ${b} см і висотою h = ${h} см.`,answer:String(s),steps:[`Формула: S = (a + b) / 2 × h`,`S = (${a} + ${b}) / 2 × ${h} = ${(a+b)/2} × ${h} = ${s} см²`]};},
  ()=>{const d1=ri(4,14),d2=ri(4,14),s=round2(d1*d2/2);return{q:`Знайдіть площу ромба з діагоналями d₁ = ${d1} см і d₂ = ${d2} см.`,answer:String(s),steps:[`Формула: S = (d₁ × d₂) / 2`,`S = (${d1} × ${d2}) / 2 = ${d1*d2} / 2 = ${s} см²`]};},
  ()=>{const a=ri(2,8),h=ri(3,10),s=round2(a*h);return{q:`Знайдіть площу паралелограма з основою a = ${a} см і висотою h = ${h} см.`,answer:String(s),steps:[`Формула: S = a × h`,`S = ${a} × ${h} = ${s} см²`]};},
  ()=>{const r=ri(2,8),h=ri(3,12),v=round2(3.14*r*r*h/3);return{q:`Знайдіть об'єм конуса з радіусом r = ${r} см і висотою h = ${h} см. (π ≈ 3.14)`,answer:String(v),steps:[`Формула: V = ⅓ × π × r² × h`,`V = 3.14 × ${r}² × ${h} / 3 = ${round2(3.14*r*r*h)} / 3 = ${v} см³`]};},
  ()=>{const a=ri(2,8),h=ri(3,10),v=round2(a*a*h/3);return{q:`Знайдіть об'єм піраміди з квадратною основою a = ${a} см і висотою h = ${h} см.`,answer:String(v),steps:[`Формула: V = ⅓ × a² × h`,`V = ${a}² × ${h} / 3 = ${a*a*h} / 3 = ${v} см³`]};},
  ()=>{const a=ri(3,12),b=ri(3,12),c=ri(3,12),s=a+b+c,r=a+b+c;return{q:`Знайдіть периметр трикутника зі сторонами ${a} см, ${b} см і ${c} см.`,answer:String(r),steps:[`P = ${a} + ${b} + ${c} = ${r} см`]};},
  ()=>{const r=ri(2,10),d=2*r;return{q:`Радіус кола дорівнює ${r} см. Знайдіть діаметр.`,answer:String(d),steps:[`Формула: d = 2 × r`,`d = 2 × ${r} = ${d} см`]};},
  ()=>{const a=ri(2,8),b=ri(2,8),d=round2(Math.sqrt(a*a+b*b));if(!Number.isInteger(d))return{q:`Знайдіть діагональ прямокутника зі сторонами ${a} см і ${b} см. (відповідь округли до 2 знаків)`,answer:String(d),steps:[`Формула: d = √(a² + b²)`,`d = √(${a}² + ${b}²) = √(${a*a} + ${b*b}) = √${a*a+b*b} ≈ ${d} см`]};return{q:`Знайдіть діагональ прямокутника зі сторонами ${a} см і ${b} см.`,answer:String(d),steps:[`Формула: d = √(a² + b²)`,`d = √(${a*a} + ${b*b}) = √${a*a+b*b} = ${d} см`]};},
  ()=>{const a=ri(2,8),b=ri(2,8),p=2*(a+b),s=a*b;return{q:`Прямокутник має сторони ${a} см і ${b} см. Знайдіть його периметр.`,answer:String(p),steps:[`Формула: P = 2(a + b)`,`P = 2 × (${a} + ${b}) = 2 × ${a+b} = ${p} см`]};},
];

// Build initial task pool — generate one instance of each generator
function buildTasks(){return taskGens.map(g=>g());}
const tasks=buildTasks();
// Shuffle array (Fisher-Yates)
function shuffleArr(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

let taskPool=[];
let taskIndex=0;
let taskCount=0;

function loadRandomTask(){
  // Rebuild with fresh random values when pool exhausted
  if(taskIndex>=taskPool.length){
    taskPool=shuffleArr(taskGens.map(g=>g()));
    taskIndex=0;
  }
  const t=taskPool[taskIndex++];
  taskCount++;
  const id='task_'+Date.now();
  document.getElementById('tasks-list').innerHTML=`
    <div class="task-progress">Задача #${taskCount} — ${taskGens.length} різних типів, нові числа щоразу</div>
    <div class="task-card" id="${id}">
      <div class="task-question">📝 ${t.q}</div>
      <input type="text" class="answer-input" id="user-answer" placeholder="Введіть числову відповідь" onkeydown="if(event.key==='Enter')checkAnswer(this,'${t.answer}','${id}')">
      <div class="task-btns">
        <button class="check-btn" onclick="checkAnswer(document.getElementById('user-answer'),'${t.answer}','${id}')">✅ Перевірити</button>
        <button class="show-answer-btn" onclick="document.getElementById('ans_${id}').classList.toggle('show')">📚 Розв'язання</button>
        <button class="new-task-btn" onclick="loadRandomTask()">🔄 Наступна</button>
      </div>
      <div class="result-message" id="res_${id}"></div>
      <div class="task-answer" id="ans_${id}">
        <h4>📚 Розв'язання:</h4>
        ${t.steps.map((s,i)=>`<p><strong>Крок ${i+1}:</strong> ${s}</p>`).join('')}
      </div>
    </div>`;
  document.getElementById('user-answer').focus();
}

function checkAnswer(input,correct,id){
  const v=input.value.trim();
  const r=document.getElementById('res_'+id);
  if(!v){r.className='result-message incorrect';r.textContent='⚠️ Введіть відповідь!';return;}
  if(v===correct){
    r.className='result-message correct';
    r.textContent='✅ Правильно! Чудова робота! 🎉';
    input.disabled=true;
  }else{
    r.className='result-message incorrect';
    r.textContent=`❌ Неправильно. Спробуй ще раз!`;
  }
}

function toggleAnswer(){document.getElementById('task-answer')?.classList.toggle('show');}

// ===== DARK MODE =====
function toggleDark(){
  const dark=document.body.classList.toggle('dark');
  document.getElementById('dark-toggle').textContent=dark?'☀️ Світла':'🌙 Темна';
  localStorage.setItem('mathhelper-dark',dark?'1':'0');
  if(canvas) draw();
}
(function(){
  if(localStorage.getItem('mathhelper-dark')==='1'){
    document.body.classList.add('dark');
    const btn=document.getElementById('dark-toggle');
    if(btn) btn.textContent='☀️ Світла';
  }
})();

// ===== TRIG TABLE =====
const trigData=[
  {deg:0,  rad:'0',       sin:'0',          cos:'1',          tan:'0',           ctg:'∞'},
  {deg:30, rad:'π/6',     sin:'1/2',         cos:'√3/2',       tan:'√3/3',        ctg:'√3'},
  {deg:45, rad:'π/4',     sin:'√2/2',        cos:'√2/2',       tan:'1',           ctg:'1'},
  {deg:60, rad:'π/3',     sin:'√3/2',        cos:'1/2',        tan:'√3',          ctg:'√3/3'},
  {deg:90, rad:'π/2',     sin:'1',           cos:'0',          tan:'∞',           ctg:'0'},
  {deg:120,rad:'2π/3',    sin:'√3/2',        cos:'-1/2',       tan:'-√3',         ctg:'-√3/3'},
  {deg:135,rad:'3π/4',    sin:'√2/2',        cos:'-√2/2',      tan:'-1',          ctg:'-1'},
  {deg:150,rad:'5π/6',    sin:'1/2',         cos:'-√3/2',      tan:'-√3/3',       ctg:'-√3'},
  {deg:180,rad:'π',       sin:'0',           cos:'-1',         tan:'0',           ctg:'∞'},
  {deg:210,rad:'7π/6',    sin:'-1/2',        cos:'-√3/2',      tan:'√3/3',        ctg:'√3'},
  {deg:225,rad:'5π/4',    sin:'-√2/2',       cos:'-√2/2',      tan:'1',           ctg:'1'},
  {deg:240,rad:'4π/3',    sin:'-√3/2',       cos:'-1/2',       tan:'√3',          ctg:'√3/3'},
  {deg:270,rad:'3π/2',    sin:'-1',          cos:'0',          tan:'∞',           ctg:'0'},
  {deg:300,rad:'5π/3',    sin:'-√3/2',       cos:'1/2',        tan:'-√3',         ctg:'-√3/3'},
  {deg:315,rad:'7π/4',    sin:'-√2/2',       cos:'√2/2',       tan:'-1',          ctg:'-1'},
  {deg:330,rad:'11π/6',   sin:'-1/2',        cos:'√3/2',       tan:'-√3/3',       ctg:'-√3'},
  {deg:360,rad:'2π',      sin:'0',           cos:'1',          tan:'0',           ctg:'∞'},
];
function buildTrigTable(){
  const tbody=document.getElementById('trig-tbody');
  if(!tbody||tbody.children.length) return;
  tbody.innerHTML=trigData.map(r=>`
    <tr>
      <td class="angle-col">${r.deg}°</td>
      <td>${r.rad}</td>
      <td>${r.sin}</td>
      <td>${r.cos}</td>
      <td class="${r.tan==='∞'?'undef':''}">${r.tan}</td>
      <td class="${r.ctg==='∞'?'undef':''}">${r.ctg}</td>
    </tr>`).join('');
}

// ===== QUIZ =====
const quizQuestions=[
  {q:'Яка формула площі прямокутника?',opts:['S = a + b','S = a × b','S = 2(a + b)','S = a²'],ans:1},
  {q:'Яка формула периметру кола (довжина кола)?',opts:['C = π × r²','C = 2 × π × r','C = π × d²','C = π / r'],ans:1},
  {q:'Яка формула площі кола?',opts:['S = π × r','S = 2πr','S = π × r²','S = πd'],ans:2},
  {q:'Чому дорівнює sin 30°?',opts:['√3/2','1/2','√2/2','1'],ans:1},
  {q:'Чому дорівнює cos 60°?',opts:['√3/2','√2/2','1/2','0'],ans:2},
  {q:'Яка формула об\'єму куба?',opts:['V = a²','V = 6a²','V = a³','V = 3a'],ans:2},
  {q:'Яка формула площі трикутника через основу і висоту?',opts:['S = a × h','S = (a × h) / 2','S = a + h','S = 2(a + h)'],ans:1},
  {q:'Чому дорівнює tan 45°?',opts:['√3','√2/2','0','1'],ans:3},
  {q:'Яка формула діагоналі прямокутника?',opts:['d = a + b','d = √(a + b)','d = √(a² + b²)','d = 2(a² + b²)'],ans:2},
  {q:'Скільки градусів у прямому куті?',opts:['45°','180°','90°','60°'],ans:2},
  {q:'Яка формула площі поверхні куба?',opts:['S = a²','S = 4a²','S = 6a²','S = 3a²'],ans:2},
  {q:'Чому дорівнює sin 90°?',opts:['0','√2/2','1/2','1'],ans:3},
  {q:'Яка формула об\'єму циліндра?',opts:['V = π × r × h','V = π × r² × h','V = 2πr × h','V = πr²'],ans:1},
  {q:'Чому дорівнює cos 0°?',opts:['0','1/2','√2/2','1'],ans:3},
  {q:'Яка формула площі ромба через діагоналі?',opts:['S = d₁ × d₂','S = (d₁ × d₂) / 2','S = d₁ + d₂','S = 4 × d'],ans:1},
];

let quizCurrent=0;
let quizScore=0;
let quizOrder=[];
let quizAnswered=false;

function startQuiz(){
  quizOrder=[...quizQuestions].sort(()=>Math.random()-0.5).slice(0,10);
  quizCurrent=0;quizScore=0;
  renderQuizQuestion();
}

function renderQuizQuestion(){
  const area=document.getElementById('quiz-area');
  if(quizCurrent>=quizOrder.length){
    const pct=Math.round(quizScore/quizOrder.length*100);
    const msg=pct>=80?'Відмінно! Ти справжній математик! 🏆':pct>=60?'Добре! Ще трохи практики 💪':'Не здавайся — повтори формули і спробуй ще! 📚';
    area.innerHTML=`<div class="quiz-card quiz-result">
      <div class="quiz-result-score">${quizScore}/${quizOrder.length}</div>
      <div class="quiz-result-msg">${pct}% правильних<br>${msg}</div>
      <button class="quiz-restart-btn" onclick="startQuiz()">🔄 Спробувати ще раз</button>
    </div>`;
    return;
  }
  const q=quizOrder[quizCurrent];
  quizAnswered=false;
  const prog=Math.round(quizCurrent/quizOrder.length*100);
  area.innerHTML=`
    <div class="quiz-card">
      <div class="quiz-progress">Питання ${quizCurrent+1} / ${quizOrder.length}</div>
      <div class="quiz-score-bar"><div class="quiz-score-fill" style="width:${prog}%"></div></div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((o,i)=>`<button class="quiz-opt" id="qopt${i}" onclick="quizAnswer(${i})">${String.fromCharCode(65+i)}) ${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <button class="quiz-next-btn" id="quiz-next-btn" style="display:none" onclick="quizNext()">
        ${quizCurrent+1<quizOrder.length?'Наступне питання →':'Переглянути результат'}
      </button>
    </div>`;
}

function quizAnswer(i){
  if(quizAnswered) return;
  quizAnswered=true;
  const q=quizOrder[quizCurrent];
  const fb=document.getElementById('quiz-feedback');
  document.querySelectorAll('.quiz-opt').forEach(b=>b.disabled=true);
  if(i===q.ans){
    quizScore++;
    document.getElementById('qopt'+i).classList.add('correct');
    fb.className='quiz-feedback show-correct';
    fb.textContent='✅ Правильно! Молодець!';
  } else {
    document.getElementById('qopt'+i).classList.add('wrong');
    document.getElementById('qopt'+q.ans).classList.add('correct');
    fb.className='quiz-feedback show-wrong';
    fb.textContent=`❌ Неправильно. Правильна відповідь: ${String.fromCharCode(65+q.ans)}) ${q.opts[q.ans]}`;
  }
  document.getElementById('quiz-next-btn').style.display='inline-block';
}

function quizNext(){quizCurrent++;renderQuizQuestion();}

// ===== ЗОШИТ (NOTEBOOK) =====
let nbStyleCurrent = 'lined';


function nbSetStyle(style){
  nbStyleCurrent = style;
  const body = document.getElementById('ws-notebook-body');
  body.classList.remove('lined','grid');
  body.classList.add(style);
  document.getElementById('nb-lined').classList.toggle('active', style==='lined');
  document.getElementById('nb-grid').classList.toggle('active', style==='grid');
  localStorage.setItem('mh_nb_style', style);
}

function nbClear(){
  if(!confirm('Очистити весь конспект?')) return;
  const body = document.getElementById('ws-notebook-body');
  body.innerHTML = '';
  localStorage.removeItem('mh_nb_text');
}

function nbSave(){
  const body = document.getElementById('ws-notebook-body');
  localStorage.setItem('mh_nb_text', body.innerHTML);
}

function nbLoad(){
  const saved = localStorage.getItem('mh_nb_text');
  if(saved){
    document.getElementById('ws-notebook-body').innerHTML = saved;
  }
  const style = localStorage.getItem('mh_nb_style') || 'lined';
  nbSetStyle(style);
}

// Drag & Drop — перетягування функції у зошит
function nbOnDragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  e.currentTarget.classList.add('drag-over');
  document.getElementById('nb-drop-hint').classList.add('drag-active');
}

function nbOnDragLeave(e){
  e.currentTarget.classList.remove('drag-over');
  document.getElementById('nb-drop-hint').classList.remove('drag-active');
}

function nbOnDrop(e){
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.remove('drag-over');
  document.getElementById('nb-drop-hint').classList.remove('drag-active');

  const formula = e.dataTransfer.getData('application/nb-formula') || e.dataTransfer.getData('text/plain');
  if(!formula) return;

  const body = document.getElementById('ws-notebook-body');

  // Build chip element
  const chip = document.createElement('span');
  chip.className = 'nb-formula-chip';
  chip.textContent = formula;
  chip.contentEditable = 'false';

  // Use drop coordinates to find exact caret position
  let range = null;
  if(document.caretRangeFromPoint){
    range = document.caretRangeFromPoint(e.clientX, e.clientY);
  } else if(document.caretPositionFromPoint){
    const pos = document.caretPositionFromPoint(e.clientX, e.clientY);
    if(pos){ range = document.createRange(); range.setStart(pos.offsetNode, pos.offset); }
  }

  if(range && body.contains(range.startContainer)){
    range.deleteContents();
    range.insertNode(chip);
    range.setStartAfter(chip);
    range.collapse(true);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else {
    body.appendChild(chip);
  }

  // Space after chip so cursor lands after it
  const space = document.createTextNode('\u00A0');
  chip.after(space);
  body.focus();
  nbSave();
}

// Load notebook on page start
document.addEventListener('DOMContentLoaded', nbLoad);
