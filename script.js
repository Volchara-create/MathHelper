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
const TEXTBOOKS = [
  { grades:7, title:'Алгебра 7 клас', author:'Прокопенко 2024', url:'https://pidruchnyk.com.ua/2894-algebra-prokopenko-7-klas-2024.html' },
  { grades:7, title:'Геометрія 7 клас', author:'Бевз 2024', url:'https://pidruchnyk.com.ua/2880-geometriia-bevz-7-klas-2024.html' },
  { grades:8, title:'Математика 8 клас', author:'Істер 2025', url:'https://pidruchnyk.com.ua/2932-matematyka-ister-8-klas-2025.html' },
  { grades:8, title:'Геометрія 8 клас', author:'Мерзляк', url:'https://pidruchnyk.com.ua/865-geometriya-8-z-poglyblenym-vyvchennyam-2016-merzlyak.html' },
  { grades:9, title:'Геометрія 9 клас', author:'Мерзляк', url:'https://pidruchnyk.com.ua/996-geometriya-merzlyak-9-klas-2017.html' },
  { grades:9, title:'Геометрія 9 клас', author:'Істер', url:'https://pidruchnyk.com.ua/1031-ister-geometriya-9-klas.html' },
  { grades:10, title:'Алгебра 10 клас (профіль)', author:'Мерзляк', url:'https://pidruchnyk.com.ua/430-algebra-proflniy-rven-merzlyak-10-klas.html' },
  { grades:11, title:'Математика 11 клас', author:'Афанасьєва та ін.', url:'https://pidruchnyk.com.ua/452-matematika-afanasyeva-brodskiy-pavlov-slpenko-11-klas.html' },
];

function buildTextbooks() {
  const grid = document.getElementById('textbooks-grid');
  if (!grid) return;
  // Always rebuild (no caching — grade can change)
  const grade = getUserGrade();
  const books = grade ? TEXTBOOKS.filter(b => b.grades === grade) : TEXTBOOKS;
  if (!books.length) {
    grid.innerHTML = `<p style="color:#888;padding:20px;text-align:center;grid-column:1/-1;">Підручники для ${grade} класу незабаром з'являться тут.</p>`;
    return;
  }
  grid.innerHTML = books.map(b => `
    <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="textbook-card">
      <div class="textbook-grade">${b.grades} клас</div>
      <div class="textbook-title">${b.title}</div>
      <div class="textbook-author">${b.author}</div>
      <div class="textbook-link">📖 Читати онлайн →</div>
    </a>
  `).join('');
}

function show(sec){
  const grade = getUserGrade();
  document.querySelectorAll('section').forEach(s=>s.classList.remove('active'));
  document.getElementById(sec).classList.add('active');
  document.getElementById('category-row').style.display='none';
  if(sec==='tasks') tasksInit();
  if(sec==='textbooks') buildTextbooks();
  if(sec==='trig') buildTrigTable();
  if(sec==='formulas') showFormulaTab('algebra');
  if(sec==='quiz') startQuiz();
  if(sec==='graph') requestAnimationFrame(()=>requestAnimationFrame(initOrResizeCanvas));
  window.scrollTo({top:0,behavior:'smooth'});
  updateNavForGrade(grade);
}
function showFormulas(){ show('formulas'); }

// ===== ALGEBRA DATA =====
// v = visual (emoji side), m = math side, expr = text-only fallback
const ALGEBRA_CATS = [
  // === 7 КЛАС ===
  { name:'💯 Відсотки', minGrade:7, maxGrade:8, formulas:[
    {name:'Що таке відсоток?',expr:'% = частина від 100\n50% = половина, 25% = чверть'},
    {name:'Знайти % від числа',expr:'20% від 50 = 50 × 20 ÷ 100 = 10'},
    {name:'Знайти який %',expr:'10 з 50 = 10 ÷ 50 × 100 = 20%'},
    {name:'Знижка',expr:'Ціна 200грн, знижка 10% → 200 × 0.1 = 20грн знижки'},
  ]},
  { name:'⚡ Степені (цілі)', minGrade:7, maxGrade:7, formulas:[
    {name:'Множення',expr:'aⁿ · aᵐ = aⁿ⁺ᵐ'},
    {name:'Ділення',expr:'aⁿ ÷ aᵐ = aⁿ⁻ᵐ'},
    {name:'Степінь степеня',expr:'(aⁿ)ᵐ = aⁿ·ᵐ'},
    {name:'Степінь добутку',expr:'(a·b)ⁿ = aⁿ · bⁿ'},
    {name:'Нульовий степінь',expr:'a⁰ = 1  (a ≠ 0)'},
    {name:'Від\'ємний степінь',expr:'a⁻ⁿ = 1/aⁿ'},
  ]},
  { name:'✖️ Скорочене множення', minGrade:7, maxGrade:8, formulas:[
    {name:'Квадрат суми',expr:'(a+b)² = a² + 2ab + b²'},
    {name:'Квадрат різниці',expr:'(a−b)² = a² − 2ab + b²'},
    {name:'Різниця квадратів',expr:'a² − b² = (a+b)(a−b)'},
    {name:'Куб суми',expr:'(a+b)³ = a³ + 3a²b + 3ab² + b³'},
    {name:'Куб різниці',expr:'(a−b)³ = a³ − 3a²b + 3ab² − b³'},
    {name:'Сума кубів',expr:'a³ + b³ = (a+b)(a²−ab+b²)'},
    {name:'Різниця кубів',expr:'a³ − b³ = (a−b)(a²+ab+b²)'},
  ]},
  { name:'📈 Лінійна функція', minGrade:7, maxGrade:7, formulas:[
    {name:'Формула',expr:'y = kx + b'},
    {name:'Кутовий коефіцієнт',expr:'k > 0 → зростає;  k < 0 → спадає'},
    {name:'b — де перетинає OY',expr:'при x=0:  y = b'},
    {name:'Пряма пропорційність',expr:'y = kx  (b = 0)'},
  ]},

  // === 8 КЛАС ===
  { name:'√ Ірраціональні вирази', minGrade:8, maxGrade:9, formulas:[
    {name:'Корінь добутку',expr:'√(a·b) = √a · √b'},
    {name:'Корінь частки',expr:'√(a/b) = √a / √b'},
    {name:'Квадрат кореня',expr:'(√a)² = a  (a ≥ 0)'},
    {name:'Корінь квадрату',expr:'√(a²) = |a|'},
    {name:'Винесення з-під кореня',expr:'√(a²b) = a√b  (a ≥ 0)'},
    {name:'Раціоналізація',expr:'1/√a = √a/a'},
  ]},
  { name:'📐 Квадратне рівняння', minGrade:8, formulas:[
    {name:'Загальний вигляд',expr:'ax² + bx + c = 0'},
    {name:'Дискримінант',expr:'D = b² − 4ac'},
    {name:'Корені (D > 0)',expr:'x = (−b ± √D) / 2a'},
    {name:'Один корінь (D=0)',expr:'x = −b / 2a'},
    {name:'D < 0 — коренів немає',expr:'якщо D < 0, рівняння не має розв\'язків'},
    {name:'Теорема Вієта',expr:'x₁+x₂ = −b/a;   x₁·x₂ = c/a'},
  ]},
  { name:'🔁 Квадратична функція', minGrade:8, maxGrade:9, formulas:[
    {name:'Формула',expr:'y = ax² + bx + c'},
    {name:'Вершина параболи',expr:'x₀ = −b/(2a);   y₀ = f(x₀)'},
    {name:'a > 0 — гілки вгору',expr:'мінімум у вершині'},
    {name:'a < 0 — гілки вниз',expr:'максимум у вершині'},
    {name:'Нулі функції',expr:'ax² + bx + c = 0 (дискримінант)'},
    {name:'Обернена пропорц.',expr:'y = k/x  (гіпербола)'},
  ]},

  // === 9 КЛАС ===
  { name:'📊 Нерівності', minGrade:9, maxGrade:10, formulas:[
    {name:'Квадратна нерівність',expr:'ax² + bx + c > 0  або  < 0'},
    {name:'D > 0: коріння x₁ < x₂',expr:'ax²+bx+c > 0: x < x₁ або x > x₂ (якщо a>0)'},
    {name:'D > 0, a < 0',expr:'розв\'язок: x₁ < x < x₂'},
    {name:'D < 0, a > 0',expr:'розв\'язок: x ∈ ℝ (уся числова вісь)'},
    {name:'Модуль',expr:'|x| < a  ↔  −a < x < a'},
    {name:'Модуль (більше)',expr:'|x| > a  ↔  x < −a або x > a'},
  ]},
  { name:'🔢 Прогресії', minGrade:9, formulas:[
    {name:'Арифм. n-й член',expr:'aₙ = a₁ + (n−1)·d'},
    {name:'Різниця',expr:'d = aₙ − aₙ₋₁'},
    {name:'Сума арифм.',expr:'Sₙ = n·(a₁ + aₙ) / 2'},
    {name:'Геом. n-й член',expr:'bₙ = b₁ · qⁿ⁻¹'},
    {name:'Знаменник',expr:'q = bₙ / bₙ₋₁'},
    {name:'Сума геом.',expr:'Sₙ = b₁·(qⁿ − 1) / (q − 1)'},
    {name:'Нескінченна геом.',expr:'S∞ = b₁ / (1 − q),  |q| < 1'},
  ]},

  // === 10 КЛАС ===
  { name:'📈 Показникова функція', minGrade:10, maxGrade:10, formulas:[
    {name:'Формула',expr:'y = aˣ  (a > 0, a ≠ 1)'},
    {name:'a > 1 — зростає',expr:'lim = +∞ при x→+∞'},
    {name:'0 < a < 1 — спадає',expr:'lim = +∞ при x→−∞'},
    {name:'Показникове рівняння',expr:'aˣ = aʸ  ↔  x = y'},
    {name:'Особливе значення',expr:'a⁰ = 1  для будь-якого a'},
    {name:'Число e',expr:'e ≈ 2.718  (натуральна основа)'},
  ]},
  { name:'🔬 Логарифми', minGrade:10, formulas:[
    {name:'Означення',expr:'logₐb = x  ↔  aˣ = b'},
    {name:'Добуток',expr:'logₐ(xy) = logₐx + logₐy'},
    {name:'Частка',expr:'logₐ(x/y) = logₐx − logₐy'},
    {name:'Степінь',expr:'logₐ(xⁿ) = n · logₐx'},
    {name:'Зміна основи',expr:'logₐb = log b / log a'},
    {name:'Натуральний ln',expr:'ln x = logₑ x;   ln e = 1'},
    {name:'Десятковий lg',expr:'lg x = log₁₀ x;   lg 10 = 1'},
    {name:'Логарифмічне рівняння',expr:'logₐx = b  →  x = aᵇ'},
  ]},
  { name:'📉 Похідна', minGrade:10, formulas:[
    {name:'Константа',expr:"(C)' = 0"},
    {name:'Степінь',expr:"(xⁿ)' = n · xⁿ⁻¹"},
    {name:'Сума',expr:"(u+v)' = u' + v'"},
    {name:'Добуток',expr:"(uv)' = u'v + uv'"},
    {name:'Частка',expr:"(u/v)' = (u'v − uv') / v²"},
    {name:'sin',expr:"(sin x)' = cos x"},
    {name:'cos',expr:"(cos x)' = −sin x"},
    {name:'eˣ',expr:"(eˣ)' = eˣ"},
    {name:'ln x',expr:"(ln x)' = 1/x"},
    {name:'Зростання/спадання',expr:"f'(x) > 0 → зростає;  f'(x) < 0 → спадає"},
  ]},

  // === 11 КЛАС ===
  { name:'∫ Інтеграл', minGrade:11, formulas:[
    {name:'Степінь',expr:'∫xⁿ dx = xⁿ⁺¹/(n+1) + C'},
    {name:'sin',expr:'∫sin x dx = −cos x + C'},
    {name:'cos',expr:'∫cos x dx = sin x + C'},
    {name:'1/x',expr:'∫(1/x) dx = ln|x| + C'},
    {name:'eˣ',expr:'∫eˣ dx = eˣ + C'},
    {name:'Формула Ньютона–Лейбніца',expr:'∫ₐᵇf(x)dx = F(b) − F(a)'},
    {name:'Площа під графіком',expr:'S = |∫ₐᵇf(x)dx|'},
  ]},
  { name:'📊 Комбінаторика і теорвер', minGrade:11, formulas:[
    {name:'Перестановки',expr:'Pₙ = n!'},
    {name:'Розміщення',expr:'Aₙᵏ = n! / (n−k)!'},
    {name:'Комбінації',expr:'Cₙᵏ = n! / (k!·(n−k)!)'},
    {name:'Ймовірність',expr:'P(A) = m / n'},
    {name:'Сума ймовірностей',expr:'P(A) + P(Ā) = 1'},
  ]},
];

