const Slots = [
  {id: 1, type: 'hero', name:"Академия магов #1"},
  {id: 2, type: 'hero', name:"Академия магов #2"},
  {id: 3, type: 'hero', name:"Маяк #1"},
  {id: 4, type: 'hero', name:"Маяк #2"},
  {id: 5, type: 'hero', name:"Казармы #1"},
  {id: 6, type: 'hero', name:"Казармы #2"},
  {id: 7, type: 'titan', name:"Мост #1"},
  {id: 8, type: 'titan', name:"Мост #3"},
  {id: 9, type: 'titan', name:"Мост #3"},
  {id: 10, type: 'titan', name:"Источник Стихий #1"},
  {id: 11, type: 'titan', name:"Источник Стихий #2"},
  {id: 12, type: 'titan', name:"Источник Стихий #3"},
  {id: 13, type: 'hero', name:"Литейная #1"},
  {id: 14, type: 'hero', name:"Литейная #2"},
  {id: 15, type: 'hero', name:"Литейная #3"},
  {id: 16, type: 'titan', name:"Врата #1"},
  {id: 17, type: 'titan', name:"Врата #2"},
  {id: 18, type: 'titan', name:"Врата #3"},
  {id: 19, type: 'titan', name:"Бастион Огня #1"},
  {id: 20, type: 'titan', name:"Бастион Огня #2"},
  {id: 21, type: 'titan', name:"Бастион Огня #3"},
  {id: 22, type: 'titan', name:"Бастион Льда #1"},
  {id: 23, type: 'titan', name:"Бастион Льда #2"},
  {id: 24, type: 'titan', name:"Бастион Льда #3"},
  {id: 25, type: 'hero', name:"Цитадель #1"},
  {id: 26, type: 'hero', name:"Цитадель #2"},
  {id: 27, type: 'hero', name:"Цитадель #3"},
  {id: 28, type: 'hero', name:"Цитадель #4"},
  {id: 29, type: 'hero', name:"Цитадель #5"},
  {id: 30, type: 'hero', name:"Цитадель #6"},
  {id: 31, type: 'hero', name:"Академия магов #3"},
  {id: 32, type: 'hero', name:"Маяк #3"},
  {id: 33, type: 'hero', name:"Казармы #3"},
  {id: 34, type: 'titan', name:"Мост #4"},
  {id: 35, type: 'titan', name:"Источник Стихий #4"},
  {id: 36, type: 'hero', name:"Литейная #4"},
  {id: 37, type: 'titan', name:"Врата #4"},
  {id: 38, type: 'titan', name:"Бастион Огня #4"},
  {id: 39, type: 'titan', name:"Бастион Льда #4"},
  {id: 40, type: 'hero', name:"Цитадель #7"},
];

