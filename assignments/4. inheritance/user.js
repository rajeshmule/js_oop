//Prototypal Pattern



//Pseudoclassical Pattern



//Classes
class User {
    constructor(name,score=0){
        this.name = name;
        this.score = score;
    }
    increaseScroe(){
        return this.score = ++(this.score);
    }
    decreaseScore(){
        return this.score = --(this.score);
    }
}

class PaidUser extends User {
    constructor(name,score,balance=0){
        super(name, score)
        this.balance = balance;
    }
    increaseBalance(){
        return this.balance = ++(this.balance);
    }

}