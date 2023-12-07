class gamer{
    constructor(name,isActive=false)
    {
        this.name=name;
        this.isActive=isActive;//is the player play in the current game
        this.isAble=false;
        this.number=Math.floor(Math.random() * 100);
        this.steps=0;
        this.allScores=[];
        this.level="copper";
        this.topScore=1000;
    }
}

export default gamer