const CROSS_SLOTS = [
  {id: 1, type: 'hero', name:"Акадеимя Магов #1"},
  {id: 2, type: 'hero', name:"Акадеимя Магов #2"},
  {id: 3, type: 'hero', name:"Акадеимя Магов #3"},
  {id: 5, type: 'hero', name:"Маяк #1"},
  {id: 6, type: 'hero', name:"Маяк #2"},
  {id: 7, type: 'hero', name:"Маяк #3"},
  {id: 8, type: 'hero', name:"Маяк #4"},
  {id: 9, type: 'hero', name:"Маяк #5"},
  {id: 12, type: 'hero', name:"Казармы #1"},
  {id: 13, type: 'hero', name:"Казармы #2"},
  {id: 14, type: 'hero', name:"Казармы #3"},
  {id: 15, type: 'titan', name:"Мост #1"},
  {id: 16, type: 'titan', name:"Мост #2"},
  {id: 17, type: 'titan', name:"Мост #3"},
  {id: 18, type: 'titan', name:"Мост #4"},
  {id: 19, type: 'titan', name:"Мост #5"},
  {id: 20, type: 'titan', name:"Мост #6"},
  {id: 21, type: 'hero', name:"Инженериум #1"},
  {id: 22, type: 'hero', name:"Инженериум #2"},
  {id: 23, type: 'hero', name:"Инженериум #3"},
  {id: 24, type: 'hero', name:"Инженериум #4"},
  {id: 25, type: 'hero', name:"Инженериум #5"},
  {id: 26, type: 'titan', name:"Источник Стихий #1"},
  {id: 27, type: 'titan', name:"Источник Стихий #2"},
  {id: 28, type: 'titan', name:"Источник Стихий #3"},
  {id: 29, type: 'titan', name:"Источник Стихий #4"},
  {id: 30, type: 'hero', name:"Литейная #1"},
  {id: 31, type: 'hero', name:"Литейная #2"},
  {id: 32, type: 'hero', name:"Литейная #3"},
  {id: 33, type: 'hero', name:"Литейная #4"},
  {id: 34, type: 'hero', name:"Литейная #5"},
  {id: 35, type: 'titan', name:"Врата Природы #1"},
  {id: 36, type: 'titan', name:"Врата Природы #2"},
  {id: 37, type: 'titan', name:"Врата Природы #3"},
  {id: 38, type: 'titan', name:"Врата Природы #4"},
  {id: 39, type: 'titan', name:"Бастион Огня #1"},
  {id: 40, type: 'titan', name:"Бастион Огня #2"},
  {id: 41, type: 'titan', name:"Бастион Огня #3"},
  {id: 42, type: 'titan', name:"Бастион Огня #4"},
  {id: 43, type: 'titan', name:"Бастион Льда #1"},
  {id: 44, type: 'titan', name:"Бастион Льда #2"},
  {id: 45, type: 'titan', name:"Бастион Льда #3"},
  {id: 46, type: 'titan', name:"Бастион Льда #4"},
  {id: 47, type: 'titan', name:"Призма Эфира #1"},
  {id: 48, type: 'titan', name:"Призма Эфира #2"},
  {id: 49, type: 'titan', name:"Призма Эфира #3"},
  {id: 50, type: 'titan', name:"Призма Эфира #4"},
  {id: 51, type: 'titan', name:"Призма Эфира #5"},
  {id: 52, type: 'hero', name:"Стрельбище #1"},
  {id: 53, type: 'hero', name:"Стрельбище #2"},
  {id: 54, type: 'hero', name:"Стрельбище #3"},
  {id: 55, type: 'hero', name:"Стрельбище #4"},
  {id: 56, type: 'hero', name:"Стрельбище #5"},
  {id: 57, type: 'hero', name:"Бастион #1"},
  {id: 58, type: 'hero', name:"Бастион #2"},
  {id: 59, type: 'hero', name:"Бастион #3"},
  {id: 60, type: 'hero', name:"Бастион #4"},
  {id: 61, type: 'hero', name:"Бастион #5"},
  {id: 62, type: 'titan', name:"Алтарь Жизни #1"},
  {id: 63, type: 'titan', name:"Алтарь Жизни #2"},
  {id: 64, type: 'titan', name:"Алтарь Жизни #3"},
  {id: 65, type: 'titan', name:"Алтарь Жизни #4"},
  {id: 66, type: 'titan', name:"Алтарь Жизни #5"},
  {id: 67, type: 'hero', name:"Мост Героев #1"},
  {id: 68, type: 'hero', name:"Мост Героев #2"},
  {id: 69, type: 'hero', name:"Мост Героев #3"},
  {id: 70, type: 'hero', name:"Мост Героев #4"},
  {id: 71, type: 'hero', name:"Мост Героев #5"},
  {id: 72, type: 'hero', name:"Мост Героев #6"},
  {id: 73, type: 'hero', name:"Башня Алхимии #1"},
  {id: 74, type: 'hero', name:"Башня Алхимии #2"},
  {id: 75, type: 'hero', name:"Башня Алхимии #3"},
  {id: 76, type: 'hero', name:"Башня Алхимии #4"},
  {id: 77, type: 'hero', name:"Башня Алхимии #5"},
  {id: 78, type: 'hero', name:"Ратуша #1"},
  {id: 79, type: 'hero', name:"Ратуша #2"},
  {id: 80, type: 'hero', name:"Ратуша #3"},
  {id: 81, type: 'hero', name:"Ратуша #4"},
  {id: 82, type: 'hero', name:"Ратуша #5"},
  {id: 83, type: 'titan', name:"Храм Солнца #1"},
  {id: 84, type: 'titan', name:"Храм Солнца #2"},
  {id: 85, type: 'titan', name:"Храм Солнца #3"},
  {id: 86, type: 'titan', name:"Храм Солнца #4"},
  {id: 87, type: 'titan', name:"Храм Луны #1"},
  {id: 88, type: 'titan', name:"Храм Луны #2"},
  {id: 89, type: 'titan', name:"Храм Луны #3"},
  {id: 90, type: 'titan', name:"Храм Луны #4"},
  {id: 91, type: 'hero', name:"Цитадель #1"},
  {id: 92, type: 'hero', name:"Цитадель #2"},
  {id: 93, type: 'hero', name:"Цитадель #3"},
  {id: 94, type: 'hero', name:"Цитадель #4"},
  {id: 95, type: 'hero', name:"Цитадель #5"},
  {id: 96, type: 'hero', name:"Цитадель #6"},
  {id: 97, type: 'hero', name:"Цитадель #7"},
  {id: 98, type: 'hero', name:"Цитадель #8"}
];

const TITANS = {
  4000: 'Сигурд',
  4001: 'Нова',
  4002: 'Маири',
  4003: 'Гиперион',
  4010: 'Молох',
  4011: 'Вулкан',
  4012: 'Игнис',
  4013: 'Араджи',
  4020: 'Ангус',
  4021: 'Сильва',
  4022: 'Авалон',
  4023: 'Эдем',
  4030: 'Брустар',
  4031: 'Керос',
  4032: 'Мор',
  4033: 'Тенебрис',
  4040: 'Ригель',
  4041: 'Амон',
  4042: 'Ияри',
  4043: 'Солярис'
}

const SPIRIT = {
  4002: 'fire',
  4001: 'water',
  4003: 'earth',
  4004: 'dark',
  4005: 'ligth'
}

const SUPERTITANS = [4003, 4013, 4023, 4033, 4043];

const PETS = {
  6000: 'Фенрис',
  6001: 'Оливер',
  6002: 'Мерлин',
  6003: 'Мара',
  6004: 'Каин',
  6005: 'Альбус',
  6006: 'Аксель',
  6007: 'Бисквит',
  6008: 'Хорус'
}

const HEROES = {
  1: "Аврора",
  2: "Галахад",
  3: "Кира",
  4: "Астарот",
  5: "Кай",
  6: "Фобос",
  7: "Тея",
  8: "Сорвиголова",
  9: "Хайди",
  10: "Безликий",
  11: "Чаба",
  12: "Арахна",
  13: "Орион",
  14: "Фокс",
  15: "Джинджер",
  16: "Данте",
  17: "Моджо",
  18: "Судья",
  19: "Темная Зыезда",
  20: "Артемис",
  21: "Маркус",
  22: "Пеппи",
  23: "Лиен",
  24: "Тесак",
  25: "Исмаил",
  26: "Лилит",
  27: "Лютер",
  28: "Цин Мао",
  29: "Данте",
  30: "Корнелиус",
  31: "Джет",
  32: "Гелиос",
  33: "Ларс",
  34: "Криста",
  35: "Йорген",
  36: "Майя",
  37: "Джу",
  38: "Эльмир",
  39: "Зири",
  40: "Небула",
  41: "Карх",
  42: "Руфус",
  43: "Селеста",
  44: "Астрид и Лукас",
  45: "Сатори",
  46: "Марта",
  47: "Андваре",
  48: "Себастиан",
  49: "Ясмин",
  50: "Корвус",
  51: "Морриган",
  52: "Айзек",
  53: "Альванор",
  54: "Тристан",
  55: "Айрис",
  56: "Амира",
  57: "Фафнир",
  58: "Кейла",
  59: "Эйден",
  60: "Муши и Шрум",
  61: "Юлиус"
}

