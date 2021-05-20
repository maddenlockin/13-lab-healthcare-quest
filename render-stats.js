import { getUser } from "./local-storage-utils.js";

export function renderStats(){
    const user = getUser();

    const header = document.createElement('header');
    const div = document.createElement('div');
    const nameP = document.createElement('p');
    const healthP = document.createElement('p');
    const cashP = document.createElement('p');

    nameP.textContent = user.name;
    healthP.textContent = `Health: ${user.health}`;
    cashP.textContent = `Cash: ${user.cash}`;
    
    div.append(nameP, healthP, cashP);
    header.append(div);
}