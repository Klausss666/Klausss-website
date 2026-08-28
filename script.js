'use strict';
/* ═══════════════════════════════════════════════════════════
   GAO WEIXUAN KLAUS — Personal Archive
   交互脚本：中英切换 / 滚动锁定 / 目录跳转 / 气泡注释卡（简介+技能）
   封面：滚动旋转 + 鼠标视差
   ───────────────────────────────────────────────────────────
   ▸ 修改文案：直接改下方 I18N 对象（zh 中文 / en 英文）
     英文为初译，可逐句替换；固定名词（GAO WEIXUAN Klaus、
     Office、Claude Code、ChatGPT、VSCode 等）不参与翻译。
   ═══════════════════════════════════════════════════════════ */

/* ═══════════ 文案（中 / 英） ═══════════ */

const I18N = {
    zh: {
        /* 目录 */
        "nav.home": "封面", "nav.about": "简介", "nav.edu": "教育",
        "nav.exp": "实习", "nav.lead": "学生工作", "nav.skills": "技能",
        "nav.contact": "联系",
        /* 封面 */
        "cover.hi": "HI，我是高炜轩",
        "cover.hint": "点击左侧目录，开始阅读",
        /* 简介 */
        "about.title": "关于我",
        "about.sub": "The Profile",
        "about.hint": "悬浮 / 点击关键词查看",
        "about.caption": "形象照 — 高炜轩",
        "about.k1": "光华法学院", "about.k2": "商务英语",
        "about.k3": "SaaS · 云计算", "about.k4": "逻辑思维",
        "about.n1": "浙江大学光华法学院，法学硕士在读；接受系统的法学训练，以法律逻辑拆解问题。",
        "about.n2": "熟悉商业世界的表达方式，以用户思维推进营销与销售策略；英语专业八级，CET-6 603 分，雅思 7.5，可作为工作语言流畅完成商务沟通与书面往来。",
        "about.n3": "持续关注 SaaS 与云计算解决方案，对 B2B 商业化路径保有独到的观察。",
        "about.n4": "目标导向，抗压性强，习惯在不确定中把事情做成；逻辑严谨，善于沟通与表达。",
        "about.quote": "「语言，是另一套法律之外的严谨工具。」",
        /* 教育 */
        "edu.title": "教育背景",
        "edu.sub": "Education",
        "edu1.years": "2025.09 — 至今",
        "edu1.school": "浙江大学 光华法学院",
        "edu1.en": "Guanghua Law School · Zhejiang University",
        "edu1.meta": "法学硕士（在读）",
        "edu2.years": "2021.09 — 2025.06",
        "edu2.school": "浙江工业大学 外国语学院",
        "edu2.en": "School of Foreign Languages · Zhejiang University of Technology",
        "edu2.meta": "本科 · 英语专业（辅修法学）",
        "edu.honors": "「21世纪杯」全国中学生英语演讲比赛一等奖 · 赛学杯全国中学生英语写作大赛一等奖 · 英语专业四级（TEM-4）· 英语专业八级（TEM-8）",
        "edu.fig": "校园档案",
        /* 实习 */
        "exp.title": "实习经历",
        "exp.sub": "Experience",
        "exp1.tag": "金融团队",
        "exp1.title": "北京金诚同达（杭州）律师事务所",
        "exp1.role": "实习生 · 2024.12 — 2025.06",
        "exp1.copy": "在金融团队实习期间，深度参与客户会议与尽职调查，协助律师完成合同审查、风险分析与法律检索，处理涉外法律文书与英文邮件往来，并整理尽调底稿、跟进项目文件。在真实商业纠纷的现场，练习把法律分析转译为客户听得懂的风险策略——这同样是销售与谈判的核心语言。",
        "exp1.cap": "金诚同达 · 实习留影",
        "exp1.cap2": "工作记录",
        "exp2.tag": "民商事审判",
        "exp2.title": "杭州市中级人民法院",
        "exp2.role": "法官助理（实习）· 2026.04 — 2026.07",
        "exp2.copy": "独立撰写、修改 50 余份民商事判决书，系统梳理案件卷宗，建立证据索引；协助法官完成庭审记录、类案检索与文书校对，熟悉从立案到裁判的完整流程。在裁判文书的字句之间，获得对商事纠纷解决机制最直接的实务认知。",
        "exp2.cap": "杭州市中级人民法院 · 实习留影",
        /* 学生工作 */
        "lead.title": "学生工作",
        "lead.sub": "Leadership",
        "lead1.tag": "文体部",
        "lead1.title": "浙江大学光华法学院 · 研究生文体部部长",
        "lead1.role": "部长 · 2025.09 — 至今",
        "lead1.copy": "统筹学院文体活动，负责与商家谈判对接、预算控制与团队分工，策划并落地多场院级赛事与演出——把每一场活动当作一次小型的商业项目来管理，在资源有限的情况下保证执行质量。",
        "lead1.cap": "任职记录",
        "lead2.tag": "演讲俱乐部",
        "lead2.title": "浙江工业大学 · 演讲俱乐部负责人",
        "lead2.role": "负责人 · 2022.09 — 2024.06",
        "lead2.copy": "组织英语角与辩论赛，制定活动选题与培训计划，训练成员的公众表达与说服能力；担任多场活动的主持人，把控现场节奏。语言不只是工具，更是影响力本身。",
        "lead3.tag": "礼宾接待",
        "lead3.title": "杭州亚运会 · 礼宾接待",
        "lead3.role": "志愿者 · 2023.09 — 2023.10",
        "lead3.copy": "在杭州亚运会期间承担礼宾接待工作，接待日本代表队及各国贵宾，全程英文讲解；负责行程协调与突发情况应对，在跨文化场景中完成沟通、协调与应变。",
        "lead3.cap": "杭州亚运会 · 礼宾接待留影",
        /* 技能 */
        "skills.title": "技能与兴趣",
        "skills.sub": "Skills & Interests",
        "skills.hint": "悬浮 / 点击查看",
        "sk1.name": "AI 工具",
        "sk1.desc": "熟练使用 Claude Code、ChatGPT 等大模型；可用 VSCode 独立搭建个人网站与小游戏（本站即为一例）",
        "sk2.name": "英语",
        "sk2.desc": "流利听说读写，可作为工作语言",
        "sk3.name": "Office",
        "sk3.desc": "三件套熟练运用",
        "sk4.name": "法律",
        "sk4.desc": "法律文书撰写与合同审查",
        "sk5.name": "作品",
        "sk5.desc": "扭蛋机小游戏，纯前端手工实现，点击 PLAY 即可试玩",
        "sk6.name": "兴趣",
        "sk6.desc": "B2B 商业化 · SaaS 与云计算解决方案",
        /* 联系方式 */
        "contact.title": "联系方式",
        "contact.sub": "Say Hello",
        "contact.lead": "有合作机会或任何想法，欢迎来信",
        "contact.btn": "发邮件",
        "contact.avail": "随时到岗",
        /* 页脚 */
        "footer.note": "本页以 HTML · CSS · JS 手工排版",
        "footer.top": "↑ 回到封面"
    },

    en: {
        /* 目录 */
        "nav.home": "Cover", "nav.about": "About", "nav.edu": "Edu",
        "nav.exp": "Exp", "nav.lead": "Lead", "nav.skills": "Skills",
        "nav.contact": "Contact",
        /* 封面 */
        "cover.hi": "Hi, I'm Gao Weixuan",
        "cover.hint": "Use the index on the left to start reading",
        /* 简介 */
        "about.title": "About",
        "about.sub": "关于",
        "about.hint": "Hover or tap a keyword",
        "about.caption": "Portrait — Gao Weixuan",
        "about.k1": "Guanghua Law School", "about.k2": "Business English",
        "about.k3": "SaaS · Cloud", "about.k4": "Logical Thinking",
        "about.n1": "Master of Law candidate at Guanghua Law School, Zhejiang University — rigorous legal training, dissecting problems with legal logic.",
        "about.n2": "Fluent in the language of business, driving marketing and sales strategy with a user-first mindset; TEM-8, CET-6 603, IELTS 7.5 — a full working language for business communication and correspondence.",
        "about.n3": "Following SaaS and cloud-computing solutions closely, with a distinct view of B2B commercialization.",
        "about.n4": "Goal-driven and resilient, getting things done amid uncertainty; clear logic, strong communication.",
        "about.quote": "“Language is another rigorous instrument beyond the law.”",
        /* 教育 */
        "edu.title": "Education",
        "edu.sub": "教育",
        "edu1.years": "2025.09 — Present",
        "edu1.school": "Guanghua Law School · Zhejiang University",
        "edu1.en": "浙江大学 光华法学院",
        "edu1.meta": "Master of Law (in progress)",
        "edu2.years": "2021.09 — 2025.06",
        "edu2.school": "School of Foreign Languages · Zhejiang University of Technology",
        "edu2.en": "浙江工业大学 外国语学院",
        "edu2.meta": "B.A. in English · Minor in Law",
        "edu.honors": "1st Prize, “21st Century Cup” National High School English Speaking Competition · 1st Prize, “Sai Xue Cup” National High School English Writing Competition · TEM-4 · TEM-8",
        "edu.fig": "Campus archive",
        /* 实习 */
        "exp.title": "Experience",
        "exp.sub": "实习",
        "exp1.tag": "Finance Team",
        "exp1.title": "Jincheng Tongda & Neal (Hangzhou)",
        "exp1.role": "Intern · 2024.12 — 2025.06",
        "exp1.copy": "During my time with the finance team, I took part in client meetings and due diligence, assisting lawyers with contract review, risk analysis and legal research; I handled cross-border legal documents and English correspondence, and organized due-diligence files and project materials. At the front line of real commercial disputes, I learned to translate legal analysis into risk strategies clients can act on — the core language of both sales and negotiation.",
        "exp1.cap": "At Jincheng Tongda & Neal",
        "exp1.cap2": "Work notes",
        "exp2.tag": "Civil & Commercial",
        "exp2.title": "Hangzhou Intermediate People's Court",
        "exp2.role": "Judge Assistant (Intern) · 2026.04 — 2026.07",
        "exp2.copy": "Drafted and revised 50+ civil and commercial judgments, organized case files and built evidence indexes; assisted judges with hearing notes, case-law research and document proofing, gaining familiarity with the full process from filing to judgment. Between the lines of judicial opinions, I gained first-hand insight into how commercial disputes are actually resolved.",
        "exp2.cap": "At Hangzhou Intermediate People's Court",
        /* 学生工作 */
        "lead.title": "Leadership",
        "lead.sub": "学生工作",
        "lead1.tag": "Culture & Sports",
        "lead1.title": "Minister of Culture & Sports · Guanghua Law School",
        "lead1.role": "Minister · 2025.09 — Present",
        "lead1.copy": "Coordinated school-wide cultural and sports events, negotiated with sponsors and vendors, managed budgets and deployed team responsibilities — planning and delivering a series of campus competitions and performances. I ran every event like a small commercial project, keeping quality high with limited resources.",
        "lead1.cap": "Appointment record",
        "lead2.tag": "Speech Club",
        "lead2.title": "Head of the English Speech Club · ZJUT",
        "lead2.role": "Head · 2022.09 — 2024.06",
        "lead2.copy": "Organized English corners and debate competitions, planned topics and training programs, and coached members in public speaking and persuasion; hosted many events as MC. Language is not just a tool — it is influence.",
        "lead3.tag": "Protocol",
        "lead3.title": "Protocol Reception · Hangzhou Asian Games",
        "lead3.role": "Volunteer · 2023.09 — 2023.10",
        "lead3.copy": "Served in protocol reception during the Hangzhou Asian Games, receiving the Japanese delegation and distinguished guests from around the world and guiding them in English; handled schedule coordination and contingencies — communication, coordination and composure in cross-cultural settings.",
        "lead3.cap": "At the Hangzhou Asian Games",
        /* 技能 */
        "skills.title": "Skills & Interests",
        "skills.sub": "技能",
        "skills.hint": "Hover or tap a skill",
        "sk1.name": "AI Tools",
        "sk1.desc": "Proficient with Claude Code, ChatGPT and other large models; built this site and mini-games from scratch with VSCode (this site is one of them)",
        "sk2.name": "English",
        "sk2.desc": "Fluent in listening, speaking, reading and writing — a full working language",
        "sk3.name": "Office",
        "sk3.desc": "Proficient in the Office suite",
        "sk4.name": "Law",
        "sk4.desc": "Legal drafting and contract review",
        "sk5.name": "Work",
        "sk5.desc": "A gacha mini-game, hand-built in vanilla front-end — hit PLAY to try it",
        "sk6.name": "Interests",
        "sk6.desc": "B2B commercialization · SaaS & cloud solutions",
        /* 联系方式 */
        "contact.title": "Contact",
        "contact.sub": "联系方式",
        "contact.lead": "For opportunities or just to say hi — drop me a line",
        "contact.btn": "Email me",
        "contact.avail": "Open to work",
        /* 页脚 */
        "footer.note": "Set in HTML · CSS · JS by hand",
        "footer.top": "↑ Back to cover"
    }
};