// ===== TRIGONOMETRY DATA =====
const TRIG_CATS = [
  { name:'Основні тотожності', minGrade:9, formulas:[
    {name:'Основна',expr:'sin²α + cos²α = 1'},
    {name:'tan через sin/cos',expr:'tan α = sin α / cos α'},
    {name:'ctg через sin/cos',expr:'ctg α = cos α / sin α'},
    {name:'tan · ctg',expr:'tan α · ctg α = 1'},
    {name:'1 + tan²',expr:'1 + tan²α = 1/cos²α'},
    {name:'1 + ctg²',expr:'1 + ctg²α = 1/sin²α'},
  ]},
  { name:'Радіани', minGrade:9, formulas:[
    {name:'π радіан',expr:'π рад = 180°'},
    {name:'1 радіан',expr:'1 рад ≈ 57.3°'},
    {name:'30°',expr:'π/6'},
    {name:'45°',expr:'π/4'},
    {name:'60°',expr:'π/3'},
    {name:'90°',expr:'π/2'},
    {name:'Формула',expr:'рад = градуси × π / 180'},
  ]},
  { name:'Формули суми кутів', minGrade:9, formulas:[
    {name:'sin(α+β)',expr:'sinα·cosβ + cosα·sinβ'},
    {name:'sin(α−β)',expr:'sinα·cosβ − cosα·sinβ'},
    {name:'cos(α+β)',expr:'cosα·cosβ − sinα·sinβ'},
    {name:'cos(α−β)',expr:'cosα·cosβ + sinα·sinβ'},
    {name:'tan(α+β)',expr:'(tanα + tanβ)/(1 − tanα·tanβ)'},
    {name:'tan(α−β)',expr:'(tanα − tanβ)/(1 + tanα·tanβ)'},
  ]},
  { name:'Подвійний кут', minGrade:10, formulas:[
    {name:'sin 2α',expr:'2·sinα·cosα'},
    {name:'cos 2α (варіант 1)',expr:'cos²α − sin²α'},
    {name:'cos 2α (варіант 2)',expr:'1 − 2sin²α'},
    {name:'cos 2α (варіант 3)',expr:'2cos²α − 1'},
    {name:'tan 2α',expr:'2tanα / (1 − tan²α)'},
  ]},
  { name:'Пониження степеня', minGrade:10, formulas:[
    {name:'sin²α',expr:'(1 − cos 2α) / 2'},
    {name:'cos²α',expr:'(1 + cos 2α) / 2'},
    {name:'tan²α',expr:'(1 − cos 2α) / (1 + cos 2α)'},
    {name:'sin³α',expr:'(3sinα − sin 3α) / 4'},
    {name:'cos³α',expr:'(3cosα + cos 3α) / 4'},
  ]},
  { name:'Формули зведення', minGrade:10, formulas:[
    {name:'sin(90°−α)',expr:'cos α'},
    {name:'cos(90°−α)',expr:'sin α'},
    {name:'sin(90°+α)',expr:'cos α'},
    {name:'cos(90°+α)',expr:'−sin α'},
    {name:'sin(180°−α)',expr:'sin α'},
    {name:'cos(180°−α)',expr:'−cos α'},
    {name:'sin(−α)',expr:'−sin α'},
    {name:'cos(−α)',expr:'cos α'},
  ]},
  { name:'Теорема синусів/косинусів', minGrade:9, formulas:[
    {name:'Теорема синусів',expr:'a/sin A = b/sin B = c/sin C'},
    {name:'Через описане коло',expr:'a/sin A = 2R'},
    {name:'Теорема косинусів',expr:'c² = a² + b² − 2ab·cos C'},
    {name:'Косинус через сторони',expr:'cos C = (a²+b²−c²) / 2ab'},
  ]},
];

// Build trigonometry tab
function buildTrigTab(){
  const grid = document.getElementById('trig-cats-grid');
  if(!grid || grid.children.length > 0) return;
  const grade = getUserGrade();
  const cats = TRIG_CATS.filter(c => !grade || grade >= (c.minGrade || 1));
  if(!cats.length) { grid.innerHTML = '<p style="color:#888;padding:20px;text-align:center">Тригонометрія з\'являється у 9 класі</p>'; return; }
  grid.innerHTML = cats.map(cat => `
    <div class="alg-cat-btn geo-cat-btn" onclick="openTrigModal(${TRIG_CATS.indexOf(cat)})">
      <div class="alg-cat-name">${cat.name}</div>
      <div class="alg-cat-count">${cat.formulas.length} формул</div>
    </div>
  `).join('');
}

function openTrigModal(idx){
  const cat = TRIG_CATS[idx];
  document.getElementById('alg-modal-title').textContent = cat.name;
  document.getElementById('alg-modal-body').innerHTML = cat.formulas.map(f => `
    <div class="alg-modal-row">
      <span class="alg-modal-name">${f.name}</span>
      <span class="alg-modal-expr">${f.expr}</span>
    </div>
  `).join('');
  document.getElementById('algebra-modal').classList.add('active');
}

// ===== TABLES DATA =====
const TABLES_LIST = [
  { id:'mult',  name:'Таблиця множення', sub:'від 1 до 10',  minGrade:4 },
  { id:'sq',    name:'Квадрати чисел',   sub:'від 1 до 49',  minGrade:5 },
  { id:'trig',  name:'sin, cos, tan, ctg', sub:'основні кути', minGrade:9 },
];

function buildTablesButtons(){
  const grid = document.getElementById('tables-buttons-grid');
  if(!grid || grid.children.length > 0) return;
  const grade = getUserGrade();
  const tables = TABLES_LIST.filter(t => {
    if(!grade) return true;
    if(t.minGrade && grade < t.minGrade) return false;
    if(t.maxGrade && grade > t.maxGrade) return false;
    return true;
  });
  if(!tables.length) { grid.innerHTML = '<p style="color:#888;padding:20px;text-align:center">Таблиці для твого класу не знайдено</p>'; return; }
  grid.innerHTML = tables.map(t => `
    <div class="alg-cat-btn geo-cat-btn" onclick="openTableFullscreen('${t.id}')">
      <div class="alg-cat-name">${t.name}</div>
      <div class="alg-cat-count">${t.sub}</div>
    </div>
  `).join('');
}

function openTableFullscreen(id){
  const modal = document.getElementById('table-fullscreen-modal');
  const body  = document.getElementById('table-fs-body');
  const title = document.getElementById('table-fs-title');

  if(id === 'mult'){
    title.textContent = 'Таблиця множення';
    let html = '<div class="mult-grid fs-mult-grid">';
    html += '<div class="mult-cell mult-header">×</div>';
    for(let i=1;i<=10;i++) html+=`<div class="mult-cell mult-header">${i}</div>`;
    for(let i=1;i<=10;i++){
      html+=`<div class="mult-cell mult-header">${i}</div>`;
      for(let j=1;j<=10;j++) html+=`<div class="mult-cell${i===j?' mult-diagonal':''}">${i*j}</div>`;
    }
    html += '</div>';
    body.innerHTML = html;

  } else if(id === 'sq'){
    title.textContent = 'Квадрати чисел (1–49)';
    // 7 numbers per row: header row (n) + value row (n²), 7 groups
    const cols = 7;
    let html = '<div class="sq-fs-table">';
    for(let row=0; row<7; row++){
      const start = row*cols + 1;
      const end = Math.min(start+cols-1, 49);
      // n row
      html += '<div class="sq-row">';
      html += '<div class="sq-label">n</div>';
      for(let n=start; n<=end; n++) html += `<div class="mult-cell mult-header">${n}</div>`;
      html += '</div>';
      // n² row
      html += '<div class="sq-row sq-row-val">';
      html += '<div class="sq-label">n²</div>';
      for(let n=start; n<=end; n++) html += `<div class="mult-cell sq-val">${n*n}</div>`;
      html += '</div>';
    }
    html += '</div>';
    body.innerHTML = html;

  } else if(id === 'trig'){
    title.textContent = 'Таблиця значень sin, cos, tan, ctg';
    const rows = [
      [0,'0','0','1','0','—'],
      [30,'π/6','1/2','√3/2','√3/3','√3'],
      [45,'π/4','√2/2','√2/2','1','1'],
      [60,'π/3','√3/2','1/2','√3','√3/3'],
      [90,'π/2','1','0','—','0'],
      [120,'2π/3','√3/2','−1/2','−√3','−√3/3'],
      [135,'3π/4','√2/2','−√2/2','−1','−1'],
      [150,'5π/6','1/2','−√3/2','−√3/3','−√3'],
      [180,'π','0','−1','0','—'],
      [210,'7π/6','−1/2','−√3/2','√3/3','√3'],
      [225,'5π/4','−√2/2','−√2/2','1','1'],
      [240,'4π/3','−√3/2','−1/2','√3','√3/3'],
      [270,'3π/2','−1','0','—','0'],
      [300,'5π/3','−√3/2','1/2','−√3','−√3/3'],
      [315,'7π/4','−√2/2','√2/2','−1','−1'],
      [330,'11π/6','−1/2','√3/2','−√3/3','−√3'],
      [360,'2π','0','1','0','—'],
    ];
    let html = '<table class="trig-table fs-trig-table"><thead><tr><th>Кут °</th><th>Рад</th><th>sin</th><th>cos</th><th>tan</th><th>ctg</th></tr></thead><tbody>';
    html += rows.map(r=>`<tr><td><b>${r[0]}°</b></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td></tr>`).join('');
    html += '</tbody></table>';
    body.innerHTML = html;
  }

  modal.classList.add('active');
}

function closeTableFullscreen(){
  document.getElementById('table-fullscreen-modal').classList.remove('active');
}

// Get current user grade (null = not logged in = show all)
function getUserGrade() {
  const user = JSON.parse(localStorage.getItem('mh_user') || 'null');
  return user ? user.grade : null;
}

// Build algebra tab (category buttons)
function buildAlgebraTab(){
  const grid = document.getElementById('algebra-cats-grid');
  // Always rebuild — grade may have changed
  const grade = getUserGrade();
  updateNavForGrade(grade);
  // Filter by exact grade range
  const cats = ALGEBRA_CATS.filter(c =>
    !grade || (grade >= (c.minGrade || 1) && grade <= (c.maxGrade || 11))
  );
  if(!cats.length) {
    grid.innerHTML = '<p style="color:#888;padding:20px;text-align:center">Формули для цього класу незабаром!</p>';
    return;
  }
  grid.innerHTML = cats.map(cat => `
    <div class="alg-cat-btn" onclick="openAlgebraModal(${ALGEBRA_CATS.indexOf(cat)})">
      <div class="alg-cat-name">${cat.name}</div>
      <div class="alg-cat-count">${cat.formulas.length} карток</div>
    </div>
  `).join('');
}

// Timers for auto-flip cards
let flipTimers = [];

function openAlgebraModal(idx){
  // Clear any running timers from previous modal
  flipTimers.forEach(t => clearTimeout(t));
  flipTimers = [];

  const cat = ALGEBRA_CATS[idx];
  document.getElementById('alg-modal-title').textContent = cat.name;

  document.getElementById('alg-modal-body').innerHTML = cat.formulas.map((f, i) => {
    if (f.v && f.m) {
      // Flip card: front = emoji visual, back = math formula
      return `
        <div class="flip-card" id="fc${i}" onclick="flipCard('fc${i}')">
          <div class="flip-card-inner" id="fci${i}">
            <div class="flip-card-front">
              <div class="flip-card-label">${f.name}</div>
              <div class="flip-card-visual">${f.v}</div>
              <div class="flip-hint">👆 натисни або зачекай</div>
            </div>
            <div class="flip-card-back">
              <div class="flip-card-label">${f.name}</div>
              <div class="flip-card-math">${f.m}</div>
              <div class="flip-hint" style="color:#93c5fd">👆 ще раз — повернути</div>
            </div>
          </div>
        </div>`;
    }
    // Non-visual formula (older grades)
    return `
      <div class="alg-modal-row">
        <span class="alg-modal-name">${f.name}</span>
        <span class="alg-modal-expr">${f.expr || f.m || ''}</span>
      </div>`;
  }).join('');

  document.getElementById('algebra-modal').classList.add('active');

  // Auto-flip each card with a delay (3s + 1.2s per card)
  cat.formulas.forEach((f, i) => {
    if (!f.v) return;
    const delay = 3000 + i * 1200;
    const t = setTimeout(() => {
      const inner = document.getElementById(`fci${i}`);
      if (inner && !inner.classList.contains('flipped')) {
        inner.classList.add('flipped');
      }
    }, delay);
    flipTimers.push(t);
  });
}

