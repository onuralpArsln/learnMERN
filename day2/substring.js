const st1= "qwerwerwqwr"
const st2="wwwwwwwwwwww"
const st3="rtyuedfj"

const stArr=[st1,st2,st3]

function findSubStr(st){
    let p1=0;
    let p2=0;
    let maxRun=0
    let currentRun=0
    
    let letters = new Set();
    while(p2<st.length){
        console.log(letters)
        if(letters.has(st[p2])){
            letters.delete(st[p1])
            p1+=1;
            currentRun=p2-p1;
        }else{
            letters.add(st[p2])
            currentRun=p2-p1;
            maxRun=Math.max(currentRun,maxRun);
            p2+=1;


        }
    }
    return maxRun;
}

console.log(findSubStr(st2))