/* ═══════════ 语言切换 ═══════════ */

let lang = 'zh';
try { lang = localStorage.getItem('gwx-lang') || 'zh'; } catch (e) { /* 文件协议下忽略 */ }

function t(key) {
    const v = I18N[lang] && I18N[lang][key];
    return (v !== undefined && v !== null) ? v : (I18N.zh[key] || '');
}

function applyLang() {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = t(el.dataset.i18n);
        if (v !== undefined && v !== null) el.innerHTML = v;
    });
    document.querySelectorAll('.lang-btn').forEach(b =>
        b.classList.toggle('is-active', b.dataset.lang === lang));
    setNote(activeNote, false);
    setSkillNote(activeSkill, false);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        lang = btn.dataset.lang;
        try { localStorage.setItem('gwx-lang', lang); } catch (e) { /* 忽略 */ }
        applyLang();
    });
});

/* ═══════════ 简介 · 关键词气泡 → 注释卡 ═══════════ */

const NOTES = [
    { t: 'about.k1', b: 'about.n1' },
    { t: 'about.k2', b: 'about.n2' },
    { t: 'about.k3', b: 'about.n3' },
    { t: 'about.k4', b: 'about.n4' }
];
const noteCard = document.getElementById('noteCard');
const noteTitle = document.getElementById('noteTitle');
const noteBody = document.getElementById('noteBody');
const noteNo = noteCard.querySelector('.note-no');
const bubbles = Array.from(document.querySelectorAll('.bubble'));
let activeNote = 0;