function flipCard(id) {
  const inner = document.getElementById('fci' + id.replace('fc',''));
  if (inner) inner.classList.toggle('flipped');
}

function closeAlgebraModal(){
  flipTimers.forEach(t => clearTimeout(t));
  flipTimers = [];
  document.getElementById('algebra-modal').classList.remove('active');
}

// Build geometry tab — по класах згідно програми України
// 7 кл: прямокутник, трикутник, коло
// 8 кл: + паралелограм, ромб, трапеція
// 10 кл: + стереометрія
function buildGeoTab(){
  const grid = document.getElementById('geo-cards-grid');
  const grade = getUserGrade();
  if (grid && grid.children.length > 0 && grid.dataset.builtForGrade === String(grade)) return; // already built for this grade

  // Which shapes appear at which grade
  const base7   = ['rectangle','triangle','circle'];           // 7 кл
  const extra8  = ['parallelogram','rhombus','trapezoid'];     // 8 кл
  const extra10 = ['cube','parallelepiped','cylinder','cone','pyramid']; // 10 кл

  let plane7  = grade ? (grade >= 7  ? base7  : []) : base7;
  let plane8  = grade ? (grade >= 8  ? extra8 : []) : extra8;
  let solid10 = grade ? (grade >= 10 ? extra10: []) : extra10;

  const makeCard = cat => `
    <div class="alg-cat-btn geo-cat-btn" onclick="showCategory('${cat}')">
      <div class="alg-cat-name">${categoryNames[cat]}</div>
      <div class="alg-cat-count">${(data[cat]||[]).length} формул</div>
    </div>`;

  let html = '';
  if(plane7.length || plane8.length){
    html += '<div class="geo-group-label">📐 Планіметрія (плоскі фігури)</div>';
    if(plane7.length) html += plane7.map(makeCard).join('');
    if(plane8.length){
      html += '<div class="geo-group-label" style="margin-top:12px;font-size:.78rem;">8 клас і вище</div>';
      html += plane8.map(makeCard).join('');
    }
  }
  if(solid10.length){
    html += '<div class="geo-group-label" style="margin-top:16px">📦 Стереометрія — 10-11 клас</div>';
    html += solid10.map(makeCard).join('');
  }
  grid.innerHTML = html || '<p style="color:#888;padding:20px;text-align:center">Для твого класу немає даних</p>';
  grid.dataset.builtForGrade = String(grade);
}

// buildTablesTab removed — dead code (used buildTablesButtons instead)

// ===== FORMULA TABS =====
function showFormulaTab(tab){
  document.querySelectorAll('.ftab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ftab-content').forEach(t=>t.classList.remove('active'));
  const tabEl = document.getElementById('ftab-'+tab);
  if(tabEl) tabEl.classList.add('active');
  const btn = document.getElementById('ftab-btn-'+tab);
  if(btn) btn.classList.add('active');
  if(tab==='algebra') buildAlgebraTab();
  // 'all' tab removed
  if(tab==='geometry') buildGeoTab();
  if(tab==='trigonometry') buildTrigTab();
  if(tab==='tables') buildTablesButtons();
}

// "Все разом" tab — 6 random big flip cards with shuffle button
function buildAllTab() {
  const grade = getUserGrade();
  const grid = document.getElementById('all-cats-grid');
  if (!grid) return;

  // Gather all grade-appropriate formulas
  const allFormulas = [];
  ALGEBRA_CATS.forEach(cat => {
    if (grade && (grade < (cat.minGrade || 1) || grade > (cat.maxGrade || 11))) return;
    cat.formulas.forEach(f => allFormulas.push({ ...f, catName: cat.name }));
  });

  // Shuffle and pick 6
  for (let i = allFormulas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allFormulas[i], allFormulas[j]] = [allFormulas[j], allFormulas[i]];
  }
  const pick = allFormulas.slice(0, 6);

  grid.innerHTML = `
    <div style="grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
      <span style="color:#888;font-size:0.9rem;">6 випадкових карток — перевертай!</span>
      <button onclick="buildAllTab()" style="background:#e0f2fe;border:none;border-radius:10px;padding:8px 18px;font-size:0.9rem;font-weight:700;cursor:pointer;color:#0369a1;transition:.2s;" onmouseover="this.style.background='#bae6fd'" onmouseout="this.style.background='#e0f2fe'">🎲 Ще 6 карток</button>
    </div>
    ${pick.map((f, i) => `
      <div class="flip-card" onclick="flipAllCard('all-fci${i}')">
        <div class="flip-card-inner" id="all-fci${i}">
          <div class="flip-card-front">
            <div class="flip-card-label">${f.catName} · ${f.name}</div>
            <div class="flip-card-visual">${f.v || f.name}</div>
            <div class="flip-hint">👆 натисни або зачекай</div>
          </div>
          <div class="flip-card-back">
            <div class="flip-card-label">${f.catName} · ${f.name}</div>
            <div class="flip-card-math">${f.m || f.expr || ''}</div>
            <div class="flip-hint">👆 повернути</div>
          </div>
        </div>
      </div>`).join('')}`;

  // Auto-flip each card with a stagger
  let allFlipTimers = [];
  pick.forEach((f, i) => {
    const t = setTimeout(() => {
      const inner = document.getElementById(`all-fci${i}`);
      if (inner && !inner.classList.contains('flipped')) inner.classList.add('flipped');
    }, 3000 + i * 1000);
    allFlipTimers.push(t);
  });
}

function flipAllCard(innerId) {
  const inner = document.getElementById(innerId);
  if (inner) inner.classList.toggle('flipped');
}


// buildTrigTable2 removed — dead code (referenced non-existent #trig-tbody-2)
function showGraph(){
  show('graph');
  // Open notebook by default
  const nb=document.getElementById('ws-notebook');
  if(nb && !nb.classList.contains('open')){
    nb.classList.add('open');
    const btn=document.getElementById('wt-notebook');
    if(btn)btn.classList.add('active');
    wsUpdateRightCol();
  }
  requestAnimationFrame(()=>requestAnimationFrame(initOrResizeCanvas));
}
function wsUpdateRightCol() {
  const col = document.getElementById('ws-right-col');
  if (!col) return;
  const panels = col.querySelectorAll('.ws-r-panel.open');
  col.classList.toggle('has-panel', panels.length > 0);
  // Show resize handles only between two consecutive open panels
  const allPanels = Array.from(col.querySelectorAll('.ws-r-panel'));
  col.querySelectorAll('.ws-vpanel-resize').forEach(r => r.classList.remove('show'));
  for (let i = 0; i < allPanels.length - 1; i++) {
    if (allPanels[i].classList.contains('open') && allPanels[i+1].classList.contains('open')) {
      const handle = allPanels[i].nextElementSibling;
      if (handle && handle.classList.contains('ws-vpanel-resize')) handle.classList.add('show');
    }
  }
  requestAnimationFrame(() => requestAnimationFrame(initOrResizeCanvas));
}

function wsOpenPanel(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
  wsUpdateRightCol();
}

function wsClosePanel(key) {
  const map = { notebook: 'ws-notebook', calc: 'ws-calc', info: 'ws-props' };
  const id = map[key] || key;
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
  // Update toolbar button active state
  const btnMap = { 'ws-notebook': 'wt-notebook', 'ws-calc': 'wt-calc' };
  const btnId = btnMap[id];
  if (btnId) { const btn = document.getElementById(btnId); if (btn) btn.classList.remove('active'); }
  wsUpdateRightCol();
}

function wsTogglePanel(key) {
  const map = { notebook: 'ws-notebook', calc: 'ws-calc', info: 'ws-props' };
  const id = map[key] || key;
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  // Toggle toolbar button
  const btnMap = { 'ws-notebook': 'wt-notebook', 'ws-calc': 'wt-calc' };
  const btnId = btnMap[id];
  if (btnId) { const btn = document.getElementById(btnId); if (btn) btn.classList.toggle('active', isOpen); }
  wsUpdateRightCol();
}

