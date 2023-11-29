class gamer{
    constructor(name,password)
    {
        this.name=name;
        this.password=password;
        this.isActive=false;//is the player play in the current game
        this.isAble=false;// Is the time of your gaming now
        this.score=0;
        this.steps=0;
        this.number=0;
        this.finalScore=0;
        this.level="copper";
    }
}