function setNote(i, animate = true) {
    activeNote = i;
    if (animate) {
        noteCard.classList.remove('swap');
        void noteCard.offsetWidth;            /* 强制回流以重启动画 */
        noteCard.classList.add('swap');
    }
    noteNo.textContent = 'Nº 0' + (i + 1);
    noteTitle.textContent = t(NOTES[i].t);
    noteBody.textContent = t(NOTES[i].b);
    bubbles.forEach((b, j) => b.classList.toggle('is-active', j === i));
}

bubbles.forEach((b, i) => {
    b.addEventListener('mouseenter', () => setNote(i));  /* 桌面悬浮 */
    b.addEventListener('focus', () => setNote(i));       /* 键盘焦点 */
    b.addEventListener('click', () => setNote(i));       /* 触屏点击 */
});

/* ═══════════ 技能 · 气泡 → 注释卡（作品项显示 PLAY） ═══════════ */

const SKILL_NOTES = [
    { t: 'sk1.name', b: 'sk1.desc', url: '' },
    { t: 'sk2.name', b: 'sk2.desc', url: '' },
    { t: 'sk3.name', b: 'sk3.desc', url: '' },
    { t: 'sk4.name', b: 'sk4.desc', url: '' },
    { t: 'sk5.name', b: 'sk5.desc', url: 'game/index.html' },
    { t: 'sk6.name', b: 'sk6.desc', url: '' }
];
const skillNote = document.getElementById('skillNote');
const skillTitle = document.getElementById('skillNoteTitle');
const skillBody = document.getElementById('skillNoteBody');
const skillNo = skillNote.querySelector('.note-no');
const skillPlay = document.getElementById('skillPlay');
const sBubbles = Array.from(document.querySelectorAll('.s-bubble'));
let activeSkill = 0;