function wsToggleNotebook() { wsTogglePanel('notebook'); }

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
  wsClosePanel('info');
  wsSelId=null;draw();
}
function wsShowProps(o){
  wsOpenPanel('ws-props');
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

function wsCalcOpen(){wsTogglePanel('calc');}
function wsCalcClose(){wsClosePanel('calc');}

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

// ===== TASKS SECTION (grade-aware with animations) =====

// Visual task generators — each returns { q, visual, a, formula }
// visual: { op, emoji, name, start, change }  or null for text-only
const GRADE_TASKS = {
  1: [ // Grade 1 — addition/subtraction to 10 with visuals
    ()=>{const a=ri(2,4),b=ri(1,4-a+1);return{q:`Було ${a+b} ${['🍎','🍇','🍊','🍋','🍓'][ri(0,4)]}, з'їли ${b}. Скільки лишилось?`,visual:{op:'-',emoji:['🍎','🍇','🍊','🍋','🍓'][ri(0,4)],start:a+b,change:b},a,formula:`${a+b} − ${b} = ${a}`};},
    ()=>{const a=ri(1,4),b=ri(1,5-a);return{q:`Прилетіло ${a} 🦋, потім ще ${b}. Скільки метеликів?`,visual:{op:'+',emoji:'🦋',start:a,change:b},a:a+b,formula:`${a} + ${b} = ${a+b}`};},
    ()=>{const s=ri(4,8),r=ri(1,3);return{q:`В кошику ${s} 🍓. З'їли ${r}. Скільки лишилось?`,visual:{op:'-',emoji:'🍓',start:s,change:r},a:s-r,formula:`${s} − ${r} = ${s-r}`};},
    ()=>{const a=ri(1,4),b=ri(1,4);return{q:`${a} ⭐ + ще ${b} ⭐ = ?`,visual:{op:'+',emoji:'⭐',start:a,change:b},a:a+b,formula:`${a} + ${b} = ${a+b}`};},
    ()=>{const s=ri(5,9),r=ri(2,4);return{q:`В гнізді ${s} 🐣. ${r} пташеняти вилетіли. Скільки лишилось?`,visual:{op:'-',emoji:'🐣',start:s,change:r},a:s-r,formula:`${s} − ${r} = ${s-r}`};},
    ()=>{const a=ri(1,3),b=ri(1,4);return{q:`${a} 🐸 сиділо на листку, стрибнуло ще ${b}. Скільки разом?`,visual:{op:'+',emoji:'🐸',start:a,change:b},a:a+b,formula:`${a} + ${b} = ${a+b}`};},
  ],
  2: [ // Grade 2 — addition/subtraction to 100, round numbers
    ()=>{const a=ri(1,5)*10,b=ri(1,5)*10;return{q:`В класі ${a} зошитів, принесли ще ${b}. Скільки стало?`,visual:{op:'+',emoji:'📓',start:a/10,change:b/10,scale:10},a:a+b,formula:`${a} + ${b} = ${a+b}`};},
    ()=>{const s=ri(4,9)*10,r=ri(1,3)*10;return{q:`Було ${s} 🍊. Продали ${r}. Скільки лишилось?`,visual:{op:'-',emoji:'🍊',start:s/10,change:r/10,scale:10},a:s-r,formula:`${s} − ${r} = ${s-r}`};},
    ()=>{const a=ri(13,40),b=ri(5,20);return{q:`На полиці ${a} 📚, поклали ще ${b}. Скільки книжок?`,visual:null,a:a+b,formula:`${a} + ${b} = ${a+b}`};},
    ()=>{const s=ri(50,90),r=ri(10,30);return{q:`Було ${s} 🌻. Зрізали ${r}. Скільки лишилось?`,visual:null,a:s-r,formula:`${s} − ${r} = ${s-r}`};},
    ()=>{const a=ri(20,60),b=ri(10,30);return{q:`${a} + ${b} = ?`,visual:{op:'+',emoji:'🔵',start:Math.min(a,10),change:Math.min(b,10),scale:null},a:a+b,formula:`${a} + ${b} = ${a+b}`};},
  ],
  3: [ // Grade 3 — multiplication & division
    ()=>{const a=ri(2,5),b=ri(2,6);return{q:`${a} тарілок, на кожній ${b} 🧁. Скільки кексів?`,visual:{op:'×',emoji:'🧁',rows:a,cols:b},a:a*b,formula:`${a} × ${b} = ${a*b}`};},
    ()=>{const a=ri(2,5),b=ri(2,6);return{q:`${a} ряди по ${b} ⭐. Скільки зірок всього?`,visual:{op:'×',emoji:'⭐',rows:a,cols:b},a:a*b,formula:`${a} × ${b} = ${a*b}`};},
    ()=>{const b=ri(2,5),q=ri(2,6);return{q:`${b*q} 🍫 цукерок рівно між ${b} дітьми. По скільки?`,visual:{op:'÷',emoji:'🍫',total:b*q,groups:b},a:q,formula:`${b*q} ÷ ${b} = ${q}`};},
    ()=>{const a=ri(2,9),b=ri(2,9);return{q:`${a} × ${b} = ?`,visual:{op:'×',emoji:'🔵',rows:Math.min(a,5),cols:Math.min(b,5)},a:a*b,formula:`${a} × ${b} = ${a*b}`};},
    ()=>{const b=ri(2,9),q=ri(2,8);return{q:`${b*q} ÷ ${b} = ?`,visual:null,a:q,formula:`${b*q} ÷ ${b} = ${q}`};},
    ()=>{const a=ri(2,5),b=ri(2,5);return{q:`${a} команд по ${b} ⚽ гравців. Скільки гравців?`,visual:{op:'×',emoji:'⚽',rows:a,cols:b},a:a*b,formula:`${a} × ${b} = ${a*b}`};},
  ],
  4: [ // Grade 4 — division + geometry (perimeter, area)
    ()=>{const a=ri(2,9),b=ri(2,9);return{q:`Периметр прямокутника ${a}×${b} см = ?`,visual:{op:'rect',w:a,h:b},a:2*(a+b),formula:`P = 2×(${a}+${b}) = ${2*(a+b)} см`};},
    ()=>{const a=ri(2,8),b=ri(2,8);return{q:`Площа прямокутника ${a}×${b} см = ?`,visual:{op:'rect',w:a,h:b},a:a*b,formula:`S = ${a}×${b} = ${a*b} см²`};},
    ()=>{const a=ri(2,8);return{q:`Периметр квадрата зі стороною ${a} см = ?`,visual:{op:'square',s:a},a:4*a,formula:`P = 4×${a} = ${4*a} см`};},
    ()=>{const b=ri(2,9),q=ri(2,9);return{q:`${b*q} ÷ ${b} = ?`,visual:null,a:q,formula:`${b*q} ÷ ${b} = ${q}`};},
    ()=>{const a=ri(2,9),b=ri(2,9);return{q:`${a} × ${b} = ?`,visual:null,a:a*b,formula:`${a} × ${b} = ${a*b}`};},
    ()=>{const a=ri(3,7);return{q:`Площа квадрата зі стороною ${a} см = ?`,visual:{op:'square',s:a},a:a*a,formula:`S = ${a}² = ${a*a} см²`};},
  ],
  5: [ // Grade 5 — percentages, fractions, basic geometry
    ()=>{const n=ri(2,9)*10,p=ri(1,5)*10;return{q:`${p}% від ${n} = ?`,visual:null,a:n*p/100,formula:`${n} × ${p}/100 = ${n*p/100}`};},
    ()=>{const a=ri(2,8),b=ri(2,8);return{q:`Площа трикутника: основа ${a}, висота ${b} = ?`,visual:null,a:a*b/2,formula:`S = (${a}×${b})/2 = ${a*b/2} см²`};},
    ()=>{const n=ri(2,9)*10;return{q:`50% від ${n} = ?`,visual:null,a:n/2,formula:`${n}/2 = ${n/2}`};},
    ()=>{const a=ri(2,9),b=ri(2,9);return{q:`${a} × ${b} = ?`,visual:null,a:a*b,formula:`${a} × ${b} = ${a*b}`};},
    ()=>{const n=ri(1,9)*10,p=10;return{q:`10% від ${n} = ?`,visual:null,a:n/10,formula:`${n}/10 = ${n/10}`};},
  ],
};

// ===== VISUAL TASK CARD ANIMATION =====

let visualTaskData = null;
let visualTaskAnswered = false;

function renderVisualCard(task, cardEl) {
  const v = task.visual;
  if (!v) {
    // Text-only task
    cardEl.innerHTML = `
      <div class="vtask-front">
        <div class="vtask-q">${task.q}</div>
        <div class="vtask-input-row">
          <input class="vtask-input" id="vtask-ans" type="number" placeholder="?" onkeydown="if(event.key==='Enter')vtaskCheck()">
          <button class="vtask-btn" onclick="vtaskCheck()">✓</button>
        </div>
        <div class="vtask-msg" id="vtask-msg"></div>
      </div>`;
    return;
  }

  // Build emoji animation area
  let emojiHtml = '';
  if (v.op === '+' || v.op === '-') {
    const total = v.op === '+' ? v.start + v.change : v.start;
    const scale = v.scale || 1;
    // Limit to 10 emojis for display (use scale for groups)
    const showCount = Math.min(total, 10);
    const labelScale = scale > 1 ? ` (кожна = ${scale})` : '';
    emojiHtml = `
      <div class="vtask-scene">
        <div class="vtask-emojis" id="vtask-emojis">
          ${Array.from({length: showCount}, (_,i) => `<span class="vtask-em" id="vem${i}" data-idx="${i}">${v.emoji}</span>`).join('')}
        </div>
        <div class="vtask-scene-label" id="vtask-scene-label">Всього: ${total}${scale>1?' (показано умовно)':''}</div>
      </div>`;
  } else if (v.op === '×') {
    const rows = Math.min(v.rows, 5), cols = Math.min(v.cols, 5);
    emojiHtml = `
      <div class="vtask-scene">
        <div class="vtask-grid" id="vtask-emojis">
          ${Array.from({length:rows},(_,r)=>`<div class="vtask-row">${Array.from({length:cols},(_,c)=>`<span class="vtask-em" id="vem${r*cols+c}">${v.emoji}</span>`).join('')}</div>`).join('')}
        </div>
        <div class="vtask-scene-label">${v.rows} рядки × ${v.cols} в ряду</div>
      </div>`;
  } else if (v.op === '÷') {
    const perGroup = v.total / v.groups;
    emojiHtml = `
      <div class="vtask-scene">
        <div class="vtask-groups" id="vtask-emojis">
          ${Array.from({length:v.groups},(_,g)=>`<div class="vtask-group">${Array.from({length:Math.min(perGroup,6)},(_,i)=>`<span class="vtask-em" id="vem${g}_${i}">${v.emoji}</span>`).join('')}<div class="vtask-group-label">група ${g+1}</div></div>`).join('')}
        </div>
      </div>`;
  } else if (v.op === 'rect') {
    emojiHtml = `
      <div class="vtask-scene">
        <svg viewBox="0 0 200 120" width="200" height="120" class="vtask-svg" id="vtask-svg-shape">
          <rect x="20" y="20" width="${Math.min(v.w*14,160)}" height="${Math.min(v.h*10,80)}" rx="4" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
          <text x="${20+Math.min(v.w*14,160)/2}" y="15" text-anchor="middle" font-size="13" fill="#2563eb">${v.w} см</text>
          <text x="${20+Math.min(v.w*14,160)+10}" y="${20+Math.min(v.h*10,80)/2}" text-anchor="start" font-size="13" fill="#2563eb">${v.h} см</text>
        </svg>
      </div>`;
  } else if (v.op === 'square') {
    const sz = Math.min(v.s*14, 120);
    emojiHtml = `
      <div class="vtask-scene">
        <svg viewBox="0 0 180 130" width="180" height="130" class="vtask-svg" id="vtask-svg-shape">
          <rect x="30" y="20" width="${sz}" height="${sz}" rx="4" fill="#bbf7d0" stroke="#16a34a" stroke-width="2.5"/>
          <text x="${30+sz/2}" y="15" text-anchor="middle" font-size="13" fill="#16a34a">${v.s} см</text>
          <text x="${30+sz+10}" y="${20+sz/2}" font-size="13" fill="#16a34a">${v.s} см</text>
        </svg>
      </div>`;
  }

  cardEl.innerHTML = `
    <div class="vtask-card-flip" id="vtask-flip">
      <div class="vtask-face vtask-face-front">
        <div class="vtask-q">${task.q}</div>
        ${emojiHtml}
        <div class="vtask-input-row" id="vtask-input-area" style="display:none">
          <input class="vtask-input" id="vtask-ans" type="number" placeholder="?" onkeydown="if(event.key==='Enter')vtaskCheck()">
          <button class="vtask-btn" onclick="vtaskCheck()">✓</button>
        </div>
        <div class="vtask-msg" id="vtask-msg"></div>
      </div>
      <div class="vtask-face vtask-face-back">
        <div class="vtask-formula">${task.formula}</div>
        <div class="vtask-back-emoji">🌟</div>
        <div class="vtask-back-label">Запам'ятай!</div>
      </div>
    </div>`;

  // Run animation
  if (v.op === '+') {
    runAddAnimation(v.start, v.change, task.q);
  } else if (v.op === '-') {
    runRemoveAnimation(v.start, v.change, task.q);
  } else if (v.op === '×' || v.op === '÷') {
    runMultAnimation();
  } else {
    // SVG shape — show input immediately
    showVtaskInput();
  }
}

function runAddAnimation(start, add, q) {
  // Phase 1: show only `start` items (others hidden)
  const total = start + add;
  for (let i = start; i < Math.min(total, 10); i++) {
    const el = document.getElementById(`vem${i}`);
    if (el) el.style.opacity = '0';
  }
  const lbl = document.getElementById('vtask-scene-label');
  if (lbl) lbl.textContent = `Було: ${start}`;

  // Phase 2: after 1.5s — add items with animation
  setTimeout(() => {
    if (lbl) lbl.textContent = `Прилетіло ще ${add}! Всього = ?`;
    for (let i = start; i < Math.min(total, 10); i++) {
      const el = document.getElementById(`vem${i}`);
      if (el) {
        el.style.transition = `opacity 0.4s ${(i-start)*0.15}s, transform 0.4s ${(i-start)*0.15}s`;
        el.style.transform = 'scale(1.3)';
        el.style.opacity = '1';
        setTimeout(() => { if(el) el.style.transform = 'scale(1)'; }, 300 + (i-start)*150);
      }
    }
    setTimeout(showVtaskInput, add * 150 + 500);
  }, 1500);
}

function runRemoveAnimation(start, remove, q) {
  const lbl = document.getElementById('vtask-scene-label');
  if (lbl) lbl.textContent = `Було: ${start}`;
  // Phase 2: after 1.5s — fade out `remove` items from the end
  setTimeout(() => {
    if (lbl) lbl.textContent = `Забрали ${remove}... Скільки лишилось?`;
    const show = Math.min(start, 10);
    const removeStart = Math.max(0, show - remove);
    for (let i = removeStart; i < show; i++) {
      const el = document.getElementById(`vem${i}`);
      if (el) {
        el.style.transition = `opacity 0.4s ${(i-removeStart)*0.2}s, transform 0.5s ${(i-removeStart)*0.2}s`;
        el.style.opacity = '0.1';
        el.style.transform = 'scale(0.3) translateY(-20px)';
      }
    }
    setTimeout(showVtaskInput, remove * 200 + 500);
  }, 1500);
}

function runMultAnimation() {
  // Highlight rows one by one
  const rows = document.querySelectorAll('#vtask-emojis .vtask-row, #vtask-emojis .vtask-group');
  rows.forEach((row, i) => {
    row.style.opacity = '0';
    row.style.transition = `opacity 0.4s ${i*0.3}s`;
    setTimeout(() => { row.style.opacity = '1'; }, i * 300 + 200);
  });
  setTimeout(showVtaskInput, rows.length * 300 + 600);
}

function showVtaskInput() {
  const area = document.getElementById('vtask-input-area');
  if (area) { area.style.display = 'flex'; area.style.animation = 'fadeIn 0.4s'; }
  setTimeout(() => document.getElementById('vtask-ans')?.focus(), 100);
}

function vtaskCheck() {
  if (visualTaskAnswered) return;
  const input = document.getElementById('vtask-ans');
  const msg = document.getElementById('vtask-msg');
  if (!input || !msg) return;
  const val = input.value.trim();
  const correct = String(visualTaskData.a);
  if (!val) { msg.textContent = '⚠️ Введи відповідь!'; msg.className = 'vtask-msg warn'; return; }
  if (val === correct) {
    visualTaskAnswered = true;
    msg.textContent = '✅ Правильно!';
    msg.className = 'vtask-msg ok';
    // Flip card after 0.6s
    setTimeout(() => {
      const flip = document.getElementById('vtask-flip');
      if (flip) flip.classList.add('flipped');
    }, 600);
    // After showing formula, auto-next
    setTimeout(vtaskNext, 3200);
  } else {
    msg.textContent = '❌ Спробуй ще!';
    msg.className = 'vtask-msg wrong';
    input.value = '';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  }
}

function vtaskNext() {
  const pool = getGradeTasks();
  const gen = pool[ri(0, pool.length - 1)];
  visualTaskData = gen();
  visualTaskAnswered = false;
  const card = document.getElementById('vtask-card');
  if (card) renderVisualCard(visualTaskData, card);
}

// ===== SAFE GAME =====

let safeAnswers = [];
let safeCorrect = [false, false, false];
let safeTotalStars = parseInt(localStorage.getItem('mh_stars') || '0');

function tasksInit() {
  const grade = getUserGrade();
  const label = document.getElementById('tasks-grade-label');
  if (label) label.textContent = `${grade} клас`;

  const modeBar = document.querySelector('.tasks-mode-bar');
  const visualWrap = document.getElementById('tasks-visual-wrap');

  // All grades 7-11: show mode bar + regular tasks
  if (modeBar) modeBar.style.display = '';
  if (visualWrap) visualWrap.style.display = 'none';
  tasksSetMode('regular');
  loadRandomTask();
}

function tasksSetMode(mode) {
  const safe = document.getElementById('tasks-safe');
  const reg = document.getElementById('tasks-regular');
  if (safe) safe.style.display = mode === 'safe' ? '' : 'none';
  if (reg) reg.style.display = mode === 'regular' ? '' : 'none';
  document.getElementById('tmode-safe')?.classList.toggle('active', mode === 'safe');
  document.getElementById('tmode-regular')?.classList.toggle('active', mode === 'regular');
}

function getGradeTasks() {
  const g = getUserGrade();
  return GRADE_TASKS[g] || GRADE_TASKS[7];
}

function updateNavForGrade(grade) {
  if (!grade) return;
  // Formula tabs visibility — all visible for grades 7-11
  const trigTab = document.getElementById('ftab-btn-trigonometry');
  if (trigTab) trigTab.style.display = grade <= 8 ? 'none' : '';
  // Auto-enable dark mode for all users
  const darkBtn = document.getElementById('dark-toggle');
  if (darkBtn) {
    darkBtn.style.display = '';
    if (localStorage.getItem('mathhelper-dark') === null) {
      document.body.classList.add('dark');
      darkBtn.textContent = '☀️ Світла';
      localStorage.setItem('mathhelper-dark', '1');
    }
  }
  // Rebuild algebra tab when grade changes
  const grid = document.getElementById('algebra-cats-grid');
  if (grid) grid.innerHTML = '';
}

function safeNew() {
  const pool = getGradeTasks();
  const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
  safeAnswers = shuffled.map(g => g());
  safeCorrect = [false, false, false];
  dialAngle = 0;
  safeTurnDial(0);

  const qEl = document.getElementById('safe-questions');
  qEl.innerHTML = safeAnswers.map((t, i) => `
    <div class="safe-q" id="safe-q${i}">
      <div class="safe-q-num">🔑 ${i+1}.</div>
      <div class="safe-q-text">${t.q}</div>
      <div class="safe-q-row">
        <input class="safe-input" id="safe-ans${i}" type="number" placeholder="?"
          onkeydown="if(event.key==='Enter')safeCheck(${i})"
          ${i > 0 ? 'disabled' : ''}>
        <button class="safe-check-btn" onclick="safeCheck(${i})" ${i > 0 ? 'disabled' : ''}>→</button>
      </div>
      <div class="safe-q-result" id="safe-r${i}"></div>
    </div>
  `).join('');

  for (let i = 0; i < 3; i++) {
    const d = document.getElementById(`sd${i}`);
    if (d) { d.value = '?'; d.style.color = '#93c5fd'; d.classList.remove('unlocked'); }
  }
  const door = document.getElementById('safe-door');
  if (door) { door.style.transition = 'none'; door.style.transform = ''; }
  document.getElementById('safe-msg').textContent = '';
  document.getElementById('safe-status-text').textContent = '🔒 ЗАЧИНЕНО';
  setTimeout(() => document.getElementById('safe-ans0')?.focus(), 100);
}

let dialAngle = 0;
function safeTurnDial(steps) {
  dialAngle += steps * 45;
  const ptr = document.getElementById('safe-pointer');
  if (!ptr) return;
  const rad = (dialAngle * Math.PI) / 180;
  const cx = 80, cy = 80, len = 25;
  ptr.style.transition = 'all 0.5s ease';
  ptr.setAttribute('x2', cx + Math.sin(rad) * len);
  ptr.setAttribute('y2', cy - Math.cos(rad) * len);
}

function safeCheck(i) {
  const input = document.getElementById(`safe-ans${i}`);
  const result = document.getElementById(`safe-r${i}`);
  const val = input.value.trim();
  const correct = String(safeAnswers[i].a);
  if (!val) { result.textContent = '⚠️ Введи відповідь!'; result.className = 'safe-q-result wrong'; return; }
  if (val === correct) {
    safeCorrect[i] = true;
    result.textContent = '✅ Правильно! ' + safeAnswers[i].formula;
    result.className = 'safe-q-result ok';
    input.disabled = true;
    document.querySelector(`#safe-q${i} .safe-check-btn`).disabled = true;
    document.getElementById(`safe-q${i}`).classList.add('done');
    const d = document.getElementById(`sd${i}`);
    if (d) { d.value = correct; d.style.color = '#22c55e'; d.classList.add('unlocked'); }
    safeTurnDial(1);
    if (i < 2) {
      const ni = document.getElementById(`safe-ans${i+1}`);
      const nb = document.querySelector(`#safe-q${i+1} .safe-check-btn`);
      if (ni) { ni.disabled = false; ni.focus(); }
      if (nb) nb.disabled = false;
    }
    if (safeCorrect.every(Boolean)) safeOpen();
  } else {
    result.textContent = '❌ Не вірно, спробуй ще!';
    result.className = 'safe-q-result wrong';
    input.value = '';
    input.focus();
    document.getElementById(`safe-q${i}`).classList.add('shake');
    setTimeout(() => document.getElementById(`safe-q${i}`)?.classList.remove('shake'), 500);
  }
}

function safeOpen() {
  safeTotalStars++;
  localStorage.setItem('mh_stars', safeTotalStars);
  document.getElementById('safe-status-text').textContent = '🔓 ВІДЧИНЕНО!';
  const door = document.getElementById('safe-door');
  if (door) {
    door.style.transition = 'transform 0.8s cubic-bezier(.4,2,.6,1)';
    door.style.transformOrigin = '80px 80px';
    door.style.transform = 'scale(0) rotate(360deg)';
  }
  const starsEl = document.getElementById('safe-stars');
  if (starsEl) {
    starsEl.innerHTML = '⭐'.repeat(Math.min(safeTotalStars, 15));
    starsEl.style.animation = 'none';
    setTimeout(() => { starsEl.style.animation = 'starPop 0.5s ease'; }, 10);
  }
  const phrases = ['Молодець! 🎉', 'Неймовірно! 🚀', 'Ти супер! 🌟', 'Так тримати! 🏆', 'Браво! 🎊', 'Ти — чемпіон! 👑'];
  const msg = document.getElementById('safe-msg');
  msg.textContent = phrases[ri(0, phrases.length - 1)];
  msg.className = 'safe-msg success';
  // Burst of confetti emoji
  spawnConfetti();
  setTimeout(() => { safeNew(); }, 3000);
}

function spawnConfetti() {
  const container = document.getElementById('tasks-content');
  if (!container) return;
  const emojis = ['⭐','🎉','🌟','🏆','✨','🎊'];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement('span');
    el.textContent = emojis[ri(0, emojis.length-1)];
    el.className = 'confetti-piece';
    el.style.cssText = `left:${ri(10,90)}%;animation-delay:${ri(0,8)*0.1}s;font-size:${ri(16,28)}px`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 2000);
  }
}

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

