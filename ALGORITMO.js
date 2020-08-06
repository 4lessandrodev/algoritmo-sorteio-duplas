import MEMBERS from './MEMBERS.js';
const qtdMembersForEachTeam = 2;
const TEAM = [];
const list = document.getElementById('list');
const btnStart = document.getElementById('btn_start');
const btnSave = document.getElementById('btn_save');
let selectedNumbers = [];

const generateRandom = () => {
    let value;
    do {
        value = Math.round((Math.random() * ((MEMBERS.length - 1) - 0) + 0)).toFixed(0);
    } while (selectedNumbers.includes(value));
    return value;
};

const memberAlreadyInTeam = (members) => {
    
    let users = TEAM.map((team) => {
        return (
            team[0].id == members[0].id ||
            team[1].id == members[0].id ||
            team[1].id == members[1].id ||
            team[0].id == members[1].id);
        });
        
        let resp = users.includes(true);
        return resp;
    };
    
    const START = () => {
        while (TEAM.length < (MEMBERS.length / qtdMembersForEachTeam)) {
            
            let indexA = parseInt(generateRandom());
            let indexB = parseInt(generateRandom());
            
            while (indexA == indexB) {
                indexA = parseInt(generateRandom());
            }
            
            let alreadyIn = false;
            
            if (TEAM.length >= 0) {
                alreadyIn = memberAlreadyInTeam([MEMBERS[indexA], MEMBERS[indexB]]);
            }
            
            if (!alreadyIn) {
                selectedNumbers.push(indexA);
                selectedNumbers.push(indexB);
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
            let avatarA = team[0].avatar ? `<img src="${team[0].avatar}" alt="avatar">` : '<i class="fas fa-user-astronaut"></i>';
            let avatarB = team[1].avatar ? `<img src="${team[1].avatar}" alt="avatar">` : '<i class="fas fa-user-astronaut"></i>';
            li += `<tr> <td class="avatar"><strong>${avatarA}</strong></td> <td><strong>${team[0].name}</strong></td>  
            <td class="avatar"><strong>${avatarB}</strong></td> <td><strong>${team[1].name}</strong></td> </tr>`;
        }
        btnSave.hidden = false;
        list.innerHTML = li;
    };
    
    btnStart.addEventListener('click', START);
    btnSave.addEventListener('click', function () {
        window.print(); 
    });
    
    
    
    
    
    
    
    
    