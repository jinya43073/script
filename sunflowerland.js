console.log("[Script]", "Script loading.");
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
async function land_task () {
    let step = 0;
    let clock = 0;
    
    // Auto Sign
    var lands = document.getElementsByClassName("relative group");
    var land_nums = 22;
    if(lands.length > 0){
        for(let index = 0; index < land_nums; index++){
        // -1 有盲盒子 +1 空土地 其他 未成熟
        var land_hole = lands[index].getElementsByTagName('span')
        if(land_hole.length == 0){
            lands[index].childNodes[3].click();
            await sleep(1000);
        }else{
            try{
            if(lands[index].getElementsByTagName('span')[0].innerHTML == '-1'){
                lands[index].childNodes[3].click();
                await sleep(1000);
            }else if(lands[index].getElementsByTagName('span')[0].innerHTML == '+1'){
                lands[index].childNodes[3].click();
                await sleep(1000);
            }
            }catch(err) {
            
            }
        }
        }
    }
}

async function buy_task () {
    
    // 购买
    var shop = document.getElementById('shop');
    if(shop.children.length > 0){
        shop.children[0].click()
    }
    await sleep(1000);
    var rol = document.getElementsByClassName('modal-content');
    if(rol.length > 0){
        var sell = rol[0].getElementsByTagName('span')
        for(let index = 0; index < sell.length; index++){
        if(sell[index].innerHTML == 'Buy') sell[index].click();
        await sleep(1000);
        }
        
    }
    var buy_btn = document.getElementsByTagName("button");
    if(buy_btn.length > 0){
        for(let index = 0; index < buy_btn.length; index++){
        if(buy_btn[index].innerHTML == 'Buy 10') buy_btn[index].click();
        }
        
    }
    await sleep(1000);
}
async function sell_task () {
    
    // 购买
    var shop = document.getElementById('shop');
    if(shop.children.length > 0){
        shop.children[0].click()
    }
    await sleep(1000);
    var rol = document.getElementsByClassName('modal-content');
    if(rol.length > 0){
        var sell = rol[0].getElementsByTagName('span')
        for(let index = 0; index < sell.length; index++){
        if(sell[index].innerHTML == 'Sell') sell[index].click();
        await sleep(1000);
        }
        
    }
    await sleep(1000);
    var sell_btn = document.getElementsByTagName("button");
    if(sell_btn.length > 0){
        for(let index = 0; index < sell_btn.length; index++){
        if(sell_btn[index].innerHTML == 'Sell All') sell_btn[index].click();
        }
        
    }
    await sleep(1000);
    await sleep(1000);
    var yes_btn = document.getElementsByTagName("button");
    if(yes_btn.length > 0){
        for(let index = 0; index < yes_btn.length; index++){
        if(yes_btn[index].innerHTML == 'Yes') sell_btn[index].click();
        }
        
    }
}

async function gift_task () {
    var gift = document.getElementsByClassName('modal-content');
    if(gift.length >0 && gift[0].getElementsByTagName('span')[0].innerHTML == 'Woohoo! You found a reward'){
        try {
        document.getElementsByClassName('modal-content')[0].getElementsByTagName('img')[0].click();
        }
        catch(err) {
        }
        try {
        document.getElementsByClassName('modal-content')[0].getElementsByTagName('img')[1].click();
        }
        catch(err) {
        }
        try {
        document.getElementsByClassName('modal-content')[0].getElementsByTagName('img')[2].click();
        }
        catch(err) {
        }
        try {
        document.getElementsByClassName('modal-content')[0].getElementsByTagName('img')[3].click();
        }
        catch(err) {
        }
        try {
        await sleep(500);
        var close_btn = document.getElementsByClassName('modal-content')[0].getElementsByTagName('button')[0]
        if(close_btn.innerHTML == 'Close') close_btn.click();

        }
        catch(err) {
        }
    }
    
}
async function rebot_task () {
    var rebot = document.getElementsByClassName('modal-content');
    for(let index = 0; index < rebot.length; index++){
        if(rebot[index].getElementsByTagName('span')[0].innerHTML == 'Something went wrong!') window.location.reload();
    }
}
async function autologin_task () {
    try {
    var login_btn = document.getElementsByTagName('button');
    for(let index = 0; index < login_btn.length; index++){
        if(login_btn[index].innerHTML == 'Lets farm!') login_btn[index].click();
    }
    }
    catch(err){}
    
}
setInterval(() => { rebot_task() }, 5*1000);
setInterval(() => { autologin_task() }, 5*1000);
setInterval(() => { land_task() }, 15000);
// setInterval(() => { buy_task() }, 60000);
// setInterval(() => { sell_task() }, 300000);
setInterval(() => { gift_task() }, 1000);

console.log("[Script]", "Script loaded.");