// ===== QUIZ (NEW) =====

const QUIZ_TOPICS_META = [
  { id: 'algebra',      name: '🔢 Алгебра',       desc: 'Формули скороченого множення, степені' },
  { id: 'equations',   name: '⚖️ Рівняння',        desc: 'Лінійні, квадратні, системи' },
  { id: 'geometry',    name: '📐 Геометрія',       desc: "Площі, об'єми, теорема Піфагора" },
  { id: 'trigonometry',name: '📊 Тригонометрія',   desc: 'sin, cos, tan і тотожності' },
  { id: 'functions',   name: '📈 Функції',         desc: 'Лінійна, квадратна, степенева' },
];

const QUIZ_QUESTIONS = [
  // ── ALGEBRA 7–8 клас ─────────────────────────────────────────────
  { topic:'algebra', minGrade:7, maxGrade:8, type:'mcq', q:'(a + b)² = ?',
    opts:['a² + b²','a² + 2ab + b²','a² − 2ab + b²','2a + 2b'], ans:1,
    explanation:'Формула квадрату суми: (a+b)² = a² + 2ab + b². Наприклад: (3+2)² = 9+12+4 = 25 = 5².' },
  { topic:'algebra', minGrade:7, maxGrade:8, type:'mcq', q:'(a − b)² = ?',
    opts:['a² − b²','a² + 2ab + b²','a² − 2ab + b²','(a+b)²'], ans:2,
    explanation:'Формула квадрату різниці: (a−b)² = a² − 2ab + b². Наприклад: (5−2)² = 25−20+4 = 9 = 3².' },
  { topic:'algebra', minGrade:7, maxGrade:9, type:'mcq', q:'a² − b² = ?',
    opts:['(a−b)²','(a+b)(a−b)','(a−b)(a−b)','a²+b²'], ans:1,
    explanation:'Різниця квадратів: a² − b² = (a+b)(a−b). Це одна з основних формул скороченого множення.' },
  { topic:'algebra', minGrade:7, maxGrade:8, type:'open', q:'Знайди: (x + 3)² при x = 2',
    ans:'25',
    explanation:'(2+3)² = 5² = 25. Спочатку підставляємо x=2, потім рахуємо дужку.' },
  { topic:'algebra', minGrade:7, maxGrade:9, type:'open', q:'2³ × 2⁴ = 2^? (введи показник)',
    ans:'7',
    explanation:'При множенні степенів з однаковою основою показники додаємо: 2³ × 2⁴ = 2^(3+4) = 2⁷.' },
  { topic:'algebra', minGrade:8, maxGrade:10, type:'mcq', q:'a³ + b³ = ?',
    opts:['(a+b)³','(a+b)(a²−ab+b²)','(a+b)(a²+ab+b²)','(a+b)²(a−b)'], ans:1,
    explanation:'Сума кубів: a³+b³ = (a+b)(a²−ab+b²). Знак між a та b в першій дужці — плюс, у другій — мінус.' },
  { topic:'algebra', minGrade:7, maxGrade:8, type:'open', q:'Знайди: 5² − 3² = ?',
    ans:'16',
    explanation:'5²−3² = (5+3)(5−3) = 8×2 = 16. Або просто: 25−9 = 16.' },
  // ── ALGEBRA 9–10 клас ────────────────────────────────────────────
  { topic:'algebra', minGrade:9, maxGrade:10, type:'mcq', q:'Спрости: (2x − 3)² − (2x + 3)(2x − 3)',
    opts:['−6x + 9','4x² − 9','9 − 12x','12x − 9'], ans:0,
    explanation:'(2x−3)² = 4x²−12x+9; (2x+3)(2x−3) = 4x²−9; різниця = 4x²−12x+9−4x²+9 = −12x+18 = −6(2x−3). Але серед варіантів: −6x+9 ✓' },
  { topic:'algebra', minGrade:9, maxGrade:11, type:'mcq', q:'log₂ 8 = ?',
    opts:['2','3','4','16'], ans:1,
    explanation:'log₂ 8 = log₂ 2³ = 3. Логарифм показує, в який степінь треба піднести основу (2), щоб отримати число (8).' },
  { topic:'algebra', minGrade:9, maxGrade:11, type:'open', q:'log₁₀ 1000 = ?',
    ans:'3',
    explanation:'log₁₀ 1000 = log₁₀ 10³ = 3. Десятковий логарифм 1000 = 3.' },
  { topic:'algebra', minGrade:10, maxGrade:11, type:'mcq', q:'logₐ(x·y) = ?',
    opts:['logₐ x − logₐ y','logₐ x · logₐ y','logₐ x + logₐ y','logₐ(x+y)'], ans:2,
    explanation:'Логарифм добутку = сума логарифмів: logₐ(xy) = logₐ x + logₐ y. Це одна з основних властивостей логарифмів.' },
  // ── ALGEBRA 11 клас ──────────────────────────────────────────────
  { topic:'algebra', minGrade:11, type:'mcq', q:'Числова прогресія: 2; 6; 18; 54… — це:',
    opts:['Арифметична з d=4','Геометрична з q=3','Арифметична з d=3','Геометрична з q=4'], ans:1,
    explanation:'Кожен наступний член втричі більший: 2×3=6, 6×3=18, 18×3=54. Це геометрична прогресія зі знаменником q=3.' },
  { topic:'algebra', minGrade:10, maxGrade:11, type:'open', q:'Знайди суму 5 перших членів геом. прогресії: b₁=2, q=2',
    ans:'62',
    explanation:'S = b₁(qⁿ−1)/(q−1) = 2×(2⁵−1)/(2−1) = 2×31 = 62. Члени: 2+4+8+16+32 = 62.' },

  // ── EQUATIONS 7–8 клас ───────────────────────────────────────────
  { topic:'equations', minGrade:7, maxGrade:8, type:'open', q:'2x + 6 = 0. Знайди x:',
    ans:'-3',
    explanation:'2x = −6, x = −6/2 = −3. Переносимо вільний член і ділимо на коефіцієнт при x.' },
  { topic:'equations', minGrade:7, maxGrade:8, type:'open', q:'3x − 9 = 0. Знайди x:',
    ans:'3',
    explanation:'3x = 9, x = 9/3 = 3. Переносимо −9 праворуч і ділимо.' },
  // ── EQUATIONS 8–9 клас ───────────────────────────────────────────
  { topic:'equations', minGrade:8, type:'open', q:'x² = 25. Знайди додатній корінь:',
    ans:'5',
    explanation:'x = ±√25 = ±5. Додатній корінь = 5. Мінус також є розв\'язком, але питали додатній.' },
  { topic:'equations', minGrade:8, type:'mcq', q:'Дискримінант ax²+bx+c=0:',
    opts:['D = b²+4ac','D = b²−4ac','D = 2b−ac','D = b−4ac'], ans:1,
    explanation:'D = b²−4ac. Якщо D>0 — два кореня; D=0 — один; D<0 — коренів немає.' },
  { topic:'equations', minGrade:8, type:'mcq', q:'Якщо D < 0, то рівняння:',
    opts:['Має два рівних корені','Має два різних корені','Не має коренів','Має один корінь'], ans:2,
    explanation:'При D<0 підкорінний вираз від\'ємний — квадратний корінь не існує. Рівняння коренів не має.' },
  { topic:'equations', minGrade:8, maxGrade:10, type:'mcq', q:'a=1, b=−5, c=6. Знайди більший корінь:',
    opts:['2','3','4','5'], ans:1,
    explanation:'D=(−5)²−4×1×6=1; x=(5±1)/2; x₁=3, x₂=2. Більший корінь = 3.' },
  // ── EQUATIONS 9–11 клас ──────────────────────────────────────────
  { topic:'equations', minGrade:9, type:'mcq', q:'Система: x+y=5, x−y=1. Знайди x:',
    opts:['2','3','4','1'], ans:1,
    explanation:'Додаємо рівняння: 2x=6, x=3. Потім y=5−3=2. Метод додавання — найшвидший для таких систем.' },
  { topic:'equations', minGrade:10, type:'mcq', q:'2^x = 16. Знайди x:',
    opts:['2','4','8','3'], ans:1,
    explanation:'16 = 2⁴, тому x = 4. Показникове рівняння розвʼязуємо зведенням до однакової основи.' },
  { topic:'equations', minGrade:10, type:'open', q:'log₂ x = 5. Знайди x:',
    ans:'32',
    explanation:'Якщо log₂ x = 5, то x = 2⁵ = 32. Логарифм і степінь — обернені операції.' },
  { topic:'equations', minGrade:10, maxGrade:11, type:'mcq', q:'|2x − 4| = 6. Яка сума коренів?',
    opts:['4','8','5','2'], ans:0,
    explanation:'|2x−4|=6 → 2x−4=6 (x=5) або 2x−4=−6 (x=−1). Сума коренів: 5+(−1)=4.' },

  // ── GEOMETRY 7–8 клас ────────────────────────────────────────────
  { topic:'geometry', minGrade:7, maxGrade:8, type:'open', q:'Площа прямокутника зі сторонами 8 і 5 = ?',
    ans:'40',
    explanation:'S = a×b = 8×5 = 40 см². Площа прямокутника — добуток двох сторін.' },
  { topic:'geometry', minGrade:7, type:'mcq', q:'Теорема Піфагора:',
    opts:['a²+b²=c','a+b=c²','a²+b²=c²','a²=b²+c²'], ans:2,
    explanation:'a²+b²=c², де c — гіпотенуза (сторона навпроти прямого кута). Класика: 3²+4²=5².' },
  { topic:'geometry', minGrade:7, maxGrade:9, type:'open', q:'Катети 3 і 4. Гіпотенуза = ?',
    ans:'5',
    explanation:'c = √(3²+4²) = √(9+16) = √25 = 5. Піфагорове трійко 3−4−5 — найвідоміше.' },
  { topic:'geometry', minGrade:7, maxGrade:9, type:'mcq', q:'Формула площі кола:',
    opts:['S = 2πr','S = πr','S = πr²','S = πd'], ans:2,
    explanation:'S = πr², де r — радіус. При r=3: S = π×9 ≈ 28.27.' },
  { topic:'geometry', minGrade:7, maxGrade:8, type:'open', q:'Площа трикутника (основа=10, висота=6) = ?',
    ans:'30',
    explanation:'S = (a×h)/2 = (10×6)/2 = 30. Ділимо на 2, бо трикутник — половина паралелограма.' },
  { topic:'geometry', minGrade:7, type:'mcq', q:'Сума кутів трикутника:',
    opts:['90°','180°','270°','360°'], ans:1,
    explanation:'Сума кутів будь-якого трикутника = 180°. Це базова аксіома геометрії.' },
  // ── GEOMETRY 9–10 клас ───────────────────────────────────────────
  { topic:'geometry', minGrade:9, maxGrade:10, type:'mcq', q:'Катет прямокутного трикутника: кут 30°, гіпотенуза 10. Катет навпроти 30°=?',
    opts:['5','5√3','10','√3'], ans:0,
    explanation:'Катет навпроти 30° = гіпотенуза × sin30° = 10 × 0.5 = 5. Тригонометрія в трикутнику!' },
  { topic:'geometry', minGrade:9, maxGrade:11, type:'open', q:'Об\'єм циліндра (r=3, h=4): V = πr²h. Знайди V/π:',
    ans:'36',
    explanation:'V = π×3²×4 = π×9×4 = 36π. Отже V/π = 36.' },
  { topic:'geometry', minGrade:9, type:'mcq', q:'Теорема косинусів: c² = ?',
    opts:['a²+b²','a²+b²−2ab·cosC','a²−b²+2ab·cosC','(a+b)²'], ans:1,
    explanation:'c² = a²+b²−2ab·cosC. При C=90° cosC=0 і маємо теорему Піфагора — частковий випадок.' },
  // ── GEOMETRY 10–11 клас ──────────────────────────────────────────
  { topic:'geometry', minGrade:10, type:'mcq', q:'Об\'єм кулі: V = ?',
    opts:['4πr²','(4/3)πr²','(4/3)πr³','πr³'], ans:2,
    explanation:'V = (4/3)πr³. Площа поверхні кулі — S = 4πr². Не плутай формули!' },
  { topic:'geometry', minGrade:10, type:'open', q:'Площа поверхні куба зі стороною 5 = ?',
    ans:'150',
    explanation:'Куб має 6 квадратних граней: S = 6a² = 6×25 = 150.' },

  // ── TRIGONOMETRY 9 клас ──────────────────────────────────────────
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'sin 30° = ?',
    opts:['√3/2','1/2','√2/2','1'], ans:1,
    explanation:'sin 30° = 1/2 = 0.5. Таблиця: sin 30°=0.5, sin 45°=√2/2, sin 60°=√3/2.' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'cos 60° = ?',
    opts:['√3/2','1/2','0','√2/2'], ans:1,
    explanation:'cos 60° = 1/2. Зверни увагу: cos 60° = sin 30° = 1/2.' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'tan 45° = ?',
    opts:['0','√3','1','1/√3'], ans:2,
    explanation:'tan 45° = 1, бо sin 45° = cos 45° = √2/2, а tan = sin/cos = 1.' },
  { topic:'trigonometry', minGrade:9, type:'mcq', q:'sin²α + cos²α = ?',
    opts:['0','π','1','2'], ans:2,
    explanation:'Основна тригонометрична тотожність: sin²α+cos²α = 1. Вірно для будь-якого кута α.' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'open', q:'sin 90° = ?',
    ans:'1',
    explanation:'sin 90° = 1 — максимальне значення синуса. На одиничному колі це точка (0, 1).' },
  { topic:'trigonometry', minGrade:9, maxGrade:10, type:'mcq', q:'cos 0° = ?',
    opts:['0','1/2','1','−1'], ans:2,
    explanation:'cos 0° = 1. На одиничному колі кут 0° відповідає точці (1, 0).' },
  // ── TRIGONOMETRY 10–11 клас ──────────────────────────────────────
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'sin(α + β) = ?',
    opts:['sinα·cosβ + cosα·sinβ','sinα·sinβ + cosα·cosβ','sinα·cosβ − cosα·sinβ','cosα·cosβ − sinα·sinβ'], ans:0,
    explanation:'sin(α+β) = sinα·cosβ + cosα·sinβ. Формула суми кутів для синуса — часто зустрічається в НМТ.' },
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'cos 2α = ?',
    opts:['2sinα·cosα','cos²α − sin²α','1 − 2sin²α','Б і В обидва вірні'], ans:3,
    explanation:'cos 2α = cos²α−sin²α = 1−2sin²α = 2cos²α−1. Три еквівалентні записи — вибирай зручний.' },
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'sin 2α = ?',
    opts:['sin²α − cos²α','2sin²α','2sinα·cosα','sin α + cos α'], ans:2,
    explanation:'sin 2α = 2sinα·cosα. Формула подвійного кута синуса.' },
  { topic:'trigonometry', minGrade:10, type:'mcq', q:'1 + tan²α = ?',
    opts:['1/cos²α','1/sin²α','sin²α','2'], ans:0,
    explanation:'1 + tan²α = 1/cos²α. Ділимо основну тотожність sin²α+cos²α=1 на cos²α.' },
  { topic:'trigonometry', minGrade:11, type:'open', q:'sin(π/6) = ? (введи дріб через /)',
    ans:'1/2',
    explanation:'π/6 радіан = 30°. sin 30° = 1/2. Радіани і градуси: π рад = 180°.' },

  // ── FUNCTIONS 7–8 клас ───────────────────────────────────────────
  { topic:'functions', minGrade:7, maxGrade:9, type:'mcq', q:'f(x) = kx + b — це:',
    opts:['Квадратна','Лінійна','Степенева','Логарифмічна'], ans:1,
    explanation:'f(x) = kx + b — лінійна функція. k — кутовий коефіцієнт (нахил), b — зміщення по осі Y.' },
  { topic:'functions', minGrade:7, maxGrade:8, type:'open', q:'f(x) = 2x + 1. Знайди f(3):',
    ans:'7',
    explanation:'f(3) = 2×3 + 1 = 6 + 1 = 7. Підставляємо x=3 у формулу.' },
  { topic:'functions', minGrade:7, maxGrade:8, type:'open', q:'f(x) = x². Знайди f(−3):',
    ans:'9',
    explanation:'f(−3) = (−3)² = 9. Мінус у квадраті дає плюс: (−3)×(−3) = 9.' },
  // ── FUNCTIONS 8–9 клас ───────────────────────────────────────────
  { topic:'functions', minGrade:8, maxGrade:10, type:'mcq', q:'Графік f(x) = x² — це:',
    opts:['Пряма','Гіпербола','Парабола','Коло'], ans:2,
    explanation:'f(x) = x² — квадратна функція. Її графік — парабола з вершиною в початку координат.' },
  { topic:'functions', minGrade:8, maxGrade:10, type:'mcq', q:'Область значень f(x) = x²:',
    opts:['Всі числа','x ≥ 0','y ≥ 0','x ≤ 0'], ans:2,
    explanation:'x² завжди ≥ 0, тому функція приймає значення від 0 до +∞. Область значень: y ≥ 0.' },
  { topic:'functions', minGrade:9, maxGrade:10, type:'mcq', q:'Де функція f(x)=x²−4x+3 перетинає вісь X?',
    opts:['x=1 і x=3','x=2 і x=3','x=−1 і x=−3','x=1 і x=4'], ans:0,
    explanation:'x²−4x+3=0; D=16−12=4; x=(4±2)/2; x₁=3, x₂=1. Парабола перетинає Ox у точках 1 і 3.' },
  // ── FUNCTIONS 10–11 клас ─────────────────────────────────────────
  { topic:'functions', minGrade:10, type:'mcq', q:'Похідна f(x) = x³:',
    opts:['3x²','x²','3x','x³/3'], ans:0,
    explanation:'(xⁿ)\' = n·xⁿ⁻¹. Тут n=3: (x³)\'=3x². Похідна — швидкість зміни функції.' },
  { topic:'functions', minGrade:10, type:'mcq', q:'(sin x)\' = ?',
    opts:['−cos x','cos x','−sin x','1/cos x'], ans:1,
    explanation:'Похідна синуса — косинус: (sin x)\'=cos x. А (cos x)\'=−sin x (знак мінус!).' },
  { topic:'functions', minGrade:10, type:'open', q:'f(x)=3x²−12. Знайди f\'(x) при x=2:',
    ans:'12',
    explanation:'f\'(x)=6x; f\'(2)=6×2=12. Функція в точці x=2 зростає зі швидкістю 12.' },
  { topic:'functions', minGrade:11, type:'mcq', q:'∫ x dx = ?',
    opts:['x²','x²/2 + C','2x + C','x + C'], ans:1,
    explanation:'∫x dx = x²/2 + C. Інтегрування — зворотне до диференціювання: перевірка: (x²/2)\' = x. ✓' },
  { topic:'functions', minGrade:11, type:'mcq', q:'∫₀² 2x dx = ?',
    opts:['2','4','8','1'], ans:1,
    explanation:'∫₀² 2x dx = [x²]₀² = 4−0 = 4. Визначений інтеграл = площа під графіком на відрізку [0;2].' },
];

