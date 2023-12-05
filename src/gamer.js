class gamer{
    constructor(name,isActive=false)
    {
        this.name=name;
        this.isActive=isActive;//is the player play in the current game
        this.isAble=false;// Is the time of your gaming now
        this.score=0;
        this.steps=0;
        this.number=0;
        this.allScores=[];
        this.level="copper";
    }
}

export default gamer