const HCOLORS = {
  1: {name: 'Белый', group: 1},
  2: {name: 'Зеленый', group: 2},
  3: {name: 'Зеленый+1', group: 2},
  4: {name: 'Синий', group: 3},
  5: {name: 'Синий+1', group: 3},
  6: {name: 'Синий+2', group: 3},
  7: {name: 'Фиолетовый', group: 4},
  8: {name: 'Фиолетовый+1', group: 4},
  9: {name: 'Фиолетовый+2', group: 4},
  10: {name: 'Фиолетовый+3', group: 4},
  11: {name: 'Оранжевый', group: 5},
  12: {name: 'Оранжевый+1', group: 5},
  13: {name: 'Оранжевый+2', group: 5},
  14: {name: 'Оранжевый+3', group: 5},
  15: {name: 'Оранжевый+4', group: 5},
  16: {name: 'Красный', group: 6},
  17: {name: 'Красный+1', group: 6},
  18: {name: 'Красный+2', group: 6}
}

const PCOLORS = {
  1: {name: 'Белый', group: 1},
  2: {name: 'Зеленый', group: 2},
  3: {name: 'Зеленый+1', group: 2},
  4: {name: 'Синий', group: 3},
  5: {name: 'Синий+1', group: 3},
  6: {name: 'Синий+2', group: 3},
  7: {name: 'Фиолетовый', group: 4},
  8: {name: 'Фиолетовый+1', group: 4},
  9: {name: 'Фиолетовый+2', group: 4},
  10: {name: 'Фиолетовый+3', group: 4}
}

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(['hw_clanGetInfo', 'hw_clanWarGetInfo', 'hw_clanWarGetDefence', 'hw_clanGetOnline'], clanWarGetInfo);
  chrome.storage.local.get(['hw_clanGetInfo', 'hw_clanWarGetInfo', 'hw_clanWarGetDefence'], clanWarGetDefence);
  chrome.storage.local.get(['hw_clanGetInfo', 'hw_clanRaid_logBoss'], clanRaidGetInfo);
  chrome.storage.local.get(['hw_clanGetInfo', 'hw_crossClanWar_getAttackMap', 'hw_crossClanWar_getDefenceMap', 'hw_crossClanWar_getDefencePlan'], drawCross);
  
  document.addEventListener('keyup', logKey);
  
  //document.querySelector('#btn').addEventListener("click", () => {
  //  chrome.storage.local.get(['hw_clanGetInfo', 'hw_crossClanWar_getDefencePlan'], getCrossDefPlan);
  //})
})

//босс - дамаг
let s1 = (a, b) => s(a,b,[{'field':'boss', 'direction':'A'}, {'field':'damage','direction': 'D'}]);
  
//arr.sort((a,b) => return s(a,b,['a', 'c']))
function s(a, b, arr)
{
  let {field, direction} = arr.shift();
  
  if (a[field] > b[field]) {
    return direction == 'D' ? -1 : 1;
  } else if (a[field] == b[field]) {
    if (arr.length > 0) {
      return s(a,b,arr);
    } else {
      return 0;
    }
  } else {
    return direction == 'D' ? 1 : -1;
  }
}

function logKey(e) {
  console.info(e.keyCode);
  // ctrl + y
  if (e.ctrlKey && e.keyCode == 89){
    //chrome.storage.local.get(['hw_clanGetInfo', 'hw_clanRaid_logBoss', 'hw_userGetInfo'], (a) => csv(a, e.shiftKey));
    csvCurrent();
  }
  
  // ctrl + m
  if (e.ctrlKey && e.keyCode == 77){
    chrome.storage.local.get(['hw_clanGetInfo', 'hw_clanRaid_logBoss', 'hw_userGetInfo'], (a) => json(a));
  }
}
//{attackers: [{:id :level :star :power [:color] [:petId]}], pet: undefined || {:id :level :star :power}}
function draw(data) {
  //console.log(data);
  let c = [];
  let canvas = document.querySelector(`canvas#tip`);
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //canvas.width = 105*data.attackers + (data.pet ? 105 : 0)
    
  data.attackers.forEach((a, i) => {
    if (a.color) {
      drawHero(c, a, i);
    } else {
      drawTitan(c, a, i);
    }
  })
  
  if (data.spirit) { drawSpirit(c, data.spirit) }
  if (data.pet) { drawPet(c, data.pet) }
  drawH(c.reverse())
}