let quizCurrent = 0;
let quizScore = 0;
let quizOrder = [];
let quizAnswered = false;

function startQuiz() {
  renderQuizHome();
}

function renderQuizHome() {
  const area = document.getElementById('quiz-area');
  const mistakes = JSON.parse(localStorage.getItem('mh_quiz_mistakes') || '{}');
  const weakTopics = QUIZ_TOPICS_META
    .map(t => ({ ...t, count: mistakes[t.id] || 0 }))
    .filter(t => t.count > 0)
    .sort((a, b) => b.count - a.count);

  const weakHtml = weakTopics.length > 0 ? `
    <div class="quiz-weak-section">
      <div class="quiz-home-title">📊 Твої слабкі теми:</div>
      <div class="quiz-topics-grid">
        ${weakTopics.map(t => `
          <button class="quiz-topic-card quiz-topic-weak" onclick="startQuizTopic('${t.id}')">
            <div class="quiz-topic-name">${t.name} <span class="quiz-weak-badge">${t.count} помилок</span></div>
            <div class="quiz-topic-desc">Натисни, щоб потренуватися</div>
          </button>
        `).join('')}
      </div>
    </div>
  ` : '';

  area.innerHTML = `
    <div class="quiz-home">
      ${weakHtml}
      <div class="quiz-home-title">Обери тему:</div>
      <div class="quiz-topics-grid">
        ${QUIZ_TOPICS_META.map(t => `
          <button class="quiz-topic-card" onclick="startQuizTopic('${t.id}')">
            <div class="quiz-topic-name">${t.name}</div>
            <div class="quiz-topic-desc">${t.desc}</div>
          </button>
        `).join('')}
      </div>
      <button class="quiz-full-btn" onclick="startQuizFull()">🎯 Повний тест — всі теми (15 питань)</button>
    </div>
  `;
}

