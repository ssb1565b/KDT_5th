let song = {
  name: "subin",
  age: 26,
  diet: true,
  likes: [
    "π",
    "π£",
    "π©",
    "π",
    "π₯",
    "πΏ",
    "π·",
    "πͺ",
    "π",
    "π³",
    "π",
    "π",
    "π°",
    "πΆ",
    "πΆ",
    "π«",
  ],
  frontend_skill: undefined,
  backend_skill: null,
  want_go_home: true,
};

// κ°μ²΄ μ κ·Ό
console.log(song.age);
console.log(song["age"]);
//  "" λ₯Ό μν΄μ£Όλ©΄ ageλ₯Ό λ³μλ‘ μΈμν¨

// κ°μ²΄ μΆκ°
song.gender = "male";
song["hair"] = "black";
console.log(song);

// κ°μ²΄ μ­μ 
delete song.likes;
delete song["diet"];
console.log(song);