function drawHero(c, data, i){
  if (data.color) {
    c.push({method:drawH, path:`img\\color\\b${HCOLORS[data.color].group}.png`, h:{x:6+105*(i+1), y:10}})
  }
  c.push({method:drawH, path:`img\\ids\\${data.id}.png`, h:{x:7+105*(i+1), y:12}})
  if (data.color) {
    c.push({method:drawH, path:`img\\color\\${data.color}.png`, h:{x:0+105*(i+1), y:4}})
  }
  if (data.star == 6) {
    c.push({method:drawH, path:'img\\ads\\abs.png', h:{x:27+105*(i+1), y:69}})
  } else {
    [...Array(data.star)].forEach((_, j) => {
      c.push({method:drawH, path:'img\\ads\\star.png', h:{x:((94-17*data.star)/2 + 17*j)+105*(i+1), y:69}})
    })
  }
  if (data.color) {
    c.push({method:drawH, path:`img\\level\\${HCOLORS[data.color].group}.png`, h:{x:26+105*(i+1), y:2}})
  }
  
  c.push({method:drawH, path:data.level, h:{x:(151+105*(i)), y:23}})
  if (data.petId !== undefined && data.petId !== 0) {
    c.push({method:drawH, path:`img\\pet\\small\\${data.petId}.png`, h:{x:68+105*(i+1), y:2, h:35, w:34}}) // heropet
  }
  c.push({method:drawH, path:data.power, h:{x:48+105*(i+1), y:115}})
}
function drawTitan(c, data, i){
  c.push({method:drawH, path:`img\\ids\\${data.id}.png`, h:{x:105+105*i, y:12}})
  c.push({method:drawH, path:`img\\titans\\border${SUPERTITANS.includes(data.id) ? '_s' : ''}.png`, h:{x:102+105*i, y:10}})
  if (data.star == 6) {
    c.push({method:drawH, path:'img\\ads\\abs.png', h:{x:131+105*i, y:69}})
  } else {
    [...Array(data.star)].forEach((_, j) => {
      c.push({method:drawH, path:'img\\ads\\star.png', h:{x:((94-17*data.star)/2 + 17*j)+105*(i+1), y:69}})
    })
  }
  c.push({method:drawH, path:`img\\level\\1.png`, h:{x:130+105*i, y:2}})
  c.push({method:drawH, path:data.level, h:{x:(151+105*i), y:23}})
  c.push({method:drawH, path:data.power, h:{x:151+105*i, y:115}})
}

function drawSpirit(c, data){
  c.push({method:drawH, path:`img\\spirit\\${data.type}.png`, h:{x:9, y:12}})
  c.push({method:drawH, path:`img\\spirit\\${data.type}_b.png`, h:{x:6, y:10}})
  if (data.star == 6) {
    c.push({method:drawH, path:'img\\ads\\abs.png', h:{x:32, y:69}})
  } else {
    [...Array(data.star)].forEach((_, j) => {
      c.push({method:drawH, path:'img\\ads\\star.png', h:{x:((105-17*data.star)/2 + 17*j), y:69}})
    })
  }
  c.push({method:drawH, path:`img\\level\\1.png`, h:{x:30, y:2}})
  c.push({method:drawH, path:data.level, h:{x:51, y:23}})
}

function drawPet(c, data){
    c.push({method:drawH, path:`img\\pet\\color\\b${PCOLORS[data.color].group}.png`, h:{x:5, y:9}})
    c.push({method:drawH, path:`img\\ids\\${data.id}.png`, h:{x:7, y:10}})
    c.push({method:drawH, path:`img\\pet\\color\\${data.color}.png`, h:{x:0, y:4}})
    if (data.star == 6) {
      c.push({method:drawH, path:'img\\ads\\abs.png', h:{x:27, y:69}})
    } else {
      [...Array(data.star)].forEach((_, j) => {
        c.push({method:drawH, path:'img\\ads\\star.png', h:{x:((94-17*data.star)/2 + 17*j), y:69}})
      })
    }
    c.push({method:drawH, path:`img\\level\\${HCOLORS[data.color].group}.png`, h:{x:26, y:2}})
    c.push({method:drawH, path:data.level, h:{x:47, y:22}})
    if ((data.power||0) > 0) {
      c.push({method:drawH, path:data.power, h:{x:47, y:115}})
    }
}
  
function drawH(arr) {
  if (arr.length == 0) {
    return;
  }
  let {method, path, h} = arr.pop();
  try {
    let canvas = document.querySelector(`canvas#tip`);
    let ctx = canvas.getContext('2d');
    if (typeof(path) === "string") {
      let img = new Image();
      img.src = path;
      img.onload = function() {

        if (h.w && h.h) {
          ctx.drawImage(img, h.x, h.y, h.w, h.h);
        } else {
          ctx.drawImage(img, h.x, h.y);
        }
        if (arr.length > 0) { method(arr) }
      }
    } else {
      ctx.font = "bold 18px Arial";
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      
      ctx.fillText(path, h.x, h.y);
      
      if (arr.length > 0) { method(arr) }
    }
  } catch (error) {
    console.error(error);
  }
}
  
function loa(dataDOMElement) {
  
  function handleMouseEnter(e) 
  {
    console.log(e);
    let data = JSON.parse(e.target.dataset.toggleData);

    let t = document.querySelector(".tooltip")
    t.classList.add('show');
    //if (.row)
    if (e.pageY < document.querySelector('.tab-pane.active').clientHeight / 1.3) {
      t.style.top = e.target.offsetTop + 20;// + scrollY;
    } else {
      t.style.top = e.target.offsetTop - 90;// + scrollY;
    }
    t.style.left = e.target.offsetLeft + 50 < 200 ? e.target.offsetLeft + 50 : 200 ;// + scrollX;
    
    draw(data);
    
    e.stopPropagation();
  }
  
  function handleMouseLeave(e)
  {
    document.querySelector(".tooltip").classList.remove('show');
    document.querySelector(".tooltip").style.top = -100;
    let canvas = document.querySelector(`canvas#tip`);
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    e.stopPropagation();
  }
  
  function handleClick(e) { navigator.clipboard.writeText(e.target.dataset.toggleData); }
    
  dataDOMElement.querySelectorAll('div[data-toggle="tooltip"]').forEach(el => {
    el.removeEventListener('mouseover', handleMouseEnter);
    el.removeEventListener('mouseout', handleMouseLeave);
    
    el.addEventListener('mouseover', handleMouseEnter);
    el.addEventListener('mouseout', handleMouseLeave);
  });
  dataDOMElement.querySelectorAll('.cc').forEach(el => {
    el.removeEventListener("click", handleClick, true);
    el.addEventListener("click", handleClick);
  });
}
const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
function utf8_to_b64( str ) {
   return window.btoa(unescape(encodeURIComponent( str )));
}