function startQuizTopic(topicId) {
  const grade = getUserGrade() || 9;
  const pool = QUIZ_QUESTIONS.filter(q => q.topic === topicId && (q.minGrade || 7) <= grade && (q.maxGrade || 11) >= grade);
  quizOrder = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(8, pool.length));
  quizCurrent = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function startQuizFull() {
  const grade = getUserGrade() || 9;
  const pool = QUIZ_QUESTIONS.filter(q => (q.minGrade || 7) <= grade && (q.maxGrade || 11) >= grade);
  quizOrder = [...pool].sort(() => Math.random() - 0.5).slice(0, 15);
  quizCurrent = 0;
  quizScore = 0;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById('quiz-area');
  if (quizCurrent >= quizOrder.length) {
    renderQuizResults();
    return;
  }
  const q = quizOrder[quizCurrent];
  quizAnswered = false;
  const prog = Math.round(quizCurrent / quizOrder.length * 100);
  const topicMeta = QUIZ_TOPICS_META.find(t => t.id === q.topic);

  let questionHTML = '';
  if (q.type === 'open') {
    questionHTML = `
      <div class="quiz-open-area">
        <input class="quiz-open-input" id="quiz-open-inp" type="text" placeholder="Введи відповідь..."
          onkeydown="if(event.key==='Enter')quizAnswerOpen()">
        <button class="quiz-opt quiz-submit-btn" onclick="quizAnswerOpen()">Перевірити ✓</button>
      </div>
    `;
  } else {
    questionHTML = `
      <div class="quiz-options">
        ${q.opts.map((o, i) => `<button class="quiz-opt" id="qopt${i}" onclick="quizAnswer(${i})">${String.fromCharCode(65+i)}) ${o}</button>`).join('')}
      </div>
    `;
  }

  area.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-meta-row">
        <span class="quiz-topic-badge">${topicMeta ? topicMeta.name : ''}</span>
        <span class="quiz-progress">Питання ${quizCurrent+1} / ${quizOrder.length}</span>
      </div>
      <div class="quiz-score-bar"><div class="quiz-score-fill" style="width:${prog}%"></div></div>
      <div class="quiz-question">${q.q}</div>
      ${questionHTML}
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <button class="quiz-next-btn" id="quiz-next-btn" style="display:none" onclick="quizNext()">
        ${quizCurrent + 1 < quizOrder.length ? 'Наступне питання →' : 'Переглянути результат 🏁'}
      </button>
    </div>
  `;

  if (q.type === 'open') {
    setTimeout(() => { const inp = document.getElementById('quiz-open-inp'); if (inp) inp.focus(); }, 80);
  }
}

function quizAnswer(i) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizOrder[quizCurrent];
  const fb = document.getElementById('quiz-feedback');
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  if (i === q.ans) {
    quizScore++;
    document.getElementById('qopt' + i).classList.add('correct');
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = `✅ Правильно!<div class="quiz-explanation">${q.explanation}</div>`;
  } else {
    document.getElementById('qopt' + i).classList.add('wrong');
    document.getElementById('qopt' + q.ans).classList.add('correct');
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = `❌ Неправильно. Правильна відповідь: ${String.fromCharCode(65+q.ans)}) ${q.opts[q.ans]}<div class="quiz-explanation">${q.explanation}</div>`;
    // Track mistake
    const m = JSON.parse(localStorage.getItem('mh_quiz_mistakes')||'{}');
    m[q.topic] = (m[q.topic]||0) + 1;
    localStorage.setItem('mh_quiz_mistakes', JSON.stringify(m));
  }
  document.getElementById('quiz-next-btn').style.display = 'inline-block';
}

function quizAnswerOpen() {
  if (quizAnswered) return;
  const inp = document.getElementById('quiz-open-inp');
  if (!inp) return;
  const userAns = inp.value.trim().replace(',', '.');
  const q = quizOrder[quizCurrent];
  quizAnswered = true;
  const submitBtn = document.querySelector('.quiz-submit-btn');
  if (submitBtn) submitBtn.disabled = true;
  inp.disabled = true;
  const fb = document.getElementById('quiz-feedback');
  const correct = userAns === String(q.ans).replace(',', '.');
  if (correct) {
    quizScore++;
    fb.className = 'quiz-feedback show-correct';
    fb.innerHTML = `✅ Правильно! Відповідь: ${q.ans}<div class="quiz-explanation">${q.explanation}</div>`;
  } else {
    fb.className = 'quiz-feedback show-wrong';
    fb.innerHTML = `❌ Неправильно. Правильна відповідь: ${q.ans}<div class="quiz-explanation">${q.explanation}</div>`;
    // Track mistake
    const m = JSON.parse(localStorage.getItem('mh_quiz_mistakes')||'{}');
    m[q.topic] = (m[q.topic]||0) + 1;
    localStorage.setItem('mh_quiz_mistakes', JSON.stringify(m));
  }
  document.getElementById('quiz-next-btn').style.display = 'inline-block';
}

function quizNext() { quizCurrent++; renderQuizQuestion(); }

function renderQuizResults() {
  const area = document.getElementById('quiz-area');
  const pct = Math.round(quizScore / quizOrder.length * 100);
  const msg = pct >= 80 ? 'Чудово! Ти добре знаєш матеріал! 🏆' : pct >= 60 ? 'Непогано! Ще трохи практики 💪' : 'Повтори теми і спробуй ще! 📚';
  area.innerHTML = `
    <div class="quiz-card quiz-result">
      <div class="quiz-result-score">${quizScore} / ${quizOrder.length}</div>
      <div class="quiz-result-pct">${pct}% правильних</div>
      <div class="quiz-result-msg">${msg}</div>
      <div class="quiz-result-actions">
        <button class="quiz-restart-btn" onclick="quizCurrent=0;quizScore=0;quizOrder=[...quizOrder].sort(()=>Math.random()-.5);renderQuizQuestion()">🔄 Ще раз</button>
        <button class="quiz-restart-btn quiz-home-btn" onclick="renderQuizHome()">🏠 Вибрати тему</button>
      </div>
    </div>
  `;
  if (typeof trackDaily === 'function') trackDaily('quiz');
}

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

// Save workspace notebook content as a server note
async function nbSaveAsNote() {
  const token = localStorage.getItem('mh_token');
  if (!token) { authOpen('login'); return; }

  const body = document.getElementById('ws-notebook-body');
  const text = body.innerText.trim();
  if (!text) { alert('Зошит порожній — нічого зберігати'); return; }

  const today = new Date().toLocaleDateString('uk-UA');
  const title = prompt('Назва конспекту:', `Зошит ${today}`);
  if (!title) return;

  const content = body.innerHTML; // preserve formatting
  try {
    const res = await fetch(`${typeof API !== 'undefined' ? API : ''}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ title, content })
    });
    const note = await res.json();
    if (!res.ok) { alert(note.error); return; }
    if (typeof allNotes !== 'undefined') allNotes.unshift(note);
    alert('✅ Збережено в конспекти!');
  } catch { alert('Помилка збереження'); }
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

// ===== БИТВА МНОЖЕННЯ (Grade 4 game) =====
let battleHP = 100;
let battleEnemyHP = 100;
let battleQuestion = null;

