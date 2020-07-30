import MEMBERS from './MEMBERS.js';
const qtdMembersForEachTeam = 2;
const TEAM = [];
const list = document.getElementById('list');
const btnStart = document.getElementById('btn_start');
const btnSave = document.getElementById('btn_save');
let cont = 1;

const generateRandom = () => {
    let value = Math.round((Math.random() * ((MEMBERS.length -1) - 0) + 0)).toFixed(0);
    return value;
};

const memberAlreadyInTeam = (members) => {
    for (let team of TEAM) {
        if (team[0].id == members[0].id || team[0].id == members[1].id) {
            return true;
        } else if (team[1].id == members[1].id || team[1].id == members[0].id) {
            return true;
        } 
    }
    return false;
};

const START = () => {
    while (TEAM.length <= (MEMBERS.length / qtdMembersForEachTeam)) {

        let indexA = generateRandom();
        const indexB = generateRandom();
        
        if (indexA === indexB) {
            indexA = parseInt(cont);
            (indexA >= MEMBERS.length - 1) ? cont = 0 : cont++;
            cont = parseInt(cont);
        }

        let alreadyIn = false;

        if (TEAM.length > 1) {
            alreadyIn = memberAlreadyInTeam([MEMBERS[indexA], MEMBERS[indexB]]);
        }

        if (!alreadyIn) {
            TEAM.push([
                MEMBERS[indexA], MEMBERS[indexB]
            ]);
        }
    }
    showResult();
};

const showResult = () => {
    let li = '';
    for (let team of TEAM) {
        li += `<tr> <td class="avatar"><strong><i class="fas fa-user-astronaut"></i></strong></td> <td><strong>${team[0].name}</strong></td>  
        <td class="avatar"><strong><i class="fas fa-user-astronaut"></i></strong></td> <td><strong>${team[1].name}</strong></td> </tr>`;
    }
    btnSave.hidden = false;
    list.innerHTML = li;
};

btnStart.addEventListener('click', START);
btnSave.addEventListener('click', function () {
    window.print(); 
});