function b64_to_utf8( str ) {
   return decodeURIComponent(escape(window.atob( str )));
}

function getClanInfo(res) {
  if (!res.hw_clanGetInfo) {
    return [];
  }
  return Object.values(res.hw_clanGetInfo.clan.members).map(u => {
    let team = res.hw_clanWarGetDefence.teams[u.id];
    let lastAction = res.hw_clanGetOnline ? res.hw_clanGetOnline[u.id]?.lastAction : undefined;
    let isWarrior = false, hpow = 0, tpow = 0;
    let hdata = {attackers: []};
    let tdata = {attackers: []};
    if (team) {
      isWarrior = res.hw_clanGetInfo.clan.warriors.includes(Number(u.id));
      hpow = Object.values(team.clanDefence_heroes.units).reduce((a,b) => {return a + b.power}, 0);
      tpow = Object.values(team.clanDefence_titans.units).reduce((a,b) => {return a + b.power}, 0);
      
      let pet = Object.values(team.clanDefence_heroes.units).filter(i => i.id >= 6000)[0] || undefined
      let spirit = undefined;
      
      let type = Object.entries(Object.values(team.clanDefence_titans.units).map(i => i.element).reduce((acc, el) => { acc[el] = (acc[el] || 0) + 1; return acc; }, {})).find(i => i[1] >=3);
      if (type && type[0] != 'undefined')
      {
        let element = Object.values(team.clanDefence_titans.units).find(e => e.element == type[0]);
        spirit = { type: type[0], level: element?.elementSpiritLevel, star: element?.elementSpiritStar }
      }
      hdata = {attackers: Object.values(team.clanDefence_heroes.units).filter(i => i.id < 6000).map(({id, level, power, star, color}) => ({id, level, power, star, color})), pet: pet};
      
      tdata = {attackers: Object.values(team.clanDefence_titans.units).map(({id, level, power, star}) => ({id, level, power, star})), spirit: spirit};
    }
    return {
      id: u.id,
      name: u.name,
      hero: {p: hpow, data: hdata},
      titan: {p: tpow, data: tdata},
      warrior: isWarrior,
      lastLogin: new Date(Number(u.lastLoginTime)*1000).toLocaleString('ru'),
      lastAction: !!lastAction ? new Date(Number(lastAction)*1000).toLocaleString('ru') : ""
    };
  })
}

function raidInfo(res) {
  const raidMaxHp = {
    14118725: 65,
    19964436: 75,
    28650893: 85,
    34258193: 95,
    40205837: 105,
    46475358: 115,
    110976196: 125,
    202620410: 130,
    287023890: 140,
    447979143: 150,
    860079174: 160
  }
  let data = [];
  if (!res.hw_clanGetInfo) {
    return [];
  }
  Object.values(res.hw_clanGetInfo.clan.members).forEach(u => {
    if (res.hw_clanRaid_logBoss && res.hw_clanRaid_logBoss[u.id]) {
      Object.values(res.hw_clanRaid_logBoss[u.id]).forEach(i => {
        let attackers = Object.values(i.attackers).filter(a => a.type === 'hero').map(({id, level, color, petId, star, power}) => ({id, name: HEROES[id], level, color, petId, star, power}));
        let p = attackers.reduce((a,b) => {return a + b.power}, 0);
        let pet = Object.values(i.attackers).filter(a => a.type === 'pet')[0];
        let pp = pet?.power || 0;
        
        let bosses = Object.keys(i.defenders[0]).map(b => { return {level: raidMaxHp[i.defenders[0][b].state.maxHp], damage: i.result.damage[b]}}).filter(b => b.damage > 0)
        bosses.forEach(b => {
          let d = {boss: b.level, damage: b.damage, attackers, pet: pet ? {id: pet.id, level: pet.level, color: pet.color, star: pet.star, power: pp} : undefined};

          data.push({id: u.id, name: u.name, date: new Date(Number(i.startTime)*1000), boss: b.level, damage: b.damage, power: p, pet_power: pp, data: d});
        })
      });
    }
  });
  return data.sort((a,b) => a.date - b.date);
}

function csv(res, shift){
  let bosses = raidInfo(res);
  let data = [['Персонаж','Дата','Босс','Урон','Мощность пачки','Мощность пета','Пачка']];

  bosses.filter(i => !shift || i.id === res.hw_userGetInfo.id).forEach(b => {
    let d = JSON.stringify(b.data);

    data.push([b.name, b.date.toLocaleString(), b.boss, b.damage, b.power, b.pet_power, utf8_to_b64(d)]);
  });
  
  
  let dat = new Date().toLocaleString('sv').replaceAll(/[- :]/g, '');
  var blob = new Blob([data.map(row => row.join('|')).join(`\n`)], { type: 'text/csv;charset=utf-8;' });
  var a = document.createElement("a"),
  url = URL.createObjectURL(blob);
  a.href = url;
  a.download = shift ? `${res.hw_userGetInfo.name}_${dat}.csv` : `All_${dat}.csv`;
  //document.body.appendChild(a);
  a.click();
  setTimeout(function() {
    window.URL.revokeObjectURL(url);
  }, 0); 
}

function csvCurrent() {
  let currContentSelector = document.querySelector('button.nav-link.active').dataset.bsTarget;
  let currTabs = document.querySelector(currContentSelector).querySelector('ul');
  
  if (currTabs != null) {
    currContentSelector = currTabs.querySelector('button.nav-link.active').dataset.bsTarget;
    
  }
  let currContent = document.querySelector(currContentSelector);
  let data = Array.from(currContent.querySelectorAll('div.row')).map(r => Array.from(r.querySelectorAll('div.cell')).map(c => {return c.innerText}))

  //var blob = new Blob([data.map(row => row.join(`\t`)).join(`\n`)], { type: 'text/csv;charset=utf-8;' });
  
  navigator.clipboard.writeText(data.map(row => row.join(`\t`)).join(`\n`));
  
  animate();
}