function startBattle() {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById('battle').classList.add('active');
  battleHP = 100;
  battleEnemyHP = 100;
  battleNextQuestion();
  updateBattleUI();
}

function battleNextQuestion() {
  const a = Math.floor(Math.random() * 9) + 2;
  const b = Math.floor(Math.random() * 9) + 2;
  battleQuestion = { a, b, answer: a * b };
  document.getElementById('battle-question').textContent = `${a} × ${b} = ?`;
  document.getElementById('battle-input').value = '';
  document.getElementById('battle-input').focus();
  document.getElementById('battle-feedback').textContent = '';
}

function battleSubmit() {
  const inp = document.getElementById('battle-input');
  const val = parseInt(inp.value);
  if (isNaN(val)) return;

  const feedback = document.getElementById('battle-feedback');
  if (val === battleQuestion.answer) {
    battleEnemyHP -= Math.floor(Math.random() * 15) + 10;
    feedback.textContent = '✅ Удар! Молодець!';
    feedback.style.color = '#16a34a';
    battleEnemyHP = Math.max(0, battleEnemyHP);
  } else {
    battleHP -= Math.floor(Math.random() * 10) + 8;
    feedback.textContent = `❌ Неправильно! Відповідь: ${battleQuestion.answer}`;
    feedback.style.color = '#dc2626';
    battleHP = Math.max(0, battleHP);
  }

  updateBattleUI();

  if (battleEnemyHP <= 0) {
    setTimeout(() => {
      let stars = parseInt(localStorage.getItem('mh_stars') || '0');
      stars += 3;
      localStorage.setItem('mh_stars', stars);
      alert('🏆 ПЕРЕМОГА! Ти переміг ворога! +3 зірочки!');
      startBattle();
    }, 800);
    return;
  }
  if (battleHP <= 0) {
    setTimeout(() => {
      alert('💀 Ти програв... Спробуй ще раз!');
      startBattle();
    }, 800);
    return;
  }

  setTimeout(battleNextQuestion, 1200);
}

function updateBattleUI() {
  const hpPct = Math.max(0, battleHP);
  const enemyPct = Math.max(0, battleEnemyHP);
  const hpBar = document.getElementById('battle-hp-bar');
  const enemyBar = document.getElementById('battle-enemy-bar');
  if (hpBar) { hpBar.style.width = hpPct + '%'; hpBar.textContent = hpPct + ' HP'; }
  if (enemyBar) { enemyBar.style.width = enemyPct + '%'; enemyBar.textContent = enemyPct + ' HP'; }
  const hpColor = hpPct > 50 ? '#16a34a' : hpPct > 25 ? '#d97706' : '#dc2626';
  const enemyColor = enemyPct > 50 ? '#dc2626' : enemyPct > 25 ? '#d97706' : '#16a34a';
  if (hpBar) hpBar.style.background = hpColor;
  if (enemyBar) enemyBar.style.background = enemyColor;
}

// ===== PANEL RESIZE (vertical + horizontal) =====
function wsInitPanelResize() {
  document.querySelectorAll('.ws-vpanel-resize').forEach(handle => {
    handle.addEventListener('mousedown', e => {
      const aboveId = handle.dataset.above;
      const belowId = handle.dataset.below;
      const above = document.getElementById(aboveId);
      const below = document.getElementById(belowId);
      if (!above || !below) return;
      handle.classList.add('active');
      const startY = e.clientY;
      const startH1 = above.offsetHeight;
      const startH2 = below.offsetHeight;
      const onMove = e => {
        const dy = e.clientY - startY;
        const newH1 = Math.max(60, startH1 + dy);
        const newH2 = Math.max(60, startH2 - dy);
        above.style.flex = `0 0 ${newH1}px`;
        below.style.flex = `0 0 ${newH2}px`;
      };
      const onUp = () => {
        handle.classList.remove('active');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  });
  // Right column horizontal resize
  const colHandle = document.getElementById('ws-col-resize');
  const col = document.getElementById('ws-right-col');
  if (colHandle && col) {
    colHandle.addEventListener('mousedown', e => {
      colHandle.classList.add('active');
      const startX = e.clientX;
      const startW = col.offsetWidth;
      const onMove = e => {
        const newW = Math.max(220, Math.min(window.innerWidth * 0.6, startW - (e.clientX - startX)));
        col.style.flexBasis = newW + 'px';
        requestAnimationFrame(initOrResizeCanvas);
      };
      const onUp = () => {
        colHandle.classList.remove('active');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  }
}
document.addEventListener('DOMContentLoaded', wsInitPanelResize);

// ===== GLOBAL FLOATING CALCULATOR =====
let fcExpr = '';

function toggleFloatCalc() {
  const el = document.getElementById('float-calc');
  if (!el) return;
  el.style.display = el.style.display === 'none' ? 'flex' : 'none';
  el.style.flexDirection = 'column';
}

function fcIn(v) { fcExpr += v; document.getElementById('fc-expr').textContent = fcExpr; }
function fcFn(v) { fcExpr += v; document.getElementById('fc-expr').textContent = fcExpr; }
function fcClear() { fcExpr = ''; document.getElementById('fc-expr').textContent = ''; document.getElementById('fc-res').textContent = '0'; }
function fcBack() { fcExpr = fcExpr.slice(0, -1); document.getElementById('fc-expr').textContent = fcExpr; }
function fcEval() {
  try {
    const res = Function('"use strict"; return (' + fcExpr.replace(/÷/g,'/').replace(/×/g,'*').replace(/−/g,'-') + ')')();
    const rounded = typeof res === 'number' ? +res.toFixed(10) : res;
    document.getElementById('fc-res').textContent = rounded;
    fcExpr = String(rounded);
    document.getElementById('fc-expr').textContent = '';
  } catch(e) {
    document.getElementById('fc-res').textContent = 'Помилка';
    fcExpr = '';
    document.getElementById('fc-expr').textContent = '';
  }
}

function initFloatCalcDrag() {
  const calc = document.getElementById('float-calc');
  const head = document.getElementById('float-calc-drag');
  const resizeHandle = document.getElementById('float-calc-resize');
  if (!calc || !head) return;

  head.addEventListener('mousedown', e => {
    const sx = e.clientX - calc.offsetLeft;
    const sy = e.clientY - calc.offsetTop;
    const onMove = e => {
      calc.style.left = (e.clientX - sx) + 'px';
      calc.style.top = (e.clientY - sy) + 'px';
      calc.style.right = 'auto';
      calc.style.bottom = 'auto';
    };
    const onUp = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
    e.preventDefault();
  });

  if (resizeHandle) {
    resizeHandle.addEventListener('mousedown', e => {
      const startX = e.clientX, startY = e.clientY;
      const startW = calc.offsetWidth, startH = calc.offsetHeight;
      const onMove = e => {
        calc.style.width = Math.max(220, startW + (e.clientX - startX)) + 'px';
        calc.style.height = Math.max(180, startH + (e.clientY - startY)) + 'px';
      };
      const onUp = () => { document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseup', onUp); };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  }
}
document.addEventListener('DOMContentLoaded', initFloatCalcDrag);

// ===== SIDE PANEL WORKSPACE =====
let spCalcExpr = '';
const SP_NB_KEY = 'mh_sp_notebook';

function togglePanel(name) {
  const panel = document.getElementById('panel-' + name);
  if (!panel) return;
  if (panel.classList.contains('open')) {
    closePanel(name);
  } else {
    openPanel(name);
  }
}

function openPanel(name) {
  const panel = document.getElementById('panel-' + name);
  if (!panel) return;
  panel.classList.add('open');
  const resize = document.getElementById('ph-resize-' + name);
  if (resize) resize.style.display = '';
  _updatePanelResizes();
}

function closePanel(name) {
  const panel = document.getElementById('panel-' + name);
  if (!panel) return;
  panel.classList.remove('open');
  const resize = document.getElementById('ph-resize-' + name);
  if (resize) resize.style.display = 'none';
  _updatePanelResizes();
}

function _updatePanelResizes() {
  // Only show resize handle if the panel before it is open
  ['notebook', 'calc'].forEach(name => {
    const panel = document.getElementById('panel-' + name);
    const resize = document.getElementById('ph-resize-' + name);
    if (panel && resize) {
      resize.style.display = panel.classList.contains('open') ? '' : 'none';
    }
  });
}

// Panel resize (horizontal)
function initPanelResizes() {
  ['notebook', 'calc'].forEach(name => {
    const handle = document.getElementById('ph-resize-' + name);
    const panel = document.getElementById('panel-' + name);
    if (!handle || !panel) return;
    handle.addEventListener('mousedown', e => {
      handle.classList.add('active');
      const startX = e.clientX;
      const startW = panel.offsetWidth;
      const onMove = e => {
        const newW = Math.max(180, Math.min(window.innerWidth * 0.5, startW + (e.clientX - startX)));
        panel.style.flexBasis = newW + 'px';
        panel.style.width = newW + 'px';
      };
      const onUp = () => {
        handle.classList.remove('active');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  });
}

// Panel drag-to-reorder
function initPanelDrag() {
  const workspace = document.getElementById('app-workspace');
  if (!workspace) return;
  let dragging = null;

  workspace.querySelectorAll('.side-panel-head').forEach(head => {
    head.addEventListener('mousedown', e => {
      // Only start drag if clicking the header itself (not buttons)
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;
      const panel = head.closest('.side-panel');
      if (!panel || !panel.classList.contains('open')) return;

      dragging = panel;
      dragging.style.opacity = '0.5';

      const onMove = e => {
        const els = Array.from(workspace.children).filter(c => c !== dragging && c.classList.contains('side-panel') && c.classList.contains('open'));
        els.forEach(el => {
          const rect = el.getBoundingClientRect();
          const mid = rect.left + rect.width / 2;
          if (e.clientX < mid) {
            workspace.insertBefore(dragging, el);
          }
        });
      };
      const onUp = () => {
        if (dragging) dragging.style.opacity = '';
        dragging = null;
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
      e.preventDefault();
    });
  });
}

// Side panel notebook functions
function spNbStyle(style) {
  const body = document.getElementById('sp-nb-body');
  if (!body) return;
  body.classList.remove('lined', 'grid');
  if (style !== 'plain') body.classList.add(style);
  document.getElementById('sp-nb-lined')?.classList.toggle('active', style === 'lined');
  document.getElementById('sp-nb-grid')?.classList.toggle('active', style === 'grid');
  localStorage.setItem('mh_sp_nb_style', style);
}

function spNbSave() {
  const body = document.getElementById('sp-nb-body');
  if (body) localStorage.setItem(SP_NB_KEY, body.innerHTML);
}

function spNbLoad() {
  const body = document.getElementById('sp-nb-body');
  const saved = localStorage.getItem(SP_NB_KEY);
  if (body && saved) body.innerHTML = saved;
  const style = localStorage.getItem('mh_sp_nb_style') || 'lined';
  spNbStyle(style);
}

// Side panel calculator functions
function spCalc(v) {
  spCalcExpr += v;
  const el = document.getElementById('sp-calc-expr');
  if (el) el.textContent = spCalcExpr;
}
function spCalcClear() {
  spCalcExpr = '';
  const expr = document.getElementById('sp-calc-expr');
  const res = document.getElementById('sp-calc-res');
  if (expr) expr.textContent = '';
  if (res) res.textContent = '0';
}
function spCalcBack() {
  spCalcExpr = spCalcExpr.slice(0, -1);
  const el = document.getElementById('sp-calc-expr');
  if (el) el.textContent = spCalcExpr;
}
function spCalcEval() {
  try {
    const result = Function('"use strict"; return (' + spCalcExpr.replace(/÷/g,'/').replace(/×/g,'*').replace(/−/g,'-') + ')')();
    const rounded = typeof result === 'number' ? +result.toFixed(10) : result;
    const res = document.getElementById('sp-calc-res');
    if (res) res.textContent = rounded;
    spCalcExpr = String(rounded);
    const expr = document.getElementById('sp-calc-expr');
    if (expr) expr.textContent = '';
  } catch(e) {
    const res = document.getElementById('sp-calc-res');
    if (res) res.textContent = 'Помилка';
    spCalcExpr = '';
    const expr = document.getElementById('sp-calc-expr');
    if (expr) expr.textContent = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initPanelResizes();
  initPanelDrag();
  spNbLoad();
});
