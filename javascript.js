//コールバック関数
//引数に渡される関数をコールバック関数と呼びます。

//関数名（引数）;
//      →文字列、数値、真偽地、関数

//mayu()　←関数が呼び出される
//mayu    ←関数そのもの

//例
const printWanko = () => {
    console.log("にんじゃわんこ");
  };
  const call = (callback) => {
    console.log("コールバック関数を呼び出します。");
    // 引数に渡したcallbackを呼び出してください
    callback();
  };
  // 関数printWankoを引数に渡して関数callを実行してください
  call(printWanko);　//←①printwankoを引数callbackに代入している。


//普通の関数
//const introduce=(name,age)=>{
//   consolee.log(`${name}は${age}歳です`);
//}
//introduce("john",14);

//コールバック関数
//const introduce=(callback)=>{
//   callback("john",14);
//}
//introduce(name,age)=>{
//   console.log(`${name}は${age}歳です`);
//};