function json(res){
  let bosses = raidInfo(res);
  let data = [];

  bosses.forEach(b => {
    data.push({name: b.name, date: b.date.getTime(), boss: b.boss, damage: b.damage, attackers: b.data.attackers, pet: b.data.pet});
  });
  navigator.clipboard.writeText(JSON.stringify(data));
  animate();

//square.addEventListener('animationcancel', (ev) => {
//    console.log("Animation canceled" , ev); 
//});
}

function animate() {
  let xel = document.querySelector(".ximg");
  xel.classList.add('elementToFadeInAndOut');
  xel.addEventListener('animationend', (ev) => {
   document.querySelector(".ximg").classList.remove('elementToFadeInAndOut');
  });
}

// Асгард
function clanRaidGetInfo(res) {
  let dataDOMElement = document.querySelector('#raid_attacks');

  let bosses = raidInfo(res);
  bosses.forEach(b => {
    let r = document.createElement('div');
    r.className = 'row';

    let c = document.createElement('div');
    c.className = "cell col-3 cc";
    c.innerText = b.name;
    c.dataset.toggle = "tooltip";
    c.dataset.toggleData = JSON.stringify(b.data);
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-3";
    c.innerText = b.date.toLocaleString('ru');
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-1";
    c.innerText = b.boss;
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-2";
    c.innerText = b.damage.toLocaleString();
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-2";
    c.innerText = b.power.toLocaleString();
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-1";
    c.innerText = b.pet_power.toLocaleString();
    r.appendChild(c);
    
    dataDOMElement.appendChild(r);
  })
  loa(dataDOMElement);
  
  raidAttackers(bosses);
  raidBossess(bosses);
}

function raidAttackers(bosses) {
  let dataDOMElement = document.querySelector('#raid_attackers');

  let unique = [...new Set(bosses.map(a => { return a.id }))];
  
  data = unique.map(u => {
    let a = bosses.filter(a => a.id === u);
    let d = a.reduce((a,b) => {return a + b.damage}, 0);
    return { name: a[0].name, damage: d };
  })
  
  data.sort((a,b) => b.damage - a.damage).forEach(b => {
    let r = document.createElement('div');
    r.className = 'row';

    let c = document.createElement('div');
    c.className = "cell col-3 cc";
    c.innerText = b.name;
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-3";
    c.innerText = b.damage.toLocaleString();
    r.appendChild(c);
    
    dataDOMElement.appendChild(r);
  })
}

function raidBossess(bosses) {
  let dataDOMElement = document.querySelector('#raid_boss');
  let bo = 0;

  bosses.sort(s1).forEach(b => {
    if (bo != 0 && bo != b.boss) {
      let r = document.createElement('hr');
      dataDOMElement.appendChild(r);
    }
    bo = b.boss;
    
    let r = document.createElement('div');
    r.className = 'row';

    let c = document.createElement('div');
    c.className = "cell col-3 cc";
    c.innerText = b.name;
    c.dataset.toggle = "tooltip";
    c.dataset.toggleData = JSON.stringify(b.data);
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-1";
    c.innerText = b.boss;
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-2";
    c.innerText = b.damage.toLocaleString();
    r.appendChild(c);
    
    dataDOMElement.appendChild(r);
  })
  loa(dataDOMElement);
}

// Гиьдия
function clanWarGetDefence(res) {
  let dataDOMElement = document.querySelector('#clan');
  dataDOMElement.innerText = "";
  let l3 = getClanInfo(res);
  
  let tab = document.querySelector('#clan-tab');
  tab.innerText = `Гильдия (${l3.length})`;
  
  l3.sort((a,b) => { return (Math.sqrt(Math.pow(b.hero.p, 2)+Math.pow(b.titan.p, 2)) - Math.sqrt(Math.pow(a.hero.p, 2)+Math.pow(a.titan.p, 2))) });
  
  l3.forEach(i => {
    let r = document.createElement('div');
    r.className = 'row';
    
    let c = document.createElement('div');
    c.className = "cell col-3"+(i.warrior ? ' w' : '');
    c.innerText = i.name;
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-2";
    c.innerText = i.hero.p.toLocaleString();
    c.dataset.toggle = "tooltip";
    c.dataset.toggleData = JSON.stringify(i.hero.data);
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-2";
    c.innerText = i.titan.p.toLocaleString();
    c.dataset.toggle = "tooltip";
    c.dataset.toggleData = JSON.stringify(i.titan.data);
    r.appendChild(c);
    
    c = document.createElement('div');
    c.className = "cell col-4";
    c.innerText = `${i.lastLogin}(${i.lastAction})`;
    r.appendChild(c);
    
    dataDOMElement.appendChild(r);
  })
    
  loa(dataDOMElement);
}