function setSkillNote(i, animate = true) {
    activeSkill = i;
    if (animate) {
        skillNote.classList.remove('swap');
        void skillNote.offsetWidth;            /* 强制回流以重启动画 */
        skillNote.classList.add('swap');
    }
    skillNo.textContent = 'Nº 0' + (i + 1);
    skillTitle.textContent = t(SKILL_NOTES[i].t);
    skillBody.textContent = t(SKILL_NOTES[i].b);
    skillPlay.hidden = !SKILL_NOTES[i].url;
    sBubbles.forEach((b, j) => b.classList.toggle('is-active', j === i));
}

sBubbles.forEach((b, i) => {
    b.addEventListener('mouseenter', () => setSkillNote(i));  /* 桌面悬浮 */
    b.addEventListener('focus', () => setSkillNote(i));       /* 键盘焦点 */
    b.addEventListener('click', () => setSkillNote(i));       /* 触屏点击 */
});

/* ═══════════ 初始锁定：只展示封面 ═══════════ */

const htmlEl = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
htmlEl.classList.add('lock');

let unlocked = false;
function unlock() {
    if (unlocked) return;
    unlocked = true;
    htmlEl.classList.remove('lock');
    document.body.classList.add('unlocked');   /* 封面提示淡出 */
}

function blockScroll(e) { if (!unlocked) e.preventDefault(); }
window.addEventListener('wheel', blockScroll, { passive: false });
window.addEventListener('touchmove', blockScroll, { passive: false });
document.addEventListener('keydown', e => {
    if (!unlocked && ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
    }
});