// ВГ
function clanWarGetInfo(res) {
  let dataDOMElement = document.querySelector('#war');
  dataDOMElement.innerText = "";
  let l3 = getClanInfo(res).filter(i => i.warrior);

  let list = Slots.map(slot => {
    let pow = 0;
    let enemy = res.hw_clanWarGetInfo?.enemySlots[slot.id];
    let data = {attackers:[], pet:undefined, spirit: undefined}
    if (enemy && enemy.team[0]) {
      pow = Object.values(enemy.team[0]).reduce((a,b) => {return a + b.power}, 0);
      let pet = Object.values(enemy.team[0]).find(i => i.type === 'pet');
      let spirit = undefined;
      
      let type = Object.entries(Object.values(enemy.team[0]).map(i => i.element).reduce((acc, el) => { acc[el] = (acc[el] || 0) + 1; return acc; }, {})).find(i => i[1] >=3);
      if (type && type[0] != 'undefined')
      {
        let element = Object.values(enemy.team[0]).find(e => e.element == type[0]);
        spirit = { type: type[0], level: element?.elementSpiritLevel, star: element?.elementSpiritStar }
      }
      data = {attackers: Object.values(enemy.team[0]).filter(i => i.type !== 'pet').map(({id, level, power, star, color}) => ({id, level, power, star, color})), pet: pet, spirit: spirit}
    }
    
    return { type: slot.type, name: slot.name, user: enemy?.user?.name || '', power: pow, data: data };
  });//.filter(x => x.enemy);
  
  let hi = [...l3].sort((a,b) => b.hero.p - a.hero.p);
  let ti = [...l3].sort((a,b) => b.titan.p - a.titan.p);
  
  ['titan', 'hero'].forEach(t => {
    list.filter(i => i.type == t).sort((a,b) => b.power - a.power).forEach((slot, index) => {
      
      let our = [...l3].sort((a,b) => b[t].p - a[t].p)[index]; // !!! ?
      
      let re = 0;
      if (our) {
        let tit = ti.findIndex(i => i.id==our.id);
        let hir = hi.findIndex(i => i.id==our.id);
      
        if (t === "titan") {
          re = Math.round((tit - hir)/3.5);
        } else {
          re = Math.round((hir - tit)/3.5);
        }
      }
      
      let r = document.createElement('div');
      r.className = 'row';
      
      let c = document.createElement('div');
      c.className = "cell col-3";
      c.innerText = slot.name;
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell col-3 text-end";
      c.dataset.toggle = "tooltip";
      c.dataset.toggleData = JSON.stringify(slot.data);
      c.innerText = slot.user;
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell";
      c.style.width = "12%";
      c.innerText = slot.power.toLocaleString();
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell";
      c.style.width = "12%";
      c.innerText = our ? our[t].p.toLocaleString() : '';
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell col-3"+ ` c n${re}`;
      c.innerText = our?.name || '';
      c.dataset.toggle = "tooltip";
      c.dataset.toggleData = JSON.stringify(our ? our[t].data : {attackers:[],pet:undefined});
      r.appendChild(c);
      
      dataDOMElement.appendChild(r);
    });
    if (t === "titan") {
      r = document.createElement('hr')
      dataDOMElement.appendChild(r);
    }
  });
  loa(dataDOMElement);
};

// cross
function getCrossDefPlan(res) {
  let plans = [];
  if (!res.hw_crossClanWar_getDefencePlan) {
    return [];
  }
  Object.values(res.hw_crossClanWar_getDefencePlan?.teams || []).forEach(i => {
    let u = res.hw_clanGetInfo.clan.members[i.userId];

    (i.crossClanDefence_titans || []).forEach(t => {
      let data = { attackers: [] };
      let power = Object.values(t.units).reduce((a,b) => {return a + b.power}, 0);
      let spirit = undefined;
      
      let type = Object.entries(Object.values(t.units).map(i => i.element).reduce((acc, el) => { acc[el] = (acc[el] || 0) + 1; return acc; }, {})).find(i => i[1] >=3);
      if (type && type[0] != 'undefined')
      {
        let element = Object.values(t.units).find(e => e.element == type[0]);
        spirit = { type: type[0], level: element?.elementSpiritLevel, star: element?.elementSpiritStar };
      }
      data = {attackers: Object.values(t.units).map(({id, level, power, star}) => ({id, level, power, star})), spirit: spirit};
      plans.push( { type: 'titan', user: { i: u?.id, name: u?.name }, power, data });
    });
    (i.crossClanDefence_heroes || []).forEach(t => {
      let data = { attackers: [] };
      let power = Object.values(t.units).reduce((a,b) => {return a + b.power}, 0);
      let pet = Object.values(t.units).filter(i => i.id >= 6000)[0] || undefined
      
      data = {attackers: Object.values(t.units).filter(i => i.id < 6000).map(({id, level, power, star, color, favorPetId}) => ({id, level, power, star, color, petId: favorPetId})), pet: pet};
      plans.push({ type: 'hero', user: { i: u?.id, name: u?.name }, power, data });
    });
  });
  
  return plans;
}

function getCrossDefInfo(res) {
  return CROSS_SLOTS.map(s => {
    let slot = res.hw_crossClanWar_getDefenceMap?.ourSlots[s.id] ?? {};
    let team = slot.team;
    let u = slot.user;
    let power = 0;
    let pointsFarmed;
    let pointsTotal;
    let data = {attackers: []};
    if (team) {
      power = Object.values(team).reduce((a,b) => {return a + b.power}, 0);
      
      let pet = Object.values(team).filter(i => i.id >= 6000)[0] || undefined
      let spirit = undefined;
      
      let type = Object.entries(Object.values(team).map(i => i.element).reduce((acc, el) => { acc[el] = (acc[el] || 0) + 1; return acc; }, {})).find(i => i[1] >=3);
      if (type && type[0] != 'undefined')
      {
        let element = Object.values(team).find(e => e.element == type[0]);
        spirit = { type: type[0], level: element?.elementSpiritLevel, star: element?.elementSpiritStar }
      }
      if (Object.values(team).find(i => i.id < 4000))
      {
        data = {attackers: Object.values(team).filter(i => i.id < 6000).map(({id, level, power, star, color}) => ({id, level, power, star, color})), pet: pet};
      }
      else 
      {
        data = {attackers: Object.values(team).map(({id, level, power, star}) => ({id, level, power, star})), spirit: spirit};
      }
      pointsFarmed = slot.pointsFarmed;
      pointsTotal = parseInt(slot.pointsTotal);
    }
    return { slot: s.name, type: s.type, pointsFarmed, pointsTotal, user: {i: u?.id, name: u?.name}, power, data };
  })
}

function getCrossAttInfo(res) {
  return CROSS_SLOTS.map(slot => {
    let power = 0;
    let pointsFarmed;
    let pointsTotal;
    let enemy = res.hw_crossClanWar_getAttackMap?.enemySlots ? res.hw_crossClanWar_getAttackMap.enemySlots[slot.id] : undefined;
    let data = {attackers:[], pet:undefined, spirit: undefined}
    if (enemy && enemy.team) {
      power = Object.values(enemy.team).reduce((a,b) => {return a + b.power}, 0);
      let pet = Object.values(enemy.team).find(i => i.type === 'pet');
      let spirit = undefined;
      
      pointsFarmed = enemy.pointsFarmed;
      pointsTotal = parseInt(enemy.pointsTotal);
      
      let type = Object.entries(Object.values(enemy.team).map(i => i.element).reduce((acc, el) => { acc[el] = (acc[el] || 0) + 1; return acc; }, {})).find(i => i[1] >=3);
      if (type && type[0] != 'undefined')
      {
        let element = Object.values(enemy.team).find(e => e.element == type[0]);
        spirit = { type: type[0], level: element?.elementSpiritLevel, star: element?.elementSpiritStar }
      }
      data = {attackers: Object.values(enemy.team).filter(i => i.type !== 'pet').map(({id, level, power, star, color}) => ({id, level, power, star, color})), pet: pet, spirit: spirit}
    }
    
    return { type: slot.type, slot: slot.name, pointsFarmed, pointsTotal, user: enemy?.user?.name, power, data };
  });//.filter(x => x.enemy);
}

function drawCross(res)
{
  drawCrossDef(res);
  drawCrossAtt(res);
}

function drawCrossDef(res) {
  let dataDOMElement = document.querySelector('#cross_def');
  dataDOMElement.innerText = "";
  
  let s1 = (a,b) => b.power - a.power;
  let s2 = (a, b) => {
    let pa = a.pointsFarmed > 0 ? (a.pointsFarmed == a.pointsTotal ? '1' : '2') : '3';
    let pb = b.pointsFarmed > 0 ? (b.pointsFarmed == b.pointsTotal ? '1' : '2') : '3';
    pa = pa.concat("".concat(a.power).padStart(10, '0'));
    pb = pb.concat("".concat(b.power).padStart(10, '0'));
    return pa < pb ? 1 : pa == pb ? 0 : -1;
  }
  
  let list = getCrossDefInfo(res);
  let plans = getCrossDefPlan(res);
  
  ['titan', 'hero'].forEach(t => {
    let enemy_teams = [...list].filter(i => i.type == t).sort(s1);
    let plan = plans.filter(i => i.type == t).sort(s1);

    enemy_teams.forEach((enemy, index) => {
      let p = plan[index] ?? {};
      
      let r = document.createElement('div');
      r.className = 'row';
      
      let c = document.createElement('div');
      c.className = "cell col-3" + (enemy.pointsFarmed == enemy.pointsTotal ? ' defeated' : enemy.pointsFarmed > 0 ? ' attacked' : ' ready');
      c.innerText = enemy.slot;
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell col-3 text-end";
      c.innerText = enemy.user?.name ?? '';
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell col-1";
      c.dataset.toggle = "tooltip";
      c.dataset.toggleData = JSON.stringify(enemy.data);
      c.innerText = (enemy.power || '').toLocaleString();
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell col-1";
      c.dataset.toggle = "tooltip";
      c.dataset.toggleData = JSON.stringify(p.data);
      c.innerText = (p.power || '').toLocaleString();
      r.appendChild(c);

      c = document.createElement('div');
      c.className = "cell col-3 text-end";
      c.innerText = p.user?.name ?? '';
      r.appendChild(c);

      dataDOMElement.appendChild(r);
    });
    if (t === "titan") {
      r = document.createElement('hr')
      dataDOMElement.appendChild(r);
    }
  });
  loa(dataDOMElement);
};

function drawCrossAtt(res) {
  let dataDOMElement = document.querySelector('#cross_att');
  dataDOMElement.innerText = "";
  
  let s1 = (a,b) => b.power - a.power;
  let s2 = (a, b) => {
    let pa = a.pointsFarmed > 0 ? (a.pointsFarmed == a.pointsTotal ? '1' : '2') : '3';
    let pb = b.pointsFarmed > 0 ? (b.pointsFarmed == b.pointsTotal ? '1' : '2') : '3';
    pa = pa.concat("".concat(a.power).padStart(10, '0'));
    pb = pb.concat("".concat(b.power).padStart(10, '0'));
    return pa < pb ? 1 : pa == pb ? 0 : -1;
  }
  
  let list = getCrossAttInfo(res);
  
  ['titan', 'hero'].forEach(t => {
    let enemy_teams = [...list].filter(i => i.type == t).sort(s1);
    enemy_teams.forEach((enemy, index) => {
      
      let r = document.createElement('div');
      r.className = 'row';
      
      let c = document.createElement('div');
      c.className = "cell col-3" + (enemy.pointsFarmed == enemy.pointsTotal ? ' defeated' : enemy.pointsFarmed > 0 ? ' attacked' : ' ready');
      c.innerText = enemy.slot;
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell col-3 text-end";
      c.dataset.toggle = "tooltip";
      c.dataset.toggleData = JSON.stringify(enemy.data);
      c.innerText = enemy.user ?? '';
      r.appendChild(c);
      
      c = document.createElement('div');
      c.className = "cell col-1";
      c.innerText = (enemy.power || '').toLocaleString();
      r.appendChild(c);

      dataDOMElement.appendChild(r);
    });
    if (t === "titan") {
      r = document.createElement('hr')
      dataDOMElement.appendChild(r);
    }
  });
  loa(dataDOMElement);
};