/* ═══════════ 目录点击 → 解锁 + 平滑滚动 ═══════════ */

const sections = Array.from(document.querySelectorAll('main section[id]'));

function smoothTo(y) {
    return new Promise(resolve => {
        const from = window.scrollY;
        const dist = y - from;
        if (reduceMotion || Math.abs(dist) < 2) {
            window.scrollTo(0, y);
            resolve();
            return;
        }
        htmlEl.classList.add('anim');          /* 关闭 scroll-snap，避免拉扯 */
        const dur = Math.min(1500, 650 + Math.abs(dist) * 0.28);
        let t0 = null;
        function frame(ts) {
            if (t0 === null) t0 = ts;
            const p = Math.min(1, (ts - t0) / dur);
            const e = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
            window.scrollTo(0, from + dist * e);
            if (p < 1) requestAnimationFrame(frame);
            else { htmlEl.classList.remove('anim'); resolve(); }
        }
        requestAnimationFrame(frame);
    });
}

document.querySelectorAll('[data-target]').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        const sec = document.getElementById(el.dataset.target);
        if (!sec) return;
        unlock();
        smoothTo(sec.getBoundingClientRect().top + window.scrollY);
    });
});

/* ═══════════ 滚动时目录高亮 ═══════════ */

const railItems = Array.from(document.querySelectorAll('.rail-item'));
function setActive(id) {
    railItems.forEach(it => it.classList.toggle('is-active', it.dataset.target === id));
}
const spy = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) setActive(en.target.id); });
}, { rootMargin: '-45% 0px -45% 0px' });
sections.forEach(s => spy.observe(s));

/* ═══════════ 封面 · 滚动进度（驱动旋转/视差） ═══════════ */

let spTicking = false;
function updateSp() {
    const sp = Math.min(1, Math.max(0, window.scrollY / Math.max(1, window.innerHeight)));
    htmlEl.style.setProperty('--sp', sp.toFixed(3));
    spTicking = false;
}
window.addEventListener('scroll', () => {
    if (!spTicking) { spTicking = true; requestAnimationFrame(updateSp); }
}, { passive: true });

/* ═══════════ 封面 · 鼠标视差（仅指针设备） ═══════════ */

const coverStage = document.getElementById('coverStage');
if (coverStage && window.matchMedia('(hover: hover)').matches) {
    coverStage.addEventListener('mousemove', e => {
        const r = coverStage.getBoundingClientRect();
        if (r.height === 0) return;
        const mx = (e.clientX - r.left) / r.width * 2 - 1;
        const my = (e.clientY - r.top) / r.height * 2 - 1;
        coverStage.style.setProperty('--mx', mx.toFixed(3));
        coverStage.style.setProperty('--my', my.toFixed(3));
    });
    coverStage.addEventListener('mouseleave', () => {
        coverStage.style.setProperty('--mx', 0);
        coverStage.style.setProperty('--my', 0);
    });
}

/* ═══════════ 入场动效 ═══════════ */

const rvIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
        if (en.isIntersecting) {
            en.target.classList.add('in');
            rvIO.unobserve(en.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.rv').forEach(el => rvIO.observe(el));

/* ═══════════ 图片缺失占位（放入同名图片后自动恢复） ═══════════ */

document.querySelectorAll('.media img').forEach(img => {
    const fig = img.closest('.media');
    const mark = () => fig.classList.add('is-empty');
    if (img.complete && img.naturalWidth === 0) mark();
    else {
        img.addEventListener('error', mark);
        img.addEventListener('load', () => fig.classList.remove('is-empty'));
    }
});

/* ═══════════ 启动 ═══════════ */

applyLang();
